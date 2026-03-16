import Link from "next/link";

export default function ProductsCTA() {
  return (
    <section
      style={{ backgroundColor: "var(--color-primary)", paddingBlock: "3rem", paddingInline: "2.5rem" }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4
              className="uppercase mb-2"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "var(--text-2xl)",
                fontWeight: 700,
                color: "var(--color-white)",
                letterSpacing: "var(--tracking-wide)",
              }}
            >
              Ready to place an order?
            </h4>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "var(--text-lg)" }}>
              Get a custom quote for your specific material requirements today.
            </p>
          </div>
          <Link
            href={'/contact-us'}
            className="btn whitespace-nowrap hover:bg-secondary hover:text-white transition-colors duration-200"
            style={{
              backgroundColor: "var(--color-white)",
              color: "var(--color-primary)",
              border: "2px solid var(--color-white)",
              letterSpacing: "var(--tracking-widest)",
            }}
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
