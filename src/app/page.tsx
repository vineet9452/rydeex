import Image from "next/image";
import Link from "next/link";
import {
  Leaf, Wrench, LayoutDashboard, Star,
  MapPin, Clock, Phone, ArrowRight, CheckCircle2, Zap, Shield, Award
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import HeroSlider from "@/components/HeroSlider";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "RYDEEX Showroom Greater Noida",
        "image": "https://placehold.co/800x600/121212/FFF?text=RYDEEX+Showroom",
        "@id": "https://rydeex.placeholder/#business",
        "url": "https://rydeex.placeholder",
        "telephone": "+919876543210",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Knowledge Park III",
          "addressLocality": "Greater Noida",
          "postalCode": "201310",
          "addressCountry": "IN"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "20:00"
        }
      },
      {
        "@type": "Product",
        "name": "RYDEEX X1 Pro",
        "image": "https://placehold.co/600x400/121212/FFF?text=RYDEEX+X1",
        "description": "Premium High-Speed electric scooter with zero emissions.",
        "brand": { "@type": "Brand", "name": "RYDEEX" }
      }
    ]
  };

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

  const features = [
    {
      num: "01",
      icon: <Leaf size={28} />,
      title: "Zero Emissions",
      desc: "Protect your city's air. Ride electric and cut your daily carbon footprint without sacrificing speed or range.",
      color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-200"
    },
    {
      num: "02",
      icon: <Wrench size={28} />,
      title: "Low Maintenance",
      desc: "No oil changes. No spark plugs. Direct drive motors mean fewer parts and dramatically lower running costs.",
      color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200"
    },
    {
      num: "03",
      icon: <LayoutDashboard size={28} />,
      title: "Smart Dashboard",
      desc: "GPS navigation, Bluetooth, ride analytics — all on a full-color touch display built for the connected rider.",
      color: "text-primary", bg: "bg-indigo-50", border: "border-indigo-200"
    }
  ];

  const stats = [
    { value: "160", unit: "KM", label: "Max Range" },
    { value: "105", unit: "KM/H", label: "Top Speed" },
    { value: "4.9", unit: "★", label: "Avg Rating" },
    { value: "3", unit: "+", label: "Award-Winning Models" }
  ];

  const testimonials = [
    { name: "Rahul S.", role: "Daily Commuter, Delhi", text: "RYDEEX X1 Pro completely transformed my commute. The range is exactly as advertised — never once ran out." },
    { name: "Ananya M.", role: "Tech Enthusiast", text: "The smart dashboard blew me away. GPS + Bluetooth and realtime analytics — feels like riding the future." },
    { name: "Vikram K.", role: "Delivery Partner", text: "Massive savings on fuel and near-zero maintenance. Best investment I made for my business this year." },
    { name: "Priya R.", role: "College Student", text: "Stylish, fast, silent. I get compliments every single day. The City Lite is perfect for campus life." },
    { name: "Aman T.", role: "Entrepreneur", text: "RS MAX is a beast. 105 km/h and the handling is surgical. Never going back to petrol." },
    { name: "Nisha D.", role: "Working Professional", text: "Charging at home overnight, zero fuel stops. My monthly transport cost dropped by 80%. Game changer." }
  ];

  const brandValues = [
    "ZERO EMISSIONS", "ZERO COMPROMISE", "RIDE SMARTER",
    "CHARGE FASTER", "BUILT FOR INDIA", "BUILT FOR THE FUTURE"
  ];
  const doubled = [...brandValues, ...brandValues];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 01. HERO – Dynamic Slider */}
      <HeroSlider />

      {/* ─────────────────────────────────────────
          02. BRAND VALUES MARQUEE
      ───────────────────────────────────────── */}
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

      {/* ─────────────────────────────────────────
          03. FEATURES / WHY CHOOSE EV
      ───────────────────────────────────────── */}
      <section id="features" className="py-28 bg-white">
        <div className="container mx-auto px-4">
          {/* Section header */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className={`relative p-8 rounded-3xl border ${f.border} bg-white card-lift group`}
              >
                {/* Number */}
                <span className="absolute top-6 right-8 font-montserrat font-black text-5xl text-gray-100 select-none group-hover:text-gray-150 transition-colors">
                  {f.num}
                </span>
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl ${f.bg} ${f.color} mb-6`}>
                  {f.icon}
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-3 text-gray-900">{f.title}</h3>
                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
                {/* Accent bar */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full rounded-b-3xl transition-all duration-500 ${f.bg.replace('bg-', 'bg-').replace('-50', '-400')}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          04. OUR LINEUP (DARK)
      ───────────────────────────────────────── */}
      <section id="models" className="py-28 bg-[#0a0a0f] relative overflow-hidden">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />
        {/* Purple glow top-left */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        {/* Red glow bottom-right */}
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
                {/* Tag */}
                {model.tag && (
                  <div className={`absolute top-4 left-4 z-10 ${model.tagColor} font-bold px-3 py-1 rounded-full text-xs shadow-lg`}>
                    {model.tag}
                  </div>
                )}
                {/* Highlight pill */}
                <div className="absolute top-4 right-4 z-10 bg-white/10 text-white/60 border border-white/10 font-semibold px-3 py-1 rounded-full text-xs">
                  {model.highlight}
                </div>

                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-montserrat font-black text-xl text-white mb-4">{model.name}</h3>

                  {/* Spec pills */}
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

                  {/* CTA row */}
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

      {/* ─────────────────────────────────────────
          05. GALLERY – EDITORIAL LAYOUT
      ───────────────────────────────────────── */}
      <section id="gallery" className="py-28 bg-bg-light">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <div>
              <p className="eyebrow text-accent-red mb-3">RYDEEX In Action</p>
              <h2 className="font-montserrat font-black text-4xl md:text-5xl text-gray-900 uppercase leading-tight">
                The City Is<br />
                <span className="text-gradient-red">Yours.</span>
              </h2>
            </div>
            <div className="text-right">
              <p className="text-gray-500 max-w-xs text-base">
                Experience the ride from every angle. Built for the streets, designed for attention.
              </p>
              <Link
                href="#test-ride"
                className="inline-flex items-center gap-2 mt-4 text-accent-red font-bold hover:gap-3 transition-all duration-300"
              >
                Join The Movement <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Editorial grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-auto md:h-[600px]">
            {/* LEFT — tall */}
            <div
              data-aos="fade-right"
              className="relative group rounded-3xl overflow-hidden md:h-full h-80"
            >
              <Image
                src="/reels/rider.png"
                alt="City Cruising"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="eyebrow text-accent-yellow mb-2 block">City Cruising</span>
                <h3 className="font-montserrat font-black text-3xl text-white">Own Every Street</h3>
              </div>
            </div>

            {/* RIGHT — two stacked */}
            <div className="grid grid-rows-2 gap-4 md:gap-6 h-80 md:h-full">
              <div
                data-aos="fade-left"
                data-aos-delay="80"
                className="relative group rounded-3xl overflow-hidden"
              >
                <Image
                  src="/reels/dashboard.png"
                  alt="Smart Dashboard"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="eyebrow text-accent-yellow mb-1 block">Smart Dashboard</span>
                  <h3 className="font-montserrat font-black text-xl text-white">Next-Gen Controls</h3>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="160"
                className="relative group rounded-3xl overflow-hidden"
              >
                <Image
                  src="/reels/charging.png"
                  alt="HyperCharge"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="eyebrow text-accent-yellow mb-1 block">HyperCharge</span>
                  <h3 className="font-montserrat font-black text-xl text-white">Charge Smarter</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          06. STATS STRIP
      ───────────────────────────────────────── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #ffffff 0%, transparent 60%), radial-gradient(circle at 80% 50%, #dd2b1c 0%, transparent 60%)" }}
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
                  <span className="font-montserrat font-black text-5xl md:text-6xl text-white leading-none">{s.value}</span>
                  <span className="font-montserrat font-black text-2xl text-accent-yellow mb-1">{s.unit}</span>
                </div>
                <p className="text-white/60 font-semibold text-sm tracking-wide uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          07. TESTIMONIALS MARQUEE
      ───────────────────────────────────────── */}
      <section id="testimonials" className="py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <p className="eyebrow text-accent-red mb-3">Rider Stories</p>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-gray-900 mb-4">
              10,000+ Riders.<br />
              <span className="text-gradient-purple">One Verdict.</span>
            </h2>
            <p className="text-gray-500 text-lg">Real stories from real riders across Greater Noida and beyond.</p>
          </div>
        </div>

        {/* Marquee row */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee gap-6 px-6">
            {[...testimonials, ...testimonials].map((review, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 bg-gray-50 border border-gray-100 p-7 rounded-3xl shadow-sm"
              >
                <div className="flex gap-0.5 text-accent-yellow mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={15} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic text-sm leading-relaxed mb-5">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-red flex items-center justify-center text-white font-bold text-sm">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          08. TEST RIDE CTA – DARK SPLIT
      ───────────────────────────────────────── */}
      <section id="test-ride" className="bg-[#0a0a0f] relative overflow-hidden">
        {/* Glow orbs */}
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

              {/* Trust badges */}
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

            {/* Right – form on white card */}
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

      {/* ─────────────────────────────────────────
          09. LOCATION
      ───────────────────────────────────────── */}
      <section id="location" className="py-28 bg-bg-light">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-16">
            <p className="eyebrow text-accent-red mb-3">Find Us</p>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-gray-900">
              Visit Our Showroom
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Info column */}
            <div data-aos="fade-right" className="space-y-5">
              {[
                {
                  icon: <MapPin size={22} />,
                  title: "Address",
                  body: "Knowledge Park III, Plot No. 42,\nGreater Noida, UP 201310, India",
                  color: "bg-primary/10 text-primary"
                },
                {
                  icon: <Clock size={22} />,
                  title: "Operating Hours",
                  body: "Mon – Sat: 9:00 AM – 8:00 PM\nSunday: 10:00 AM – 6:00 PM",
                  color: "bg-emerald-100 text-emerald-600"
                },
                {
                  icon: <Phone size={22} />,
                  title: "Contact",
                  body: "Sales: +91 98765 43210\nSupport: support@rydeex.com",
                  color: "bg-accent-red/10 text-accent-red"
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm card-lift"
                >
                  <div className={`p-3 rounded-xl ${item.color} flex-shrink-0 self-start`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm whitespace-pre-line leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}

              {/* CTA */}
              <Link
                href="#test-ride"
                className="flex items-center justify-center gap-2 w-full bg-primary text-white font-bold py-4 rounded-2xl hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(60,43,153,0.4)] transition-all duration-300 mt-2"
              >
                Book Your Visit <ArrowRight size={18} />
              </Link>
            </div>

            {/* Map */}
            <div
              data-aos="fade-left"
              className="h-[500px] rounded-3xl overflow-hidden shadow-xl border border-gray-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112224.23270417631!2d77.42621741549444!3d28.472718817757918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1f92e423587%3A0xe21f5ebef7052994!2sKnowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703080000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RYDEEX Showroom Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
