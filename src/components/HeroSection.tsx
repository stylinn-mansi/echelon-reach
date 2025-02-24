import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#873CDF]/20 to-transparent" />
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover blur-xl"
      >
        <source src="/video/background_video.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              NEW
            </span>
            <span className="text-white/80 text-sm">No.1 Studio of 2025</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-syne text-4xl md:text-7xl lg:text-8xl font-bold text-transparent  mb-8">
            <span className="bg-clip-text bg-gradient-to-r from-[#8D70ED] to-[#873CDF]">
              Premium{" "}
            </span>

            <span className="text-white">Agency for Creatives.</span>
          </h1>

          {/* Description */}
          <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            We specialize in crafting unique digital presence that help
            businesses grow and stand out in their industries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" showArrow>
              Explore Our Service
            </Button>
            <Button variant="outline" size="lg">
              What is Landin?
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroSection;
