import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GallerySection() {
  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-auto md:h-[600px]">
          {/* LEFT — tall */}
          <div data-aos="fade-right" className="relative group rounded-3xl overflow-hidden md:h-full h-80">
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
            <div data-aos="fade-left" data-aos-delay="80" className="relative group rounded-3xl overflow-hidden">
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
            <div data-aos="fade-left" data-aos-delay="160" className="relative group rounded-3xl overflow-hidden">
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
  );
}
