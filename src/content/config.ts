import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  schema: z.object({
    title: z.string(),
    precio: z.number().optional(),
    img: z.string(),
    duration: z.number(),
    description: z.string(),
    category: z.string(),
    keywords: z.array(z.string()).optional(),
    sesiones: z.number().optional(),
    nuevo: z.boolean().optional(),
  }),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    img: z.string(),
    keywords: z.array(z.string()).optional(),
    author: z.string().optional(),
    updated: z.string().optional(),
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { services, blog };
