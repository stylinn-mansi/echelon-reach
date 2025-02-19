const BrandVoiceSection = () => {
  return (
    <div id="brand-voice" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/black-fabric.png')] bg-cover bg-center opacity-50" />
      </div>

      {/* Brand Voice Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif tracking-wider">
                RISE & SHINE
              </h3>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif">
                We'll help you find your{" "}
                <span className="italic font-light">brand voice!</span>
              </h2>
            </div>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              Crafting a distinct brand voice can feel overwhelming, but it's
              the key to building a powerful and consistent online presence. I
              get how crucial it is to establish a strong, recognizable voice
              that resonates with your audience.
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              That's why I partner closely with our clients, diving deep into
              their brand's core values, messaging, and target audience.
              Together, we transform this understanding into a brand voice
              guide—a blueprint that details the language, tone, and messaging
              needed to captivate and connect with your audience across every
              social media platform. Let's turn your brand's voice into its most
              compelling asset.
            </p>
          </div>

          {/* Right Content - Image with Rotating Text */}
          <div className="relative aspect-auto">
            <div className="w-full h-full overflow-hidden">
              <img
                src="vogue.jpg"
                alt="Brand Voice"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Rotating Text Ring */}
            <div className="absolute -bottom-20 -right-20 flex items-center justify-center">
              <div className="w-[110%] h-[110%] animate-spin-slow">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <path
                      id="circle"
                      d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="text-[8px] uppercase tracking-[0.3em] fill-white">
                    <textPath xlinkHref="#circle">
                      Digital Marketing • Brand Management • Digital Marketing •
                      Brand Management •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandVoiceSection;
