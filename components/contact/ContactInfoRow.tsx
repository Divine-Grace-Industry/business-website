import Image from "next/image";

const contactDetails = [
  { label: "Company", value: "Divine Grace Industries LLC" },
  {
    label: "Address",
    value: "Shop No /GF 22, Delux Complex, Opp : New Marketing Yard, NH -27, Nr, Chokdi, Gundala, Gondal, Gujarat 360311",
  },
  { label: "Phone", value: "+91 9537752502", link:'tel:+919537752502' },
  { label: "Email", value: " divinegrace.ind@gmail.com", link:'mailto:divinegrace.ind@gmail.com' },
];

export default function ContactInfoRow() {
  return (
    <section
      className="py-12"
      style={{
        backgroundColor: "var(--color-white)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* Info Table */}
          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-start py-4"
                style={{ borderBottom: "1px solid var(--color-border)" }}
              >
                <span
                  className="uppercase"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 700,
                    color: "var(--color-primary)",
                    flexShrink: 0,
                    marginRight: "1rem",
                  }}
                >
                  {item.label}
                </span>
                {
                  item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      className="text-right"
                      style={{
                        color: "var(--color-gray-700)",
                        fontSize: "var(--text-sm)",
                        maxWidth: "280px",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      className="text-right"
                      style={{
                        color: "var(--color-gray-700)",
                        fontSize: "var(--text-sm)",
                        maxWidth: "280px",
                      }}
                    >
                      {item.value}
                    </span>
                  )
                }
              </div>
            ))}
          </div>

          {/* Image */}
          <div
            style={{
              border: "1px solid var(--color-primary)",
              padding: "8px",
            }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{ height: "400px" }}
            >
              <Image
                src="/contact.png"
                alt="Two professionals in suits shaking hands in an office"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
