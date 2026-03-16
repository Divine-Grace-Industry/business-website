export default function MapSection() {
  return (
    <section
      className="section"
      style={{ backgroundColor: "var(--color-surface-muted)" }}
    >
      <div className="container text-center">
        {/* Map */}
        <div
          className="relative w-full overflow-hidden mb-8"
          style={{ height: "420px" }}
        >
          <iframe
            title="Divine Grace Industries Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.192183540169!2d70.78335184225506!3d21.965585950904995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958395923177b0f%3A0xda10fcd723484f4d!2sDIVINE%20GRACE%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1773631193000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            // style={{ border: 0, filter: "grayscale(1) opacity(0.7)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Location pin overlay */}
          {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              style={{
                backgroundColor: "var(--color-white)",
                padding: "1rem",
                boxShadow: "0 8px 32px rgba(28,58,107,0.25)",
                border: "1px solid var(--color-primary)",
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{ color: "var(--color-primary)", fontSize: "36px", display: "block" }}
              >
                location_on
              </span>
            </div>
          </div> */}
        </div>

        <a
          href="https://maps.app.goo.gl/taiEVvRGvubtdgmw8"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary inline-flex items-center gap-2"
          style={{ letterSpacing: "var(--tracking-widest)" }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
            directions
          </span>
          Get Directions
        </a>
      </div>
    </section>
  );
}
