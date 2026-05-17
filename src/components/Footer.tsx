import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#0a0a0f] text-white relative overflow-hidden">
        {/* Subtle gradient glow top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 pt-20 pb-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand column */}
            <div className="md:col-span-1">
              <Link href="/">
                <Image
                  src="/logo/Rydeex Logo.png"
                  alt="RYDEEX"
                  width={150}
                  height={40}
                  className="h-10 mb-6 brightness-0 invert opacity-90"
                  style={{ width: "auto" }}
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Leading the revolution in urban mobility. Designed for performance, engineered for the future.
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                {[
                  { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                  { label: "Instagram", paths: ["M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", "M17.5 6.5h.01"], rect: true },
                  { label: "Twitter", path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" }
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-accent-red hover:border-accent-red hover:text-white transition-all duration-300"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {s.rect && <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />}
                      {s.path && <path d={s.path} />}
                      {s.paths && s.paths.map((p, i) => <path key={i} d={p} />)}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="font-montserrat font-bold text-white text-sm tracking-wider uppercase mb-6">Explore</h4>
              <ul className="space-y-3">
                {[
                  { label: "Our Models", href: "#models" },
                  { label: "Why Choose EV", href: "#features" },
                  { label: "Book a Test Ride", href: "#test-ride" },
                  { label: "Showroom Location", href: "#location" }
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-gray-400 text-sm font-medium hover:text-white transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-montserrat font-bold text-white text-sm tracking-wider uppercase mb-6">Support</h4>
              <ul className="space-y-3">
                {[
                  { label: "FAQ", href: "/faq" },
                  { label: "Terms of Service", href: "/terms" },
                  { label: "Privacy Policy", href: "/privacy" },
                  { label: "Contact Support", href: "/#test-ride" }
                ].map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-gray-400 text-sm font-medium hover:text-white transition-colors duration-200">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-montserrat font-bold text-white text-sm tracking-wider uppercase mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+919876543210" className="text-white font-semibold text-sm hover:text-accent-yellow transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:support@rydeex.com" className="text-white font-semibold text-sm hover:text-accent-yellow transition-colors">
                    support@rydeex.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white/70 text-sm">Knowledge Park III,<br />Greater Noida, UP</p>
                </div>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#25D366] hover:text-white transition-all duration-300 mt-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {year} RYDEEX. All rights reserved. Premium EV Showroom in Greater Noida.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-500 text-xs hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="text-gray-500 text-xs hover:text-white transition-colors">Terms</Link>
              <Link href="/faq" className="text-gray-500 text-xs hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Below footer brand image */}
      <div className="w-full bg-[#0a0a0f]">
        <Image
          src="/footer/belowfoot.png"
          alt="RYDEEX"
          width={1920}
          height={600}
          className="w-full h-auto object-contain"
        />
      </div>
    </>
  );
}
