const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/black-fabric.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-script text-7xl md:text-8xl text-white mb-1 animate-fade-up">
          Echelon Reach
        </h1>
        <p className="mt-1 md:text-xl lg:text-2xl sm:text-3xl text-gray-200 font-serif max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Ignite your startup's potential with Us
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
