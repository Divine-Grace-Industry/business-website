import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="section" style={{ backgroundColor: "var(--color-surface)" }}>
      <div className="container">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ gap: "4rem" }}
        >
          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="flex items-center gap-2">
              <span
                style={{
                  display: "inline-block",
                  width: "2rem",
                  height: "2px",
                  backgroundColor: "var(--color-secondary)",
                }}
              />
              <span className="section-label" style={{ marginBottom: 0 }}>
                About Us
              </span>
            </div>

            <h2
              className="section-heading uppercase"
              style={{ marginBottom: 0 }}
            >
              Established Since 2020
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ color: "var(--color-gray-600)", fontSize: "var(--text-lg)",textAlign: 'justify',textAlignLast: 'left' }}>
                Divine Grace Industries LLC is a premier manufacturing and trading
                company dealing in Ferro Alloys, Metals, Minerals, and Chemicals.
                We bridge the gap between global resource abundance and industrial
                demand.
              </p>
              <p style={{ color: "var(--color-gray-600)", fontSize: "var(--text-lg)",textAlign: 'justify',textAlignLast: 'left' }}>
                Sourced directly from trusted partners in India, Australia, USA,
                South Africa, and beyond, we ensure quality and reliability for
                your industrial needs. Our rigorous quality control processes
                guarantee that every shipment meets international standards.
              </p>
              <p style={{ color: "var(--color-gray-600)", fontSize: "var(--text-lg)",textAlign: 'justify',textAlignLast: 'left' }}>
                With a focus on long-term partnerships, we provide end-to-end
                logistics support, ensuring seamless delivery from mine to factory
                floor.
              </p>
            </div>

            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 font-bold uppercase"
              style={{
                color: "var(--color-secondary)",
                fontSize: "var(--text-sm)",
                letterSpacing: "var(--tracking-wide)",
                transition: "gap var(--transition-fast)",
              }}
            >
              Learn More About Our History
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Image */}
          <div
            className="relative w-full overflow-hidden"
            style={{
              height: "500px",
              borderRadius: "var(--radius-lg)",
              boxShadow: "0 20px 60px rgba(28, 58, 107, 0.20)",
            }}
          >
            <Image
              src="/home.png"
              alt="Business professionals discussing industrial plans"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
