import { getImageUrl, ProductData } from "@/lib/sanity-client";
import Image from "next/image";
import Link from "next/link";



export default function ProductsGrid({data}:{data:ProductData[]}) {
  return (
    <main className="section">
      <div className="container">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "2rem" }}
        >
          {data.map((product) => (
            <Link
              href={`/products/${product.slug}`}
              key={product.slug}
              className="group flex flex-col bg-white border border-gray-200 hover:border-navy-500 transition-colors duration-300"
              style={{ borderRadius: 0 }}
            >
              {/* Image — grayscale by default, color on hover */}
              <div className="relative overflow-hidden" style={{ height: "256px" }}>
                <Image
                  src={getImageUrl(product.image)}
                  alt={product.description}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Card body with top accent border */}
              <div
                className="flex flex-col flex-1 p-8"
                style={{ borderTop: "4px solid var(--color-secondary)" }}
              >
                <h3
                  className="uppercase mb-4"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--text-2xl)",
                    fontWeight: 700,
                    color: "var(--color-primary)",
                    letterSpacing: "var(--tracking-tight)",
                  }}
                >
                  {product.name}
                </h3>
                <p
                  className="flex-1 mb-6"
                  style={{
                    color: "var(--color-gray-600)",
                    fontSize: "var(--text-base)",
                    lineHeight: "var(--leading-relaxed)",
                    textAlign: 'justify',textAlignLast: 'left'
                  }}
                >
                  {product.description}
                </p>

                <button
                 
                  className="inline-flex items-center gap-2 font-bold uppercase hover:underline"
                  style={{
                    color: "var(--color-secondary)",
                    fontSize: "var(--text-xs)",
                    letterSpacing: "var(--tracking-widest)",
                  }}
                >
                  View Specifications
                  <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                    arrow_forward
                  </span>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
