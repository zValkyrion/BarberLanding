
import { useEffect, useRef } from 'react';

export const useAdvancedAnimations = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Enhanced Intersection Observer with multiple thresholds
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add staggered animations for child elements
            const staggerChildren = entry.target.querySelectorAll('[data-stagger]');
            staggerChildren.forEach((child, index) => {
              const delay = parseInt(child.getAttribute('data-stagger') || '0') + (index * 100);
              setTimeout(() => {
                child.classList.add('visible');
              }, delay);
            });

            // Add morphing effects
            const morphElements = entry.target.querySelectorAll('.morph-on-scroll');
            morphElements.forEach((element) => {
              element.classList.add('morphed');
            });
          }
        });
      },
      {
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all animated elements
    const elements = document.querySelectorAll(
      '.scroll-reveal, .fade-in-up, .slide-in-left, .slide-in-right, .scale-in, .rotate-in'
    );
    elements.forEach((el) => observerRef.current?.observe(el));

    // Advanced parallax scrolling
    const handleParallaxScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      // Apply different parallax speeds to different elements
      const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-parallax-speed') || '0.5');
        const yPos = scrolled * speed;
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Smooth mouse follow effect
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.custom-cursor') as HTMLElement;
      if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      }

      // Update CSS custom properties for dynamic backgrounds
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      document.documentElement.style.setProperty('--mouse-x-percent', `${(e.clientX / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty('--mouse-y-percent', `${(e.clientY / window.innerHeight) * 100}%`);
    };

    // Add event listeners
    window.addEventListener('scroll', handleParallaxScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Cleanup
    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleParallaxScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return observerRef;
};
