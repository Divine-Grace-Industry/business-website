const reasons = [
  {
    title: "Competitive Pricing",
    description:
      "Through direct sourcing and optimized logistics, we offer market-leading prices without compromising on material quality.",
  },
  {
    title: "Expert Sourcing",
    description:
      "Our team possesses deep technical knowledge of materials sourced from diverse geographical locations including USA and Australia.",
  },
  {
    title: "Global Supply Chain",
    description:
      "Robust logistics network ensuring timely deliveries across India, Southeast Asia, and the Far East regions.",
  },
  {
    title: "Fast Documentation",
    description:
      "Streamlined import-export documentation processes that minimize delays and ensure compliance with international regulations.",
  },
];

export default function WhyChooseUsAbout() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-heading" style={{ marginBottom: "3rem" }}>
          Why Choose Us
        </h2>

        <div>
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="flex items-start gap-6 px-4 py-8 -mx-4 hover:bg-gray-50 rounded transition-colors duration-200"
              style={{
                borderBottom:
                  i < reasons.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <div
                className="flex-shrink-0 mt-1"
                style={{
                  width: "24px",
                  height: "24px",
                  backgroundColor: "var(--color-primary)",
                  borderRadius: "var(--radius-sm)",
                }}
              />
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--text-lg)",
                    fontWeight: 700,
                    color: "var(--color-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {reason.title}
                </h4>
                <p style={{ color: "var(--color-gray-600)",textAlign: 'justify',textAlignLast: 'left' }}>
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
