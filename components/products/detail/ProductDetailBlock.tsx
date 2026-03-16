import { getImageUrl, ProductData } from "@/lib/sanity-client";
import Image from "next/image";


const whySources = [
  {
    icon: "inventory_2",
    title: "Bulk Supply Available",
    body: "Scaling your production is easy with our steady inventory and large-scale supply capabilities.",
  },
  {
    icon: "public",
    title: "International Sourcing",
    body: "Direct partnerships with global mines ensure consistent quality and competitive pricing structures.",
  },
  {
    icon: "verified",
    title: "Quality Assurance",
    body: "Rigorous laboratory testing for chemical composition and particle size distribution consistency.",
  },
  {
    icon: "local_shipping",
    title: "Fast Logistics",
    body: "Strategic shipping routes and logistics management to ensure on-time delivery to your facility.",
  },
];

export default function ProductDetailBlock({data}:{data:ProductData}) {

  console.log(data.materials);
  
  
  return (
    <>
      {/* ── Main Product Block ── */}
      <section className="py-16" style={{ backgroundColor: "var(--color-white)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Image */}
            <div className="flex flex-col gap-4">
              <div
                style={{
                  border: "1px solid var(--color-primary)",
                  padding: "4px",
                  backgroundColor: "var(--color-white)",
                }}
              >
                <div className="relative w-full" style={{ aspectRatio: "1 / 1" }}>
                  <Image
                    src={getImageUrl(data.image)}
                    alt={data.description}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col">
              <h1
                className="uppercase mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  fontWeight: 700,
                  color: "var(--color-primary)",
                }}
              >
                {data.name}
              </h1>

              {/* Gold accent bar */}
              <div
                style={{
                  width: "6rem",
                  height: "4px",
                  backgroundColor: "var(--color-accent)",
                  marginBottom: "2rem",
                }}
              />

              <div
                className="flex flex-col gap-4 mb-8"
                style={{ color: "var(--color-gray-700)" }}
              >
                
                <div className="flex items-center gap-4 flex-wrap">
                  {
                    data.materials && data.materials.map((d)=>(<span className=" px-3 py-1.5 sm:px-4 sm:py-2 font-semibold capitalize sm:text-xl text-base bg-secondary text-surface" key={d}>{d}</span>))
                  }
                </div>
                <p style={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-relaxed)",textAlign: 'justify',textAlignLast: 'left' }}>
                  {data.description}
                </p>
              
              </div>

              <hr style={{ borderColor: "var(--color-border)", marginBottom: "2rem" }} />

              {/* Quick Contact Panel */}
              <div
                style={{
                  backgroundColor: "var(--color-primary)",
                  padding: "2rem",
                  borderRadius: "var(--radius-sm)",
                  boxShadow: "var(--shadow-card-hover)",
                }}
              >
                <p
                  className="uppercase mb-4"
                  style={{
                    color: "var(--color-accent)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 700,
                    letterSpacing: "var(--tracking-widest)",
                  }}
                >
                  Quick Contact
                </p>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.70)",
                        fontSize: "var(--text-sm)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      Direct Procurement Line:
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "var(--text-3xl)",
                        fontWeight: 700,
                        color: "var(--color-white)",
                      }}
                    >
                      +91-9537752502
                    </p>
                  </div>
                  <a
                    href="/contact-us"
                    className="btn btn-primary whitespace-nowrap"
                    style={{ letterSpacing: "var(--tracking-widest)" }}
                  >
                    Send an Enquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Source From Us ── */}
      <section className="py-20" style={{ backgroundColor: "var(--color-white)" }}>
        <div className="container">
          <h2
            className="section-heading"
            style={{
              borderLeft: "4px solid var(--color-accent)",
              paddingLeft: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            Why Source From Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {whySources.map((item) => (
              <div key={item.title} className="flex items-start gap-5">
                {/* Icon box */}
                <div
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "var(--color-primary)",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  <span
                    className="material-symbols-outlined text-white"
                    style={{ fontSize: "22px" }}
                  >
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h4
                    className="uppercase mb-1"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "var(--text-lg)",
                      fontWeight: 700,
                      color: "var(--color-primary)",
                      letterSpacing: "var(--tracking-tight)",
                      textAlign: 'justify',textAlignLast: 'left'
                    }}
                  >
                    {item.title}
                  </h4>
                  <p style={{ color: "var(--color-gray-600)" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
