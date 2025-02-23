import React from 'react';
import Navbar from '../../components/Navbar';
import FooterSection from '../../components/FooterSection';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-12">Privacy Policy</h1>
          
          <div className="prose prose-lg prose-invert">
            <p className="text-xl mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">Introduction</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                At Echelon Reach, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-white/70 leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                please do not access the site.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">Information We Collect</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We collect information that you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2 mb-4">
                <li>Fill out forms on our website</li>
                <li>Create an account</li>
                <li>Subscribe to our newsletter</li>
                <li>Request a consultation</li>
                <li>Contact us directly</li>
              </ul>
              <p className="text-white/70 leading-relaxed">
                This information may include your name, email address, phone number, and any other 
                information you choose to provide.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">How We Use Your Information</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you marketing and promotional communications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">Contact Us</h2>
              <p className="text-white/70 leading-relaxed">
                If you have questions or concerns about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy; 