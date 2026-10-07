import { QuartzPlugin } from "../types"
import fs from "fs"
import path from "path"

export default (() => {
  return {
    name: "mathjax-preamble",
    hooks: {
      async beforeRender({ cfg }) {
        // Look for preamble.sty in the Quartz root
        const preamblePath = path.join(cfg.root, "preamble.sty")

        if (fs.existsSync(preamblePath)) {
          const preamble = fs.readFileSync(preamblePath, "utf-8")

          // Ensure MathJax config exists
          cfg.plugins.latex.options.mathjaxConfig ??= {}
          cfg.plugins.latex.options.mathjaxConfig.tex ??= {}

          // Inject macros from preamble.sty
          cfg.plugins.latex.options.mathjaxConfig.tex.macros = preamble
        }
      }
    }
  } satisfies QuartzPlugin
})()
