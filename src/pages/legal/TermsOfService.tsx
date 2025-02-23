import React from 'react';
import Navbar from '../../components/Navbar';
import FooterSection from '../../components/FooterSection';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-12">Terms of Service</h1>
          
          <div className="prose prose-lg prose-invert">
            <p className="text-xl mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">1. Agreement to Terms</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                By accessing or using Echelon Reach's services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of the terms, you may not access our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">2. Services</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Echelon Reach provides digital marketing, brand strategy, and content creation services. 
                We reserve the right to modify, suspend, or discontinue any part of our services at any time.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">3. Intellectual Property</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                All content, features, and functionality of our services are owned by Echelon Reach 
                and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">4. User Responsibilities</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>Providing accurate information</li>
                <li>Maintaining the confidentiality of your account</li>
                <li>All activities that occur under your account</li>
                <li>Complying with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">5. Limitation of Liability</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Echelon Reach shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages resulting from your use or inability to use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">6. Changes to Terms</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes by posting the new Terms of Service on this page.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">Contact Us</h2>
              <p className="text-white/70 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-white/70">
                <p>Echelon Reach</p>
                <p>Mumbai, India</p>
                <p>Email: hello@echelonreach.com</p>
                <p>Phone: +91 98336 32670</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default TermsOfService; 