import Image from "next/image";
import Link from "next/link";
import { getImageUrl, ProductData } from "@/lib/sanity-client";

interface RelatedProductsProps {
  items: ProductData[];       // already filtered to 3 items, excluding current
  categorySlug: string;
}

export default function RelatedProducts({ items, categorySlug }: RelatedProductsProps) {
  if (items.length === 0) return null;

  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--color-surface-muted)" }}
    >
      <div className="container">
        <h2
          className="section-heading"
          style={{ marginBottom: "3rem" }}
        >
          Other Products in This Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link
              href={`/products/${categorySlug}/${item.slug}`}
              key={item.name}
              className="group flex flex-col bg-white"
              style={{ border: "1px solid var(--color-border)" }}
            >
              {/* Square image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "1 / 1" }}>
                <Image
                  src={getImageUrl(item.image)}
                  alt={item.description}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-primary)",
                  }}
                >
                  {item.name}
                </h3>
                <p
                  className="flex-1 mb-6"
                  style={{
                    color: "var(--color-gray-600)",
                    fontSize: "var(--text-sm)",
                    lineHeight: "var(--leading-relaxed)",
                    textAlign: 'justify',textAlignLast: 'left'
                  }}
                >
                  {item.description}
                </p>
                <button
                  
                  className="btn btn-outline-navy w-full"
                  style={{
                    fontSize: "var(--text-xs)",
                    letterSpacing: "var(--tracking-widest)",
                  }}
                >
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
