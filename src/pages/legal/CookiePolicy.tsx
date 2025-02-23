import React from 'react';
import Navbar from '../../components/Navbar';
import FooterSection from '../../components/FooterSection';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-12">Cookie Policy</h1>
          
          <div className="prose prose-lg prose-invert">
            <p className="text-xl mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">What Are Cookies</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work more efficiently and provide useful information to website owners.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">How We Use Cookies</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2 mb-4">
                <li>To provide essential website functionality</li>
                <li>To remember your preferences</li>
                <li>To analyze and improve our website performance</li>
                <li>To personalize your experience</li>
                <li>To provide relevant marketing content</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif mb-2">Essential Cookies</h3>
                  <p className="text-white/70 leading-relaxed">
                    These cookies are necessary for the website to function properly and cannot be disabled.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Analytics Cookies</h3>
                  <p className="text-white/70 leading-relaxed">
                    Help us understand how visitors interact with our website by collecting anonymous information.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2">Marketing Cookies</h3>
                  <p className="text-white/70 leading-relaxed">
                    Used to track visitors across websites to enable us to display relevant advertisements.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">Managing Cookies</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                <li>View cookies stored on your computer</li>
                <li>Allow, block, or delete cookies</li>
                <li>Set preferences for certain websites</li>
                <li>Use private browsing mode</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">Changes to This Policy</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                We may update our Cookie Policy from time to time. We will notify you of any changes by 
                posting the new policy on this page.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-serif mb-6">Contact Us</h2>
              <p className="text-white/70 leading-relaxed">
                If you have any questions about our Cookie Policy, please contact us at:
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

export default CookiePolicy; 