import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const models = [
  {
    slug: "x1-pro",
    name: "RYDEEX X1 Pro",
    speed: "80 km/h", range: "120 km", battery: "4 kWh",
    tag: "New Arrival", tagColor: "bg-accent-yellow text-black",
    image: "/evies/ev1.webp",
    highlight: "Best Seller"
  },
  {
    slug: "city-lite",
    name: "RYDEEX City Lite",
    speed: "60 km/h", range: "90 km", battery: "3 kWh",
    tag: null, tagColor: "",
    image: "/evies/ev2.webp",
    highlight: "City Favourite"
  },
  {
    slug: "rs-max",
    name: "RYDEEX RS MAX",
    speed: "105 km/h", range: "160 km", battery: "6 kWh",
    tag: "Performance", tagColor: "bg-accent-red text-white",
    image: "/evies/ev3.webp",
    highlight: "Flagship"
  }
];

export default function ModelsSection() {
  return (
    <section id="models" className="py-28 bg-[#0a0a0f] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-red/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div data-aos="fade-up" className="max-w-2xl mx-auto text-center mb-20">
          <p className="eyebrow text-accent-red mb-3">Our Lineup</p>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-4">
            Three Models.<br />
            <span className="text-gradient-red">One Revolution.</span>
          </h2>
          <p className="text-gray-400 text-lg">Choose the RYDEEX that matches your ride.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {models.map((model, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-accent-red/40 transition-all duration-400"
              style={{ backdropFilter: "blur(10px)" }}
            >
              {model.tag && (
                <div className={`absolute top-4 left-4 z-10 ${model.tagColor} font-bold px-3 py-1 rounded-full text-xs shadow-lg`}>
                  {model.tag}
                </div>
              )}
              <div className="absolute top-4 right-4 z-10 bg-white/10 text-white/60 border border-white/10 font-semibold px-3 py-1 rounded-full text-xs">
                {model.highlight}
              </div>

              <div className="relative h-56 w-full overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/70 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="font-montserrat font-black text-xl text-white mb-4">{model.name}</h3>

                <div className="flex gap-2 mb-6 flex-wrap">
                  {[
                    { label: "⚡ " + model.speed },
                    { label: "🔋 " + model.range },
                    { label: "🔌 " + model.battery }
                  ].map((spec) => (
                    <span key={spec.label} className="bg-white/8 border border-white/10 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full">
                      {spec.label}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/models/${model.slug}`}
                    className="flex-1 text-center bg-accent-red text-white font-bold py-3 rounded-xl hover:bg-red-600 hover:shadow-[0_0_20px_rgba(221,43,28,0.5)] transition-all duration-300 text-sm"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/models/${model.slug}`}
                    className="p-3 border border-white/15 rounded-xl text-white/60 hover:border-white/40 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
