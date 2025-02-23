import React from 'react';
import Navbar from '../../components/Navbar';
import FooterSection from '../../components/FooterSection';

const StrategyPlanning = () => {
  const features = [
    {
      title: "Market Analysis",
      description: "In-depth research and analysis of market trends, competitor landscape, and target audience behavior."
    },
    {
      title: "Growth Strategy",
      description: "Customized strategies to achieve sustainable growth and measurable business objectives."
    },
    {
      title: "Campaign Planning",
      description: "Comprehensive campaign planning across multiple channels for maximum impact and ROI."
    },
    {
      title: "Performance Tracking",
      description: "Advanced analytics and reporting to measure success and optimize strategy performance."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Strategy & Planning</h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Develop data-driven strategies that align with your business goals and 
            create a roadmap for sustainable growth.
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
          <h2 className="text-3xl font-serif mb-8 text-center">Our Approach</h2>
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Research & Analysis</h3>
                <p className="text-white/70 leading-relaxed">
                  We conduct thorough research to understand your market position, competition, 
                  and opportunities for growth.
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
                  Based on our findings, we create a comprehensive strategy that aligns with 
                  your goals and maximizes your potential.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Implementation Planning</h3>
                <p className="text-white/70 leading-relaxed">
                  We develop detailed action plans and timelines to ensure successful 
                  strategy implementation across all channels.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Measurement & Refinement</h3>
                <p className="text-white/70 leading-relaxed">
                  We continuously monitor performance metrics and refine our approach 
                  to ensure optimal results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Plan Your Success?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Let's develop a strategy that takes your business to the next level.
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

export default StrategyPlanning; 