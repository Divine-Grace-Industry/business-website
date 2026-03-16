const facts = [
  { number: "2020", label: "Year Established" },
  { number: "6+", label: "Sourcing Countries" },
  { number: "1500+", label: "Happy Customers" },
  { number: "India to Far East", label: "Supply Reach" },
];

export default function KeyFactsBar() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-primary)",
        paddingBlock: "3rem",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: "0" }}>
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className="text-center"
              style={{
                padding: "1rem 1.5rem",
                borderRight:
                  i < facts.length - 1
                    ? "1px solid rgba(255,255,255,0.15)"
                    : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize:
                    fact.number.length > 5
                      ? "var(--text-2xl)"
                      : "var(--text-4xl)",
                  fontWeight: 700,
                  color: "var(--color-white)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                {fact.number}
              </p>
              <p
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--color-navy-200)",
                  letterSpacing: "var(--tracking-widest)",
                  textTransform: "uppercase",
                }}
              >
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
