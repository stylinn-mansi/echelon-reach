
const ServicesSection = () => {
  const services = [
    {
      title: "Digital Marketing",
      image: "/lovable-uploads/09d56598-d6f3-4dad-ace8-42138aa60a3f.png",
      description: "Strategic digital marketing solutions to boost your online presence",
    },
    {
      title: "Brand Management",
      image: "/lovable-uploads/09d56598-d6f3-4dad-ace8-42138aa60a3f.png",
      description: "Comprehensive brand management to elevate your identity",
    },
    {
      title: "Creative Services",
      image: "/lovable-uploads/09d56598-d6f3-4dad-ace8-42138aa60a3f.png",
      description: "Innovative creative solutions that capture attention",
    },
    {
      title: "Strategy & Communication",
      image: "/lovable-uploads/09d56598-d6f3-4dad-ace8-42138aa60a3f.png",
      description: "Expert communication strategies for lasting impact",
    }
  ];

  return (
    <div className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-serif italic mb-8 gradient-text">Our services</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto glass-effect p-6 rounded-lg">
            From brand strategy and design to content creation and social media management, we provide a comprehensive suite of services that are tailored to meet the unique needs of each client.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg hover-scale">
              <div className="aspect-square relative overflow-hidden bg-gray-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center p-6 glass-effect rounded-lg">
                    <p className="text-white text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-xl font-serif">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
