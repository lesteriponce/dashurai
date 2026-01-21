import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log('Scroll event detected - currentScrollY:', currentScrollY, 'lastScrollY:', lastScrollY);
      
      // Add threshold to prevent small scroll jitter
      const scrollThreshold = 10;
      
      if (currentScrollY > lastScrollY + scrollThreshold) {
        // Scrolling down - hide header after a small delay
        console.log('Scrolling down - hiding header');
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsVisible(false);
          console.log('Header hidden - isVisible set to false');
        }, 150);
      } else if (currentScrollY < lastScrollY - scrollThreshold) {
        // Scrolling up - show header immediately
        console.log('Scrolling up - showing header');
        clearTimeout(timeoutId);
        setIsVisible(true);
        console.log('Header shown - isVisible set to true');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY]);

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
