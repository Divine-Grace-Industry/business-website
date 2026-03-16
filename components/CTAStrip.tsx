import Link from "next/link";

export default function CTAStrip() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-secondary)",
        paddingBlock: "3rem",
      }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between" style={{ gap: "1.5rem" }}>
          <div>
            <h2
              className="uppercase"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "var(--text-2xl)",
                fontWeight: 700,
                color: "var(--color-white)",
                marginBottom: "0.5rem",
              }}
            >
              Ready to place an order?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.80)",
                fontSize: "var(--text-base)",
              }}
            >
              Get a custom quote for your specific material requirements today.
            </p>
          </div>
          <Link
            href={'/contact-us'}
            className="btn whitespace-nowrap"
            style={{
              backgroundColor: "var(--color-white)",
              color: "var(--color-secondary)",
              borderColor: "var(--color-white)",
              padding: "0.75rem 2rem",
            }}
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
