"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const route = usePathname();

  const isActive = (path: string) => {

    return route === path
  }

  return (
    <header className="navbar w-full">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline p-4">
            <div className="shrink-0">
              <Image src={'/logo.png'} alt="DLC logo" height={50} width={50}/>
            </div>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-white)",
                fontSize: "var(--text-2xl)",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                lineHeight: 1.25,
              }}
            >
             DGI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {["Home", "About Us", "Products","Certificates", "Contact Us"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className={`nav-link ${isActive(item === "Home" ? "/" : '/' + item.toLowerCase().replace(" ", "-")) ? 'active' : ''}`}
              >
                {item}
              </Link>
            ))}
            <Link href={'/contact-us'} className="btn btn-primary ml-4" style={{ padding: "0.6rem 1.5rem" }}>
              Request Quote
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden  w-full ${menuOpen ? 'max-h-[1000px] border-t' : 'max-h-0'} overflow-hidden duration-200`}
          style={{ borderColor: "rgba(255,255,255,0.15)" }}
        >
          <nav className="w-full flex flex-col">
            {["Home", "About Us", "Products","Certificates", "Contact Us"].map((item, i) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className={`nav-link py-2 px-3 mobile-nav-link ${isActive(item === "Home" ? "/" : '/' + item.toLowerCase().replace(" ", "-")) ? 'active' : ''} ${i === 0 ? 'mt-4' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="pt-3 mb-5">
              <Link href={'/contact-us'} className="btn btn-primary w-full">Request Quote</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
