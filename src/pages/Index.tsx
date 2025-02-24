import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BrandVoiceSection from '../components/BrandVoiceSection';
import ServicesSection from '../components/ServicesSection';
import BrandMessageSection from '../components/BrandMessageSection';
import ShopSection from '../components/ShopSection';
import BlogSection from '../components/BlogSection';
import FooterSection from '../components/FooterSection';
import ServiceDetailsSection from '../components/ServiceDetailsSection';
import TrendingSection from '../components/TrendingSection';
import FounderSection from '../components/FounderSection';
import About from './About';
import Divider from '../components/ui/divider';
  const Index = () => {
  return (
    <div id="home" className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <About />
      <Divider />
      <BrandVoiceSection />
      <ServicesSection />
      <ServiceDetailsSection />
      <FounderSection />
      <ShopSection />
      <TrendingSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};

export default Index;
