"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
          ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_24px_rgba(0,0,0,0.08)] border-b border-gray-100"
          : "bg-white/60 backdrop-blur-lg border-b border-white/20"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/Rydeex Logo.png"
            alt="RYDEEX"
            width={150}
            height={40}
            className="h-10 drop-shadow-sm"
            style={{ width: "auto" }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-semibold text-gray-700 hover:text-accent-red transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-red rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="tel:+919876543210"
            className="text-sm font-semibold text-gray-600 hover:text-primary transition-colors"
          >
            +91 98765 43210
          </Link>
          <Link
            href="#test-ride"
            className="bg-accent-red text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(221,43,28,0.5)] transition-all duration-300 flex items-center gap-2"
          >
            Book Test Ride
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-2xl z-40 px-6 py-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-bold py-3 px-4 rounded-xl hover:bg-gray-50 text-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-gray-100">
            <Link
              href="#test-ride"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-accent-red text-white font-bold text-center py-3.5 px-8 rounded-full hover:bg-red-700 transition flex items-center justify-center"
            >
              Book Test Ride
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
