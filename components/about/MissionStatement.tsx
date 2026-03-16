export default function MissionStatement() {
  return (
    <section className="section">
      <div
        className="container"
        style={{ maxWidth: "800px" }}
      >
        <div
          className="flex flex-col items-center text-center"
          style={{ gap: "2rem" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-3xl)",
              fontWeight: 700,
              color: "var(--color-primary)",
              fontStyle: "italic",
            }}
          >
            "What Drives Us"
          </h2>

          <div
            className="text-left"
            style={{
              borderLeft: "4px solid var(--color-primary)",
              paddingLeft: "2rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(var(--text-lg), 2.5vw, var(--text-2xl))",
                fontStyle: "italic",
                color: "var(--color-gray-700)",
                lineHeight: "var(--leading-relaxed)",
                textAlign: 'justify',
                textAlignLast: 'left'
              }}
            >
              "Our mission is to be the premier supplier of industrial raw
              materials across India, the Middle East, and the Far East. We
              strive to empower industries by providing consistent, high-quality
              resources through transparent and efficient global trade practices."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
