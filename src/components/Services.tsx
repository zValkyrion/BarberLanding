
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Coffee, Sparkles, Crown, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Scissors,
      title: "Corte de Precisión",
      description: "Cortes expertos adaptados a tu estilo y forma de rostro usando técnicas premium y productos de lujo.",
      price: "$120",
      features: ["Consulta Personalizada", "Corte de Precisión", "Lavado & Estilo de Lujo", "Toque Final"],
      gradient: "from-primary to-accent",
      morphClass: "morph-scissors"
    },
    {
      icon: Crown,
      title: "Esculpido de Barba",
      description: "Recorte y perfilado profesional de barba para un look masculino perfecto con precisión artística.",
      price: "$140",
      features: ["Análisis de Barba", "Recorte & Perfilado de Precisión", "Tratamiento con Toalla Caliente", "Aceite Premium para Barba"],
      gradient: "from-accent to-primary",
      morphClass: "morph-crown"
    },
    {
      icon: Coffee,
      title: "Afeitado con Toalla Caliente",
      description: "Afeitado clásico con navaja y toallas calientes para máxima relajación y resultados suaves.",
      price: "$180",
      features: ["Tratamiento de Vapor Pre-Afeitado", "Navaja Clásica", "Cuidado Post-Afeitado", "Aplicación de Colonia"],
      gradient: "from-primary/80 to-accent/80",
      morphClass: "morph-coffee"
    },
    {
      icon: Sparkles,
      title: "Paquete de Lujo",
      description: "Experiencia completa de grooming combinando todos nuestros servicios premium para una transformación total.",
      price: "$200",
      features: ["Servicio de Grooming Completo", "Bebida Premium de Cortesía", "Masaje Relajante de Cabeza", "Kit de Productos de Lujo"],
      gradient: "from-accent to-primary",
      morphClass: "morph-sparkles"
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
    <section ref={sectionRef} id="services" className="py-20 liquid-bg relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary opacity-30">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full floating-element-fast opacity-60"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent rounded-full floating-element-slow opacity-40"></div>
      <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-primary rounded-full floating-element opacity-80"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4 scroll-reveal line-draw">
            SERVICIOS <span className="text-liquid">PREMIUM</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto scroll-reveal typewriter">
            Descubre nuestra gama de servicios de barbería de lujo diseñados para el caballero moderno que exige excelencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              data-index={index}
              className={`service-card group overflow-hidden relative transition-all duration-700 cursor-pointer glass-card shadow-2xl border-gold/40 backdrop-blur-md bg-gradient-to-br from-gold/10 to-background/80 fade-in-up
                ${visibleCards.includes(index) ? 'scale-in' : ''}
                ${hoveredCard === index ? 'card-3d' : 'neuro-card'}
                ${hoveredCard !== null && hoveredCard !== index ? 'scale-95 opacity-70' : ''}
              `}
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Advanced Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700 liquid-bg`}></div>
              
              {/* Animated Border Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200"></div>
              </div>
              
              <CardContent className="p-6 relative z-10 backdrop-blur-sm bg-gradient-to-br from-gold/5 to-background/80 rounded-xl">
                <div className="mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 pulse-ring morph-button`}>
                    <service.icon className="w-6 h-6 text-black micro-wiggle" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-liquid transition-all duration-500 line-draw">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300">{service.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className={`flex items-center text-sm group-hover:text-foreground transition-all duration-300 ${visibleCards.includes(index) ? 'slide-in-left' : ''}`} style={{ animationDelay: `${(index * 0.2) + (idx * 0.1)}s` }}>
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:pulse-glow transition-all duration-300 micro-bounce"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-morphing group-hover:scale-110 transition-transform duration-300">{service.price}</span>
                  <Button size="sm" variant="outline" className="border-gold text-white hover:bg-gold-dark hover:text-white morph-button group/btn tilt-hover">
                    Reserva Ahora
                    <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform floating-element-fast" />
                  </Button>
                </div>

                {/* Progress Indicator */}
                <div className="progress-bar h-1 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="progress-fill bg-gradient-to-r from-primary to-accent"></div>
                </div>
              </CardContent>

              {/* Skeleton Loading Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 skeleton-loading"></div>
            </Card>
          ))}
        </div>

        {/* Enhanced Call-to-Action Section */}
        <div className="text-center mt-16 scroll-reveal">
          <div className="inline-flex items-center gap-2 px-8 py-4 glass-card rounded-full hover:neuro-card transition-all duration-500 group morph-button">
            <span className="text-sm font-medium text-liquid">Vive el lujo del tu barber como nunca antes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
