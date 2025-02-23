import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Digital Marketing",
      description: "Strategic social media management, paid advertising, and digital campaign execution.",
      link: "/services/digital-marketing",
      gradient: "from-[#FF9A9E] to-[#FAD0C4]"
    },
    {
      title: "Brand Management",
      description: "Comprehensive brand strategy, identity development, and reputation management.",
      link: "/services/brand-management",
      gradient: "from-[#A18CD1] to-[#FBC2EB]"
    },
    {
      title: "Content Creation",
      description: "Engaging visual content, copywriting, and multimedia production for all platforms.",
      link: "/services/content-creation",
      gradient: "from-[#96E6A1] to-[#D4FC79]"
    },
    {
      title: "Strategy & Planning",
      description: "Data-driven marketing strategies and comprehensive digital growth planning.",
      link: "/services/strategy-planning",
      gradient: "from-[#4FACFE] to-[#00F2FE]"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-serif mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link 
              key={service.title}
              to={service.link}
              className="block group"
            >
              <div className={`bg-gradient-to-br ${service.gradient} p-8 h-full transition-transform duration-300 group-hover:-translate-y-2`}>
                <h2 className="text-3xl font-serif mb-4">{service.title}</h2>
                <p className="text-lg opacity-90 mb-6">{service.description}</p>
                <span className="inline-block text-lg font-medium">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Services; 