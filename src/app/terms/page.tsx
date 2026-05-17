import React from 'react';

export const metadata = {
  title: 'Terms of Service | RYDEEX',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg-light pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-black text-4xl md:text-5xl text-primary uppercase tracking-tight mb-4">
            Terms of <span className="text-accent-red">Service</span>
          </h1>
          <div className="h-1 w-20 bg-accent-red mx-auto rounded-full mb-8" />
          <p className="text-gray-600 text-lg">Last updated: May 2026</p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold font-montserrat text-primary mb-4">1. Introduction</h2>
            <p className="leading-relaxed">Welcome to RYDEEX. These Terms of Service govern your use of our website, products, and services. By accessing or using our website, you agree to be bound by these terms.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold font-montserrat text-primary mb-4">2. Use of Services</h2>
            <p className="leading-relaxed">You agree to use our services only for lawful purposes and in accordance with these Terms of Service. You are responsible for ensuring that your use of the services does not violate any applicable laws or regulations. Unauthorized use of our website may give rise to a claim for damages and/or be a criminal offense.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold font-montserrat text-primary mb-4">3. Test Rides &amp; Bookings</h2>
            <p className="leading-relaxed">Test rides are subject to availability and verification of valid documentation (e.g., driver&apos;s license). RYDEEX reserves the right to refuse a test ride to anyone for safety or operational reasons.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-montserrat text-primary mb-4">4. Intellectual Property</h2>
            <p className="leading-relaxed">All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of RYDEEX and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold font-montserrat text-primary mb-4">5. Limitation of Liability</h2>
            <p className="leading-relaxed">RYDEEX shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services or products, except as required by law.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold font-montserrat text-primary mb-4">6. Contact Us</h2>
            <p className="leading-relaxed">If you have any questions about these Terms of Service, please contact us at <a href="mailto:support@rydeex.placeholder" className="text-accent-red font-bold hover:underline">support@rydeex.placeholder</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
