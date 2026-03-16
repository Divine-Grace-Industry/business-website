// lib/sanity-image.ts
import { createClient } from "next-sanity";
import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";


const builder = createImageUrlBuilder (
  createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    apiVersion: 'v2025-02-19',
  })
);

export const getImageUrl = (source: SanityImageSource) => builder.image(source).url();