import Image from "next/image";
import Link from "next/link";

interface ProductDetailBannerProps {
  productName: string;
  categoryTitle: string;
  categorySlug: string;
  backgroundImage: string;
}

export default function ProductDetailBanner({
  productName,
  categoryTitle,
  categorySlug,
  backgroundImage,
}: ProductDetailBannerProps) {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{ height: "280px", backgroundColor: "var(--color-primary)" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Industrial mining facility"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.5 }}
        />
      </div>

      <div className="relative z-10 container w-full">
        <h2
          className="text-white uppercase mb-4"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.75rem, 5vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "var(--tracking-tight)",
          }}
        >
          {productName}
        </h2>

        {/* 4-level breadcrumb */}
        <nav
          className="flex items-center flex-wrap gap-1"
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: 500,
            letterSpacing: "var(--tracking-widest)",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          {[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: categoryTitle, href: `/products/${categorySlug}` },
          ].map((crumb) => (
            <span key={crumb.href} className="flex items-center gap-1">
              <Link
                href={crumb.href}
                className="hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {crumb.label}
              </Link>
              <span style={{ color: "var(--color-accent)", margin: "0 4px" }}>/</span>
            </span>
          ))}
          <span className="text-white">{productName}</span>
        </nav>
      </div>
    </section>
  );
}
