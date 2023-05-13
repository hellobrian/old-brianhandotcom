import { z, defineCollection } from "astro:content";

const keyboardsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    size: z.enum([
      "tkl",
      "60-percent",
      "65-percent",
      "75-percent",
      "alice",
      "arisu",
      "compact-1800",
      "frl-1800",
      "hhkb",
    ]),
    plate: z.enum(["brass", "fr4", "aluminum", "acrylic", "pc"]),
  }),
});

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default(["others"]),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined))
  }),
});

export const collections = {
  keyboards: keyboardsCollection,
  blog: blogCollection,
};
