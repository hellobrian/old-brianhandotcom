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
    plate: z.enum(["brass", "fr4", "aluminum", "acrylic", 'pc']),
  }),
});

export const collections = {
  keyboards: keyboardsCollection,
};
