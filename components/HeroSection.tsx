"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const CYCLING_WORDS = ["Raw Materials", "Metals", "Chemicals", "Ferro Alloys", "Minerals"];

export default function HeroSection() {
    const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = CYCLING_WORDS[wordIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentWord) {     
      // Fully typed — pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } 
    else if (isDeleting && displayText === "") {
      // Fully deleted — move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
    } 
    else {
      // Typing or deleting
      const speed = isDeleting ? 60 : 100;
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentWord.slice(0, prev.length - 1)
            : currentWord.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <section className="relative flex items-center" style={{ height: "600px" }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Industrial port with cranes and containers at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: "rgba(28, 58, 107, 0.5)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container w-full text-center">
        <h1
          className="text-white uppercase leading-tight mb-6 mx-auto"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.75rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "var(--tracking-tight)",
            maxWidth: "900px",
          }}
        >
          Your Trusted Supplier of Industrial{" "}
          <span
            style={{
              color: "#7DD3FC",
              borderRight: "3px solid #7DD3FC",
              paddingRight: "4px",
              animation: "blink 0.7s step-end infinite",
              whiteSpace: "nowrap",
            }}
          >
            {displayText}
          </span>
          <style>{`
            @keyframes blink {
              0%, 100% { border-color: #7DD3FC; }
              50% { border-color: transparent; }
            }
          `}</style>
        </h1>
        <p
          className="mx-auto mb-10"
          style={{
            color: "rgba(255,255,255,0.88)",
            fontSize: "clamp(var(--text-base), 2vw, var(--text-xl))",
            fontWeight: 300,
            maxWidth: "700px",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          Zircon Sands · Minerals · Metals · Chemicals · Ferro Alloys · Scrap -
          Sourced Globally, Delivered Reliably
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href={'/contact-us'}
            className="btn btn-primary"
            style={{
              height: "56px",
              padding: "0 2rem",
              fontSize: "var(--text-base)",
              transition: "transform var(--transition-base), background-color var(--transition-base)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Request a Quote
          </Link>
          <Link
            href="/products"
            className="btn btn-outline"
            style={{
              height: "56px",
              padding: "0 2rem",
              fontSize: "var(--text-base)",
            }}
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}
