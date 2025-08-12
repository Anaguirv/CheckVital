import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  schema: z.object({
    title: z.string(),
    precio: z.number(),
    img: z.string(),
    duration: z.number(),
    description: z.string(),
    category: z.string(),
    sesiones: z.number().optional(), // 👈 nuevo campo agregado (opcional por si no todos los tratamientos lo tienen)
  }),
});

export const collections = { services };
