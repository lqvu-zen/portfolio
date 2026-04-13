# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Lê Quang Vũ (Senior Engine Programmer). This is a **vanilla HTML/CSS/JavaScript** static site — no build tools, no frameworks, no package manager.

## Running Locally

Serve the project root with any static HTTP server:

```bash
python -m http.server 8000
# or
npx http-server .
```

Then open `http://localhost:8000` in a browser.

## Architecture

Three files make up the entire site:

- **`index.html`** — Single-page layout with sections: nav, hero, projects, skills, awards, contact, footer
- **`style.css`** — All styling; uses CSS custom properties for the cyberpunk color scheme (`--cyan: #0ff`, `--magenta: #f0f`, `--yellow: #ff0`) and Google Fonts (Oxanium, Share Tech Mono)
- **`main.js`** — Mouse cursor glow effect + three `<canvas>` visualizations drawn via the 2D Canvas API (render pipeline, memory subsystem, build pipeline diagrams)

## Key Design Patterns

- **CSS variables** drive the entire theme — color changes should go through the variables in `:root`
- **Canvas drawings** in `main.js` are called from a single `DOMContentLoaded` listener; each project card has a dedicated `<canvas>` and a corresponding draw function
- **Responsive breakpoint** at `768px` (single media query in `style.css`)
- No JavaScript dependencies — do not introduce npm packages or a bundler without discussing with the user first
