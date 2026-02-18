# Datum UI

> **Zero external dependencies** — fonts are self-hosted, no Google Fonts API calls.

Industrial-flat design system built on **Tailwind CSS v4.1** using the CSS-first API (`@theme` + `@utility`). Mustard accents, charcoal text, chamfered corners, no rounded edges, no shadows.

**Fonts:** Inter (body/headings) + JetBrains Mono (data/code) — self-hosted as woff2, no CDN.

## Quick Start

### Use in a new project

1. **Install dependencies**

```bash
pnpm add tailwindcss @tailwindcss/vite
```

2. **Copy the theme file** — `src/style.css` is the entire design system. Copy it into your project and import it in your entry point:

```js
// main.js / main.ts
import './style.css';
```

3. **Configure Vite** (if using Vite):

```js
// vite.config.js
import tailwindcss from "@tailwindcss/vite";
export default { plugins: [tailwindcss()] };
```

4. **Start building.** Fonts are bundled in `style.css` via `@font-face` — no `<link>` tags needed.

> **Note:** The `src/fonts/` directory contains Inter and JetBrains Mono woff2 files. Make sure to copy this directory along with `style.css`.

---

## For AI Agents

> **Read order:** This README first → `src/style.css` for all tokens and utilities → `STYLE_GUIDE.md` only if you need full design rationale.

### Files to read

| File | What it contains | When to read |
|:---|:---|:---|
| `src/style.css` | All `@theme` tokens and `@utility` component classes | **Always** — this is the source of truth |
| `STYLE_GUIDE.md` | Full design spec, rationale, and anti-patterns | When you need context on *why* a rule exists |
| `index.html` | Live demo page with every component | Reference for complex patterns |

### 5 Non-Negotiable Rules

1. **No `border-radius`.** Use `clip-path: polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px))` for the chamfered bottom-left corner. This is the signature shape.
2. **No `box-shadow` on cards or containers.** Use `border: 1px solid var(--color-border)` for depth. The only exception is `tooltip-blueprint`.
3. **Use only named color tokens.** Never use `bg-blue-500`, `text-red-500`, or any default Tailwind palette. Only `primary`, `base`, `surface`, `text`, `text-secondary`, `border`, `border-strong`, `status-active`, `status-stopped`, `status-pending`.
4. **Headings are always `uppercase tracking-tight font-bold`.** Data values use `font-mono text-sm`.
5. **Transitions are 150ms with `ease-standard`.** No spring, bounce, or elastic easings.

### Available Custom Classes

These are defined as `@utility` in `style.css` and can be used directly in HTML:

```
card-blueprint              — flat container, 1px border, chamfered bottom-left
card-blueprint-interactive  — same + border turns mustard on hover
btn-primary                 — mustard background, chamfered, uppercase
btn-ghost                   — transparent, 1px border, chamfered
input-blueprint             — monospaced input, mustard focus border
badge                       — small monospaced tag, neutral border
badge-primary               — same with mustard border + tinted background
highlight                   — inline mustard underline + tinted background
highlight-strong            — solid mustard background, bold accent
tooltip-blueprint           — dark bg, mustard border, shadow (only exception)
bg-grid                     — dot grid page background
modal-overlay               — fullscreen dark semi-transparent backdrop
modal-datum                 — chamfered dialog panel (max-width 28rem)
modal-close                 — positioned × button, mustard hover
progress-track              — full-width track bar with border
progress-fill               — animated mustard fill bar
section-divider             — 1px horizontal line with centered label
timeline-datum              — container with dotted left border
timeline-node               — pending step (outline-only)
timeline-node-done          — completed step (filled grey)
timeline-node-active        — current step (mustard fill + glow ring)
```

### Color Tokens (use with Tailwind classes like `bg-primary`, `text-text`)

```
primary         #FFB800    — mustard accent (buttons, borders, highlights)
primary-hover   #E6A800    — darker mustard for hover states
primary-muted   #FFB80026  — 15% opacity mustard for badge backgrounds
base            #F8F9FA    — page background
base-alt        #F1F3F5    — alternate surface (table headers, code blocks)
surface         #FFFFFF    — card / container backgrounds
text            #212529    — primary body text (charcoal)
text-secondary  #6C757D    — captions, labels, metadata
border          #DEE2E6    — standard 1px borders
border-strong   #212529    — heavy 2px separators (page headers, footers)
status-active   #16A34A    — green for [ACTIVE]
status-stopped  #DC2626    — red for [STOPPED]
status-pending  #FFB800    — yellow for [PENDING]
```

### Common Patterns (copy-paste)

**Card with title + badge:**
```html
<div class="card-blueprint">
  <div class="flex justify-between items-start mb-3">
    <h3 class="text-lg font-semibold uppercase tracking-wide">Title</h3>
    <span class="badge-primary">Status</span>
  </div>
  <p class="text-sm text-text-secondary leading-relaxed">Description.</p>
</div>
```

**Button group:**
```html
<div class="flex gap-3">
  <button class="btn-primary">Confirm</button>
  <button class="btn-ghost">Cancel</button>
</div>
```

**Status indicator:**
```html
<span class="font-mono text-sm text-status-active">[ACTIVE]</span>
```

**Page header:**
```html
<header class="flex justify-between items-end pb-4 mb-8">
  <h1 class="text-3xl font-bold uppercase tracking-tight">Page Title</h1>
  <button class="btn-primary">Action</button>
</header>
```

**Body text (always include `leading-relaxed` for readability):**
```html
<p class="text-base leading-relaxed text-text">Paragraph content.</p>
```

---

## File Map

```
datum-ui/
├── README.md           ← You are here
├── STYLE_GUIDE.md      ← Full design spec (fonts, spacing, anti-patterns)
├── index.html          ← Live demo page — all components rendered
├── src/
│   ├── style.css       ← THE THEME — @font-face + @theme + @utility
│   ├── fonts/          ← Self-hosted woff2 (Inter + JetBrains Mono)
│   └── main.js         ← Entry point (imports style.css)
├── vite.config.js      ← Vite + @tailwindcss/vite plugin
└── package.json        ← pnpm project config
```

## Dev Server

```bash
pnpm install
pnpm run dev        # → http://localhost:5173
```
