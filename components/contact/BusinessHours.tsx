const hours = [
  { day: "Monday - Tuesday", time: "09:00 AM – 07:00 PM", closed: false },
  { day: "Wednesday", time: "Closed", closed: true },
  { day: "Thursday - Sunday", time: "09:00 AM – 07:00 PM", closed: false },
];

export default function BusinessHours() {
  return (
    <section
      className="section"
      style={{
        backgroundColor: "var(--color-white)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Hours */}
          <div className="flex flex-col gap-6">
            <h3
              className="uppercase"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "var(--text-2xl)",
                fontWeight: 800,
                color: "var(--color-primary)",
                borderLeft: "4px solid var(--color-accent)",
                paddingLeft: "1rem",
              }}
            >
              Business Hours
            </h3>
            <ul className="flex flex-col gap-0">
              {hours.map((item) => (
                <li
                  key={item.day}
                  className="flex justify-between items-center py-3"
                  style={{ borderBottom: "1px solid var(--color-gray-50)" }}
                >
                  <span style={{ color: "var(--color-gray-600)", fontWeight: 500 }}>
                    {item.day}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      color: item.closed ? "#dc2626" : "var(--color-primary)",
                      textTransform: item.closed ? "uppercase" : "none",
                      fontSize: item.closed ? "var(--text-sm)" : "inherit",
                    }}
                  >
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Urgent Enquiry */}
          <div
            className="flex flex-col justify-center items-start"
            style={{
              backgroundColor: "var(--color-primary)",
              padding: "2.5rem",
              color: "var(--color-white)",
            }}
          >
            <h3
              className="uppercase mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "var(--text-2xl)",
                fontWeight: 700,
              }}
            >
              Urgent Enquiries?
            </h3>
            <p
              className="mb-8"
              style={{
                color: "rgba(255,255,255,0.80)",
                lineHeight: "var(--leading-relaxed)",
              }}
            >
              Our sales team is available for urgent raw material requirements
              24/7 via our emergency hotline.
            </p>
            <a
              href="tel:+919537752502"
              className="btn btn-outline"
              style={{ letterSpacing: "var(--tracking-wide)" }}
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
