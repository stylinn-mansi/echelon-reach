const BrandVoiceSection = () => {
  return <div className="relative py-24 bg-black">
      {/* Top heading with italic style */}
      <div className="container mx-auto px-4 mb-24">
        <h2 className="text-4xl md:text-6xl font-serif italic text-center max-w-4xl mx-auto">
          Make your brand <span className="italic">stand out from the competition.</span>
        </h2>
      </div>

      {/* Brand Voice Content */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif mb-2">RISE & SHINE</h3>
              <h2 className="text-4xl md:text-5xl font-serif">We'll help you find your <span className="italic">brand voice!</span></h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Crafting a distinct brand voice can feel overwhelming, but it's the key to building a powerful and consistent online presence. I get how crucial it is to establish a strong, recognizable voice that resonates with your audience.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              That's why I partner closely with our clients, diving deep into their brand's core values, messaging, and target audience. Together, we transform this understanding into a brand voice guide—a blueprint that details the language, tone, and messaging needed to captivate and connect with your audience across every social media platform. Let's turn your brand's voice into its most compelling asset.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-[url('/lovable-uploads/09d56598-d6f3-4dad-ace8-42138aa60a3f.png')] bg-cover bg-center" />
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-700 hover:bg-zinc-600 rounded-xl">
              <div className="w-48 h-48 rounded-full border-2 border-white/20 animate-spin-slow" style={{
              animationDuration: '20s'
            }}>
                <div className="w-full h-full relative">
                  {/* Add circular text effect here if needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default BrandVoiceSection;