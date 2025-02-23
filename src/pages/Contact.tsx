import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-12">Get in Touch</h1>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
              <div className="space-y-4 text-lg">
                <p className="flex items-center gap-3">
                  <span className="w-6">📍</span>
                  Mumbai, India
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-6">📞</span>
                  <a href="tel:+919833632670" className="hover:text-white/80 transition-colors">
                    +91 98336 32670
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-6">✉</span>
                  <a href="mailto:hello@echelonreach.com" className="hover:text-white/80 transition-colors">
                    hello@echelonreach.com
                  </a>
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif mb-6">Follow Us</h2>
              <div className="space-y-4 text-lg">
                <a 
                  href="https://instagram.com/echelonreach.social" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white/80 transition-colors"
                >
                  <span className="w-6">📸</span>
                  @echelonreach.social
                </a>
                <a 
                  href="https://facebook.com/echelon.reach" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white/80 transition-colors"
                >
                  <span className="w-6">👥</span>
                  @echelon.reach
                </a>
                <a 
                  href="https://x.com/echelonreach" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white/80 transition-colors"
                >
                  <span className="w-6">🐦</span>
                  @echelonreach
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-serif mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none focus:border-white/40"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none focus:border-white/40"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none focus:border-white/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={6}
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-2 focus:outline-none focus:border-white/40"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-white text-black px-8 py-3 rounded font-medium hover:bg-white/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Contact; 