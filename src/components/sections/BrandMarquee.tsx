const brandValues = [
  "ZERO EMISSIONS", "ZERO COMPROMISE", "RIDE SMARTER",
  "CHARGE FASTER", "BUILT FOR INDIA", "BUILT FOR THE FUTURE"
];
const doubled = [...brandValues, ...brandValues];

export default function BrandMarquee() {
  return (
    <div className="bg-[#0a0a0f] py-5 overflow-hidden border-y border-white/5">
      <div className="animate-marquee-fast">
        {doubled.map((val, i) => (
          <span key={i} className="flex items-center gap-6 px-8">
            <span className="text-white font-montserrat font-black text-sm tracking-[0.2em] uppercase whitespace-nowrap">
              {val}
            </span>
            <span className="text-accent-red text-lg font-black">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
