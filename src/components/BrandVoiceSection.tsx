const BrandVoiceSection = () => {
  return (
    <div id="brand-voice" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/black-fabric.png')] bg-cover bg-center opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />
      </div>
      
      {/* Brand Voice Content */}
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-light tracking-[0.2em] uppercase text-white/90">
                RISE & SHINE
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight">
                We'll help you find your <span className="italic font-light">brand voice!</span>
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light tracking-wide">
                Crafting a distinct brand voice can feel overwhelming, but it's the key to building a powerful and consistent online presence. I get how crucial it is to establish a strong, recognizable voice that resonates with your audience.
              </p>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light tracking-wide">
                That's why I partner closely with our clients, diving deep into their brand's core values, messaging, and target audience. Together, we transform this understanding into a brand voice guide—a blueprint that details the language, tone, and messaging needed to captivate and connect with your audience across every social media platform. Let's turn your brand's voice into its most compelling asset.
              </p>
            </div>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-light tracking-wider overflow-hidden transition-all duration-300">
              <span className="absolute inset-0 border border-white/30 group-hover:border-white/60 transition-colors duration-300"></span>
              <span className="relative text-white group-hover:text-white/90 transition-colors duration-300">
                DISCOVER MORE
              </span>
            </button>
          </div>

          {/* Right Content - Image with Rotating Text */}
          <div className="relative aspect-square">
            {/* Image Container */}
            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
              <img 
                src="vogue.jpg" 
                alt="Brand Voice" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Rotating Text Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[110%] h-[110%] animate-spin-slow">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="circle"
                      d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="text-[7px] uppercase tracking-[0.35em] fill-white/90">
                    <textPath xlinkHref="#circle">
                      Digital Marketing • Brand Management • Digital Marketing • Brand Management •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 border border-white/10 rounded-full"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 border border-white/5 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandVoiceSection;