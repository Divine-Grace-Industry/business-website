"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "b45a7395-2af8-42a3-a313-44ba3d0e1912");
    formData.append("subject", "New Contact Enquiry — Divine Grace Industries");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section
      className="section"
      style={{ backgroundColor: "var(--color-surface-muted)" }}
    >
      <div className="px-6" style={{ maxWidth: "620px", margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: "var(--color-white)",
            padding: "clamp(2rem, 5vw, 3rem)",
            border: "1px solid var(--color-primary)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h3
            className="text-center uppercase"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-3xl)",
              fontWeight: 800,
              color: "var(--color-primary)",
              letterSpacing: "var(--tracking-tight)",
              marginBottom: "2rem",
            }}
          >
            Drop Us A Message
          </h3>

          {status === "success" ? (
            <div className="text-center py-10" style={{ color: "var(--color-secondary)" }}>
              <span
                className="material-symbols-outlined block mx-auto"
                style={{ fontSize: "48px", marginBottom: "1rem" }}
              >
                check_circle
              </span>
              <p style={{ fontWeight: 700, fontSize: "var(--text-lg)" }}>
                Message sent! We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="form-input border border-blue-500 px-3 py-2"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="form-input border border-blue-500 px-3 py-2"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91-0000000000"
                    className="form-input border border-blue-500 px-3 py-2"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Inquiry about..."
                    className="form-input border border-blue-500 px-3 py-2"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="w-full flex flex-col gap-1">
                <label className="form-label">Your Message</label>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  className="form-input w-full border border-blue-500 px-3 py-2"
                  style={{ resize: "vertical" }}
                />
              </div>

              {status === "error" && (
                <p style={{ color: "red", fontSize: "var(--text-sm)", textAlign: "center" }}>
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-primary w-full"
                style={{ letterSpacing: "var(--tracking-widest)", opacity: status === "sending" ? 0.7 : 1 }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
