
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BrandVoiceSection from '../components/BrandVoiceSection';
import ServicesSection from '../components/ServicesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <BrandVoiceSection />
      <ServicesSection />
    </div>
  );
};

export default Index;
