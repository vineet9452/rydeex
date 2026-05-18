"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "/Hero/slide_red.png",
    title: "RYDEEX X1 Pro",
    subtitle: "Born to Lead.",
    tagline: "India's sharpest electric scooter. Engineered for riders who demand more from every kilometre.",
    desc: "Zero emissions. Maximum thrill. The X1 Pro redefines what an electric scooter can be — faster, smarter, and built to last.",
    features: ["Best-in-class acceleration", "120 km real-world range", "Smart GPS navigation"],
    accent: "#dd2b1c",
    glowFrom: "from-red-600/30",
    glowTo: "to-orange-500/20",
    speed: "80 km/h",
    range: "120 km",
    battery: "4 kWh",
  },
  {
    image: "/Hero/slide_blue.png",
    title: "RYDEEX City Lite",
    subtitle: "Urban Freedom.",
    tagline: "Designed for the city that never stops. Lightweight, nimble, and always connected.",
    desc: "Navigate every lane, every signal, every shortcut with the scooter that was built specifically for Indian city roads.",
    features: ["Ultra-light alloy frame", "Seamless Bluetooth connect", "90 km city range"],
    accent: "#3b82f6",
    glowFrom: "from-blue-600/30",
    glowTo: "to-cyan-500/20",
    speed: "60 km/h",
    range: "90 km",
    battery: "3 kWh",
  },
  {
    image: "/Hero/slide_green.png",
    title: "RYDEEX Eco+",
    subtitle: "Go Green. Go Fast.",
    tagline: "The future of sustainable mobility — without sacrificing a single kilometre of performance.",
    desc: "Eco+ delivers 140 km of emission-free riding on a single charge. Choose the planet. Keep the speed.",
    features: ["140 km max eco range", "Regen braking tech", "Carbon-neutral certified"],
    accent: "#22c55e",
    glowFrom: "from-emerald-600/30",
    glowTo: "to-lime-500/20",
    speed: "70 km/h",
    range: "140 km",
    battery: "5 kWh",
  },
  {
    image: "/Hero/slide_gold.png",
    title: "RYDEEX RS MAX",
    subtitle: "Pure Dominance.",
    tagline: "When performance is non-negotiable. The RS MAX is built for riders who refuse to slow down.",
    desc: "105 km/h top speed. 160 km flagship range. A full-colour smart dashboard. This is the peak of what electric can be.",
    features: ["105 km/h top speed", "Flagship 6 kWh battery", "Race-tuned suspension"],
    accent: "#f59e0b",
    glowFrom: "from-amber-500/30",
    glowTo: "to-yellow-400/20",
    speed: "105 km/h",
    range: "160 km",
    battery: "6 kWh",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(idx);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  // Auto-slide every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-[#080810]">
      {/* ── BACKGROUND IMAGES (CROSS-FADE) ── */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 z-0 transition-opacity duration-[800ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            className="object-cover object-center"
            priority={i === 0}
          />
        </div>
      ))}

      {/* ── GRADIENT OVERLAYS ── */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#080810] via-[#080810]/40 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#080810]/80 via-[#080810]/30 to-transparent" />

      {/* ── ANIMATED ACCENT GLOW ── */}
      <div
        className={`absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full blur-[150px] z-[1] transition-all duration-[800ms] bg-gradient-to-br ${slide.glowFrom} ${slide.glowTo}`}
      />

      {/* ── CONTENT ── */}
      <div className="container relative z-10 mx-auto px-4 pt-20 pb-28">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* ── LEFT ── */}
          <div className="text-left w-full lg:max-w-[560px]">

            {/* Model Badge */}
            <div
              key={`badge-${current}`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 border backdrop-blur-md animate-heroFadeUp"
              style={{ borderColor: `${slide.accent}55`, backgroundColor: `${slide.accent}18` }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: slide.accent }} />
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-white/90">
                {slide.title}
              </span>
            </div>

            {/* Headline */}
            <h1
              key={`title-${current}`}
              className="font-montserrat font-black text-5xl md:text-6xl lg:text-[5.5rem] text-white mb-3 uppercase tracking-tight leading-[0.92] animate-heroFadeUp"
            >
              {slide.subtitle.split(" ").map((word, wi, arr) => (
                <span key={wi}>
                  {wi === arr.length - 1
                    ? <span style={{ color: slide.accent }}>{word}</span>
                    : word}{" "}
                </span>
              ))}
            </h1>

            {/* Tagline */}
            <p
              key={`tagline-${current}`}
              className="text-white/70 text-base font-semibold max-w-lg mb-3 leading-snug animate-heroFadeUp animation-delay-100"
            >
              {slide.tagline}
            </p>

            {/* Description */}
            <p
              key={`desc-${current}`}
              className="text-gray-400 text-sm max-w-md mb-6 leading-relaxed animate-heroFadeUp animation-delay-200"
            >
              {slide.desc}
            </p>

            {/* Feature bullets */}
            <ul
              key={`features-${current}`}
              className="flex flex-col gap-2 mb-8 animate-heroFadeUp animation-delay-300"
            >
              {slide.features.map((feat) => (
                <li key={feat} className="flex items-center gap-2.5 text-sm text-white/75 font-medium">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: slide.accent }}
                  />
                  {feat}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8 animate-heroFadeUp animation-delay-300">
              <Link
                href="#test-ride"
                className="group text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:scale-[1.03]"
                style={{ backgroundColor: slide.accent }}
              >
                Book Test Ride
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#models"
                className="backdrop-blur-md bg-white/5 border border-white/20 text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Explore All Models
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 animate-heroFadeUp animation-delay-300">
              {["3 Year Warranty", "Free Test Ride", "EMI Available", "Made in India"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-[11px] font-semibold text-white/40 uppercase tracking-wider">
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── RIGHT – Specs + Nav ── */}
          <div className="flex flex-col items-end gap-6 w-full lg:w-auto lg:self-end lg:mb-4">
            {/* Specs */}
            <div
              key={`specs-${current}`}
              className="grid grid-cols-3 gap-5 md:gap-8 p-5 md:p-6 rounded-3xl border backdrop-blur-xl shadow-2xl w-full lg:w-auto animate-heroFadeUp"
              style={{
                borderColor: `${slide.accent}25`,
                backgroundColor: "rgba(0,0,0,0.45)",
              }}
            >
              {[
                { v: slide.speed.split(" ")[0], u: slide.speed.split(" ")[1], l: "Top Speed" },
                { v: slide.range.split(" ")[0], u: slide.range.split(" ")[1], l: "Range" },
                { v: slide.battery.split(" ")[0], u: slide.battery.split(" ")[1], l: "Battery" },
              ].map((s, i) => (
                <div key={i} className="text-center relative">
                  {i !== 0 && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 bg-white/15 hidden md:block" />
                  )}
                  <div className="flex items-baseline justify-center gap-1">
                    <p className="font-montserrat font-black text-2xl md:text-3xl text-white">
                      {s.v}
                    </p>
                    <span
                      className="font-bold text-xs"
                      style={{ color: slide.accent }}
                    >
                      {s.u}
                    </span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mt-1">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-4">
              {/* Prev / Next */}
              <button
                onClick={prev}
                className="p-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-all backdrop-blur-md bg-white/5"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className="relative h-2 rounded-full transition-all duration-500 overflow-hidden"
                    style={{
                      width: i === current ? "32px" : "8px",
                      backgroundColor:
                        i === current ? slide.accent : "rgba(255,255,255,0.25)",
                    }}
                  >
                    {i === current && (
                      <span
                        className="absolute inset-0 rounded-full animate-dotProgress"
                        style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/50 transition-all backdrop-blur-md bg-white/5"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white">
          Explore
        </span>
        <div className="w-px h-6 bg-white animate-pulse" />
      </div>
    </section>
  );
}
