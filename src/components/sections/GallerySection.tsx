import Image from "next/image";

export default function GallerySection() {
  return (
    <section id="gallery" className="py-28 bg-bg-light">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="flex flex-col items-center text-center mb-14 gap-4">
          <p className="eyebrow text-accent-red">RYDEEX In Action</p>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-gray-900 leading-tight">
            The city is <span className="text-gradient-red">yours.</span>
          </h2>
          <p className="text-gray-500 text-base">
            Experience the ride from every angle. Built for the streets, designed for attention.
          </p>
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
              <span className="eyebrow text-accent-yellow mb-2">City Cruising</span>
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
                <span className="eyebrow text-accent-yellow mb-1">Smart Dashboard</span>
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
                <span className="eyebrow text-accent-yellow mb-1">HyperCharge</span>
                <h3 className="font-montserrat font-black text-xl text-white">Charge Smarter</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
