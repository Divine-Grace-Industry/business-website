import Image from "next/image";
import Link from "next/link";

export default function CompanyOverview() {
  return (
    <section className="section">
      <div className="container">
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-center"
          style={{ gap: "3rem" }}
        >
          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <span className="section-label">Who We Are</span>
              <h2
                className="section-heading uppercase"
                style={{ marginBottom: 0, marginTop: "0.5rem" }}
              >
                A Trusted Name in Industrial Raw Materials Since 2020
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ color: "var(--color-gray-600)",textAlign: 'justify',textAlignLast: 'left' }}>
                Divine Grace Industries LLC stands at the forefront of global
                industrial supply. As a premier Manufacturer and
                Importer-Exporter, we specialize in bridge-building between
                high-quality resource hubs and industrial consumers.
              </p>
              <p style={{ color: "var(--color-gray-600)",textAlign: 'justify',textAlignLast: 'left' }}>
                Our strategic sourcing network spans across India, Australia,
                USA, and the Middle East, ensuring that our clients receive
                nothing but the finest industrial raw materials. With a
                commitment to excellence and reliability, we facilitate seamless
                trade that powers progress across borders.
              </p>
            </div>

            <Link
              href="/products"
              className="btn btn-primary w-fit inline-flex items-center gap-2"
            >
              View Our Products
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Image with badge */}
          <div className="relative">
            <div
              style={{
                border: "2px solid var(--color-primary)",
                borderRadius: "var(--radius-lg)",
                padding: "8px",
              }}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: "4/3",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "var(--shadow-card-hover)",
                }}
              >
                <Image
                  src="/about.png"
                  alt="Business professionals shaking hands in a professional setting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute hidden lg:block"
              style={{
                bottom: "-1.5rem",
                left: "-1.5rem",
                backgroundColor: "var(--color-secondary)",
                color: "var(--color-white)",
                padding: "1.5rem",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-card-hover)",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-heading)",
                  fontSize: "var(--text-3xl)",
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                15+
              </span>
              <span
                style={{
                  fontSize: "var(--text-xs)",
                  letterSpacing: "var(--tracking-wide)",
                  textTransform: "uppercase",
                }}
              >
                Global Partners
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
