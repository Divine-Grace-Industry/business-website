import Link from "next/link";
import { ProductData } from "@/lib/sanity-client";

interface OtherCategoriesProps {
  otherCategories: ProductData[];
}

export default function OtherCategories({ otherCategories }: OtherCategoriesProps) {


  return (
    <section
      className="section text-center"
      style={{ backgroundColor: "var(--color-surface-muted)" }}
    >
      <div className="container">
        <h2
          className="section-heading"
          style={{ marginBottom: "2.5rem" }}
        >
          Explore Other Categories
        </h2>
        <div className="flex flex-wrap justify-center" style={{ gap: "1rem" }}>
          {otherCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="btn btn-outline-navy uppercase"
              style={{
                padding: "1rem 2.5rem",
                letterSpacing: "var(--tracking-widest)",
                fontSize: "var(--text-sm)",
              }}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
