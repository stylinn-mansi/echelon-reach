
const ServicesSection = () => {
  const services = [
    {
      title: "Digital Marketing",
      image: "/lovable-uploads/09d56598-d6f3-4dad-ace8-42138aa60a3f.png",
    },
    {
      title: "Brand Management",
      image: "/lovable-uploads/09d56598-d6f3-4dad-ace8-42138aa60a3f.png",
    },
    {
      title: "Creative Services",
      image: "/lovable-uploads/09d56598-d6f3-4dad-ace8-42138aa60a3f.png",
    },
    {
      title: "Strategy & Communication",
      image: "/lovable-uploads/09d56598-d6f3-4dad-ace8-42138aa60a3f.png",
    }
  ];

  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-serif italic mb-8">Our services</h2>
          <p className="text-gray-300 text-lg max-w-3xl">
            From brand strategy and design to content creation and social media management, we provide a comprehensive suite of services that are tailored to meet the unique needs of each client.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="aspect-square relative overflow-hidden bg-gray-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0" />
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
