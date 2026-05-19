"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  faq: FaqItem[];
  accentColor: string;
}

export default function FaqAccordion({ faq, accentColor }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-14">
          <p className="eyebrow text-accent-red mb-3">Common Questions</p>
          <h2 className="font-montserrat font-black text-4xl text-gray-900">
            Got Questions?{" "}
            <span className="text-gradient-red">We Have Answers.</span>
          </h2>
        </div>

        <div
          className="max-w-2xl mx-auto space-y-3"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          {faq.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
              style={
                open === idx
                  ? { borderColor: `${accentColor}44` }
                  : undefined
              }
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-montserrat font-bold text-gray-900 text-sm leading-snug pr-2">
                  {item.q}
                </span>
                <ChevronDown
                  size={18}
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform: open === idx ? "rotate(180deg)" : "rotate(0deg)",
                    color: open === idx ? accentColor : "#9ca3af",
                  }}
                />
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: open === idx ? "300px" : "0px",
                  opacity: open === idx ? 1 : 0,
                }}
              >
                <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
