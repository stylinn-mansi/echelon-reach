import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" }
    ],
    services: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Brand Management", href: "/services/brand-management" },
      { label: "Content Creation", href: "/services/content-creation" },
      { label: "Strategy & Planning", href: "/services/strategy-planning" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" }
    ],
    social: [
      { 
        label: "Instagram",
        href: "https://instagram.com/echelonreach.social",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        )
      },
      {
        label: "X (Twitter)",
        href: "https://x.com/echelonreach",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        )
      },
      {
        label: "Facebook",
        href: "https://facebook.com/echelon.reach",
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        )
      }
    ]
  };

  return (
    <footer className="relative bg-black text-white pt-20 pb-10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/black-fabric.png')] bg-cover bg-center" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif">Echelon Reach</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                Elevating brands through strategic digital marketing, compelling content creation, 
                and innovative social media solutions.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex space-x-6">
              {footerLinks.social.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transform hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-serif mb-8 relative">
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/20"></span>
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-serif mb-8 relative">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/20"></span>
            </h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mt-8 md:mt-0">
            <h3 className="text-xl font-serif mb-8 relative">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-white/20"></span>
            </h3>
            <ul className="space-y-4 text-white/60">
              <li>
                <a 
                  href="mailto:hello@echelonreach.com" 
                  className="hover:text-white transition-colors duration-300 text-lg flex items-center gap-2"
                >
                  <span className="w-5 h-5">✉</span>
                  hello@echelonreach.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919833632670" 
                  className="hover:text-white transition-colors duration-300 text-lg flex items-center gap-2"
                >
                  <span className="w-5 h-5">📞</span>
                  +91 98336 32670
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 mt-1">📍</span>
                <span>
                  Mumbai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-lg">
              © {currentYear} Echelon Reach. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-8">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white/60 hover:text-white text-lg transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection; 