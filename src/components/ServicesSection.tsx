const ServicesSection = () => {
  const services = [
    {
      title: "Digital",
      subTitle: "Marketing",
      subtitle2: "LET'S TALK",
      image: "/services/instagram.jpg",
      label: "INSTAGRAM"
    },
    {
      title: "Brand",
      subTitle: "Management",
      image: "/services/brand_managment.jpg"
    },
    {
      title: "Creative",
      subTitle: "Services",
      image: "/services/creative_service.jpg"
    },
    {
      title: "Strategy",
      subTitle: "& Communication",
      image: "/services/strategy.jpg"
    }
  ];

  return (
    <div id="services" className="relative py-32 bg-[url('/white-fabric.jpg')] bg-cover bg-center">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start">
          <h2 className="text-black backdrop:text-5xl md:text-4xl font-serif mb-8 md:mb-0">
            Our <span className="italic text-black text-4xl">services</span>
          </h2>
          <p className="text-gray-800 text-lg max-w-xl">
            From brand strategy and design to content creation and social media management, 
            we provide a comprehensive suite of services that are tailored to meet 
            the unique needs of each client.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <div className="absolute top-8 left-8">
                      <p className="text-white text-sm tracking-widest">{service.subtitle2}</p>
                      <h3 className="text-white text-4xl font-bold tracking-wide">{service.label}</h3>
                    </div>
                  )}
                </div>

                {/* Title Section */}
                <div className="mt-6 flex items-center space-x-4">
                  <div>
                    <h3 className="text-2xl text-black font-serif">
                      {service.title}
                      <br />
                      <span className="font-serif">{service.subTitle}</span>
                    </h3>
                  </div>
                  
                  {/* Arrow */}
                  {index < services.length - 1 && (
                    <div className="ml-auto transform -rotate-45">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </div>
                  )}
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
