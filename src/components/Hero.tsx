
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Sparkles, ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });

      // Update CSS custom properties for cursor
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-container">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 liquid-bg"></div>
      
      {/* Parallax Layers */}
      <div 
        className="absolute inset-0 opacity-20 parallax-layer"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.2) 0%, transparent 50%)`
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-10 parallax-layer"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          background: `radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, hsl(var(--accent) / 0.2) 0%, transparent 50%)`
        }}
      />

      {/* Advanced Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-accent/30 rotate-45 floating-element glass-card"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary/30 rotate-12 floating-element-slow clay-card"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent/20 rounded-full floating-element-fast pulse-ring"></div>
      <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-primary/30 rounded-full floating-element pulse-glow stagger-2"></div>
      <div className="absolute bottom-1/3 left-1/5 w-12 h-12 border-2 border-accent/40 rounded-full floating-element-slow stagger-4 neuro-card"></div>
      <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-primary rounded-full floating-element micro-wiggle stagger-6"></div>
      <div className="absolute bottom-1/4 left-1/2 w-10 h-10 border border-accent/50 rotate-45 floating-element-fast stagger-8"></div>

      <div className="relative py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Content */}
          <div className="space-y-8 faux-3d w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <Badge className={`bg-accent/20 text-accent border-accent/30 px-4 py-1 morph-button micro-bounce ${isLoaded ? 'fade-in-up stagger-1' : ''}`}>
              <Sparkles className="w-4 h-4 mr-2 floating-element-fast" />
              Experiencia Premium de Barbería
            </Badge>
            
            <div className="space-y-4">
              <h1 className={`text-5xl lg:text-7xl font-black leading-tight ${isLoaded ? 'reveal-text stagger-2' : ''}`}>
                <span className="text-reveal line-draw">ELEVA TU</span>
                <span className={`block text-liquid ${isLoaded ? 'reveal-text stagger-3' : ''}`}>ESTILO</span>
              </h1>
              <div className={`typewriter text-xl text-muted-foreground max-w-lg ${isLoaded ? 'fade-in-up stagger-4' : ''}`}>
                Vive el arte del grooming premium con nuestros barberos expertos.
              </div>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 ${isLoaded ? 'fade-in-up stagger-5' : ''}`}>
              <Button size="lg" className="bg-gold-deep text-white font-bold px-8 py-4 text-lg morph-button group tilt-hover hover:bg-gold-dark hover:text-white">
                Reserva tu Corte
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform floating-element-fast" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg glass-card magnetic-hover group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Ver Demostración
              </Button>
            </div>

            {/* Enhanced Animated Stats */}
            <div className={`flex flex-nowrap gap-4 md:gap-8 pt-8 fade-in-up stagger-6 justify-center w-full`}>
              <div className="text-center group clay-card p-4 rounded-lg micro-bounce w-auto">
                <div className="text-3xl font-bold text-morphing group-hover:scale-110 transition-transform">300+</div>
                <div className="text-sm text-muted-foreground">Clientes Felices</div>
                <div className="progress-bar h-1 mt-2">
                  <div className="progress-fill w-full"></div>
                </div>
              </div>
              <div className="text-center group neuro-card p-4 rounded-lg micro-bounce w-auto">
                <div className="flex items-center gap-1 justify-center">
                  <span className="text-3xl font-bold text-liquid group-hover:scale-110 transition-transform">4.9</span>
                  <Star className="w-6 h-6 text-primary fill-current group-hover:scale-110 transition-transform floating-element-fast" />
                </div>
                <div className="text-sm text-muted-foreground">Calificación</div>
                <div className="progress-bar h-1 mt-2">
                  <div className="progress-fill w-4/5"></div>
                </div>
              </div>
              <div className="text-center group glass-card p-4 rounded-lg micro-bounce w-auto">
                <div className="text-3xl font-bold text-morphing group-hover:scale-110 transition-transform">2+</div>
                <div className="text-sm text-muted-foreground">Años</div>
                <div className="progress-bar h-1 mt-2">
                  <div className="progress-fill w-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Ultra Enhanced Image Section */}
          <div className={`relative ${isLoaded ? 'slide-in-right stagger-3' : ''}`}>
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden card-3d group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10"></div>
              <div className="image-reveal h-full">
                <img 
                  src="/placeholder.svg" 
                  alt="Professional barbershop styling"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
              <div className="absolute bottom-6 left-6 z-20">
                <Badge className="bg-primary text-black font-semibold pulse-glow morph-button">
                  Aprobado por Master Barber
                </Badge>
              </div>
              
              {/* Advanced Overlay Effects */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 liquid-bg z-5"></div>
              
              {/* Animated Border Elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-in"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-in stagger-1"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-in stagger-2"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-in stagger-3"></div>
            </div>
            
            {/* Ultra Enhanced Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full pulse-glow floating-element-slow clay-card"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full pulse-ring floating-element glass-card stagger-2"></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 border-2 border-primary/30 rounded-full floating-element-fast neuro-card stagger-4"></div>
            <div className="absolute top-1/4 -left-6 w-6 h-6 bg-accent rounded-full floating-element micro-wiggle stagger-6"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isLoaded ? 'fade-in-up stagger-6' : ''} hidden lg:block`}>
        <div className="flex flex-col items-center gap-2 text-muted-foreground glass-card p-4 rounded-full">
          <span className="text-sm font-medium">Desliza para explorar</span>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: 'var(--mouse-x, -100px)',
          top: 'var(--mouse-y, -100px)',
        }}
      />
    </section>
  );
};

export default Hero;
