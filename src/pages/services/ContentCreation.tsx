import React from 'react';
import Navbar from '../../components/Navbar';
import FooterSection from '../../components/FooterSection';

const ContentCreation = () => {
  const features = [
    {
      title: "Social Media Content",
      description: "Engaging posts, stories, and reels that capture attention and drive engagement across platforms."
    },
    {
      title: "Copywriting",
      description: "Compelling website copy, blog posts, and marketing materials that tell your brand story."
    },
    {
      title: "Visual Content",
      description: "Professional photography, graphics, and video content that elevates your brand presence."
    },
    {
      title: "Content Strategy",
      description: "Data-driven content planning that aligns with your marketing goals and audience interests."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">Content Creation</h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Create compelling content that engages your audience, tells your story, 
            and drives meaningful connections across all platforms.
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
                <h3 className="text-xl font-serif mb-2">Content Strategy</h3>
                <p className="text-white/70 leading-relaxed">
                  We develop a comprehensive content strategy aligned with your brand voice, 
                  target audience, and business objectives.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Content Creation</h3>
                <p className="text-white/70 leading-relaxed">
                  Our creative team produces high-quality content that engages your audience 
                  and reflects your brand identity.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Distribution</h3>
                <p className="text-white/70 leading-relaxed">
                  We distribute your content across relevant channels to maximize reach 
                  and engagement with your target audience.
                </p>
              </div>
            </div>

            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Analysis & Optimization</h3>
                <p className="text-white/70 leading-relaxed">
                  We track content performance and optimize our strategy based on data-driven insights 
                  to ensure maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-serif mb-6">Ready to Create Amazing Content?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Let's work together to create content that captivates your audience and drives results.
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

export default ContentCreation; 