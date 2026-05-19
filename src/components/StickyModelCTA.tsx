"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

interface Props {
  modelName: string;
  price: string;
  accentColor: string;
}

export default function StickyModelCTA({ modelName, price, accentColor }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const shortName = modelName.replace("RYDEEX ", "");
  const waMessage = encodeURIComponent(
    `Hi! I am interested in the ${modelName}. Please share more details.`
  );

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-500 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#0a0a0f]/96 backdrop-blur-xl border-t border-white/10 px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          {/* Model info */}
          <div className="hidden sm:block min-w-0">
            <p className="text-white font-black font-montserrat text-sm truncate">
              RYDEEX {shortName}
            </p>
            <p className="text-gray-400 text-xs">{price} · Ex-showroom, Greater Noida</p>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 w-full sm:w-auto sm:ml-auto">
            <a
              href={`https://wa.me/919876543210?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#25D366]/40 text-[#25D366] text-xs font-bold px-4 py-2.5 rounded-full hover:bg-[#25D366]/10 transition-all flex-shrink-0"
            >
              <MessageCircle size={14} />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
            <Link
              href="#test-ride"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 text-white text-xs font-black px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: accentColor }}
            >
              Book Test Ride <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
