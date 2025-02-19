
const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/75fbb641-bb8c-40ef-9609-abf306d701b8.png')] bg-cover bg-center opacity-50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-script text-6xl md:text-8xl text-white mb-6 animate-fade-up">
          Echelon Reach
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-serif animate-fade-up" style={{ animationDelay: "0.2s" }}>
          LONDON
        </p>
        <p className="mt-6 text-lg md:text-xl text-gray-200 font-serif max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Ignite your startup's potential with Us
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
