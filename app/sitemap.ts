// app/sitemap.ts
import { getCategories, getProductsByCategory } from '@/lib/sanity-client'
import { MetadataRoute } from 'next'
import { unstable_cache } from 'next/cache'


const BASE_URL = 'https://divinegrace.co.in'


const getCachedCategories = unstable_cache(
  () => getCategories(),
  ['sitemap-categories'],
  { tags: ['sitemap'] }
)

const getCachedProductsByCategory = (slug: string) => unstable_cache(
  () => getProductsByCategory(slug),
  [`sitemap-products-${slug}`],
  { tags: ['sitemap'] }
)

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  console.log('running sitemap....');
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/certificates`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Dynamic category pages: /products/[catSlug]
  const categories = await getCachedCategories()

  const categoryPages: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/products/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Dynamic product pages: /products/[catSlug]/[itemSlug]
  const productPagesNested = await Promise.all(
    categories.map(async (category) => {
      const products = await getCachedProductsByCategory(category.slug)();
      return products.map((product) => ({
        url: `${BASE_URL}/products/${category.slug}/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    })
  )

  const productPages: MetadataRoute.Sitemap = productPagesNested.flat()

  return [...staticPages, ...categoryPages, ...productPages]
}