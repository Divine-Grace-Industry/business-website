import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Divine Grace Industries LLC",
  description:
    "The page you are looking for does not exist. Return to Divine Grace Industries LLC homepage to explore our industrial raw materials catalogue.",
  robots: {
    index: false,
    follow: true,
  },
};

const quickLinks = [
  { label: "Home",         href: "/" },
  { label: "About Us",     href: "/about-us" },
  { label: "Products",     href: "/products" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact Us",   href: "/contact-us" },
];

export default function NotFound() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <main
        className="flex flex-1 flex-col items-center justify-center text-center"
        style={{
          paddingTop: "70px",
          backgroundColor: "var(--color-surface-muted)",
          minHeight: "100vh",
          padding: "70px 1.5rem 4rem",
        }}
      >
        {/* 404 number */}
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(6rem, 20vw, 10rem)",
            fontWeight: 800,
            lineHeight: 1,
            color: "var(--color-primary)",
            opacity: 0.08,
            userSelect: "none",
            letterSpacing: "-0.05em",
            marginBottom: "-2rem",
          }}
        >
          404
        </p>

        {/* Icon */}
        <div
          className="flex items-center justify-center mx-auto"
          style={{
            width: "72px",
            height: "72px",
            backgroundColor: "var(--color-primary)",
            borderRadius: "50%",
            marginBottom: "1.5rem",
          }}
        >
          <span
            className="material-symbols-outlined text-white"
            style={{ fontSize: "36px" }}
          >
            search_off
          </span>
        </div>

        {/* Heading */}
        <h1
          className="uppercase"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            fontWeight: 800,
            color: "var(--color-primary)",
            letterSpacing: "var(--tracking-tight)",
            marginBottom: "1rem",
          }}
        >
          Page Not Found
        </h1>

        {/* Gold divider */}
        <div
          style={{
            width: "4rem",
            height: "3px",
            backgroundColor: "var(--color-accent)",
            margin: "0 auto 1.5rem",
          }}
        />

        {/* Message */}
        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "var(--text-base)",
            maxWidth: "480px",
            lineHeight: "var(--leading-relaxed)",
            marginBottom: "2.5rem",
          }}
        >
          The page you are looking for may have been moved, removed, or never
          existed. Try one of the links below to get back on track.
        </p>

        {/* Quick links */}
        {/* <div
          className="flex flex-wrap items-center justify-center gap-3"
          style={{ marginBottom: "2.5rem" }}
        >
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="btn btn-outline-navy"
              style={{
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--tracking-widest)",
                padding: "0.5rem 1.25rem",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div> */}

        {/* Primary CTA */}
        <Link
          href="/"
          className="btn btn-primary"
          style={{ letterSpacing: "var(--tracking-widest)" }}
        >
          Back to Homepage
        </Link>
      </main>

      <Footer />
    </div>
  );
}