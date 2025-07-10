
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-bg"></div>
      
      {/* Dynamic Parallax Elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.1) 0%, transparent 50%)`
        }}
      />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-accent/30 rotate-45 floating-element glow-blue"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary/30 rotate-12 floating-element glow-gold stagger-3"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent/20 rounded-full floating-element glow-blue stagger-5"></div>
      <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-primary/30 rounded-full floating-element pulse-glow stagger-2"></div>
      <div className="absolute bottom-1/3 left-1/5 w-12 h-12 border-2 border-accent/40 rounded-full floating-element stagger-4"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Badge className={`bg-accent/20 text-accent border-accent/30 px-4 py-1 magnetic-hover ${isLoaded ? 'fade-in-up stagger-1' : ''}`}>
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Barbershop Experience
            </Badge>
            
            <div className="space-y-4">
              <h1 className={`text-5xl lg:text-7xl font-black leading-tight ${isLoaded ? 'reveal-text stagger-2' : ''}`}>
                <span className="text-reveal">ELEVATE YOUR</span>
                <span className={`block text-shimmer ${isLoaded ? 'reveal-text stagger-3' : ''}`}>STYLE</span>
              </h1>
              <p className={`text-xl text-muted-foreground max-w-lg ${isLoaded ? 'fade-in-up stagger-4' : ''}`}>
                Experience the art of premium grooming with our master barbers. 
                Where tradition meets modern luxury in an atmosphere of pure sophistication.
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 ${isLoaded ? 'fade-in-up stagger-5' : ''}`}>
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold px-8 py-4 text-lg pulse-glow group">
                Book Your Cut
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black px-8 py-4 text-lg neon-border magnetic-hover">
                View Gallery
              </Button>
            </div>

            {/* Animated Stats */}
            <div className={`flex gap-8 pt-8 ${isLoaded ? 'fade-in-up stagger-6' : ''}`}>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary group-hover:text-shimmer transition-all duration-500">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center group">
                <div className="flex items-center gap-1 justify-center">
                  <span className="text-3xl font-bold text-primary group-hover:text-shimmer transition-all duration-500">4.9</span>
                  <Star className="w-6 h-6 text-primary fill-current group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary group-hover:text-shimmer transition-all duration-500">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className={`relative ${isLoaded ? 'slide-in-right stagger-3' : ''}`}>
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden luxury-card">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10"></div>
              <img 
                src="/placeholder.svg" 
                alt="Professional barbershop styling"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <Badge className="bg-primary text-black font-semibold pulse-glow">
                  Master Barber Approved
                </Badge>
              </div>
              
              {/* Overlay Effects */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/10 to-accent/10 z-5"></div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full glow-gold floating-element"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full glow-blue floating-element stagger-2"></div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 border-2 border-primary/30 rounded-full floating-element stagger-4"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${isLoaded ? 'fade-in-up stagger-6' : ''}`}>
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
