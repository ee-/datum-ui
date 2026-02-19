# Datum UI — AI Agent & Developer Reference

> **Purpose**: This document is the single source of truth for building a CSS theme on **Tailwind CSS v4.1** using the CSS-first `@theme` / `@utility` / `@variant` API. It is structured for both AI agents (parseable, unambiguous) and human developers (readable, intentional).

---

## 1 · Design Identity

| Attribute | Value |
|:---|:---|
| **Name** | Technical Blueprint |
| **Aesthetic** | Industrial engineering — precision instruments, technical drawings, flat schematics |
| **Mood** | Precise, confident, information-dense, professional |
| **Era Inspiration** | Modern industrial dashboards, aerospace HUDs, engineering CAD software |

### 1.1 Core Principles

1. **Clarity over Clutter** — Every element earns its space. Prioritize data density with generous functional whitespace.
2. **Geometric Precision** — Sharp edges, chamfered corners, and deliberate alignment. No rounded-full, no organic curves.
3. **Industrial Contrast** — High-contrast mustard accents against charcoal text on off-white surfaces. The palette is small and intentional.
4. **Flat & Borderline** — No drop shadows. Depth is communicated via crisp `1px` borders and background tints. The one exception is tooltips, which use `shadow-xl` for focus separation.
5. **Typographic Hierarchy** — Headings are bold, uppercase, tightly tracked; body text is clean and regular; data/code is monospaced.

---

## 2 · Color Palette

### 2.1 Token Table

> AI AGENT: Use these exact `--color-*` variable names inside `@theme {}`. The **Token** column is the Tailwind v4.1 theme variable name. The **Utility** column shows the generated class prefix.

| Token (CSS Variable) | Hex | OKLCH Equivalent | Role | Generated Utility Example |
|:---|:---|:---|:---|:---|
| `--color-base` | `#F8F9FA` | `oklch(0.98 0.002 247)` | Page background | `bg-base` |
| `--color-base-alt` | `#F1F3F5` | `oklch(0.96 0.004 247)` | Secondary surfaces, table headers | `bg-base-alt` |
| `--color-surface` | `#FFFFFF` | `oklch(1 0 0)` | Card/container fill | `bg-surface` |
| `--color-primary` | `#FFB800` | `oklch(0.82 0.17 82)` | Primary actions, highlights, accents | `bg-primary`, `text-primary` |
| `--color-primary-hover` | `#E6A800` | `oklch(0.77 0.16 82)` | Hover state for primary | `hover:bg-primary-hover` |
| `--color-primary-muted` | `#FFB80026` | 15% alpha of primary | Subtle glow, focus rings | `bg-primary-muted` |
| `--color-text` | `#212529` | `oklch(0.23 0.01 250)` | Headings, body text | `text-text` |
| `--color-text-secondary` | `#6C757D` | `oklch(0.55 0.015 250)` | Metadata, captions, placeholders | `text-text-secondary` |
| `--color-border` | `#DEE2E6` | `oklch(0.91 0.005 250)` | Lines, dividers, table rules | `border-border` |
| `--color-border-strong` | `#212529` | same as text | Heavy separators (page header bottom) | `border-border-strong` |
| `--color-status-active` | `#16A34A` | `oklch(0.63 0.19 145)` | `[ACTIVE]` indicators | `text-status-active` |
| `--color-status-stopped` | `#DC2626` | `oklch(0.55 0.22 27)` | `[STOPPED]` indicators | `text-status-stopped` |
| `--color-status-pending` | `#FFB800` | same as primary | `[PENDING]` indicators | `text-status-pending` |

### 2.2 Color Usage Rules

- **Backgrounds**: Use `base` for pages, `base-alt` for zebra stripes / secondary panels, `surface` for cards.
- **Accent**: Only `primary` for interactive highlights. Never use as a large-area background fill except for buttons and badges.
- **Text on Primary fill**: Always use `text-text` (dark charcoal) on `primary` backgrounds for WCAG AA contrast.
- **Dark mode**: Not in scope for v1. If added later, use `@custom-variant` to define a `dark` theme.

---

## 3 · Typography

### 3.1 Font Stack

> AI AGENT: Define these inside `@theme {}` using `--font-*` variables. Tailwind v4.1 generates `font-*` utility classes from these.

| Token (CSS Variable) | Font Stack | Role |
|:---|:---|:---|
| `--font-sans` | `"Inter", ui-sans-serif, system-ui, sans-serif` | Headings & body text (override TW default) |
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Code, data values, status indicators |

### 3.2 Type Scale & Styles

| Role | Size | Weight | Transform | Tracking | Example Class Combo |
|:---|:---|:---|:---|:---|:---|
| **Page Title** | `text-4xl` (2.25rem) | `font-bold` | `uppercase` | `tracking-tight` | `text-4xl font-bold uppercase tracking-tight` |
| **Section Heading** | `text-2xl` (1.5rem) | `font-bold` | `uppercase` | `tracking-tight` | `text-2xl font-bold uppercase tracking-tight` |
| **Card Title** | `text-lg` (1.125rem) | `font-semibold` | `uppercase` | `tracking-wide` | `text-lg font-semibold uppercase tracking-wide` |
| **Body** | `text-base` (1rem) | `font-normal` | none | default | `text-base font-normal` |
| **Small / Caption** | `text-sm` (0.875rem) | `font-normal` | none | default | `text-sm text-text-secondary` |
| **Monospaced Data** | `text-sm` (0.875rem) | `font-normal` | none | default | `font-mono text-sm` |

### 3.3 Typography Rules

- All headings: `uppercase tracking-tight`. No exceptions.
- Body text: `antialiased` for subpixel smoothing.
- Numerical data and technical content: always `font-mono`.
- Line height: use Tailwind defaults (`leading-normal` / `leading-relaxed`). Do not override unless laying out dense data tables (use `leading-tight`).

---

## 4 · Spacing & Layout

### 4.1 Spacing Scale

> AI AGENT: The default Tailwind v4.1 `--spacing` base is `0.25rem`. This design system uses the Tailwind default spacing scale. No custom `--spacing` override is needed.

| Context | Value | Class |
|:---|:---|:---|
| Card internal padding | `1rem` (16px) | `p-4` |
| Section gap | `2rem` (32px) | `gap-8` or `mb-8` |
| Table cell padding | `0.75rem` (12px) | `p-3` |
| Page max width | `80rem` (1280px) | `max-w-7xl` |
| Page horizontal padding | `1.5rem` (24px) | `px-6` |

### 4.2 Grid & Layout Patterns

- **Page container**: `max-w-7xl mx-auto px-6`
- **Card grid**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- **Data-dense lists**: `flex flex-col gap-2`
- **Header bar**: `flex justify-between items-end`

---

## 5 · Component Specifications

### 5.1 Background Grid Pattern

A subtle dot grid gives the page a "graph paper" texture — central to the blueprint aesthetic.

```css
/* Apply to <body> or a full-bleed wrapper */
@utility bg-grid {
  background-color: var(--color-base);
  background-image: radial-gradient(circle, var(--color-border) 1px, transparent 1px);
  background-size: 20px 20px;
}
```

**Usage**: `<body class="bg-grid antialiased">`

---

### 5.2 Datum Card

The defining UI element. A flat white container with a chamfered (technical-cut) bottom-left corner.

```css
@utility card-datum {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 1rem;
  transition: all 150ms ease;
  /* Chamfer: 10px diagonal cut on bottom-left corner */
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
}
```

**Hover variant** (optional):

```css
@utility card-datum-interactive {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 1rem;
  transition: all 150ms ease;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    10px 100%,
    0 calc(100% - 10px)
  );
  &:hover {
    border-color: var(--color-primary);
  }
}
```

**Usage**: `<div class="card-datum">...</div>`

**Design rules**:
- No `border-radius` — the chamfer IS the border treatment.
- No `box-shadow` — flatness is the point.
- Nest content with `p-4` internally, not on the card itself if overriding.

---

### 5.3 Buttons

#### Primary Button

High-visibility CTA with the signature chamfer.

```css
@utility btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--color-primary);
  color: var(--color-text);
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.625rem 1.25rem;
  transition: background-color 150ms ease;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    8px 100%,
    0 calc(100% - 8px)
  );
  cursor: pointer;
  &:hover {
    background-color: var(--color-primary-hover);
  }
  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
```

**Usage**: `<button class="btn-primary">Deploy Now</button>`

#### Ghost / Secondary Button

Low-emphasis action. Border only, no fill.

```css
@utility btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  color: var(--color-text);
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.625rem 1.25rem;
  border: 1px solid var(--color-border);
  transition: all 150ms ease;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    8px 100%,
    0 calc(100% - 8px)
  );
  cursor: pointer;
  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
}
```

---

### 5.4 Text Highlighter

Inline emphasis block that mimics a physical marker stroke.

```css
@utility highlight {
  background-color: var(--color-primary);
  color: var(--color-text);
  padding-inline: 0.25rem;
  display: inline-block;
}
```

**Usage**: `<span class="highlight">CRITICAL</span>`

---

### 5.5 Status Indicators

Monospaced, bracketed labels for system states.

| State | Text Color | Label | Classes |
|:---|:---|:---|:---|
| Active | `text-status-active` | `[ACTIVE]` | `font-mono text-sm text-status-active` |
| Stopped | `text-status-stopped` | `[STOPPED]` | `font-mono text-sm text-status-stopped` |
| Pending | `text-status-pending` | `[PENDING]` | `font-mono text-sm text-status-pending` |

**Pattern**: Always wrap in square brackets `[ ]` and always use `font-mono`.

---

### 5.6 Data Tables

Flat, information-dense tables with clear row separation.

| Part | Styles |
|:---|:---|
| **`<thead>`** | `bg-base-alt border-b border-border` |
| **`<th>`** | `p-3 text-left text-sm font-semibold uppercase tracking-wide text-text-secondary` |
| **`<tr>`** | `border-b border-border transition-colors hover:bg-base-alt` |
| **`<td>`** | `p-3 font-mono text-sm` |

**Rules**:
- Numerical columns: right-align with `text-right`.
- Status columns: use Status Indicator pattern (§5.5).
- No zebra striping by default — rely on hover row highlight.

---

### 5.7 Page Header

Clean, minimal header with whitespace separation.

```html
<header class="flex justify-between items-end pb-4 mb-8">
  <h1 class="text-4xl font-bold uppercase tracking-tight text-text">
    PAGE TITLE
  </h1>
  <!-- Optional: controls, timestamp, breadcrumbs -->
</header>
```

**Rules**:
- **No bottom border.** Rely on whitespace to separate the header from content.
- Place navigation controls at `items-end` to baseline-align with the heading.

---

### 5.8 Tooltips

High-contrast, sharp-edged tooltips for contextual information.

```css
@utility tooltip-datum {
  background-color: var(--color-text);
  color: white;
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-primary);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  /* This is the ONE place shadows are permitted */
}
```

---

### 5.9 Form Inputs

Flat inputs consistent with the blueprint aesthetic.

```css
@utility input-datum {
  width: 100%;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  font-family: var(--font-mono);
  color: var(--color-text);
  transition: border-color 150ms ease;
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
  &::placeholder {
    color: var(--color-text-secondary);
  }
}
```

---

### 5.10 Vertical Timeline

Vertical flow with dotted connector and clear state differentiation.

| component | role |
|:---|:---|
| `timeline-datum` | Container with `border-left: 1px dotted var(--color-border)` |
| `timeline-node` | **Pending** step (outline-only square) |
| `timeline-node-done` | **Completed** step (filled grey square) |
| `timeline-node-active` | **Current** step (mustard fill + glow ring) |

---

### 5.11 Badges / Tags

Small, flat labels for categorization.

```css
@utility badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.125rem 0.5rem;
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
}

@utility badge-primary {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.125rem 0.5rem;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  background-color: var(--color-primary-muted);
}
```

---

## 6 · Animation & Transitions

### 6.1 Transition Defaults

> AI AGENT: Define this inside `@theme {}` using `--ease-*` and `--animate-*` variables.

| Token (CSS Variable) | Value | Role |
|:---|:---|:---|
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | All general transitions |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Exit animations |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Enter animations |

### 6.2 Transition Rules

- Default transition duration: `150ms`.
- Use `transition-colors` for hover color changes (buttons, links, rows).
- Use `transition-all` sparingly and only on cards/containers with border+background changes.
- **No bounce, spring, or elastic easings.** The aesthetic is mechanical, not organic.
- **No large translate/scale animations.** Subtle opacity and color shifts only.

---

## 7 · Accessibility Checklist

> AI AGENT: Enforce these rules when generating HTML. Violations break the design intent.

| Rule | Requirement |
|:---|:---|
| **Color contrast** | All text must meet WCAG AA (4.5:1 for normal, 3:1 for large text). `text` on `base` = ✅. `text` on `primary` = ✅. |
| **Focus indicators** | Every interactive element must have a visible `:focus-visible` ring. Use `outline: 2px solid var(--color-primary); outline-offset: 2px`. |
| **Keyboard navigation** | All interactive elements must be reachable via Tab. Logical tab order. |
| **ARIA labels** | Icon-only buttons require `aria-label`. Status indicators should have `role="status"`. |
| **Motion** | Respect `prefers-reduced-motion`. Wrap transitions in `@media (prefers-reduced-motion: no-preference)` when possible. |
| **Semantic HTML** | Use `<header>`, `<main>`, `<nav>`, `<section>`, `<table>`, `<button>` — never `<div>` for interactive elements. |

---

## 8 · Complete `@theme` Block (Copy-Paste Ready)

> AI AGENT: Place this block in your main CSS file immediately after `@import "tailwindcss";`. This single block defines the entire design system's tokens for Tailwind v4.1.

```css
@import "tailwindcss";

@theme {
  /* ──────────────── Colors ──────────────── */
  --color-base: #F8F9FA;
  --color-base-alt: #F1F3F5;
  --color-surface: #FFFFFF;
  --color-primary: #FFB800;
  --color-primary-hover: #E6A800;
  --color-primary-muted: #FFB80026;
  --color-text: #212529;
  --color-text-secondary: #6C757D;
  --color-border: #DEE2E6;
  --color-border-strong: #212529;
  --color-status-active: #16A34A;
  --color-status-stopped: #DC2626;
  --color-status-pending: #FFB800;

  /* ──────────────── Fonts ──────────────── */
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  /* ──────────────── Easings ──────────────── */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
}
```

---

## 9 · Complete `@utility` Definitions (Copy-Paste Ready)

> AI AGENT: Place these after the `@theme` block. Each `@utility` creates a utility class usable directly in HTML with full variant support (`hover:`, `lg:`, etc.).

```css
/* ──────────────── Background Grid ──────────────── */
@utility bg-grid {
  background-color: var(--color-base);
  background-image: radial-gradient(circle, var(--color-border) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* ──────────────── Datum Card ──────────────── */
@utility card-datum {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 1rem;
  transition: all 150ms var(--ease-standard);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px));
}

@utility card-datum-interactive {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 1rem;
  transition: all 150ms var(--ease-standard);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px));
  &:hover {
    border-color: var(--color-primary);
  }
}

/* ──────────────── Buttons ──────────────── */
@utility btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: var(--color-primary);
  color: var(--color-text);
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.625rem 1.25rem;
  transition: background-color 150ms var(--ease-standard);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 8px 100%, 0 calc(100% - 8px));
  cursor: pointer;
  &:hover {
    background-color: var(--color-primary-hover);
  }
  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

@utility btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  color: var(--color-text);
  font-weight: 600;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.625rem 1.25rem;
  border: 1px solid var(--color-border);
  transition: all 150ms var(--ease-standard);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 8px 100%, 0 calc(100% - 8px));
  cursor: pointer;
  &:hover {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
}

/* ──────────────── Inline Highlight ──────────────── */
@utility highlight {
  background-color: var(--color-primary);
  color: var(--color-text);
  padding-inline: 0.25rem;
  display: inline-block;
}

/* ──────────────── Tooltip ──────────────── */
@utility tooltip-datum {
  background-color: var(--color-text);
  color: white;
  font-size: 0.875rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--color-primary);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

/* ──────────────── Form Input ──────────────── */
@utility input-datum {
  width: 100%;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  font-family: var(--font-mono);
  color: var(--color-text);
  transition: border-color 150ms var(--ease-standard);
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
  &::placeholder {
    color: var(--color-text-secondary);
  }
}

/* ──────────────── Badges ──────────────── */
@utility badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.125rem 0.5rem;
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
}

@utility badge-primary {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.125rem 0.5rem;
  border: 1px solid var(--color-primary);
  color: var(--color-primary);
  background-color: var(--color-primary-muted);
}
```

---

## 10 · Anti-Patterns — What NOT To Do

> AI AGENT: If you find yourself generating any of these, stop and reconsider.

| ❌ Don't | ✅ Do Instead |
|:---|:---|
| `rounded-lg`, `rounded-full` | Use `clip-path` chamfer or no rounding |
| `shadow-md`, `shadow-lg` on cards | Cards are borderline-flat — use `border` only |
| Gradient backgrounds on surfaces | Flat solid colors from the palette |
| `text-blue-500`, `text-red-500` (Tailwind defaults) | Use only this system's named tokens (`text-primary`, `text-status-active`, etc.) |
| Decorative icons as primary content | Icons supplement text, never replace it |
| Organic/bouncy animations | Mechanical `ease-standard` transitions only |
| `border-radius` on cards or buttons | Chamfered `clip-path` is the signature shape |
| Large hero images or gradients | Dot-grid background (`bg-grid`) is the texture |
| Sans-serif for data/numbers | Always `font-mono` for numerical/technical data |

---

## 11 · Quick-Reference Cheat Sheet

```
STRUCTURE:          max-w-7xl mx-auto px-6
PAGE BACKGROUND:    bg-grid antialiased
CARD:               card-datum
CARD (INTERACTIVE): card-datum-interactive
BUTTON PRIMARY:     btn-primary
BUTTON SECONDARY:   btn-ghost
INPUT:              input-datum
TOOLTIP:            tooltip-datum
BADGE:              badge | badge-primary
HIGHLIGHT:          highlight
HEADING:            text-2xl font-bold uppercase tracking-tight text-text
BODY:               text-base text-text
CAPTION:            text-sm text-text-secondary
DATA CELL:          font-mono text-sm
STATUS:             font-mono text-sm text-status-active (or -stopped / -pending)
HEADER:             flex justify-between items-end pb-4 mb-8 (no border)
TIMELINE:           timeline-datum + timeline-node-[state]
TABLE HEADER:       bg-base-alt border-b border-border p-3 text-sm font-semibold uppercase tracking-wide text-text-secondary
TABLE ROW:          border-b border-border hover:bg-base-alt transition-colors
TABLE CELL:         p-3 font-mono text-sm
FOCUS RING:         focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2
```

---

## 12 · Required External Assets

| Asset | Source | Loading |
|:---|:---|:---|
| **Inter** font | [Google Fonts](https://fonts.google.com/specimen/Inter) | `<link>` in `<head>` or `@import` in CSS |
| **JetBrains Mono** font | [Google Fonts](https://fonts.google.com/specimen/JetBrains+Mono) | `<link>` in `<head>` or `@import` in CSS |

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```
