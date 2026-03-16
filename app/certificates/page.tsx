import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import CertificateGallery from "@/components/certificates/CertificateGallery";
import ContactStrip from "@/components/ContactStrip";
import Footer from "@/components/Footer";
import { getCertificates } from "@/lib/sanity-client";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates | Divine Grace Industries LLC",
  description:
    "View Divine Grace Industries LLC's official certifications — ISO 9001:2015, GSTIN, Import Export Code, MSME Registration and Environmental Compliance credentials.",
  alternates: {
    canonical: "https://divinegrace.co.in/certificates",
  },
  openGraph: {
    title: "Certificates | Divine Grace Industries LLC",
    description:
      "View our official certifications — ISO 9001:2015, GSTIN, Import Export Code, MSME Registration and Environmental Compliance credentials.",
    url: "https://divinegrace.co.in/certificates",
    siteName: "Divine Grace Industries LLC",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://divinegrace.co.in/og.png",
        width: 1200,
        height: 630,
        alt: "Divine Grace Industries LLC Certificates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificates | Divine Grace Industries LLC",
    description:
      "View our official certifications — ISO 9001:2015, GSTIN, Import Export Code, MSME Registration and Environmental Compliance credentials.",
    images: ["https://divinegrace.co.in/og.png"],
  },
};

export default async function CertificatesPage() {
  const certificates = await getCertificates();
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">

      <main style={{ paddingTop: "70px" }}>
        <PageBanner
          title="Certificates"
          backgroundImage="/hero.png"
          backgroundAlt="Official documents and certificates"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Certificates" },
          ]}
        />

        <CertificateGallery certificates={certificates} />

        <ContactStrip message="Have questions about our compliance or certifications? Get in touch with our team." />
      </main>

    </div>
  );
}
