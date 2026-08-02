import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const diary = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/diary' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    authorship: z.enum(['human', 'ai', 'mixed']),
    authorshipNote: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/products' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      status: z.enum(['active', 'paused', 'archived']).default('active'),
      url: z.string().url().optional(),
      repo: z.string().url().optional(),
      docs: z.string().url().optional(),
      cover: image().optional(),
      video: z.string().optional(),
      gallery: z.array(image()).optional(),
      order: z.number().default(0),
      draft: z.boolean().default(false),
    }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    date: z.coerce.date().optional(),
    type: z.enum(['tool', 'article', 'repo', 'prompt', 'docs', 'other']),
    tags: z.array(z.string()).default([]),
    blurb: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { diary, products, resources };
