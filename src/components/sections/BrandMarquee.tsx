import { Zap } from "lucide-react";

const brandValues = [
  "ZERO EMISSIONS", "ZERO COMPROMISE", "RIDE SMARTER",
  "CHARGE FASTER", "BUILT FOR INDIA", "BUILT FOR THE FUTURE"
];
// 4x copies to ensure smooth infinite scroll on ultra-wide screens
const multiplied = [...brandValues, ...brandValues, ...brandValues, ...brandValues];

export default function BrandMarquee() {
  return (
    <div className="relative bg-[#0a0a0f] py-6 overflow-hidden border-y border-white/5 shadow-[0_0_30px_rgba(221,43,28,0.05)]">
      {/* Subtle red glow line on top/bottom */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent-red/40 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent-red/40 to-transparent" />

      {/* Red glow behind the marquee */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-red/5 via-[#0a0a0f]/50 to-[#0a0a0f] pointer-events-none" />

      <div className="animate-marquee-fast relative z-10">
        {multiplied.map((val, i) => (
          <span key={i} className="flex items-center gap-8 px-8">
            <span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-montserrat font-black text-lg md:text-xl tracking-[0.2em] uppercase"
              style={{ textShadow: "0 0 20px rgba(255,255,255,0.05)" }}
            >
              {val}
            </span>
            <Zap 
              className="text-accent-red w-5 h-5 animate-pulse" 
              fill="currentColor"
              style={{ filter: "drop-shadow(0 0 10px rgba(221,43,28,0.8))" }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
