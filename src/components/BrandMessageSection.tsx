interface BrandMessageProps {
  heading?: string;
  subheading?: string;
  className?: string;
}
const  BrandMessageSection = ({ 
  heading = "Elevating your Brand,",
  subheading = "Amplifying your Reach!",
  className = ""
}: BrandMessageProps) => {
  return (
    <div className={`relative py-20 overflow-hidden ${className}`}>
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/white-fabric.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/10" />
      </div>

      {/* Decorative lines and content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-4xl">
            <div className="relative flex items-center justify-center">
              {/* Left line */}
              <div className="absolute left-0 w-1/4 h-px bg-black/70" />
              
              {/* Text content */}
              <div className="text-center px-6">
                <h2 className="font-serif italic text-3xl md:text-5xl text-black">
                  {heading}
                </h2>
                <h2 className="font-serif italic text-3xl md:text-5xl text-black mt-2">
                  {subheading}
                </h2>
              </div>
              
              {/* Right line */}
              <div className="absolute right-0 w-1/4 h-px bg-black/70" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandMessageSection; 