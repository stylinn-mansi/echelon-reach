import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import GradientCard from '@/components/ui/GradientCard';
import { motion } from 'framer-motion';
const About = () => {
  return (
    <section className="min-h-screen bg-black text-white">

      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Gradient Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.2
              }}
              animate={{
                y: [-10, 10],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }
              }}
            >
              <GradientCard
                image={{
                  src: '/vogue.jpg',
                  alt: 'Developer working'
                }}
                shadowColor="#0055FE"
                shadowWidth="285px"
                shadowHeight="50px"
                shadowBlur="60px"
                className="hover:scale-105 transition-transform"
              />
            </motion.div>
            

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <span className="text-white/80 font-syne">About Landin</span>
              </div>

              {/* Headings */}
              <div className="space-y-4">
                <h2 className="font-syne text-4xl lg:text-6xl font-bold">
                  Building Stronger<br />Brands
                </h2>
                <h3 className="font-syne text-3xl lg:text-5xl text-white/60">
                  Creating<br />Impressions!
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/70 text-lg leading-relaxed">
                Delivering high-quality, on-demand designs with precision.<br />
                Elevate your brand effortlessly, one snap at a time.
              </p>

              {/* Stats */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#0055FE]">✓</span>
                  <span className="text-white/80">From $0 to $500,000 in revenue.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#0055FE]">✓</span>
                  <span className="text-white/80">47% growth in new customers.</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <div className="flex">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-[#0055FE]">{star}</span>
                  ))}
                </div>
                <span className="text-white/60">200+ Agencies Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Variant Card Section */}
      
    </section>
  );
};

export default About; 