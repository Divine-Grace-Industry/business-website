const visionItems = [
  {
    title: "Quality & Service",
    description:
      "To continuously evolve our quality control measures and customer service standards, ensuring every client receives personalized and expert attention.",
  },
  {
    title: "Integrity & Reliability",
    description:
      "To build long-term relationships based on absolute integrity, operational transparency, and unwavering reliability in our supply chains.",
  },
  {
    title: "High Standards",
    description:
      "To set new benchmarks in the industrial raw materials sector by adhering to the highest international ethical and safety standards.",
  },
];

export default function VisionStatement() {
  return (
    <section className="section" style={{ backgroundColor: "var(--color-surface-muted)" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <h2
          className="text-center uppercase"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "var(--text-3xl)",
            fontWeight: 700,
            color: "var(--color-primary)",
            letterSpacing: "var(--tracking-widest)",
            textDecoration: "underline",
            textDecorationColor: "var(--color-secondary)",
            textUnderlineOffset: "8px",
            marginBottom: "3rem",
          }}
        >
          Where We Are Headed
        </h2>

        <div>
          {visionItems.map((item, i) => (
            <div key={item.title}>
              <div
                className="py-7 px-4 -mx-4 rounded hover:bg-white transition-colors duration-200"
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "var(--color-gray-600)", lineHeight: "var(--leading-relaxed)", textAlign: 'justify',textAlignLast: 'left'}}>
                  {item.description}
                </p>
              </div>
              {i < visionItems.length - 1 && (
                <hr style={{ border: "none", borderTop: "1px solid var(--color-border)", margin: 0 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
