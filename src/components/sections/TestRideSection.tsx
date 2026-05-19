import { CheckCircle2, Shield, Zap, Award } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function TestRideSection({ modelName }: { modelName?: string }) {
  const displayName = modelName ? modelName.replace("RYDEEX ", "") : "";

  return (
    <section id="test-ride" className="bg-gray-50 relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-center max-w-[1200px] mx-auto">

          {/* Left Content */}
          <div data-aos="fade-right" className="flex-1 w-full max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-red/20 bg-accent-red/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent-red animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent-red">Free Test Ride · Limited Slots</span>
            </div>

            <h2 className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-5 sm:mb-6 leading-tight">
              {displayName ? (
                <>Feel the <span className="text-accent-red">{displayName}</span> yourself.</>
              ) : (
                <>Ready to feel <span className="text-accent-red">the difference?</span></>
              )}
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-10 leading-relaxed">
              Visit our Greater Noida showroom. Take any RYDEEX model for a spin. Zero booking fees, zero commitment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
              {[
                "Ride any model in our lineup",
                "Expert guidance from our EV team",
                "On-site financing valuation",
                "Exclusive showroom offers"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-accent-red mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-5 sm:gap-8 flex-wrap pt-5 sm:pt-8 border-t border-gray-200">
              {[
                { icon: <Shield size={20} />, label: "3 Year Warranty" },
                { icon: <Zap size={20} />, label: "Free Charging Setup" },
                { icon: <Award size={20} />, label: "Award Winning" }
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <span className="text-gray-400">{b.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-gray-500">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Card */}
          <div data-aos="fade-left" className="w-full lg:w-[400px] flex-shrink-0">
            <div className="bg-white rounded-3xl p-5 md:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)] relative overflow-hidden border border-gray-100">
              
              <h3 className="font-montserrat font-bold text-2xl md:text-2xl text-center text-gray-900 mb-2">
                Reserve Your <span className="text-accent-red">Ride</span>
              </h3>
              
              {/* Reference-style full width red line */}
              <div className="w-full h-[2px] bg-accent-red mb-6" />
              
              <ContactForm defaultModel={modelName ? modelName.replace("RYDEEX ", "") : ""} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
