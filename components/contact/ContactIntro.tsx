export default function ContactIntro() {
  return (
    <section className="section" style={{ backgroundColor: "var(--color-white)" }}>
      <div className="container text-center" style={{ maxWidth: "800px" }}>
        <h2
          className="section-heading"
          style={{ marginBottom: "1.5rem" }}
        >
          Better Yet, See Us In Person
        </h2>
        <p
          className="mx-auto"
          style={{
            color: "var(--color-gray-600)",
            fontSize: "var(--text-lg)",
            lineHeight: "var(--leading-relaxed)",
            marginBottom: "2.5rem",
            maxWidth: "700px",
          }}
        >
          We love our customers, so feel free to visit during normal business
          hours. Our dedicated team is ready to provide exceptional service and
          discuss your industrial raw material needs in person.
        </p>

        <a
          href="https://wa.me/919537752502"
          target="_blank"
          rel="noopener noreferrer"
          className="btn inline-flex items-center gap-3 hover:brightness-110 transition-all"
          style={{
            backgroundColor: "#25D366",
            color: "var(--color-white)",
            borderColor: "#25D366",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
            chat
          </span>
          Message Us on WhatsApp
        </a>
      </div>
    </section>
  );
}
