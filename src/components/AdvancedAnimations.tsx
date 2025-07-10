
import { useEffect, useState } from 'react';

const AdvancedAnimations = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Custom cursor implementation
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    if (cursor) {
      document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      });

      // Add hover effects to interactive elements
      const interactiveElements = document.querySelectorAll('button, a, .morph-button, .magnetic-hover');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursor.classList.add('custom-cursor-hover');
        });
        element.addEventListener('mouseleave', () => {
          cursor.classList.remove('custom-cursor-hover');
        });
      });
    }

    // Advanced parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-parallax') || '0.5');
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Stagger animations for child elements
          const children = entry.target.querySelectorAll('.stagger-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-reveal, .fade-in-up, .slide-in-left, .slide-in-right');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full floating-element-slow"
          style={{ top: '10%', left: '10%' }}
          data-parallax="0.3"
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-radial from-accent/10 to-transparent rounded-full floating-element"
          style={{ top: '60%', right: '10%' }}
          data-parallax="0.5"
        />
        <div 
          className="absolute w-48 h-48 bg-gradient-radial from-primary/5 to-transparent rounded-full floating-element-fast"
          style={{ bottom: '20%', left: '30%' }}
          data-parallax="0.7"
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />
      </div>

      {/* Loading Progress Bar */}
      {!isVisible && (
        <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
          <div className="progress-fill h-full bg-gradient-to-r from-primary to-accent"></div>
        </div>
      )}

      {/* Morphing Logo Animation */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes morphLogo {
          0%, 100% { 
            border-radius: 20px;
            transform: rotate(0deg);
          }
          25% { 
            border-radius: 50%;
            transform: rotate(90deg);
          }
          50% { 
            border-radius: 0;
            transform: rotate(180deg);
          }
          75% { 
            border-radius: 30px;
            transform: rotate(270deg);
          }
        }
      `}</style>
    </>
  );
};

export default AdvancedAnimations;
