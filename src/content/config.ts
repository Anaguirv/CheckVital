import { defineCollection, z } from 'astro:content';
// z is a schema validation library used by Astro to define the structure of your content.

const services = defineCollection({
  schema: z.object({
    title: z.string(),
    precio: z.number(),
    img: z.string(),
    duration: z.number(),
    description: z.string(),
    }),
});

export const collections = { services }