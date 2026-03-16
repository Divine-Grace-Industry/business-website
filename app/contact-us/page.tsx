import ContactBanner from "@/components/contact/ContactBanner";
import ContactIntro from "@/components/contact/ContactIntro";
import ContactInfoRow from "@/components/contact/ContactInfoRow";
import ContactForm from "@/components/contact/ContactForm";
import BusinessHours from "@/components/contact/BusinessHours";
import MapSection from "@/components/contact/MapSection";
import CareerForm from "@/components/contact/CareerForm";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Divine Grace Industries LLC",
  description:
    "Get in touch with Divine Grace Industries LLC. Visit us at Gondal, Gujarat. Call +91-9537752502 or email us for bulk orders and sourcing enquiries.",
  alternates: {
    canonical: "https://divinegrace.co.in/contact",
  },
  openGraph: {
    title: "Contact Us | Divine Grace Industries LLC",
    description:
      "Reach our procurement team for quotes, bulk orders and sourcing enquiries. Gondal, Gujarat, India.",
    url: "https://divinegrace.co.in/contact",
    siteName: "Divine Grace Industries LLC",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://divinegrace.co.in/og.png",
        width: 1200,
        height: 630,
        alt: "Contact Divine Grace Industries LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Divine Grace Industries LLC",
    description:
      "Reach our procurement team for quotes, bulk orders and sourcing enquiries. Gondal, Gujarat, India.",
    images: ["https://divinegrace.co.in/og.png"],
  },
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: "70px" }}>
      <ContactBanner />
      <ContactIntro />
      <ContactInfoRow />
      <ContactForm />
      <BusinessHours />
      <MapSection />
      <CareerForm />
    </main>
  );
}
