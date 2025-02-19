
const BrandVoiceSection = () => {
  return (
    <div className="relative py-24 bg-black">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black opacity-50" />
      
      {/* Top heading with italic style */}
      <div className="container mx-auto px-4 mb-24 relative">
        <h2 className="text-4xl md:text-6xl font-serif italic text-center max-w-4xl mx-auto gradient-text">
          Make your brand <span className="italic">stand out from the competition.</span>
        </h2>
      </div>

      {/* Brand Voice Content */}
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif mb-2 hover-scale inline-block">RISE & SHINE</h3>
              <h2 className="text-4xl md:text-5xl font-serif">We'll help you find your <span className="italic gradient-text">brand voice!</span></h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl glass-effect p-6 rounded-lg">
                Crafting a distinct brand voice can feel overwhelming, but it's the key to building a powerful and consistent online presence. I get how crucial it is to establish a strong, recognizable voice that resonates with your audience.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                That's why I partner closely with our clients, diving deep into their brand's core values, messaging, and target audience. Together, we transform this understanding into a brand voice guide—a blueprint that details the language, tone, and messaging needed to captivate and connect with your audience across every social media platform.
              </p>
            </div>
            <button className="px-8 py-3 bg-white text-black rounded hover:bg-gray-200 transition-colors duration-300">
              Learn More
            </button>
          </div>
          <div className="relative group">
            <div className="aspect-square rounded-full bg-[url('/lovable-uploads/09d56598-d6f3-4dad-ace8-42138aa60a3f.png')] bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border-2 border-white/20 animate-spin-slow group-hover:border-white/40 transition-colors duration-300">
                <div className="w-full h-full relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandVoiceSection;
