interface CategoryIntroProps {
  title: string;
  intro: string;
}

export default function CategoryIntro({ title, intro }: CategoryIntroProps) {
  return (
    <section className="py-16" style={{ backgroundColor: "var(--color-white)" }}>
      <div className="container">
        <span
          className="block uppercase mb-2"
          style={{
            color: "var(--color-accent)",
            fontWeight: 700,
            letterSpacing: "0.2em",
            fontSize: "var(--text-xs)",
          }}
        >
          Product Category
        </span>
        <h2
          className="section-heading"
          style={{ marginBottom: "1.5rem" }}
        >
          {title} We Supply
        </h2>
        <p
          style={{
            color: "var(--color-gray-600)",
            fontSize: "var(--text-lg)",
            lineHeight: "var(--leading-relaxed)",
            maxWidth: "800px",
            textAlign: 'justify',textAlignLast: 'left'
          }}
        >
          {intro}
        </p>
      </div>
    </section>
  );
}
