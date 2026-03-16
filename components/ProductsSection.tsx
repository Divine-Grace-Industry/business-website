import {  getImageUrl, ProductData } from "@/lib/sanity-client";
import Image from "next/image";
import Link from "next/link";

export default async function ProductsSection({data}:{data:ProductData[]}) {

  console.log('building home:',data);
  
    
  return (
    <section
      className="section"
      style={{ backgroundColor: "var(--color-surface-muted)" }}
    >
      <div className="container">
        {/* Heading */}
        <div
          className="text-center"
          style={{ marginBottom: "4rem" }}
        >
          <h2
            className="section-heading uppercase"
            style={{ marginBottom: "1rem" }}
          >
            Our Products
          </h2>
          <p
            className="mx-auto"
            style={{
              color: "var(--color-text-muted)",
              maxWidth: "600px",
            }}
          >
            Premium grade industrial raw materials sourced from the finest mines
            and producers globally.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "2rem" }}>
          {data.map((product) => (
            <Link  href={`/products/${product.slug}`} key={product.name} className="card group flex flex-col">
              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{ height: "224px" }}
              >
                <Image
                  src={getImageUrl(product.image)}
                  alt={product.description}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-colors duration-300 group-hover:opacity-0"
                  style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
                />
              </div>

              {/* Body */}
              <div
                className="flex flex-col flex-1"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  className="uppercase"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--text-xl)",
                    fontWeight: 700,
                    color: "var(--color-primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {product.name}
                </h3>
                <p
                  className="flex-1"
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "var(--text-sm)",
                    marginBottom: "1rem",
                    textAlign: 'justify',
                    textAlignLast: 'left'
                  }}
                >
                  {product.description}
                </p>
                <button
                  className="inline-flex items-center gap-1 font-bold uppercase"
                  style={{
                    color: "var(--color-secondary)",
                    fontSize: "var(--text-sm)",
                    letterSpacing: "var(--tracking-wide)",
                    transition: "gap var(--transition-fast)",
                  }}
                >
                  View Specs
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "18px" }}
                  >
                    arrow_right_alt
                  </span>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
