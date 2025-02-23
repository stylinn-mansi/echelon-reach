import React from 'react';
import Navbar from '../../components/Navbar';
import FooterSection from '../../components/FooterSection';

const BrandManagement = () => {
  const features = [
    {
      title: "Brand Strategy",
      description: "Develop comprehensive brand strategies that align with your business objectives and resonate with your target audience."
    },
    {
      title: "Visual Identity",
      description: "Create and maintain consistent visual elements across all platforms to strengthen brand recognition."
    },
    {
      title: "Brand Voice",
      description: "Establish a unique and consistent brand voice that reflects your values and connects with your audience."
    },
    {
      title: "Reputation Management",
      description: "Monitor and manage your brand's online presence to maintain a positive public perception."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Brand Management</h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Build and maintain a strong, consistent brand identity that resonates with your audience 
            and sets you apart from the competition.
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
                <h3 className="text-xl font-serif mb-2">Brand Audit</h3>
                <p className="text-white/70 leading-relaxed">
                  We analyze your current brand positioning, market perception, and competitive landscape 
                  to identify opportunities and challenges.
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
                  Based on our findings, we create a comprehensive brand strategy that includes 
                  positioning, messaging, and visual guidelines.
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
                  We roll out the brand strategy across all channels, ensuring consistency 
                  and maintaining brand integrity.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Monitoring & Optimization</h3>
                <p className="text-white/70 leading-relaxed">
                  We continuously monitor brand performance and make data-driven adjustments 
                  to optimize brand impact and reach.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Build Your Brand?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Let's create a powerful brand identity that resonates with your audience and drives growth.
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

export default BrandManagement; 