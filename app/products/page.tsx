import ProductsBanner from "@/components/products/ProductsBanner";
import ProductsGrid from "@/components/products/ProductsGrid";
import ProductsCTA from "@/components/products/ProductsCTA";
import { getCategories } from "@/lib/sanity-client";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Divine Grace Industries LLC",
  description:
    "Browse our complete catalogue of industrial raw materials — Minerals, Chemicals, Ferro Alloys, Metals and Scrap. Premium grade, globally sourced, reliably delivered.",
  alternates: {
    canonical: "https://divinegrace.co.in/products",
  },
  openGraph: {
    title: "Products | Divine Grace Industries LLC",
    description:
      "Browse our complete catalogue of industrial raw materials — Minerals, Chemicals, Ferro Alloys, Metals and Scrap. Premium grade, globally sourced, reliably delivered.",
    url: "https://divinegrace.co.in/products",
    siteName: "Divine Grace Industries LLC",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://divinegrace.co.in/og.png",
        width: 1200,
        height: 630,
        alt: "Divine Grace Industries LLC Products Catalogue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Divine Grace Industries LLC",
    description:
      "Browse our complete catalogue of industrial raw materials — Minerals, Chemicals, Ferro Alloys, Metals and Scrap.",
    images: ["https://divinegrace.co.in/og.png"],
  },
};

export default async function ProductsPage() {
  const data = await getCategories();

  console.log('[route]: /products route:',data);
  

  return (
    <main style={{ paddingTop: "70px" }}>
      <ProductsBanner />
      <ProductsGrid data={data} />
      <ProductsCTA />
    </main>
  );
}
