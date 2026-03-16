import Image from "next/image";

export default function ProductsBanner() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "240px", backgroundColor: "var(--color-primary)" }}
    >
      {/* Background image — grayscale + low opacity like original */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Wide shot of a cargo shipping terminal with containers and cranes"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center grayscale"
          style={{ opacity: 0.35 }}
        />
        {/* Gradient from bottom — matches original */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, var(--color-primary) 0%, transparent 60%)`,
            opacity: 0.7,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2
          className="text-white uppercase"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.25rem, 6vw, 3rem)",
            fontWeight: 900,
            letterSpacing: "0.2em",
          }}
        >
          Our Products
        </h2>
        {/* Accent line */}
        <div
          className="mx-auto mt-4"
          style={{
            height: "4px",
            width: "6rem",
            backgroundColor: "var(--color-secondary)",
          }}
        />
      </div>
    </section>
  );
}
