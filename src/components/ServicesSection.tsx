const ServicesSection = () => {
  const services = [
    {
      title: "Digital Marketing",
      image: "/services/instagram.jpg",
      subtitle: "LET'S TALK",
      label: "INSTAGRAM",
      description: "Elevate your brand's digital presence with our strategic marketing solutions."
    },
    {
      title: "Brand Management",
      image: "/services/brand_management.jpg",
      description: "Build and maintain a strong, consistent brand identity that resonates."
    },
    {
      title: "Creative Services",
      image: "/services/creative_service.jpg",
      description: "Transform your ideas into captivating visual experiences."
    },
    {
      title: "Strategy & Communication",
      image: "/services/strategy.jpg",
      description: "Develop effective strategies that drive meaningful engagement."
    }
  ];

  return (
    <div id="services" className="relative py-32 lg:py-40">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/white-fabric.jpg')] bg-cover bg-center opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-20 lg:mb-28">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif">
              Our <span className="italic text-black">services</span>
            </h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light max-w-3xl mx-auto">
              From brand strategy and design to content creation and social media management, 
              we provide a comprehensive suite of services that are tailored to meet 
              the unique needs of each client.
            </p>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service Card */}
              <div className="relative overflow-hidden">
                {/* Image Container */}
                <div className="aspect-[3/4] relative overflow-hidden bg-gray-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
                  
                  {/* Label (Only for Instagram) */}
                  {service.label && (
                    <div className="absolute top-8 left-8 space-y-2">
                      <p className="text-white text-sm tracking-[0.2em] font-light">
                        {service.subtitle}
                      </p>
                      <h3 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
                        {service.label}
                      </h3>
                    </div>
                  )}
                </div>

                {/* Title Section */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif text-black group-hover:text-black/80 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Arrow */}
                    {index < services.length - 1 && (
                      <div className="ml-4 transform -rotate-45 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
