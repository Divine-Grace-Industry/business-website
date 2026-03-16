import { createClient } from "next-sanity";
import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";
import { unstable_cache } from 'next/cache';

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET
const token = process.env.SANITY_API_KEY

export const client = createClient({
    dataset,
    projectId,
    useCdn: false,
    apiVersion: 'v2025-02-19',
    token
})

const builder = createImageUrlBuilder(client);

export const getImageUrl = (source: SanityImageSource) => {
    const url = builder.image(source).url()
    return url;
}


export interface ProductData {
    name: string,
    image: SanityImageSource,
    slug: string,
    description: string,
    materials?: string[]
}

export interface Certificates {
    name: string,
    image: SanityImageSource
}

// export const getProduct = async ({ catSlug, prodSlug }: { catSlug: string, prodSlug: string }) => {
//     const query = `*[_type == 'product' && category->slug.current == '${catSlug}' && slug.current == '${prodSlug}']{
//     name,
//     image,
//     "slug":slug.current,
//     description,
//     materials,
//     }`
//     const data: ProductData = await client.fetch(query)
//     return data;
// }

// lib/sanity-client.ts

// const _getCategories = async () => {
//     const query = `*[_type == 'category']{
//     name, image, "slug":slug.current, description,
//     }`
//     const data: ProductData[] = await client.fetch(query)
//     return data;
// }

// All calls during a build share this single fetch
// export const getCategories = unstable_cache(
//   _getCategories,
//   ['categories'],           // cache key
//   { tags: ['categories'] }  // matches your revalidate endpoint
// );

export const getCategory = async (slug: string) => {
    const query = `*[_type == 'category' && slug.current == '${slug}']{
    name,
    image,
    "slug":slug.current,
    description
    }`
    const data: ProductData[] = await client.fetch(query)
    return data[0];
}

export const getProductsByCategory = async (slug: string) => {
    const query = `*[_type == 'product' && category->slug.current == '${slug}']
    | order(_createdAt asc){
    name,
    image,
    "slug":slug.current,
    description,
    materials,
    }`
    const data: ProductData[] = await client.fetch(query)
    return data;
}

export const getCategories = async () => {
    const query = `*[_type == 'category']
    | order(_createdAt asc){
    name,
    image,
    "slug":slug.current,
     description,
    }`
    const data: ProductData[] = await client.fetch(query)
    return data;
}

export const getCertificates = async () => {
    const query = `*[_type == 'certificates']
    | order(_createdAt asc){
    image,
      name
    }`
    const data: Certificates[] = await client.fetch(query)
    return data;
}
