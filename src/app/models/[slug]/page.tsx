import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Shield,
  BadgeCheck,
  Zap,
  Star,
  MessageCircle,
} from "lucide-react";
import { models, getModelBySlug } from "@/lib/models";
import TestRideSection from "@/components/sections/TestRideSection";
import StickyModelCTA from "@/components/StickyModelCTA";
import ColorSwitcher from "@/components/ColorSwitcher";
import SavingsCalculator from "@/components/sections/SavingsCalculator";
import StatsStrip from "@/components/sections/StatsStrip";
import ComparisonTable from "@/components/sections/ComparisonTable";
import FaqAccordion from "@/components/FaqAccordion";
import type { Metadata } from "next";

export function generateStaticParams() {
  return models.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) return { title: "Model Not Found" };
  return {
    title: `${model.name} | RYDEEX EV Showroom Greater Noida`,
    description: model.description,
    keywords: [model.name, "electric scooter", "EV", "Greater Noida", "RYDEEX", model.tagline],
  };
}

export default async function ModelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) notFound();

  const otherModels = models.filter((m) => m.slug !== slug);
  const waMessage = encodeURIComponent(
    `Hi! I am interested in the ${model.name}. Please share more details.`
  );

  // Derive animated stats from model data
  const rangeKm = parseInt(model.quickSpecs.find((s) => s.label === "Range")?.value ?? "100");
  const batteryKwh = parseFloat(
    model.quickSpecs.find((s) => s.label === "Battery")?.value ?? "4"
  );
  const topSpeed = parseInt(
    model.quickSpecs.find((s) => s.label === "Top Speed")?.value ?? "80"
  );
  const evCostPerKm = parseFloat(((batteryKwh / rangeKm) * 8).toFixed(2));

  const statsData = [
    { value: topSpeed, suffix: " km/h", label: "Top Speed" },
    { value: rangeKm, suffix: " km", label: "Real Range" },
    { value: evCostPerKm, suffix: "/km", prefix: "₹", label: "Running Cost", decimals: 2 },
    { value: 4.8, suffix: "★", label: "Avg. Rating", decimals: 1 },
  ];

  return (
    <>
      {/* ─────────────────────────────────────────
          HERO — DARK FULL BLEED
      ───────────────────────────────────────── */}
      <section
        id="hero-section"
        className="relative min-h-screen flex items-center bg-[#0a0a0f] overflow-hidden"
      >
        {/* Dynamic accent glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 70% 50%, ${model.accentColor}22 0%, transparent 70%)`,
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Back link */}
          <Link
            href="/#models"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-6 sm:mb-12 text-sm font-semibold group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Models
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[auto] lg:min-h-[80vh]">
            {/* Left — content */}
            <div>
              {/* Badges row */}
              <div className="flex gap-3 mb-6 flex-wrap">
                {model.tag && (
                  <span className={`${model.tagColor} text-xs font-bold px-3 py-1.5 rounded-full`}>
                    {model.tag}
                  </span>
                )}
                <span className="bg-white/10 text-white/60 border border-white/10 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {model.highlight}
                </span>
                {/* Urgency badge */}
                <span className="flex items-center gap-1.5 bg-red-500/15 text-red-400 border border-red-500/25 text-xs font-bold px-3 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                  Limited Stock
                </span>
              </div>

              {/* Name & tagline */}
              <h1
                data-aos="fade-right"
                className="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-3 leading-[0.92] uppercase tracking-tight"
              >
                {model.name.replace("RYDEEX ", "")}
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="80"
                className="font-montserrat font-bold text-xl md:text-2xl mb-4"
                style={{ color: model.accentColor }}
              >
                {model.tagline}
              </p>

              {/* Social proof strip */}
              <div
                data-aos="fade-right"
                data-aos-delay="110"
                className="flex items-center gap-2 mb-5"
              >
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={13} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-white/80 font-semibold text-sm">4.8 / 5</span>
                <span className="text-gray-500 text-sm">· 1,200+ owners in Greater Noida</span>
              </div>

              <p
                data-aos="fade-right"
                data-aos-delay="140"
                className="text-gray-400 text-base leading-relaxed mb-6 sm:mb-10 max-w-lg"
              >
                {model.description}
              </p>

              {/* Quick specs row */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-10"
              >
                {model.quickSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"
                  >
                    <span className="text-2xl block mb-1">{spec.icon}</span>
                    <p className="text-white font-black text-sm font-montserrat leading-tight">
                      {spec.value}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">{spec.label}</p>
                  </div>
                ))}
              </div>

              {/* Price + EMI + CTAs */}
              <div data-aos="fade-up" data-aos-delay="260">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-montserrat font-black text-4xl text-white">
                    {model.price}
                  </span>
                  <span className="text-gray-500 text-sm">{model.priceNote}</span>
                </div>
                {/* EMI hook */}
                <p className="text-emerald-400 text-xs font-semibold mb-6">
                  or ₹2,799/mo · 0% EMI available for 36 months
                </p>

                {/* CTA buttons */}
                <div className="flex gap-2 sm:gap-3 flex-wrap mb-6 sm:mb-8">
                  <Link
                    href="#test-ride"
                    className="bg-accent-red text-white font-black px-5 sm:px-7 py-3 sm:py-4 rounded-full hover:bg-white hover:text-accent-red hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all duration-300 inline-flex items-center gap-2 text-sm uppercase tracking-wide"
                  >
                    Book Free Test Ride <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="#specs"
                    className="border border-white/20 text-white/80 font-semibold px-5 sm:px-7 py-3 sm:py-4 rounded-full hover:border-white/50 hover:text-white transition-all duration-300 text-sm"
                  >
                    View Full Specs
                  </Link>
                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/919876543210?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-[#25D366]/40 text-[#25D366] font-semibold px-4 sm:px-5 py-3 sm:py-4 rounded-full hover:bg-[#25D366]/10 transition-all duration-300 text-sm"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>

                {/* Trust strip */}
                <div className="flex flex-wrap gap-x-3 sm:gap-x-5 gap-y-2 pt-4 sm:pt-5 border-t border-white/8">
                  {[
                    { icon: <BadgeCheck size={13} />, label: "FAME-II Eligible" },
                    { icon: <Shield size={13} />, label: "BIS Certified" },
                    { icon: <Zap size={13} />, label: "3-Year Warranty" },
                    { icon: <BadgeCheck size={13} />, label: "ISO 9001" },
                  ].map((t) => (
                    <div key={t.label} className="flex items-center gap-1.5 text-gray-500">
                      <span className="text-gray-600">{t.icon}</span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider">
                        {t.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — floating scooter image + color picker */}
            <ColorSwitcher
              colors={model.colors}
              modelName={model.name}
              accentColor={model.accentColor}
            />
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
      </section>


      {/* ─────────────────────────────────────────
          STATS STRIP — ANIMATED COUNTERS
      ───────────────────────────────────────── */}
      <StatsStrip stats={statsData} accentColor={model.accentColor} />

      {/* ─────────────────────────────────────────
          FEATURES SECTION
      ───────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-20">
            <p className="eyebrow text-accent-red mb-3">What Makes It Special</p>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-gray-900">
              Built to{" "}
              <span className="text-gradient-red">Outperform.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {model.features.map((feat, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 60}
                className="p-7 rounded-3xl border border-gray-100 bg-white card-lift group relative overflow-hidden"
              >
                {/* Subtle accent hover fill */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 rounded-3xl"
                  style={{ background: model.accentColor }}
                />
                {/* Icon container with accent ring */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-3xl"
                  style={{
                    background: `${model.accentColor}12`,
                    border: `1px solid ${model.accentColor}25`,
                  }}
                >
                  {feat.icon}
                </div>
                <h3 className="font-montserrat font-black text-lg text-gray-900 mb-2 relative z-10">
                  {feat.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{feat.desc}</p>
                {/* Accent bottom border reveal on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-3xl"
                  style={{ background: model.accentColor }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FULL SPECS TABLE (DARK) — WITH HIGHLIGHTS
      ───────────────────────────────────────── */}
      <section id="specs" className="py-28 bg-[#0a0a0f] relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ background: model.accentColor }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div data-aos="fade-up" className="text-center mb-20">
            <p className="eyebrow text-accent-red mb-3">Technical Specifications</p>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white">
              Every Detail.{" "}
              <span className="text-gradient-red">Engineered.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {model.specs.map((group, gIdx) => (
              <div
                key={gIdx}
                data-aos="fade-up"
                data-aos-delay={gIdx * 80}
                className="bg-white/[0.04] border border-white/[0.08] rounded-3xl overflow-hidden"
                style={{ backdropFilter: "blur(10px)" }}
              >
                <div
                  className="px-6 py-4 border-b border-white/[0.08]"
                  style={{ background: `${model.accentColor}18` }}
                >
                  <h3 className="font-montserrat font-bold text-white text-sm uppercase tracking-wider">
                    {group.category}
                  </h3>
                </div>
                <div className="divide-y divide-white/5">
                  {group.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className={`flex items-center justify-between px-6 py-4 transition-colors ${
                        item.highlight
                          ? "bg-white/[0.02] hover:bg-white/[0.04]"
                          : "hover:bg-white/[0.03]"
                      }`}
                    >
                      <span className="text-gray-400 text-sm">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span
                          className="font-bold text-sm"
                          style={item.highlight ? { color: model.accentColor } : { color: "#ffffff" }}
                        >
                          {item.value}
                          {item.unit && (
                            <span className="text-gray-400 font-normal ml-1">{item.unit}</span>
                          )}
                        </span>
                        {item.highlight && item.badge && (
                          <span
                            className="text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full whitespace-nowrap"
                            style={{
                              background: `${model.accentColor}22`,
                              color: model.accentColor,
                            }}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          WHY THIS MODEL
      ───────────────────────────────────────── */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div data-aos="fade-up" className="text-center mb-14">
              <p className="eyebrow text-accent-red mb-3">Top Reasons to Choose</p>
              <h2 className="font-montserrat font-black text-4xl text-gray-900">
                Why the{" "}
                <span className="text-gradient-purple">
                  {model.name.replace("RYDEEX ", "")}
                </span>
                ?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {model.whyThis.map((reason, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 60}
                  className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm card-lift"
                >
                  <CheckCircle2 size={22} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800 font-semibold text-sm leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          EV VS PETROL COMPARISON TABLE
      ───────────────────────────────────────── */}
      <ComparisonTable model={model} />

      {/* ─────────────────────────────────────────
          OWNER TESTIMONIALS (conditional)
      ───────────────────────────────────────── */}
      {model.testimonials && model.testimonials.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div data-aos="fade-up" className="text-center mb-14">
              <p className="eyebrow text-accent-red mb-3">Real Owners. Real Stories.</p>
              <h2 className="font-montserrat font-black text-4xl text-gray-900">
                What Riders{" "}
                <span className="text-gradient-red">Are Saying.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {model.testimonials.map((t, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                  className="bg-gray-50 border border-gray-100 rounded-3xl p-7 card-lift flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, s) => (
                      <Star key={s} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-black font-montserrat flex-shrink-0"
                      style={{ background: model.accentColor }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs">{t.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────
          SAVINGS CALCULATOR
      ───────────────────────────────────────── */}
      <SavingsCalculator priceStr={model.price} accentColor={model.accentColor} />

      {/* ─────────────────────────────────────────
          BOOK TEST RIDE
      ───────────────────────────────────────── */}
      <TestRideSection modelName={model.name} />

      {/* ─────────────────────────────────────────
          FAQ ACCORDION (conditional)
      ───────────────────────────────────────── */}
      {model.faq && model.faq.length > 0 && (
        <FaqAccordion faq={model.faq} accentColor={model.accentColor} />
      )}

      {/* ─────────────────────────────────────────
          OTHER MODELS — WITH PRICE
      ───────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <p className="eyebrow text-accent-red mb-3">Explore More</p>
            <h2 className="font-montserrat font-black text-4xl text-gray-900">
              More from <span className="text-gradient-purple">RYDEEX</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {otherModels.map((m, idx) => (
              <Link
                key={m.slug}
                href={`/models/${m.slug}`}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className="group flex items-center gap-5 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:border-primary/30 hover:bg-primary/[0.03] transition-all duration-300 card-lift"
              >
                <div className="relative w-24 h-20 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                  <Image src={m.image} alt={m.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-montserrat font-black text-gray-900 text-base leading-tight mb-0.5">
                    {m.name}
                  </p>
                  {/* Price now visible */}
                  <p
                    className="font-montserrat font-black text-sm mb-1.5"
                    style={{ color: m.accentColor }}
                  >
                    {m.price}
                  </p>
                  <p className="text-gray-400 text-xs mb-2">{m.tagline}</p>
                  <div className="flex gap-2">
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      {m.quickSpecs[0].value}
                    </span>
                    <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      {m.quickSpecs[1].value}
                    </span>
                  </div>
                </div>
                <ArrowRight
                  size={18}
                  className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          STICKY BOTTOM CTA BAR
      ───────────────────────────────────────── */}
      <StickyModelCTA
        modelName={model.name}
        price={model.price}
        accentColor={model.accentColor}
      />
    </>
  );
}
