import Image from "next/image";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  backgroundImage?: string;
  backgroundAlt?: string;
}

export default function PageBanner({
  title,
  breadcrumbs,
  backgroundImage = "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=1600&q=80",
  backgroundAlt = "Industrial background",
}: PageBannerProps) {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ height: "280px", backgroundColor: "var(--color-primary)" }}
    >
      {/* Background image with low opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.18 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1
          className="uppercase text-white"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 6vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "var(--tracking-widest)",
            marginBottom: "1rem",
          }}
        >
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav
          className="flex items-center justify-center gap-2"
          style={{ fontSize: "var(--text-sm)", color: "rgba(255,255,255,0.70)" }}
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <span style={{ color: "rgba(255,255,255,0.40)" }}>›</span>}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  style={{
                    color: "var(--color-accent)",
                    transition: "color var(--transition-fast)",
                  }}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ color: "var(--color-white)" }}>{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
