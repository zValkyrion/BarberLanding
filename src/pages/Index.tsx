
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AdvancedAnimations from "@/components/AdvancedAnimations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useAdvancedAnimations } from "@/hooks/useAdvancedAnimations";

const Index = () => {
  useScrollAnimation();
  useAdvancedAnimations();

  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const id = target.href.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Enhanced loading sequence
    const initializeAnimations = () => {
      // Remove loading state
      document.body.classList.add('loaded');
      
      // Trigger entrance animations
      const heroElements = document.querySelectorAll('.hero-animate');
      heroElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-in');
        }, index * 200);
      });
    };

    // Add custom cursor to body
    if (!document.querySelector('.custom-cursor')) {
      const cursor = document.createElement('div');
      cursor.className = 'custom-cursor';
      document.body.appendChild(cursor);
    }

    document.addEventListener('click', handleNavClick);
    
    // Initialize after a short delay
    setTimeout(initializeAnimations, 100);

    return () => {
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      {/* Advanced Animation Components */}
      <AdvancedAnimations />
      
      {/* Page Content */}
      <Navigation />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
