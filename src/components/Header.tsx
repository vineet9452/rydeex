"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Models", href: "#models" },
    { name: "Features", href: "#features" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#07070d]/90 backdrop-blur-2xl shadow-[0_4px_40px_rgba(0,0,0,0.6)] border-b border-white/8"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Top shimmer line — only on scroll */}
      <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-red/60 to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`} />

      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo/Rydeex Logo.png"
            alt="RYDEEX"
            width={150}
            height={40}
            className="h-10 drop-shadow-[0_0_12px_rgba(220,38,38,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(220,38,38,0.7)] transition-all duration-300"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-semibold text-white/60 hover:text-white transition-colors duration-200 group rounded-lg hover:bg-white/5"
            >
              {link.name}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-accent-red to-orange-500 rounded-full transition-all duration-300 group-hover:w-4/5" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="tel:+919876543210"
            className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm font-semibold text-white/70 hover:text-white hover:border-accent-red/50 hover:bg-accent-red/10 hover:shadow-[0_0_16px_rgba(220,38,38,0.2)] transition-all duration-300 group"
          >
            <Phone size={13} className="text-accent-red group-hover:scale-110 transition-transform duration-300" />
            +91 98765 43210
          </Link>

          <Link
            href="#test-ride"
            className="bg-accent-red text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:bg-white hover:text-accent-red hover:shadow-[0_0_24px_rgba(220,38,38,0.4)] hover:scale-105 cursor-pointer"
          >
            Book Test Ride
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0a0a0f]/97 backdrop-blur-2xl border-b border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-40 px-6 py-8 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-semibold py-3.5 px-5 rounded-xl text-white/70 hover:text-white hover:bg-white/6 border border-transparent hover:border-white/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-5 mt-3 border-t border-white/8 flex flex-col gap-3">
            <Link
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 text-sm font-semibold text-white/50 py-2"
            >
              <Phone size={14} />
              +91 98765 43210
            </Link>
            <Link
              href="#test-ride"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-accent-red text-white font-bold text-center py-3.5 px-8 rounded-full hover:bg-white hover:text-accent-red hover:shadow-[0_0_24px_rgba(220,38,38,0.4)] transition-all duration-300 flex items-center justify-center"
            >
              Book Test Ride
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
