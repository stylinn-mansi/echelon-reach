import React from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-serif mb-12">About Us</h1>
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-xl leading-relaxed mb-8">
            At Echelon Reach, we're more than just a digital marketing agency. We're your partners in digital transformation, 
            helping businesses navigate the ever-evolving landscape of social media and online presence.
          </p>
          <p className="text-xl leading-relaxed mb-8">
            Our mission is to elevate brands through strategic digital marketing, compelling content creation, 
            and innovative social media solutions. We believe in creating authentic connections between brands and their audiences.
          </p>
          <h2 className="text-3xl font-serif mt-12 mb-6">Our Approach</h2>
          <p className="text-xl leading-relaxed mb-8">
            We combine creativity with data-driven insights to develop strategies that not only reach your target audience 
            but also create meaningful engagement and lasting impact.
          </p>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default About; 