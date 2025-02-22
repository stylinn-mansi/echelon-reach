import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Brand Voice", href: "#brand-voice" },
    { label: "Shop", href: "#shop" },
    { label: "Blogs", href: "#blogs" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl md:text-3xl font-serif text-white hover:opacity-80 transition-all duration-300 tracking-wide"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            Echelon Reach <span className="font-light"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-white/90 hover:text-white transition-all duration-300 font-light tracking-wider text-base relative group py-2"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-full h-px bg-white/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span className={`absolute w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'rotate-45 top-2' : 'top-0'
              }`} />
              <span className={`absolute w-full h-0.5 bg-white top-2 transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} />
              <span className={`absolute w-full h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? '-rotate-45 top-2' : 'top-4'
              }`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-[400px] opacity-100 mt-6' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4 px-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 font-light tracking-wider text-lg py-3 px-4 rounded-lg"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
