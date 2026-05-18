import { CheckCircle2, Shield, Zap, Award } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function TestRideSection() {
  return (
    <section id="test-ride" className="bg-[#0a0a0f] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-red/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[700px]">

          {/* Left – dark content */}
          <div data-aos="fade-right" className="py-20 pr-0 lg:pr-16 flex flex-col justify-center">
            <p className="eyebrow text-accent-red mb-4">Free Test Ride</p>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
              Ready to Feel<br />
              <span className="text-gradient-red">The Difference?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Visit our Greater Noida showroom and take any RYDEEX model for a free test ride — no booking fee, no commitment.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Ride any model in our lineup",
                "Expert guidance from our EV team",
                "On-site financing & trade-in valuation",
                "Exclusive showroom-only offers"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-6 flex-wrap">
              {[
                { icon: <Shield size={18} />, label: "3 Year Warranty" },
                { icon: <Zap size={18} />, label: "Free Charging Setup" },
                { icon: <Award size={18} />, label: "Award Winning" }
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-white/50">
                  <span className="text-accent-yellow">{b.icon}</span>
                  <span className="text-sm font-semibold">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right – contact form */}
          <div
            data-aos="fade-left"
            className="lg:my-10 rounded-3xl bg-white p-8 md:p-10 flex flex-col justify-center shadow-2xl"
          >
            <h3 className="font-montserrat font-black text-2xl text-gray-900 mb-2">Book Your Test Ride</h3>
            <p className="text-gray-500 text-sm mb-8">Fill in below — we&apos;ll confirm within 30 minutes.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
