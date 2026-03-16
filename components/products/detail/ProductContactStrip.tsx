import Link from "next/link";

export default function ProductContactStrip() {
  return (
    <section
      style={{ backgroundColor: "var(--color-primary)", paddingBlock: "3rem" }}
    >
      <div className="container">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-2xl)",
              fontWeight: 700,
              color: "var(--color-white)",
              maxWidth: "640px",
            }}
          >
            Interested in this product? Contact us for pricing and availability.
          </h2>
          <Link
            href="/contact"
            className="btn btn-outline whitespace-nowrap"
            style={{ letterSpacing: "var(--tracking-widest)" }}
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  );
}
