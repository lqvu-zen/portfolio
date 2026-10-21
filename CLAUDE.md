# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

zenitus.dev: a pixel-game styled portfolio (Astro 7, fully static, no UI framework, no client-side JS framework). Deployed on Cloudflare Pages; `site` is set in `astro.config.mjs`. Node `>=22.22.0` (pinned in `.node-version` for the Cloudflare build).

## Commands

```
npm install
astro dev --background   # dev server at http://localhost:4321 (see AGENTS.md; manage with `astro dev stop|status|logs`)
npm run build            # static output to dist/
npm run preview
```

There is no test runner and no linter. `npm run build` is the validation step: the content collection schema fails the build on bad project frontmatter.

## Architecture

Content and presentation are separated; most edits touch only data files:

- `src/content/projects/*.md`: one Markdown file per project ("level"). The file name is the URL slug. Frontmatter is validated by the Zod schema in `src/content.config.ts` (required: `title`, `level`, `world`, `order`, `summary`, `context`, `role`, `tech`; `accent` is one of gold/red/blue/green/pink; `featured: true` puts it on the home page; `youtube` is the video id only). The Markdown body renders as "Dev notes" on the project page, only if it has content beyond HTML comments.
- `src/data/profile.ts`: single source for name, bio, links, HUD numbers, stat groups and achievements, shared by the home and About pages.
- `src/data/sprites.ts` + `src/components/Sprite.astro`: sprites are arrays of strings, one character per pixel, `.` transparent, with a palette mapping characters to CSS colours (often `var(--red)` etc.). `Sprite.astro` merges horizontal runs into SVG `<rect>`s.
- `src/styles/global.css`: all colours, fonts and the `--px` unit are `:root` tokens; pages and components add scoped `<style>` blocks on top. Fonts come from `@fontsource` packages imported in `src/layouts/Base.astro`.
- `src/layouts/Base.astro`: the only layout (head/SEO meta, canonical URL from `Astro.site`, header/footer, skip link). Pages pass `title` and `description`.
- `src/pages/`: `index`, `about`, `404`, `projects/index` (level select) and `projects/[slug].astro`, which uses `getStaticPaths` over the collection sorted by `order` and passes prev/next entries for navigation.

Project accent colour is applied per page via an inline `--accent: var(--<accent>)` custom property.

## Notes

- `.claude/commands/test-website.md` is stale: it targets the old v1 GitHub Pages site (`index.html`, `style.css`, `main.js`), which no longer exists. Don't follow it for this Astro codebase.
- `README.md` documents adding a project and editing a sprite in more detail.
