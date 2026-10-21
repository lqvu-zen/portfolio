# zenitus.dev

Pixel-game portfolio for Lê Quang Vũ, built with [Astro](https://astro.build) and deployed on Cloudflare Pages.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

| What | File |
|---|---|
| Projects ("levels") | `src/content/projects/*.md`, one file per project |
| Name, bio, links, stats, achievements | `src/data/profile.ts` |
| Pixel sprites (car, trophy, avatar…) | `src/data/sprites.ts`, drawn as text grids |
| Colours, fonts, pixel boxes, buttons | `src/styles/global.css` (`:root` tokens) |
| Pages | `src/pages/` |

## Adding a project

1. Copy any file in `src/content/projects/` and rename it. The file name becomes the URL
   (`my-tool.md` → `/projects/my-tool/`).
2. Fill in the frontmatter: `title`, `level`, `world`, `order`, `summary`, `context`, `role`, `tech`.
   Optional: `period`, `team`, `youtube` (video id only), `links`, `featured: true` to show it on
   the home page, and `accent` (`gold`, `red`, `blue`, `green`, `pink`).
3. Anything written below the frontmatter appears on the project page under **Dev notes**.

The schema is in `src/content.config.ts`; the build fails with a clear message if a field is missing.

## Editing a sprite

Each sprite is a list of strings where every character is one pixel and `.` is transparent.
The `palette` maps characters to colours. Example:

```ts
export const heart = {
  rows: ['.RR.RR.', 'RRRRRRR', '.RRRRR.', '..RRR..', '...R...'],
  palette: { R: 'var(--red)' },
};
```
