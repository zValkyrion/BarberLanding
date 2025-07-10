
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      name: "Juan Pérez",
      role: "Ejecutivo de Negocios",
      content: "Una experiencia absolutamente fenomenal. La atención al detalle y la calidad del trabajo no tienen comparación. Mi corte se ve perfecto por semanas.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Carlos Ramírez",
      role: "Director Creativo",
      content: "¡Encontré mi barbería de confianza! El ambiente es increíble y los barberos son verdaderos artistas. Siempre salgo sintiéndome renovado.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Luis Hernández",
      role: "Emprendedor",
      content: "La experiencia de lujo aquí vale cada peso. Desde el servicio de toalla caliente hasta los cortes de precisión, todo es de primer nivel.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Miguel Torres",
      role: "Consultor de Imagen",
      content: "Profesionales, limpios y muy hábiles. Entienden los estilos modernos y respetan las técnicas clásicas. ¡Altamente recomendado!",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  // Autoplay logic
  useEffect(() => {
    if (isPlaying) {
      timeoutRef.current = setTimeout(() => {
        setDirection('next');
        setCurrentIndex((prev) => (prev + 2) % testimonials.length);
      }, 3500);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isPlaying]);

  const nextTestimonial = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 2) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  // Animation classes
  const getAnimationClass = () => {
    return direction === 'next' ? 'testimonial-slide-left' : 'testimonial-slide-right';
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            RESEÑAS DE <span className="text-gradient">CLIENTES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No solo confíes en nuestra palabra. Esto es lo que dicen nuestros clientes sobre su experiencia.
          </p>
        </div>
        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {[0, 1].map((offset) => {
              const testimonialIndex = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[testimonialIndex];
              return (
                <Card key={testimonialIndex} className={`bg-card border-border transition-all duration-700 ease-in-out ${getAnimationClass()}`}>
                  <CardContent className="p-6">
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-current" />
                      ))}
                    </div>
                    {/* Content */}
                    <p className="text-foreground mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="border-accent text-accent hover:bg-accent hover:text-black"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsPlaying((p) => !p)}
              className={`border-gold text-gold hover:bg-gold-dark hover:text-white`}
              aria-label={isPlaying ? 'Detener' : 'Reanudar'}
            >
              {isPlaying ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <rect x="5" y="5" width="10" height="10" rx="2" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <polygon points="6,4 16,10 6,16" />
                </svg>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="border-accent text-accent hover:bg-accent hover:text-black"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
