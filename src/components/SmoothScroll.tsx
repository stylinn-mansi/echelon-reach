import React, { useEffect, useState } from 'react';
import useLocoScroll from '../hooks/useLocoScroll';
import BlurGradient from './BlurGradient';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const [isReady, setIsReady] = useState(false);

  useLocoScroll(isReady);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      <div 
        id="main-container" 
        data-scroll-container 
        className="relative min-h-screen bg-black"
      >
        {children}
      </div>
      <BlurGradient 
        scrollThreshold={0.05} 
        maxOpacity={0.9} 
        height="180px" 
        position="bottom" 
        blurIntensity="medium"
      />
    </>
  );
};

export default SmoothScroll; 