import { useEffect, useState } from 'react';

interface BlurGradientProps {
  scrollThreshold?: number; // When to start showing the blur (0-1)
  maxOpacity?: number; // Maximum opacity (0-1)
  height?: string; // Height of the gradient
  position?: 'top' | 'bottom'; // Position of the gradient
  blurIntensity?: 'light' | 'medium' | 'heavy'; // Blur intensity
}

const BlurGradient = ({
  scrollThreshold = 0.1, // Start showing after 10% of scroll
  maxOpacity = 0.8,
  height = '150px',
  position = 'bottom',
  blurIntensity = 'medium'
}: BlurGradientProps) => {
  const [opacity, setOpacity] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Calculate scroll percentage (0 to 1)
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      
      // Only show blur after scrollThreshold
      if (scrollPercentage > scrollThreshold) {
        // Calculate opacity based on scroll position
        const newOpacity = Math.min(
          maxOpacity,
          (scrollPercentage - scrollThreshold) / (1 - scrollThreshold) * maxOpacity
        );
        setOpacity(newOpacity);
        setIsVisible(true);
      } else {
        setOpacity(0);
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial calculation
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold, maxOpacity]);

  // For Locomotive Scroll compatibility
  useEffect(() => {
    // If using Locomotive Scroll, we need to listen to its scroll event
    const locomotiveScroll = document.querySelector('[data-scroll-container]');
    
    if (locomotiveScroll) {
      const handleLocoScroll = () => {
        // Get scroll progress from Locomotive
        const scrollInstance = (window as any).locoScroll;
        
        if (scrollInstance) {
          const scrollPercentage = scrollInstance.scroll.instance.scroll.y / 
            (scrollInstance.scroll.instance.limit.y);
          
          // Only show blur after scrollThreshold
          if (scrollPercentage > scrollThreshold) {
            // Calculate opacity based on scroll position
            const newOpacity = Math.min(
              maxOpacity,
              (scrollPercentage - scrollThreshold) / (1 - scrollThreshold) * maxOpacity
            );
            setOpacity(newOpacity);
            setIsVisible(true);
          } else {
            setOpacity(0);
            setIsVisible(false);
          }
        }
      };
      
      // Try to access the locomotive scroll instance
      if ((window as any).locoScroll) {
        (window as any).locoScroll.on('scroll', handleLocoScroll);
        return () => (window as any).locoScroll.off('scroll', handleLocoScroll);
      }
    }
  }, [scrollThreshold, maxOpacity]);

  return (
    <div
      className={`
        blur-gradient 
        ${position === 'bottom' ? 'blur-gradient-bottom' : 'blur-gradient-top'} 
        ${isVisible ? 'blur-gradient-animate' : ''} 
        ${blurIntensity === 'light' ? 'blur-light' : blurIntensity === 'heavy' ? 'blur-heavy' : 'blur-medium'}
      `}
      style={{
        height,
        opacity,
        transition: 'opacity 0.2s ease-out'
      }}
    />
  );
};

export default BlurGradient; 