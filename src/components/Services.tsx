
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Coffee, Sparkles, Crown, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Scissors,
      title: "Precision Haircut",
      description: "Expert cuts tailored to your style and face shape using premium techniques and luxury products.",
      price: "$45",
      features: ["Personal Consultation", "Precision Cut", "Luxury Wash & Style", "Finishing Touch"],
      gradient: "from-primary to-accent"
    },
    {
      icon: Crown,
      title: "Beard Sculpting",
      description: "Professional beard trimming and shaping for the perfect masculine look with artistic precision.",
      price: "$35",
      features: ["Beard Analysis", "Precision Trim & Shape", "Hot Towel Treatment", "Premium Beard Oil"],
      gradient: "from-accent to-primary"
    },
    {
      icon: Coffee,
      title: "Hot Towel Shave",
      description: "Classic straight razor shave with hot towels for ultimate relaxation and smooth results.",
      price: "$55",
      features: ["Pre-Shave Steam Treatment", "Traditional Straight Razor", "Post-Shave Care", "Cologne Application"],
      gradient: "from-primary/80 to-accent/80"
    },
    {
      icon: Sparkles,
      title: "Luxury Package",
      description: "Complete grooming experience combining all our premium services for the ultimate transformation.",
      price: "$120",
      features: ["Full Grooming Service", "Complimentary Premium Drink", "Relaxing Head Massage", "Luxury Product Kit"],
      gradient: "from-accent to-primary"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 luxury-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 scroll-reveal">
            PREMIUM <span className="text-gradient">SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto scroll-reveal">
            Discover our range of luxury grooming services designed for the modern gentleman who demands excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              data-index={index}
              className={`service-card luxury-card group hover:border-primary/50 transition-all duration-500 overflow-hidden relative
                ${visibleCards.includes(index) ? 'scale-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardContent className="p-6 relative z-10">
                <div className="mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 pulse-glow`}>
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-shimmer transition-all duration-300">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm group-hover:text-foreground transition-colors">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:glow-gold transition-all duration-300"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary group-hover:text-shimmer transition-all duration-300">{service.price}</span>
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black magnetic-hover group/btn">
                    Book Now
                    <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 rounded-full border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Experience luxury grooming like never before</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
