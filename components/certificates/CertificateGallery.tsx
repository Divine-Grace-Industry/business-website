"use client";
import {Certificates} from '@/lib/sanity'
import { getImageUrl } from '@/lib/sanity-image';
import Image from "next/image";
import { useState } from "react";



export default function CertificateGallery({ certificates }: { certificates: Certificates[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + certificates.length) % certificates.length : null
    );
  const goNext = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % certificates.length : null
    );

  const activeCert = lightboxIndex !== null ? certificates[lightboxIndex] : null;

  return (
    <>
      {/* ── Section label ── */}
      <section className="section" style={{ backgroundColor: "var(--color-white)" }}>
        <div className="container">
          {/* Header */}
          <div className="flex flex-col items-start gap-2 mb-12">
            <span className="section-label">Credentials & Compliance</span>
            <h2 className="section-heading uppercase" style={{ marginBottom: 0 }}>
              Our Certifications
            </h2>
            <div
              style={{
                width: "5rem",
                height: "3px",
                backgroundColor: "var(--color-accent)",
                marginTop: "0.5rem",
              }}
            />
          </div>

          {/* Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ gap: "1.5rem" }}
          >
            {certificates.map((cert, index) => (
              <button
                key={cert.name}
                onClick={() => openLightbox(index)}
                className="group text-left w-full focus:outline-none"
                aria-label={`View ${cert.name} certificate`}
              >
                <div
                  className="overflow-hidden"
                  style={{
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    boxShadow: "var(--shadow-card)",
                    transition: "box-shadow var(--transition-base), transform var(--transition-base), border-color var(--transition-base)",
                  }}
                >
                  {/* Certificate image — A4 portrait ratio */}
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "3 / 4", backgroundColor: "var(--color-gray-50)" }}
                  >
                    <Image
                      src={getImageUrl(cert.image)}
                      alt={cert.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Hover overlay with zoom icon */}
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ backgroundColor: "rgba(28, 58, 107, 0.55)" }}
                    >
                      <div
                        className="flex items-center justify-center"
                        style={{
                          width: "52px",
                          height: "52px",
                          backgroundColor: "var(--color-white)",
                          borderRadius: "50%",
                        }}
                      >
                        <span
                          className="material-symbols-outlined"
                          style={{ color: "var(--color-primary)", fontSize: "26px" }}
                        >
                          zoom_in
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Label strip */}
                  <div
                    style={{
                      padding: "0.875rem 1rem",
                      borderTop: "3px solid var(--color-secondary)",
                      backgroundColor: "var(--color-white)",
                    }}
                  >
                    <p
                      className="uppercase truncate"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "var(--text-sm)",
                        fontWeight: 700,
                        color: "var(--color-primary)",
                        letterSpacing: "var(--tracking-tight)",
                      }}
                    >
                      {cert.name}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {activeCert && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ backgroundColor: "rgba(10, 18, 36, 0.92)", zIndex: 50 }}
          onClick={closeLightbox}
        >
          {/* Panel — stop propagation so clicking inside doesn't close */}
          <div
            className="relative flex flex-col"
            style={{
              width: "min(92vw, 560px)",
              maxHeight: "92vh",
              backgroundColor: "var(--color-white)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{
                borderBottom: "1px solid var(--color-border)",
                backgroundColor: "var(--color-primary)",
              }}
            >
              <div>
                <p
                  className="uppercase"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "var(--text-base)",
                    fontWeight: 700,
                    color: "var(--color-white)",
                    letterSpacing: "var(--tracking-tight)",
                  }}
                >
                  {activeCert.name}
                </p>
              </div>
              <button
                onClick={closeLightbox}
                className="flex items-center justify-center hover:bg-white/20 transition-colors rounded-full"
                style={{ width: "36px", height: "36px" }}
                aria-label="Close"
              >
                <span className="material-symbols-outlined text-white" style={{ fontSize: "22px" }}>
                  close
                </span>
              </button>
            </div>

            {/* Image */}
            <div
              className="relative w-full flex-1 overflow-hidden"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src={getImageUrl(activeCert.image)}
                alt={activeCert.name}
                fill
                sizes="560px"
                className="object-contain"
                priority
              />
            </div>

            {/* Nav footer */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{
                borderTop: "1px solid var(--color-border)",
                backgroundColor: "var(--color-gray-50)",
              }}
            >
              <button
                onClick={goPrev}
                className="btn btn-outline-navy flex items-center gap-1"
                style={{ padding: "0.5rem 1.25rem", fontSize: "var(--text-xs)" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                  arrow_back
                </span>
                Prev
              </button>

              <span
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--color-text-muted)",
                  fontWeight: 600,
                }}
              >
                {lightboxIndex! + 1} / {certificates.length}
              </span>

              <button
                onClick={goNext}
                className="btn btn-outline-navy flex items-center gap-1"
                style={{ padding: "0.5rem 1.25rem", fontSize: "var(--text-xs)" }}
              >
                Next
                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
