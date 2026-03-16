import Link from "next/link";

export default function ContactStrip({
  message = "Have a sourcing requirement? Get in touch with our team.",
}: {
  message?: string;
}) {
  return (
    <section
      style={{
        backgroundColor: "var(--color-primary)",
        paddingBlock: "2.5rem",
      }}
    >
      <div className="container">
        <div
          className="flex flex-col md:flex-row items-center justify-between"
          style={{ gap: "1.5rem" }}
        >
          <p
            style={{
              color: "var(--color-white)",
              fontSize: "var(--text-xl)",
              fontWeight: 600,
            }}
          >
            {message}
          </p>
          <Link
            href={'/contact-us'}
            className="btn btn-outline whitespace-nowrap"
            style={{ flexShrink: 0 }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
