import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: number;
    let lastKnownScrollY = 0;
    let ticking = false;
    
    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 5;
      
      if (currentScrollY > lastKnownScrollY + scrollThreshold) {
        // Scrolling down - hide header after delay
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsVisible(false);
        }, 100);
      } else if (currentScrollY < lastKnownScrollY - scrollThreshold) {
        // Scrolling up - show header immediately
        clearTimeout(timeoutId);
        setIsVisible(true);
      }
      
      lastKnownScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <header 
      className={`sticky box-border caret-transparent mb-[-72px] max-w-none w-full z-50 mx-auto px-4 top-6 md:max-w-screen-xl transition-all duration-300 ease-in-out ${
        isVisible ? 'header-scroll-visible' : 'header-scroll-hidden'
      }`}
    >
      <div className="relative items-center bg-[oklch(0.25_0.05_240)] box-border caret-transparent gap-x-8 flex gap-y-8 w-full pl-5 pr-1 py-1 rounded-[3.35544e+07px]">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
