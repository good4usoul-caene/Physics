import fs from "node:fs"
import path from "node:path"

/**
 * @typedef {Record<string, string | [string, number]>} MacroMap
 */

function stripLatexComment(line) {
  for (let i = 0; i < line.length; i++) {
    if (line[i] === "%" && line[i - 1] !== "\\") {
      return line.slice(0, i)
    }
  }

  return line
}

/**
 * Parse one-line \newcommand / \renewcommand macros from preamble.sty.
 * Example forms:
 *   \newcommand{\Pfrac}[2]{\frac{\partial #1}{\partial #2}}
 *   \newcommand{\ct}{(ct)}
 *
 * @param {string} line
 * @returns {{name: string, body: string, argc: number} | null}
 */
function parseCommandLine(line) {
  const cleaned = stripLatexComment(line).trim()
  if (!cleaned.startsWith("\\newcommand") && !cleaned.startsWith("\\renewcommand")) {
    return null
  }

  const macroMatch = cleaned.match(
    /^\\(?:re)?newcommand\s*\{\\([A-Za-z@]+)\}\s*(?:\[(\d+)\])?\s*\{([\s\S]*)\}\s*$/,
  )
  if (!macroMatch) {
    return null
  }

  return {
    name: macroMatch[1],
    argc: macroMatch[2] ? Number.parseInt(macroMatch[2], 10) : 0,
    body: macroMatch[3],
  }
}

/**
 * @param {string} preamblePath
 * @returns {MacroMap}
 */
function loadMacrosFromPreamble(preamblePath) {
  /** @type {MacroMap} */
  const macros = {}

  if (!fs.existsSync(preamblePath)) {
    console.warn(`Warning: MathJax preamble not found at ${preamblePath}`)
    return macros
  }

  const source = fs.readFileSync(preamblePath, "utf8")
  const lines = source.split(/\r?\n/)
  for (const line of lines) {
    const parsed = parseCommandLine(line)
    if (!parsed) {
      continue
    }

    macros[parsed.name] = parsed.argc > 0 ? [parsed.body, parsed.argc] : parsed.body
  }

  return macros
}

/**
 * @param {import("@quartz-community/types").BuildCtx} ctx
 * @returns {string}
 */
function makeMathJaxConfigScript(ctx) {
  const contentDir = path.resolve(process.cwd(), ctx.argv.directory)
  const preamblePath = path.join(contentDir, "preamble.sty")
  const macros = loadMacrosFromPreamble(preamblePath)
  console.log(`Loaded ${Object.keys(macros).length} MathJax macros from ${preamblePath}`)

  const config = {
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"],
      ],
      processEscapes: true,
      processEnvironments: true,
      packages: {
        "[+]": ["ams", "mhchem"],
      },
      macros,
    },
    svg: {
      fontCache: "global",
    },
  }

  return `window.MathJax = ${JSON.stringify(config)};`
}

const MathJaxClient = () => {
  return {
    name: "MathJaxClient",
    markdownPlugins() {
      return []
    },
    externalResources(ctx) {
      const configScript = makeMathJaxConfigScript(ctx)
      return {
        js: [
          {
            loadTime: "beforeDOMReady",
            contentType: "inline",
            script: configScript,
          },
          {
            loadTime: "beforeDOMReady",
            contentType: "external",
            src: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js",
          },
          {
            loadTime: "beforeDOMReady",
            contentType: "inline",
            script: `
(() => {
  function normalizeMathCodeNodes(root = document) {
    const inlineNodes = root.querySelectorAll("code.language-math.math-inline");
    for (const node of inlineNodes) {
      const tex = node.textContent ?? "";
      const span = document.createElement("span");
      span.textContent = "\\\\(" + tex + "\\\\)";
      node.replaceWith(span);
    }

    const displayNodes = root.querySelectorAll("code.language-math.math-display");
    for (const node of displayNodes) {
      const tex = node.textContent ?? "";
      const div = document.createElement("div");
      div.textContent = "$$" + tex + "$$";
      node.replaceWith(div);
    }
  }

  function typeset() {
    normalizeMathCodeNodes(document);
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise().catch((err) => {
        console.warn("MathJax typeset warning:", err);
      });
    }
  }

  document.addEventListener("nav", () => {
    queueMicrotask(typeset);
  });
  document.addEventListener("render", () => {
    queueMicrotask(typeset);
  });

  if (window.MathJax && window.MathJax.startup && window.MathJax.startup.promise) {
    window.MathJax.startup.promise.then(typeset);
  } else {
    document.addEventListener("DOMContentLoaded", typeset, { once: true });
  }
})();
`,
          },
        ],
      }
    },
  }
}

export default MathJaxClient
