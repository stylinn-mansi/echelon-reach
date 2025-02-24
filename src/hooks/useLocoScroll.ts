import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function useLocoScroll(start: boolean) {
  useEffect(() => {
    if (!start) return;

    const scrollEl = document.querySelector('#main-container');
    
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: scrollEl as HTMLElement,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      lerp: 0.04
    });

    // Update scroll on window resize
    const handleResize = () => {
      locoScroll.update();
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      locoScroll.destroy();
      window.removeEventListener('resize', handleResize);
    };
  }, [start]);
} 