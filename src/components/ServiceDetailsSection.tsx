const ServiceDetailsSection = () => {
  const services = [
    {
      number: "01",
      title: "DIGITAL MARKETING",
      image: "/services/instagram-hand.jpg",
      label: "INSTAGRAM",
      description:
        "Boost your online presence with tailored strategies that attract and engage a luxury audience. From SEO to social media, we create your fresh ideas across digital platforms.",
      features: [
        "SEO & PPC Advertising",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Online Ads",
      ],
    },
    {
      number: "02",
      title: "BRAND MANAGEMENT",
      image: "/services/brand-management.jpg",
      description:
        "Develop and maintain a strong brand identity that resonates with luxury and exclusivity. We protect your brand's reputation and ensure consistent, elegant messaging.",
      features: [
        "Brand strategy & Identity",
        "Reputation Management",
        "Visual Identity",
        "Brand Messaging",
      ],
    },
    {
      number: "03",
      title: "CREATIVE SERVICES",
      image: "/services/creative-services.jpg",
      description:
        "Bring your brand to life with captivating visuals and details that communicate with design and visuals that resonate with your target audience. We create experiences that reflect your brand's luxury nature.",
      features: [
        "Graphic Design",
        "Web Design & Development",
        "Photography & Videography",
        "Packaging & Collateral Design",
      ],
    },
    {
      number: "04",
      title: "STRATEGY & CONSULTING",
      image: "/services/strategy.jpg",
      description:
        "Drive your brand's growth with expert insights and strategic planning. We help you identify opportunities, optimize processes, and design exceptional customer experiences.",
      features: [
        "Market Research & Analysis",
        "Growth & Distribution Strategy",
        "Campaign Planning",
        "Marketing Strategy",
        "Customer Experience",
      ],
    },
  ];

  return (
    <div className="py-24 bg-white text-black">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-2 text-black">
            WHAT DO WE DO THE BEST AND
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">
            How can we <span className="italic">help</span>?
          </h3>
        </div>

        {/* Services Grid */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-3 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Service Number & Content */}
              <div className="space-y-2">
                <div className="flex flex-col">
                  <div className="text-2xl font-serif">SERVICE</div>
                  <div className="text-8xl md:text-8xl font-serif">
                    {service.number}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl md:text-4xl font-serif">
                    {service.title}
                  </h3>
                  <div className="space-y-4">
                    <h4 className="text-lg font-medium uppercase">
                      WHAT WE GET:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-sm">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                 
                  
                </div>
              </div>

              {/* Image */}
              <div
                className={`aspect-[3/4] relative overflow-hidden bg-gray-100 ${
                  index % 2 === 1 ? "md:order-first" : ""
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {service.label && (
                  <div className="absolute top-8 left-8 text-white">
                    <p className="text-sm tracking-wider mb-1">LET'S TALK</p>
                    <h3 className="text-4xl font-bold">{service.label}</h3>
                  </div>
                )}
              </div>

              {/* creating section for service } */}
              <div>
                <div className="text-6xl font-serif mb-2">{service.title}</div>
                <div className="text-7xl md:text-lg font-serif">{service.description}</div>
                <button className="px-6 py-3 mt-8 bg-black text-white hover:bg-gray-800 transition-colors duration-300">
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
