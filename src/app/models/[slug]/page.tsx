import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { models, getModelBySlug } from "@/lib/models";
import ContactForm from "@/components/ContactForm";
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

  return (
    <>
      {/* ─────────────────────────────────────────
          HERO — DARK FULL BLEED
      ───────────────────────────────────────── */}
      <section className={`relative min-h-screen flex items-center bg-[#0a0a0f] overflow-hidden`}>
        {/* Dynamic accent glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 70% 50%, ${model.accentColor}22 0%, transparent 70%)`
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.15) 1px,transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          {/* Back link */}
          <Link
            href="/#models"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-12 text-sm font-semibold group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Models
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left — content */}
            <div>
              {/* Badges */}
              <div className="flex gap-3 mb-6 flex-wrap">
                {model.tag && (
                  <span className={`${model.tagColor} text-xs font-bold px-3 py-1.5 rounded-full`}>
                    {model.tag}
                  </span>
                )}
                <span className="bg-white/10 text-white/60 border border-white/10 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {model.highlight}
                </span>
              </div>

              {/* Name & tagline */}
              <h1
                data-aos="fade-right"
                className="font-montserrat font-black text-5xl md:text-6xl lg:text-7xl text-white mb-3 leading-[0.92] uppercase tracking-tight"
              >
                {model.name.replace("RYDEEX ", "")}
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="80"
                className="font-montserrat font-bold text-xl md:text-2xl mb-6"
                style={{ color: model.accentColor }}
              >
                {model.tagline}
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="140"
                className="text-gray-400 text-base leading-relaxed mb-10 max-w-lg"
              >
                {model.description}
              </p>

              {/* Quick specs row */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="grid grid-cols-4 gap-3 mb-10"
              >
                {model.quickSpecs.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center"
                  >
                    <span className="text-2xl block mb-1">{spec.icon}</span>
                    <p className="text-white font-black text-sm font-montserrat leading-tight">{spec.value}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{spec.label}</p>
                  </div>
                ))}
              </div>

              {/* Price + CTAs */}
              <div data-aos="fade-up" data-aos-delay="260">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-montserrat font-black text-4xl text-white">{model.price}</span>
                  <span className="text-gray-500 text-sm">{model.priceNote}</span>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <Link
                    href="#book"
                    className="bg-accent-red text-white font-black px-8 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(221,43,28,0.6)] transition-all duration-300 inline-flex items-center gap-2 text-sm uppercase tracking-wide"
                  >
                    Book Free Test Ride <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="#specs"
                    className="border border-white/20 text-white/80 font-semibold px-8 py-4 rounded-full hover:border-white/50 hover:text-white transition-all duration-300 text-sm"
                  >
                    View Full Specs
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — floating scooter image */}
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="relative flex items-center justify-center h-[400px] md:h-[550px]"
            >
              {/* Glow behind image */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-20"
                style={{ background: model.accentColor }}
              />
              <Image
                src={model.image}
                alt={model.name}
                fill
                className="object-contain animate-float drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
      </section>

      {/* ─────────────────────────────────────────
          COLOR PICKER STRIP
      ───────────────────────────────────────── */}
      <section className="bg-[#0f0f14] border-y border-white/5 py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
            Available Colors
          </p>
          <div className="flex gap-4">
            {model.colors.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-2 group cursor-pointer">
                <div
                  className="w-8 h-8 rounded-full border-2 border-white/20 group-hover:border-white/70 transition-all shadow-lg"
                  style={{ backgroundColor: c.hex }}
                />
                <span className="text-gray-500 text-xs group-hover:text-white transition-colors whitespace-nowrap">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-xs">
            Visit showroom to see all colors
          </p>
        </div>
      </section>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {model.features.map((feat, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 60}
                className="p-7 rounded-3xl border border-gray-100 bg-white card-lift group"
              >
                <span className="text-4xl block mb-4">{feat.icon}</span>
                <h3 className="font-montserrat font-black text-lg text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          FULL SPECS TABLE (DARK)
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
              Every Detail. <span className="text-gradient-red">Engineered.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {model.specs.map((group, gIdx) => (
              <div
                key={gIdx}
                data-aos="fade-up"
                data-aos-delay={gIdx * 80}
                className="bg-white/4 border border-white/8 rounded-3xl overflow-hidden"
                style={{ backdropFilter: "blur(10px)" }}
              >
                {/* Category header */}
                <div
                  className="px-6 py-4 border-b border-white/8"
                  style={{ background: `${model.accentColor}18` }}
                >
                  <h3 className="font-montserrat font-bold text-white text-sm uppercase tracking-wider">
                    {group.category}
                  </h3>
                </div>
                {/* Rows */}
                <div className="divide-y divide-white/5">
                  {group.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="flex items-center justify-between px-6 py-4 hover:bg-white/3 transition-colors"
                    >
                      <span className="text-gray-400 text-sm">{item.label}</span>
                      <span className="text-white font-bold text-sm">
                        {item.value}
                        {item.unit && (
                          <span className="text-gray-400 font-normal ml-1">{item.unit}</span>
                        )}
                      </span>
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
                Why the <span className="text-gradient-purple">{model.name.replace("RYDEEX ", "")}</span>?
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
          BOOK TEST RIDE (DARK SPLIT)
      ───────────────────────────────────────── */}
      <section id="book" className="bg-[#0a0a0f] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 60% 80% at 0% 50%, ${model.accentColor}15, transparent 70%)` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[650px]">
            {/* Left */}
            <div data-aos="fade-right" className="py-20 pr-0 lg:pr-16 flex flex-col justify-center">
              <p className="eyebrow text-accent-red mb-4">Book Your Free Test Ride</p>
              <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
                Feel the {model.name.replace("RYDEEX ", "")}<br />
                <span className="text-gradient-red">For Yourself.</span>
              </h2>
              <p className="text-gray-400 text-base mb-8 leading-relaxed">
                Visit our Greater Noida showroom and take the {model.name} on a proper test ride — no fees, no pressure, no commitment.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-montserrat font-black text-3xl text-white">{model.price}</span>
                  <span className="text-gray-500 text-sm">{model.priceNote}</span>
                </div>
                <p className="text-gray-400 text-sm">EMI available · Trade-in accepted · Finance on-site</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-6 py-3 rounded-full hover:border-white/50 hover:text-white transition-all text-sm font-semibold"
                >
                  Call: +91 98765 43210
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] px-6 py-3 rounded-full hover:bg-[#25D366] hover:text-white transition-all text-sm font-semibold"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div
              data-aos="fade-left"
              className="lg:my-10 rounded-3xl bg-white p-8 md:p-10 flex flex-col justify-center shadow-2xl"
            >
              <h3 className="font-montserrat font-black text-2xl text-gray-900 mb-1">
                Book Test Ride
              </h3>
              <p className="text-gray-400 text-sm mb-8">
                We&apos;ll confirm within 30 minutes.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          OTHER MODELS
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
                className="group flex items-center gap-5 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:border-primary/30 hover:bg-primary/3 transition-all duration-300 card-lift"
              >
                <div className="relative w-24 h-20 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                  <Image src={m.image} alt={m.name} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-montserrat font-black text-gray-900 text-base leading-tight mb-1">
                    {m.name}
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
    </>
  );
}
