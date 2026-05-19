"use client";

import { useState } from "react";

interface Color {
  name: string;
  hex: string;
}

export default function ColorPickerClient({ colors }: { colors: Color[] }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex gap-6 items-start flex-wrap">
      {colors.map((c, idx) => (
        <button
          key={c.name}
          onClick={() => setSelected(idx)}
          className="flex flex-col items-center gap-2 group cursor-pointer"
          aria-label={`Select color: ${c.name}`}
        >
          <div
            className={`w-9 h-9 rounded-full border-2 transition-all duration-300 shadow-lg ${
              selected === idx
                ? "scale-125 shadow-[0_0_16px_rgba(255,255,255,0.5)]"
                : "border-white/20 group-hover:border-white/60 group-hover:scale-110"
            }`}
            style={{
              backgroundColor: c.hex,
              borderColor: selected === idx ? "#ffffff" : undefined,
            }}
          />
          <span
            className={`text-xs transition-all whitespace-nowrap ${
              selected === idx
                ? "text-white font-bold"
                : "text-gray-500 group-hover:text-gray-300"
            }`}
          >
            {c.name}
          </span>
          <div
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              selected === idx ? "opacity-100 bg-white" : "opacity-0"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
