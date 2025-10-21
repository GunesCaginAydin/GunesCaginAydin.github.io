import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string().optional(),
			description: z.string().optional(),
			pubDate: z.coerce.date().optional(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

export const collections = { blog };