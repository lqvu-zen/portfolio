import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each project is one Markdown file in src/content/projects/.
// The file name becomes the URL: asphalt-legends.md -> /projects/asphalt-legends/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    level: z.string(), // shown as "LEVEL 1-1"
    world: z.string(), // short category label, e.g. "Gameloft Engine"
    order: z.number(), // sort order on the level-select page
    summary: z.string(), // one sentence, used on cards and as the page TL;DR
    context: z.string(), // e.g. "Shipped title · Gameloft Vietnam"
    period: z.string().optional(),
    team: z.string().optional(),
    role: z.array(z.string()), // what you personally did
    tech: z.array(z.string()),
    youtube: z.string().optional(), // YouTube video id only
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    featured: z.boolean().default(false), // show on the home page
    accent: z.enum(['gold', 'red', 'blue', 'green', 'pink']).default('gold'),
  }),
});

export const collections = { projects };
