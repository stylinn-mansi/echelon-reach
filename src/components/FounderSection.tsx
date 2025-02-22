import React from 'react';
import { Link } from 'react-router-dom';

const FounderSection = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("/black-fabric.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content Container */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Meet the Founder Text */}
            <h3 className="text-white/80 tracking-widest uppercase text-sm sm:text-base">
              MEET THE FOUNDER
            </h3>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white leading-tight">
              Ready to let your<br />
              socials <span className="italic">shine</span>?
            </h2>

            {/* Description Text */}
            <div className="space-y-6 text-white/80 text-lg sm:text-xl leading-relaxed">
              <p>
                That's right—this isn't about me. It's about your brand, your vision, your
                story. Because in a world where attention is the new currency, what
                matters most is how you connect with your audience.
              </p>
              <p>
                Imagine your brand as a conversation. Not a one-way broadcast, but a dynamic, engaging
                dialogue that pulls people in and makes them want to stay. At Echelon
                Reach, we don't just manage your brand—we shape your story, turning
                every interaction into an opportunity to captivate and convert.
              </p>
              <p>
                We believe in doing things differently. It's not about following trends; it's
                about setting them. It's not about shouting louder; it's about speaking
                clearer. And it's definitely not about blending in; it's about standing out.
                So, let's break the mold. Let's create something that not only gets noticed
                but gets remembered. This is your brand's story—let's make sure it's one
                worth telling.
              </p>
            </div>

            {/* Services Button */}
            <Link 
              to="#services" 
              className="inline-block border border-white/20 text-white px-8 py-3 text-lg tracking-wider hover:bg-white/10 transition-colors duration-300"
            >
              OUR SERVICES
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
              <img
                src="/founder-image.png"
                alt="Founder"
                className="w-full h-full object-cover"
              />
              {/* Signature Overlay */}
              <div className="absolute bottom-8 right-8">
                <h2 className="font-playfair text-4xl text-white italic drop-shadow-lg">
                  I'm Mansi
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection; 