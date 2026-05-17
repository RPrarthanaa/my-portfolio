# Zara Okafor — Developer Portfolio

A modern, production-grade personal portfolio website for a software developer. Built with TanStack Start, React 19, and Tailwind CSS 4 with a dark-first "Obsidian Codex" design aesthetic.

## Features

- **Full single-page portfolio** with smooth scroll navigation
- **Animated particle background** using Canvas API
- **Scroll-reveal animations** powered by IntersectionObserver
- **Typewriter hero** cycling through multiple role titles
- **Project filtering** by category (Frontend / Backend / AI-ML / DevOps)
- **Animated skill bars** that fill on scroll into view
- **Timeline layout** for work experience and education
- **Contact form** with Netlify Forms integration
- **Theme toggle** (dark/light) persisted in localStorage
- **Sticky navbar** with scroll progress indicator and glassmorphism on scroll

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 + custom CSS |
| Content | Content Collections (type-safe markdown) |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Fonts

- **Syne** — display/headings (geometric, editorial)
- **Figtree** — body copy (warm, legible)
- **JetBrains Mono** — labels, tags, code elements

## Getting Started

```bash
npm install
npm run dev        # Dev server on http://localhost:3000
npm run build      # Production build
```

For Netlify-powered local dev (with form handling):
```bash
netlify dev        # Local emulation on http://localhost:8888
```

## Content

Portfolio content lives in `/content/` as markdown files with frontmatter:

- `content/jobs/` — Work experience entries
- `content/education/` — Education and certifications
- `content/projects/` — Project showcases

Edit any markdown file to update the site content.
