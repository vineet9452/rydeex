"use client";

import { useState } from "react";
import Image from "next/image";
import type { ModelColor } from "@/lib/models";

interface ColorSwitcherProps {
  colors: ModelColor[];
  modelName: string;
  accentColor: string;
}

export default function ColorSwitcher({ colors, modelName, accentColor }: ColorSwitcherProps) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleColorChange = (idx: number) => {
    if (idx === selectedIdx) return;
    setIsTransitioning(true);
    // Short delay to let fade-out happen, then switch
    setTimeout(() => {
      setSelectedIdx(idx);
      // Allow fade-in
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  return (
    <>
      {/* ── Hero Image Area ── */}
      <div
        data-aos="fade-left"
        data-aos-delay="100"
        className="relative flex items-center justify-center h-[400px] md:h-[550px]"
      >
        {/* Glow behind image */}
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-20 transition-colors duration-700"
          style={{ background: colors[selectedIdx]?.hex || accentColor }}
        />

        {/* Scooter images — all preloaded, only one visible */}
        {colors.map((color, idx) => (
          <div
            key={color.name}
            className="absolute inset-0 transition-opacity duration-500 ease-in-out"
            style={{
              opacity: idx === selectedIdx && !isTransitioning ? 1 : 0,
              pointerEvents: idx === selectedIdx ? "auto" : "none",
            }}
          >
            <Image
              src={color.image}
              alt={`${modelName} — ${color.name}`}
              fill
              className="object-contain animate-float drop-shadow-2xl"
              priority={idx === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* ── Color Picker Strip ── */}
      <section className="bg-[#0f0f14] border-y border-white/5 py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
            Available Colors
          </p>
          <div className="flex gap-5">
            {colors.map((c, idx) => (
              <button
                key={c.name}
                onClick={() => handleColorChange(idx)}
                className="flex flex-col items-center gap-2.5 group cursor-pointer focus:outline-none"
                aria-label={`Select ${c.name} color`}
              >
                {/* Color swatch */}
                <div className="relative">
                  <div
                    className={`w-9 h-9 rounded-full border-2 transition-all duration-300 shadow-lg
                      ${idx === selectedIdx
                        ? "border-white scale-110"
                        : "border-white/20 group-hover:border-white/60 group-hover:scale-105"
                      }`}
                    style={{ backgroundColor: c.hex }}
                  />
                  {/* Active ring glow */}
                  {idx === selectedIdx && (
                    <div
                      className="absolute inset-[-4px] rounded-full border-2 border-white/40 animate-colorPulse"
                    />
                  )}
                </div>
                {/* Color name */}
                <span
                  className={`text-xs whitespace-nowrap transition-colors duration-300 font-medium
                    ${idx === selectedIdx ? "text-white" : "text-gray-500 group-hover:text-white/80"}`}
                >
                  {c.name}
                </span>
              </button>
            ))}
          </div>
          <p className="text-gray-500 text-xs">
            Visit showroom to see all colors
          </p>
        </div>
      </section>
    </>
  );
}
