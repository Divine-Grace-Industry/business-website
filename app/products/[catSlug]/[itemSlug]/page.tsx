import { notFound } from "next/navigation";
import ProductDetailBanner from "@/components/products/detail/ProductDetailBanner";
import ProductDetailBlock from "@/components/products/detail/ProductDetailBlock";
import RelatedProducts from "@/components/products/detail/RelatedProducts";
import ProductContactStrip from "@/components/products/detail/ProductContactStrip";

import { getCategories, getCategory, getImageUrl, getProductsByCategory } from "@/lib/sanity-client";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ catSlug: string; itemSlug: string }>;
}): Promise<Metadata> {
  const { catSlug, itemSlug } = await params;

  const [productsByCatSlug, category] = await Promise.all([
    getProductsByCategory(catSlug),
    getCategory(catSlug),
  ]);

  const product = productsByCatSlug.find((p) => p.slug === itemSlug);

  if (!product || !category) return {};

  return {
    title: `${product.name} | ${category.name} | Divine Grace Industries LLC`,
    description: product.description?.slice(0, 160),
    alternates: {
      canonical: `https://divinegrace.co.in/products/${catSlug}/${itemSlug}`,
    },
    openGraph: {
      title: `${product.name} | Divine Grace Industries LLC`,
      description: product.description?.slice(0, 160),
      url: `https://divinegrace.co.in/products/${catSlug}/${itemSlug}`,
      siteName: "Divine Grace Industries LLC",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "https://divinegrace.co.in/og.png",
          width: 1200,
          height: 630,
          alt: `${product.name} — Divine Grace Industries LLC`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Divine Grace Industries LLC`,
      description: product.description?.slice(0, 160),
      images: ["https://divinegrace.co.in/og.png"],
    },
  };
}

// Pre-generate all product detail pages at build time
export async function generateStaticParams() {
  const categories = await getCategories();
  console.log('[static-params]: /products/[slugCat]/[itemSlug] route:', categories);

  const res: { catSlug: string, itemSlug: string }[] = [];

  for (let i = 0; i < categories.length; i++) {

    const product = await getProductsByCategory(categories[i].slug);
    const routes = product.map((p) => ({ catSlug: categories[i].slug, itemSlug: p.slug }));
    res.push(...routes)
  }
  console.log('[static-params]: /products/[slugCat]/[itemSlug] route all data:', res);

  return res;

}

interface PageProps {
  params: Promise<{ catSlug: string; itemSlug: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { itemSlug, catSlug } = await params;

  console.log('[component]: /products/[catSlug]/[itemSlug]', { itemSlug, catSlug });

  if (!itemSlug || !catSlug) notFound();


  const productsByCatSlug = await getProductsByCategory(catSlug);
  const category = await getCategory(catSlug);
  const actualProduct = productsByCatSlug.find(d => d.slug === itemSlug)

  if (!actualProduct || !category) notFound();

  console.log('[component]: /products/[catSlug]/[itemSlug] actual product and cat found', { actualProduct, category });


  // Pick 3 related items from the same category, excluding the current one
  const related = productsByCatSlug
    .filter((i) => i.slug !== itemSlug)
    .slice(0, 3);

  return (
    <main style={{ paddingTop: "70px" }}>
      <ProductDetailBanner
        productName={actualProduct.name}
        categoryTitle={category.name}
        categorySlug={category.slug}
        backgroundImage={getImageUrl(category.image)}
      />
      <ProductDetailBlock
        data={actualProduct}
      />
      <RelatedProducts items={related} categorySlug={category.slug} />
      <ProductContactStrip />
    </main>
  );
}
