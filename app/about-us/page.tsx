import PageBanner from "@/components/PageBanner";
import CompanyOverview from "@/components/about/CompanyOverview";
import KeyFactsBar from "@/components/about/KeyFactsBar";
import MissionStatement from "@/components/about/MissionStatement";
import VisionStatement from "@/components/about/VisionStatement";
import WhyChooseUsAbout from "@/components/about/WhyChooseUsAbout";
import SourcingRegions from "@/components/about/SourcingRegions";
import ContactStrip from "@/components/ContactStrip";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Divine Grace Industries LLC",
  description:
    "Learn about Divine Grace Industries LLC — established in 2020, a premier manufacturer and global trader of industrial raw materials sourcing from India, Australia, USA, Middle East and beyond.",
  alternates: {
    canonical: "https://divinegrace.co.in/about",
  },
  openGraph: {
    title: "About Us | Divine Grace Industries LLC",
    description:
      "Established in 2020, Divine Grace Industries LLC is a premier manufacturer and global trader of industrial raw materials sourcing from India, Australia, USA, Middle East and beyond.",
    url: "https://divinegrace.co.in/about",
    siteName: "Divine Grace Industries LLC",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://divinegrace.co.in/og.png",
        width: 1200,
        height: 630,
        alt: "About Divine Grace Industries LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Divine Grace Industries LLC",
    description:
      "Established in 2020, premier global trader of industrial raw materials sourcing from India, Australia, USA and the Middle East.",
    images: ["https://divinegrace.co.in/og.png"],
  },
};

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "70px" }}>
      <PageBanner
        title="About Us"
        backgroundImage="/hero.png"
        backgroundAlt="Industrial cargo port container terminal bird eye view"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      <CompanyOverview />
      <KeyFactsBar />
      <MissionStatement />
      <VisionStatement />
      <WhyChooseUsAbout />
      <SourcingRegions />
      <ContactStrip message="Have a sourcing requirement? Get in touch with our team." />
    </main>
  );
}
