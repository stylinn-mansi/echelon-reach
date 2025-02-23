import React from 'react';
import Navbar from '../../components/Navbar';
import FooterSection from '../../components/FooterSection';

const DigitalMarketing = () => {
  const features = [
    {
      title: "Social Media Management",
      description: "Strategic planning and execution of social media campaigns across all major platforms."
    },
    {
      title: "Paid Advertising",
      description: "Targeted ad campaigns on social media, search engines, and display networks."
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and analysis of campaign performance and ROI."
    },
    {
      title: "Content Strategy",
      description: "Development of engaging content strategies aligned with business goals."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Digital Marketing</h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Transform your online presence with our comprehensive digital marketing solutions. 
            We help businesses reach their target audience, drive engagement, and achieve measurable results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-8 text-center">Our Process</h2>
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Discovery & Analysis</h3>
                <p className="text-white/70 leading-relaxed">
                  We begin by understanding your business, goals, target audience, and current digital presence.
                  Our team conducts thorough market research and competitor analysis.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Strategy Development</h3>
                <p className="text-white/70 leading-relaxed">
                  Based on our findings, we create a customized digital marketing strategy 
                  that aligns with your objectives and budget.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Implementation</h3>
                <p className="text-white/70 leading-relaxed">
                  Our team executes the strategy across chosen platforms, continuously 
                  monitoring and optimizing for best results.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Reporting & Optimization</h3>
                <p className="text-white/70 leading-relaxed">
                  Regular reporting and analysis help us track progress and make 
                  data-driven adjustments to improve performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Get Started?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how our digital marketing services can help your business grow.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-black px-8 py-3 text-lg font-medium hover:bg-white/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default DigitalMarketing; 