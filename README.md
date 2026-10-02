# Physics

Collection of notes on Physics, focusing on Special and General Relativity and Cosmology.

## Quartz + Obsidian setup plan

If your Obsidian vault is currently on your home computer, you can still prepare this repository now so moving files later is smooth.

### 1) Initialize Quartz in this repository

From the repository root (`/home/runner/work/Physics/Physics`):

```bash
npm create quartz@latest .
npm install
```

This creates the Quartz site structure, including the `content/` directory where your Obsidian `.md` files should live.

### 2) Move your Obsidian notes into `content/`

After initialization, copy your vault markdown files into:

```text
/home/runner/work/Physics/Physics/content/
```

Keep your folder hierarchy if you want the same organization on the site.

### 3) Verify LaTeX rendering

Quartz supports LaTeX rendering out of the box through its LaTeX transformer. In your markdown notes, keep standard math delimiters:

- Inline math: `$...$`
- Block math: `$$...$$`

After moving files, run:

```bash
npx quartz build
npx quartz serve
```

Then open the local site and confirm equations render correctly (including any enhanced expressions/macros you use).

### 4) Publish

Once local rendering looks correct, commit and push changes, then publish with your preferred Quartz deployment target (for example, GitHub Pages).
