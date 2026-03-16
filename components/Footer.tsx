import { getCategories } from "@/lib/sanity-client";
import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";

const quickLinks = ["Home", "About Us", "Products","Certificates", "Contact-Us"];

export default async function Footer() {
  const categories = await getCategories();
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12" style={{ marginBottom: "3rem" }}>

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2" style={{ marginBottom: "1.5rem" }}>
              <div className="shrink-0">
                <Image src={'/logo.png'} alt="DLC logo" height={30} width={30} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-white)",
                  fontSize: "var(--text-xl)",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  lineHeight: 1.25,
                }}
              >
                DGI
              </span>
            </div>
            <p style={{ color: "var(--color-navy-300)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", marginBottom: "1.5rem" }}>
              Premier supplier of industrial raw materials connecting global resources to your factory floor.
            </p>

            {/* Social Icons — pure Tailwind hover */}
            <div className="flex gap-3">
              {[
                // {
                //   label: "Facebook",
                //   svg: (
                //     <path fillRule="evenodd" clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                //   ),
                // },
                // {
                //   label: "Instagram",
                //   svg: (
                //     <path fillRule="evenodd" clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.527c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                //   ),
                // },
                {
                  label: "LinkedIn",
                  svg: (
                    <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  ),
                  url:'https://www.linkedin.com/in/divine-grace-industries-llc-66a7181a3/?originalSubdomain=in'
                },
              ].map(({ label, svg,url }) => (
                <a
                  key={label}
                  href={url || '#'}
                  aria-label={label}
                  className="flex items-center justify-center w-8 h-8 rounded hover:bg-secondary transition-colors duration-150"
                  style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "var(--color-white)", borderRadius: "var(--radius-md)" }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{svg}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="uppercase" style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "var(--tracking-widest)", color: "rgba(255,255,255,0.9)", marginBottom: "1.5rem" }}>
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(" ", "-")}`} className="footer-link hover:underline text-sm">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="uppercase" style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "var(--tracking-widest)", color: "rgba(255,255,255,0.9)", marginBottom: "1.5rem" }}>
              Products
            </h3>
            <ul className="flex flex-col gap-3">
              {categories.map((c) => (
                <li key={c.name}>
                  <Link href={`/products/${c.slug}`} className="footer-link hover:underline text-sm">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="uppercase" style={{ fontSize: "var(--text-xs)", fontWeight: 700, letterSpacing: "var(--tracking-widest)", color: "rgba(255,255,255,0.9)", marginBottom: "1.5rem" }}>
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined mt-0.5" style={{ color: "var(--color-secondary)", fontSize: "18px" }}>location_on</span>
                <span style={{ color: "var(--color-navy-300)", fontSize: "var(--text-sm)" }}>
                  Shop No /GF 22, Delux Complex, Opp : New Marketing Yard, NH -27, Nr, Chokdi, Gundala, Gondal, Gujarat 360311
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined" style={{ color: "var(--color-secondary)", fontSize: "18px" }}>phone</span>
                <a href="tel:+919537752502" target="_blank" style={{ color: "var(--color-navy-300)", fontSize: "var(--text-sm)" }}>+91 9537752502</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined" style={{ color: "var(--color-secondary)", fontSize: "18px" }}>mail</span>
                <a href="mailto:divinegrace.ind@gmail.com" target="_blank" style={{ color: "var(--color-navy-300)", fontSize: "var(--text-sm)" }}>divinegrace.ind@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-50">© 2026 Divine Grace Industries LLC. All rights reserved.</p>
          <div className="flex gap-6">
            {/* <Link href="#" className="footer-link hover:text-white">Privacy Policy</Link>
            <Link href="#" className="footer-link hover:text-white">Terms of Service</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
