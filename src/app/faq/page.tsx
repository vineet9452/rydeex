import React from 'react';

export const metadata = {
  title: 'Frequently Asked Questions | RYDEEX',
};

export default function FAQPage() {
  const faqs = [
    {
      question: "How far can I travel on a single charge?",
      answer: "The range depends on the model. The RYDEEX City Lite offers up to 90 km, the X1 Pro offers up to 120 km, and our performance model, the RS MAX, can reach up to 160 km on a single charge."
    },
    {
      question: "How long does it take to fully charge?",
      answer: "Using our standard home charger, it typically takes 4-5 hours to reach a full charge from 0%. With our HyperCharge network or an upgraded fast charger, you can reach 80% in just 45 minutes."
    },
    {
      question: "Do I need a special license to ride a RYDEEX scooter?",
      answer: "Yes, you need a valid two-wheeler driving license to ride our models, as they are high-speed electric vehicles capable of exceeding 25 km/h."
    },
    {
      question: "What is the warranty period?",
      answer: "All RYDEEX scooters come with a comprehensive 3-year or 40,000 km warranty (whichever comes first) on the battery and motor. The vehicle frame has a 5-year warranty."
    },
    {
      question: "Can I charge the scooter at home?",
      answer: "Absolutely. All our scooters come with a portable home charger that plugs into any standard 15A wall socket."
    },
    {
      question: "How do I book a test ride?",
      answer: "You can book a test ride directly through our website by clicking the 'Book a Test Ride' button, or by visiting our Greater Noida showroom."
    }
  ];

  return (
    <main className="min-h-screen bg-bg-light pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-primary uppercase tracking-tight mb-4">
            Frequently Asked <span className="text-accent-red">Questions</span>
          </h1>
          <div className="h-1 w-20 bg-accent-red mx-auto rounded-full mb-8" />
          <p className="text-gray-600 text-lg">Everything you need to know about joining the RYDEEX revolution.</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold font-montserrat text-primary mb-3 flex items-start gap-3">
                <span className="text-accent-red font-black">Q.</span> {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed pl-8">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold font-montserrat text-primary mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">Our team is ready to help you with any other inquiries.</p>
          <a href="/#test-ride" className="inline-block bg-accent-red text-white font-bold py-3 px-8 rounded-full hover:bg-primary hover:scale-105 transition-all duration-300">
            Contact Support
          </a>
        </div>
      </div>
    </main>
  );
}
