import { notFound } from "next/navigation";

import CategoryBanner from "@/components/products/category/CategoryBanner";
import CategoryIntro from "@/components/products/category/CategoryIntro";
import CategoryProductGrid from "@/components/products/category/CategoryProductGrid";
import OtherCategories from "@/components/products/category/OtherCategories";
import EnquiryStrip from "@/components/products/category/EnquiryStrip";
import { getCategories, getImageUrl, getProductsByCategory, ProductData } from "@/lib/sanity-client";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ catSlug: string }>;
}): Promise<Metadata> {
  const slug = (await params).catSlug;
  const categories = await getCategories();
  const category = categories.find((c) => c.slug === slug);

  if (!category) return {};

  return {
    title: `${category.name} | Divine Grace Industries LLC`,
    description: category.description?.slice(0, 160),
    alternates: {
      canonical: `https://divinegrace.co.in/products/${slug}`,
    },
    openGraph: {
      title: `${category.name} | Divine Grace Industries LLC`,
      description: category.description?.slice(0, 160),
      url: `https://divinegrace.co.in/products/${slug}`,
      siteName: "Divine Grace Industries LLC",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "https://divinegrace.co.in/og.png",
          width: 1200,
          height: 630,
          alt: `${category.name} — Divine Grace Industries LLC`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} | Divine Grace Industries LLC`,
      description: category.description?.slice(0, 160),
      images: ["https://divinegrace.co.in/og.png"],
    },
  };
}

// Generates static pages at build time
export async function generateStaticParams() {
  const categories = await getCategories();

  console.log('[static-params]: /products/[slugCat] route:', categories);


  return categories.map((c) => ({ catSlug: c.slug }));
}

interface PageProps {
  params: Promise<{ catSlug: string }>;
}
type CategoryResult = {
  currentCategory: ProductData | null;
  otherCategories: ProductData[];
};

export default async function ProductCategoryPage({ params }: PageProps) {
  const slug = (await params).catSlug;

  console.log('[component]: /products/[catSlug] actual product and cat found', { slug });


  if (!slug) notFound();

  const categories = await getCategories();
  console.log('[route]: /products/[slugCat] route:', categories);

  const { currentCategory, otherCategories } = categories.reduce<CategoryResult>(
    (acc, cur) => {
      if (cur.slug === slug) {
        acc.currentCategory = cur;
      } else {
        acc.otherCategories.push(cur);
      }
      return acc;
    },
    {
      currentCategory: null,
      otherCategories: [],
    }
  );


  

  // 404 for unknown slugs
  if (!currentCategory) notFound();

  const products = await getProductsByCategory(slug);

  return (
    <main style={{ paddingTop: "70px" }}>
      <CategoryBanner
        title={currentCategory.name}
        backgroundImage={getImageUrl(currentCategory.image)}
        backgroundAlt={currentCategory.description}
      />
      <CategoryIntro title={currentCategory.name} intro={currentCategory.description} />
      <CategoryProductGrid items={products} categorySlug={currentCategory.slug} />
      <OtherCategories otherCategories={otherCategories} />
      <EnquiryStrip />
    </main>
  );
}
