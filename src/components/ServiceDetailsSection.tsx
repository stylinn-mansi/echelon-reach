const ServiceDetailsSection = () => {
  const services = [
    {
      number: "03",
      title: "CREATIVE SERVICES",
      image: "/posts/post3.jpg",
      description:
        "Bring your brand to life with sophisticated designs and visuals that captivate. From web design to packaging, we create experiences that reflect your brand's luxury essence.",
      features: [
        "Graphic Design",
        "Web Design & Development",
        "Photography & Videography",
        "Packaging & Collateral Design"
      ],
    },
    {
      number: "02",
      title: "BRAND MANAGEMENT",
      image: "/posts/post2.jpg",
      description:
        "Build a lasting brand identity that resonates with sophistication and purpose. We craft your story with precision and elegance.",
      features: [
        "Brand Strategy",
        "Visual Identity",
        "Brand Guidelines",
        "Market Positioning"
      ],
    },
    {
      number: "01",
      title: "DIGITAL MARKETING",
      image: "/posts/post1.jpg",
      description:
        "Transform your digital presence with strategic solutions that elevate your brand. From social media to SEO, we create impactful digital experiences.",
      features: [
        "Social Media Strategy",
        "Content Marketing",
        "Digital Campaigns",
        "Brand Analytics"
      ],
    },
    {
      number: "04",
      title: "STRATEGY & CONSULTING",
      image: "/posts/post4.jpg",
      description:
        "Elevate your brand's trajectory with expert insights and strategic planning. We help you navigate the luxury market with precision.",
      features: [
        "Market Analysis",
        "Growth Strategy",
        "Brand Positioning",
        "Performance Optimization"
      ],
    },
  ];

  return (
    <div className="bg-satin py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="space-y-40">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
              {/* Left Column - Service Number & Features */}
              <div className="md:col-span-3 space-y-12">
                <div>
                  <div className="font-serif text-xl tracking-widest opacity-80">SERVICE</div>
                  <div className="service-number font-serif">{service.number}</div>
                </div>
                
                <div className="space-y-6">
                  <h4 className="font-serif text-xl tracking-widest">WHAT YOU GET:</h4>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="font-serif text-xl leading-relaxed">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Center Column - Image */}
              <div className="md:col-span-5">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover img-grayscale"
                  />
                </div>
              </div>

              {/* Right Column - Title & Description */}
              <div className="md:col-span-4 space-y-8 pt-12">
                <h2 className="font-serif text-[2.5rem] leading-tight tracking-wide">
                  {service.title}
                </h2>
                <p className="font-serif text-xl leading-relaxed opacity-80">
                  {service.description}
                </p>
                <button className="bg-black text-white px-12 py-4 font-serif text-lg tracking-[0.2em] hover:bg-gray-900 transition-colors duration-300">
                  TELL ME MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsSection;
