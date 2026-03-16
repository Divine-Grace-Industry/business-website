export default function EnquiryStrip() {
  return (
    <section
      style={{ backgroundColor: "var(--color-primary)", paddingBlock: "3rem" }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h3
            className="italic text-center md:text-left"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-2xl)",
              fontWeight: 700,
              color: "var(--color-white)",
              textTransform: "uppercase",
            }}
          >
            Looking for a specific product or bulk pricing?
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919537752502"
              className="btn inline-flex items-center gap-2"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-white)",
                borderColor: "var(--color-accent)",
                letterSpacing: "var(--tracking-widest)",
                fontSize: "var(--text-sm)",
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>call</span>
              Call Us
            </a>
            <a
              href="/contact"
              className="btn btn-primary inline-flex items-center gap-2"
              style={{
                letterSpacing: "var(--tracking-widest)",
                fontSize: "var(--text-sm)",
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>mail</span>
              Send Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
