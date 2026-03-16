const regions = [
  "India",
  "Australia",
  "USA",
  "Europe",
  "Middle East",
  "Asia",
  "Far East",
  "Latin America"
];

export default function SourcingRegions() {
  return (
    <section
      className="section"
      style={{ backgroundColor: "var(--color-surface-muted)" }}
    >
      <div className="container">
        <p
          className="text-center uppercase"
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: 700,
            letterSpacing: "0.3em",
            color: "var(--color-primary)",
            marginBottom: "3rem",
          }}
        >
          Where We Source From
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6" style={{ gap: "1rem" }}>
          {regions.map((region) => (
            <div
              key={region}
              className="text-center hover:-translate-y-0.5 transition-transform duration-200"
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid rgba(28, 58, 107, 0.18)",
                padding: "1.5rem 1rem",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-card)",
              }}

            >
              <span
                className="material-symbols-outlined block"
                style={{
                  color: "var(--color-secondary)",
                  marginBottom: "0.75rem",
                  fontSize: "24px",
                }}
              >
                location_on
              </span>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  color: "var(--color-primary)",
                  fontSize: "var(--text-sm)",
                }}
              >
                {region}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
