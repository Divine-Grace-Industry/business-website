import Image from "next/image";
import Link from "next/link";

interface CategoryBannerProps {
  title: string;
  backgroundImage: string;
  backgroundAlt: string;
}

export default function CategoryBanner({
  title,
  backgroundImage,
  backgroundAlt,
}: CategoryBannerProps) {
  return (
    <section
      className="relative flex flex-col justify-center overflow-hidden"
      style={{ height: "280px", backgroundColor: "var(--color-primary)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.5 }}
        />
      </div>

      {/* Left-aligned content */}
      <div className="relative z-10 container w-full">
        <h1
          className="text-white uppercase mb-4"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.25rem, 6vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "var(--tracking-tight)",
          }}
        >
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2"
          style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "rgba(255,255,255,0.80)" }}
        >
          <Link href="/" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.80)" }}>
            Home
          </Link>
          <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>chevron_right</span>
          <Link href="/products" className="hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.80)" }}>
            Products
          </Link>
          <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>chevron_right</span>
          <span style={{ color: "var(--color-accent)" }}>{title}</span>
        </nav>
      </div>
    </section>
  );
}
