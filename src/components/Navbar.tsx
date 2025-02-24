import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-black/50 backdrop-blur-lg" : "bg-transparent",
      "border-b border-white/10"
    )}>
      <div className="container mx-auto px-4 h-20">
        <div className="flex items-center justify-between h-full">
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-300",
                    isActive 
                      ? "bg-gradient-to-r from-[#873CDF] to-[#492179] bg-clip-text text-transparent" 
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Logo and CTA Button */}
          <div className="flex items-center justify-center gap-4 ml-auto md:ml-0">
            <img 
              src="/website_logo.png" 
              alt="Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden md:block">
              <Button variant="outline" size="sm">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={cn(
                "w-full h-0.5 bg-white transition-all duration-300 ease-in-out",
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              )} />
              <span className={cn(
                "w-full h-0.5 bg-white transition-all duration-300 ease-in-out",
                isMenuOpen ? "opacity-0" : ""
              )} />
              <span className={cn(
                "w-full h-0.5 bg-white transition-all duration-300 ease-in-out",
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed left-0 right-0 bg-black/95 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen 
            ? "top-20 opacity-100 visible" 
            : "top-[-100%] opacity-0 invisible"
        )}>
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "text-lg font-medium transition-all duration-300 py-2",
                      isActive 
                        ? "bg-gradient-to-r from-[#873CDF] to-[#492179] bg-clip-text text-transparent" 
                        : "text-white/70 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4">
                <Button variant="default" size="lg" className="w-full">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
