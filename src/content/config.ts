import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z
      .enum([
        "keyboards",
        "keycaps",
        "photos",
        "react",
        "astro",
        "personal",
        "plants",
      ])
      .optional(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
