import React from 'react';

export const metadata = {
  title: 'Privacy Policy | RYDEEX',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg-light pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-primary uppercase tracking-tight mb-4">
            Privacy <span className="text-accent-red">Policy</span>
          </h1>
          <div className="h-1 w-20 bg-accent-red mx-auto rounded-full mb-8" />
          <p className="text-gray-600 text-lg">Last updated: May 2026</p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold font-montserrat text-primary mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed mb-4">We collect information that you provide directly to us, such as when you book a test ride, request support, or subscribe to our newsletter. This may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Location data for delivery or nearest showroom finding</li>
              <li>Vehicle preferences and communication records</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold font-montserrat text-primary mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your test ride bookings and purchases</li>
              <li>Communicate with you regarding products, services, and promotions</li>
              <li>Improve our website and customer service</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold font-montserrat text-primary mb-4">3. Data Security</h2>
            <p className="leading-relaxed">We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-montserrat text-primary mb-4">4. Sharing Your Information</h2>
            <p className="leading-relaxed">We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties without your consent, except to trusted third parties who assist us in operating our website or servicing you, so long as those parties agree to keep this information confidential.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold font-montserrat text-primary mb-4">5. Your Rights</h2>
            <p className="leading-relaxed">You have the right to access, correct, or delete your personal information. You may also opt-out of receiving promotional communications at any time by following the instructions in those messages.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
