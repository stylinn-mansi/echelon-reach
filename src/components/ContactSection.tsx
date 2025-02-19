
import { useEffect, useRef } from 'react';

const ContactSection = () => {
  const circleTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-spin-slow');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (circleTextRef.current) {
      observer.observe(circleTextRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 bg-black">
      {/* Top heading */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-5xl md:text-7xl font-serif italic text-center">
          Boost <span className="not-italic">traffic</span> • Increase <span className="not-italic">conversions</span>
        </h2>
      </div>

      {/* Contact Card Section */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/b44a6f7c-f048-4f1f-8785-28fceb4722cc.png" 
              alt="Digital Marketing Setup" 
              className="rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div ref={circleTextRef} className="w-48 h-48">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path 
                    id="circlePath" 
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
                    fill="none"
                  />
                  <text fill="white" className="text-xs">
                    <textPath href="#circlePath">
                      DIGITAL • MARKETING • BRAND • MANAGEMENT •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
          <div className="bg-white p-12 rounded-lg">
            <h3 className="text-3xl font-serif text-black mb-2">ELEVATE YOUR BRAND</h3>
            <h4 className="text-4xl font-script text-black mb-8">Get in touch</h4>
            <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-900 transition-colors">
              BOOK A CALL
            </button>
            <div className="mt-8 flex gap-6">
              <a href="#" className="text-black hover:opacity-75 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-black hover:opacity-75 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </a>
              <a href="#" className="text-black hover:opacity-75 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
