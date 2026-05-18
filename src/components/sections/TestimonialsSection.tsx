import { Star } from "lucide-react";

const testimonials = [
  { name: "Rahul S.", role: "Daily Commuter, Delhi", text: "RYDEEX X1 Pro completely transformed my commute. The range is exactly as advertised — never once ran out." },
  { name: "Ananya M.", role: "Tech Enthusiast", text: "The smart dashboard blew me away. GPS + Bluetooth and realtime analytics — feels like riding the future." },
  { name: "Vikram K.", role: "Delivery Partner", text: "Massive savings on fuel and near-zero maintenance. Best investment I made for my business this year." },
  { name: "Priya R.", role: "College Student", text: "Stylish, fast, silent. I get compliments every single day. The City Lite is perfect for campus life." },
  { name: "Aman T.", role: "Entrepreneur", text: "RS MAX is a beast. 105 km/h and the handling is surgical. Never going back to petrol." },
  { name: "Nisha D.", role: "Working Professional", text: "Charging at home overnight, zero fuel stops. My monthly transport cost dropped by 80%. Game changer." }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-16">
          <p className="eyebrow text-accent-red mb-3 mx-auto">Rider Stories</p>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-gray-900 mb-4 whitespace-nowrap">
            10,000+ riders. <span className="text-gradient-purple">One verdict.</span>
          </h2>
          <p className="text-gray-500 text-lg">Real stories from real riders across Greater Noida and beyond.</p>
        </div>
      </div>

      <div className="relative overflow-hidden">
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
  );
}
