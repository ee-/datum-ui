# Datum UI

> **Zero external dependencies** — fonts are self-hosted, no Google Fonts API calls.

Industrial-flat design system built on **Tailwind CSS v4.1** using the CSS-first API (`@theme` + `@utility`). Mustard accents, charcoal text, chamfered corners, no rounded edges, no shadows.

**Fonts:** Inter (body/headings) + JetBrains Mono (data/code) — self-hosted as woff2, no CDN.

## Quick Start (CSS-First)

Datum UI is designed to be consumed as a CSS-first dependency in a Tailwind v4 project.

### 1. Install

```bash
pnpm add datum-ui
```

### 2. Import

Add the following to your main CSS entry point after `@import "tailwindcss";`:

```css
@import "tailwindcss";
@import "datum-ui";
```

### 3. Usage

The project includes self-hosted fonts (Inter & JetBrains Mono) packaged via `@font-face`. No external `<link>` tags are required.

---

## For AI Agents

> **Read order:** This README first → `STYLE_GUIDE.md` for full design rationale → `index.html` for implementation reference.

### Files to read

| File | What it contains | When to read |
|:---|:---|:---|
| `STYLE_GUIDE.md` | Full design spec, rationale, and anti-patterns | **Always** — this is the source of truth |
| `src/style.css` | Raw `@theme` tokens and `@utility` implementations | When debugging or extending |
| `index.html` | Live demo page with every component | Reference for complex patterns |

### 5 Non-Negotiable Rules

1. **No `border-radius`.** Use `clip-path: polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px))` for the chamfered bottom-left corner. This is the signature shape.
2. **No `box-shadow` on cards or containers.** Use `border: 1px solid var(--color-border)` for depth. The only exception is `tooltip-datum`.
3. **Use only named color tokens.** Never use `bg-blue-500`, `text-red-500`, or any default Tailwind palette. Only `primary`, `base`, `surface`, `text`, `text-secondary`, `border`, `border-strong`, `status-active`, `status-stopped`, `status-pending`.
4. **Headings are always `uppercase tracking-tight font-bold`.** Data values use `font-mono text-sm`.
5. **Transitions are 150ms with `ease-standard`.** No spring, bounce, or elastic easings.

### Available Custom Classes

These are defined as `@utility` and automatically available when importing `datum-ui`:

```
card-datum                  — flat container, 1px border, chamfered bottom-left
card-datum-interactive      — same + border turns mustard on hover + focus ring
btn-primary                 — mustard background, chamfered, uppercase
btn-ghost                   — transparent, 1px border, chamfered
input-datum                 — monospaced input, mustard focus border
badge                       — small monospaced tag, neutral border
badge-primary               — same with mustard border + tinted background
highlight                   — inline mustard underline + tinted background
highlight-strong            — solid mustard background, bold accent
tooltip-datum               — dark bg, mustard border, shadow (only exception)
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
primary         #FFB800    — mustard accent (buttons, highlights)
primary-hover   #E6A800    — darker mustard for hover states
primary-muted   #FFB80026  — 15% opacity mustard (badges, rings)
base            #F8F9FA    — page background
base-alt        #F1F3F5    — alternate surface (table headers, code)
surface         #FFFFFF    — card backgrounds
text            #212529    — primary charcoal text
text-secondary  #6C757D    — captions, labels, metadata
border          #DEE2E6    — standard borders
border-strong   #212529    — heavy separators
status-active   #16A34A    — green for [ACTIVE]
status-stopped  #DC2626    — red for [STOPPED]
status-pending  #FFB800    — yellow for [PENDING]
```

### Common Patterns (copy-paste)

**Card with title + badge:**
```html
<div class="card-datum-interactive" tabindex="0">
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
