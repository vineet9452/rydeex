"use client";

import { useState } from "react";
import { TrendingDown, Zap } from "lucide-react";

// Assumptions (Indian urban context)
const PETROL_PER_KM = 3.5;    // ₹/km (100cc, 40kmpl, petrol ₹140/L)
const EV_PER_KM = 0.27;       // ₹/km (4kWh/120km × ₹8/unit)
const PETROL_MAINTENANCE = 500; // ₹/month
const EV_MAINTENANCE = 150;    // ₹/month

interface Props {
  priceStr: string;
  accentColor: string;
}

export default function SavingsCalculator({ priceStr, accentColor }: Props) {
  const [dailyKm, setDailyKm] = useState(40);

  const numericPrice = parseInt(priceStr.replace(/[^\d]/g, "")) || 95000;
  const monthlyKm = dailyKm * 26; // ~26 riding days/month
  const petrolMonthly = Math.round(monthlyKm * PETROL_PER_KM + PETROL_MAINTENANCE);
  const evMonthly = Math.round(monthlyKm * EV_PER_KM + EV_MAINTENANCE);
  const monthlySavings = petrolMonthly - evMonthly;
  const annualSavings = monthlySavings * 12;
  const breakevenMonths = Math.round(numericPrice / monthlySavings);

  const fmt = (n: number) => n.toLocaleString("en-IN", { maximumFractionDigits: 0 });
  const sliderPct = ((dailyKm - 5) / 75) * 100;

  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: accentColor }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div data-aos="fade-up" className="text-center mb-14">
          <p className="eyebrow text-accent-red mb-3">Monthly Savings Estimate</p>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white">
            How Much Will{" "}
            <span className="text-gradient-red">You Save?</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Drag the slider to match your daily commute and see your real savings vs a petrol scooter.
          </p>
        </div>

        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="80">
          {/* Slider card */}
          <div className="bg-white/[0.04] border border-white/8 rounded-3xl p-8 mb-5">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-gray-400 text-sm font-semibold">Daily Commute Distance</span>
              <span className="text-white font-black text-2xl font-montserrat">
                {dailyKm} <span className="text-base text-gray-400">km / day</span>
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={80}
              value={dailyKm}
              onChange={(e) => setDailyKm(Number(e.target.value))}
              className="w-full h-2 rounded-full appearance-none cursor-pointer outline-none"
              style={{
                background: `linear-gradient(to right, ${accentColor} 0%, ${accentColor} ${sliderPct}%, rgba(255,255,255,0.08) ${sliderPct}%, rgba(255,255,255,0.08) 100%)`,
              }}
            />
            <div className="flex justify-between text-gray-600 text-xs mt-2">
              <span>5 km</span>
              <span>80 km</span>
            </div>
          </div>

          {/* Three cost cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-5">
            <div className="bg-white/[0.04] border border-white/8 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center">
              <p className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-wider mb-1 sm:mb-2">Petrol Scooter</p>
              <p className="text-white font-black text-base sm:text-xl font-montserrat">₹{fmt(petrolMonthly)}</p>
              <p className="text-gray-500 text-[9px] sm:text-[10px] mt-1">per month</p>
            </div>

            {/* Savings highlight */}
            <div
              className="rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center relative overflow-hidden"
              style={{
                background: `${accentColor}1a`,
                border: `1px solid ${accentColor}44`,
              }}
            >
              <p className="text-gray-400 text-[9px] sm:text-[10px] uppercase tracking-wider mb-1 sm:mb-2">You Save</p>
              <p
                className="font-black text-base sm:text-xl font-montserrat"
                style={{ color: accentColor }}
              >
                ₹{fmt(monthlySavings)}
              </p>
              <p className="text-gray-400 text-[9px] sm:text-[10px] mt-1">per month</p>
            </div>

            <div className="bg-white/[0.04] border border-white/8 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center">
              <p className="text-gray-500 text-[9px] sm:text-[10px] uppercase tracking-wider mb-1 sm:mb-2">EV Cost</p>
              <p className="text-white font-black text-base sm:text-xl font-montserrat">₹{fmt(evMonthly)}</p>
              <p className="text-gray-500 text-[9px] sm:text-[10px] mt-1">per month</p>
            </div>
          </div>

          {/* Annual + breakeven */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 flex items-center gap-4">
              <TrendingDown size={26} className="text-emerald-400 flex-shrink-0" />
              <div>
                <p className="text-emerald-400 font-black text-xl font-montserrat">
                  ₹{fmt(annualSavings)}
                </p>
                <p className="text-gray-400 text-xs">Annual running cost savings</p>
              </div>
            </div>
            <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-5 flex items-center gap-4">
              <Zap size={26} className="flex-shrink-0" style={{ color: accentColor }} />
              <div>
                <p className="text-white font-black text-xl font-montserrat">
                  {breakevenMonths} months
                </p>
                <p className="text-gray-400 text-xs">To recover full purchase cost</p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 text-xs mt-5">
            * Estimates based on 40 kmpl petrol scooter @ ₹140/L and ₹8/unit electricity. Actual savings may vary.
          </p>
        </div>
      </div>
    </section>
  );
}
