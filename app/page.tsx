import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTAStrip from "@/components/CTAStrip";
import { getCategories } from "@/lib/sanity-client";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Divine Grace Industries LLC | Industrial Raw Materials Supplier",
  description:
    "Divine Grace Industries LLC is a premier global supplier of Zircon Sands, Minerals, Metals, Chemicals, Ferro Alloys and Scrap. Established 2020, sourcing from 6+ countries.",
  metadataBase: new URL("https://divinegrace.co.in"),
  alternates: {
    canonical: "https://divinegrace.co.in",
  },
  openGraph: {
    title: "Divine Grace Industries LLC | Industrial Raw Materials Supplier",
    description:
      "Premier global supplier of Zircon Sands, Minerals, Metals, Chemicals, Ferro Alloys and Scrap. Established 2020, sourcing from 6+ countries.",
    url: "https://divinegrace.co.in",
    siteName: "Divine Grace Industries LLC",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://divinegrace.co.in/og.png",
        width: 1200,
        height: 630,
        alt: "Divine Grace Industries LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Grace Industries LLC | Industrial Raw Materials Supplier",
    description:
      "Premier global supplier of Zircon Sands, Minerals, Metals, Chemicals, Ferro Alloys and Scrap.",
    images: ["https://divinegrace.co.in/og.png"],
  },
};

export default async function HomePage() {

  const data = await getCategories();

  console.log('[route]: / route', data)


  return (
    <main style={{ paddingTop: "70px" }}>
      <HeroSection categories={data} />
      <StatsBar />
      <AboutSection />
      <ProductsSection data={data} />
      <WhyChooseUs />
      <CTAStrip />
    </main>
  );
}
