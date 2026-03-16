import Image from "next/image";
import Link from "next/link";
import { getImageUrl, ProductData } from "@/lib/sanity-client";

interface CategoryProductGridProps {
  categorySlug: string
  items: ProductData[];
}

export default function CategoryProductGrid({ items, categorySlug }: CategoryProductGridProps) {
  return (
    <section className="pb-24" style={{ backgroundColor: "var(--color-white)" }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "2rem" }}>
          {items.map((item) => (
            <Link
              href={`/products/${categorySlug}/${item.slug}`}
              key={item.name}
              className="group flex flex-col"
              style={{ border: "1px solid var(--color-primary)" }}
            >
              {/* Square image */}
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "1 / 1",
                  backgroundColor: "var(--color-gray-50)",
                }}
              >
                <Image
                  src={getImageUrl(item.image)}
                  alt={item.description}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="uppercase mb-3"
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
                  className="btn btn-primary w-full"
                  style={{
                    letterSpacing: "var(--tracking-widest)",
                    fontSize: "var(--text-xs)",
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
