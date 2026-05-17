# AGENTS.md

This document describes the architecture, conventions, and non-obvious design decisions for AI agents and developers working on this portfolio codebase.

## Project Overview

A single-page personal portfolio built with TanStack Start (SSR-capable React framework) and deployed on Netlify. The main page (`/`) renders all portfolio sections. Existing sub-routes (`/resume`, `/projects`, `/contact`, `/blog/$slug`) remain available but are secondary.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS variables |
| Content | Content Collections (type-safe markdown) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
content/
  jobs/           # Work experience markdown files
  education/      # Education/cert markdown files
  projects/       # Project markdown files (supports image, github, liveUrl)
  blog/           # Blog post markdown files

src/
  components/
    sections/     # Portfolio sections: Hero, About, Skills, Projects, Experience, ContactSection, Footer
    Navbar.tsx    # Sticky nav with theme toggle, scroll progress, mobile menu
    ParticleBackground.tsx  # Canvas particle animation (fixed-position, z-index 0)
    ScrollReveal.tsx        # IntersectionObserver scroll reveal wrapper
    ui/           # Radix-based UI primitives
  routes/
    index.tsx     # Main portfolio — composes all sections
    __root.tsx    # Root shell: Google Fonts, metadata, noise overlay
    blog/$slug    # Blog post detail
    resume.tsx    # Standalone resume page
    projects.tsx  # Standalone projects page
    contact.tsx   # Standalone contact page
  styles.css      # Global CSS: design tokens (--p-*), keyframes, utility classes
```

## Design System — "Obsidian Codex"

All portfolio-specific tokens are CSS custom properties prefixed with `--p-`:

| Token | Value | Purpose |
|-------|-------|---------|
| `--p-bg` | `#05080f` | Page background |
| `--p-bg-2` | `#0c1220` | Slightly elevated bg |
| `--p-bg-card` | `rgba(255,255,255,0.035)` | Glassmorphism card bg |
| `--p-border` | `rgba(255,255,255,0.08)` | Default border |
| `--p-amber` | `#e8a838` | Primary accent (warm gold) |
| `--p-cyan` | `#4facfe` | Secondary accent (ice blue) |
| `--p-text` | `#cdd4e8` | Body text |
| `--p-text-muted` | `#5b6478` | Subdued text |
| `--p-text-bright` | `#edf0f8` | High-emphasis text |

Fonts: **Syne** (display/headings), **Figtree** (body), **JetBrains Mono** (labels/code). Loaded from Google Fonts in `__root.tsx`.

Light mode is applied via the `light-mode` class on `<body>` — which overrides all `--p-*` vars. Default is **dark**.

## Key Conventions

### Component Style Pattern
Components use inline `style={{}}` objects with `var(--p-*)` tokens for portfolio-specific design, and Tailwind utilities only for layout (grid, flex, responsive breakpoints). This allows runtime theme switching via CSS variable override without recomputing Tailwind classes.

### Scroll Animations
Use `<ScrollReveal>` for elements that should animate in on scroll:

```tsx
<ScrollReveal delay={2}>
  <MyComponent />
</ScrollReveal>
```

Delay 0–4 maps to `reveal-delay-{n}` classes (0.1s per step).

### Content Collections — `content` field
The `content` field in job/education schemas is automatically populated from the **markdown body** by content-collections. Never add `content:` to frontmatter.

### Project Filtering
`CATEGORY_MAP` in `src/components/sections/Projects.tsx` maps tag strings to filter categories. Add new tags there to support filtering them.

### Particle Background
`ParticleBackground.tsx` is `position: fixed; z-index: 0`. All content sections must be `position: relative; z-index: 1` to appear above particles.

### Theme Toggle
State lives in `src/routes/index.tsx`, persisted via `localStorage`. Passes `isDark` + `onToggleTheme` down to `Navbar`. Body class `light-mode` swaps CSS variables.

### Netlify Forms
Contact form uses `data-netlify="true"` and submits to `/contact.html` as the forms endpoint. `public/contact.html` must include the form declaration for Netlify to detect it at build time.

## Non-Obvious Decisions

- **Canvas fixed-position** — particles use `position: fixed` (not relative) to cover the full viewport without affecting document flow or causing layout shifts.
- **`--p-` vars instead of Tailwind theme extension** — Tailwind 4's `@theme inline` is used for existing shadcn tokens. Portfolio tokens stay in raw CSS to avoid conflicts and enable zero-JS runtime theme switching.
- **`light-mode` class (not `.dark`)** — Default is dark mode. Light is opt-in. This prevents flash-of-light-theme on initial load.
- **Inline hover handlers** — `onMouseEnter/Leave` with direct `style` mutation is used because Tailwind `hover:` utilities don't respond to runtime CSS variable changes dynamically.
