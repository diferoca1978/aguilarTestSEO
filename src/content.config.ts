import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";


const blog  = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/blog",
    }),
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        publishDate: z.date(),
        tags: z.array(z.string()),
        image: image()
    })
});

export const collections = {
    blog
};
    