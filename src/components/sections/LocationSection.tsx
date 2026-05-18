import Link from "next/link";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";

const info = [
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
];

export default function LocationSection() {
  return (
    <section id="location" className="py-28 bg-bg-light">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <p className="eyebrow text-accent-red mb-3 mx-auto">Find Us</p>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-gray-900">
            Visit our showroom
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Info column */}
          <div data-aos="fade-right" className="space-y-5">
            {info.map((item) => (
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
  );
}
