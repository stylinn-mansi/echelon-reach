
const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/75fbb641-bb8c-40ef-9609-abf306d701b8.png')] bg-cover bg-center opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="relative z-10 text-center px-4 space-y-8">
        <h1 className="font-script text-6xl md:text-8xl text-white mb-6 animate-fade-up hover-scale">
          Echelon Reach
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-serif animate-fade-up glass-effect inline-block px-6 py-2 rounded-full" style={{ animationDelay: "0.2s" }}>
          LONDON
        </p>
        <p className="mt-6 text-lg md:text-xl text-gray-200 font-serif max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Ignite your startup's potential with Us
        </p>
        <button className="mt-8 px-8 py-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          Discover More
        </button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
