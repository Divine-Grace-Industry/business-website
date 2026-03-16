const features = [
  {
    icon: "payments",
    title: "Competitive Pricing",
    description:
      "Direct sourcing from mines and manufacturers allows us to offer the best market rates.",
  },
  {
    icon: "verified_user",
    title: "Expert Sourcing",
    description:
      "Our team of experts verifies quality at the source to ensure premium grade materials.",
  },
  {
    icon: "public",
    title: "Global Supply Chain",
    description:
      "Robust network across 6+ countries ensures steady supply regardless of local disruptions.",
  },
  {
    icon: "local_shipping",
    title: "Efficient Logistics",
    description:
      "End-to-end shipping solutions including customs clearance and door-to-door delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="section"
      style={{
        backgroundColor: "var(--color-gray-50)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container">
        <div
          className="grid grid-cols-1 lg:grid-cols-4"
          style={{ gap: "2rem" }}
        >
          {/* Heading Col */}
          <div className="lg:col-span-1">
            <h2
              className="section-heading uppercase"
              style={{
                lineHeight: "var(--leading-tight)",
                marginBottom: "1rem",
              }}
            >
              Why Choose
              <br />
              Divine Grace?
            </h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              Our commitment to excellence makes us the preferred partner for
              industries worldwide.
            </p>
          </div>

          {/* Features Grid */}
          <div
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "1.5rem" }}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start rounded hover:bg-white transition-colors duration-200"
                style={{ gap: "1rem", padding: "1rem" }}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(46, 109, 164, 0.10)",
                    color: "var(--color-secondary)",
                  }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "22px" }}
                  >
                    {feature.icon}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "var(--text-lg)",
                      fontWeight: 700,
                      color: "var(--color-primary)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "var(--text-sm)",
                      textAlign: 'justify',
                      textAlignLast: 'left'
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
