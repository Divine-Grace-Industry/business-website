import Image from "next/image";
import Link from "next/link";

export default function ContactBanner() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ height: "280px", backgroundColor: "var(--color-primary)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Wide shot of a container shipping port at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.20 }}
        />
      </div>

      {/* Left-aligned content (matches original design) */}
      <div className="relative z-10 container w-full">
        <h2
          className="text-white uppercase mb-4"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.25rem, 6vw, 3rem)",
            fontWeight: 800,
          }}
        >
          Contact Us
        </h2>
        <nav className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.75)", fontSize: "var(--text-sm)" }}>
          <Link
            href="/"
            className="hover:text-white transition-colors"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Home
          </Link>
          <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
            chevron_right
          </span>
          <span className="font-semibold text-white">Contact Us</span>
        </nav>
      </div>
    </section>
  );
}
