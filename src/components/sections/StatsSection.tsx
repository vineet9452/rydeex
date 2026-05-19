const stats = [
  { value: "160", unit: "KM", label: "Max Range" },
  { value: "105", unit: "KM/H", label: "Top Speed" },
  { value: "4.9", unit: "★", label: "Avg Rating" },
  { value: "3", unit: "+", label: "Award-Winning Models" }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #3a5edb 0%, transparent 60%), radial-gradient(circle at 80% 50%, #DD2B1C 0%, transparent 60%)"
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 80}
              className="text-center"
            >
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl text-white leading-none">{s.value}</span>
                <span className="font-montserrat font-black text-xl sm:text-2xl text-accent-yellow mb-1">{s.unit}</span>
              </div>
              <p className="text-white/60 font-semibold text-xs sm:text-sm tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
