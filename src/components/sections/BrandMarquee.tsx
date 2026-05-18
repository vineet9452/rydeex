const brandValues = [
  "Zero Emissions",
  "Zero Compromise",
  "Ride Smarter",
  "Charge Faster",
  "Built For India",
  "Built For The Future",
];
const doubled = [...brandValues, ...brandValues];

export default function BrandMarquee() {
  return (
    <div className="bg-[#0a0a0f] py-4 overflow-hidden border-y border-white/5">
      <div className="animate-marquee-fast">
        {doubled.map((val, i) => (
          <span key={i} className="flex items-center gap-4 px-3">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm whitespace-nowrap group hover:border-accent-red/40 hover:bg-accent-red/8 transition-colors duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-red flex-shrink-0" />
              <span className="text-white/75 font-semibold text-[11px] tracking-[0.18em] uppercase">
                {val}
              </span>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
