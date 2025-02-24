import React, { useEffect, useState } from 'react';
import useLocoScroll from '../hooks/useLocoScroll';

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
    <div 
      id="main-container" 
      data-scroll-container 
      className="relative min-h-screen bg-black"
    >
      {children}
    </div>
  );
};

export default SmoothScroll; 