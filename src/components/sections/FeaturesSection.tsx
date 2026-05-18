import { Leaf, Wrench, LayoutDashboard } from "lucide-react";

const features = [
  {
    num: "01",
    icon: <Leaf size={36} />,
    title: "Zero Emissions",
    desc: "Protect your city's air. Ride electric and cut your daily carbon footprint without sacrificing speed or range.",
    headerFrom: "#0d1f1a",
    headerTo: "#0a1512",
    accent: "#10b981",
    stat: "0g CO₂",
    statLabel: "per km"
  },
  {
    num: "02",
    icon: <Wrench size={36} />,
    title: "Low Maintenance",
    desc: "No oil changes. No spark plugs. Direct drive motors mean fewer parts and dramatically lower running costs.",
    headerFrom: "#0f0f1f",
    headerTo: "#0a0a18",
    accent: "#6366f1",
    stat: "80%",
    statLabel: "lower service cost"
  },
  {
    num: "03",
    icon: <LayoutDashboard size={36} />,
    title: "Smart Dashboard",
    desc: "GPS navigation, Bluetooth, ride analytics — all on a full-color touch display built for the connected rider.",
    headerFrom: "#1f0d0d",
    headerTo: "#150808",
    accent: "#dd2b1c",
    stat: "7\"",
    statLabel: "full-color display"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 bg-[#f4f4f6]">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div data-aos="fade-up" className="max-w-2xl mx-auto text-center mb-20">
          <p className="eyebrow text-accent-red mb-3">Why Go Electric</p>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-gray-900 mb-4">
            Built Different.<br />
            <span className="text-gradient-purple">Engineered Smarter.</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Every RYDEEX model is designed around the rider — not the engine.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group rounded-2xl overflow-hidden bg-white shadow-[0_2px_24px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.13)] transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* ── Dark Header Zone ── */}
              <div
                className="relative h-52 flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${f.headerFrom}, ${f.headerTo})` }}
              >
                {/* Watermark number */}
                <span
                  className="absolute -bottom-4 -right-3 font-montserrat font-black text-[120px] leading-none select-none pointer-events-none transition-all duration-500 group-hover:scale-110"
                  style={{ color: `${f.accent}08` }}
                >
                  {f.num}
                </span>

                {/* Subtle accent ring behind icon */}
                <div
                  className="absolute w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-500"
                  style={{ background: f.accent }}
                />

                {/* Icon */}
                <div
                  className="relative z-10 p-5 rounded-2xl border transition-all duration-500 group-hover:scale-110"
                  style={{
                    color: f.accent,
                    borderColor: `${f.accent}30`,
                    background: `${f.accent}12`
                  }}
                >
                  {f.icon}
                </div>

                {/* Stat badge — top right */}
                <div className="absolute top-4 right-4 text-right">
                  <p
                    className="font-montserrat font-black text-2xl leading-none"
                    style={{ color: f.accent }}
                  >
                    {f.stat}
                  </p>
                  <p className="text-white/30 text-[10px] uppercase tracking-widest font-semibold mt-0.5">
                    {f.statLabel}
                  </p>
                </div>

                {/* Step number — top left */}
                <div className="absolute top-4 left-5">
                  <span className="text-white/20 text-xs font-bold tracking-[0.25em] uppercase">
                    {f.num}
                  </span>
                </div>

                {/* Fade-to-white at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/[0.04] to-transparent" />
              </div>

              {/* ── White Content Zone ── */}
              <div className="p-7">
                {/* Accent rule */}
                <div
                  className="w-8 h-[3px] rounded-full mb-5 transition-all duration-500 group-hover:w-14"
                  style={{ background: f.accent }}
                />

                <h3 className="font-montserrat font-black text-[1.35rem] text-gray-900 mb-3 leading-snug">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
