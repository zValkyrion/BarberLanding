
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Marcus Johnson",
      role: "Business Executive",
      content: "Absolutely phenomenal experience. The attention to detail and craftsmanship is unmatched. My haircut looks perfect for weeks.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "David Chen",
      role: "Creative Director",
      content: "Found my go-to barbershop! The vibe is incredible and the barbers are true artists. Always leave feeling like a new man.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "James Rodriguez",
      role: "Entrepreneur",
      content: "The luxury experience here is worth every penny. From the hot towel service to the precision cuts, everything is top-tier.",
      rating: 5,
      image: "/placeholder.svg"
    },
    {
      name: "Alexander Smith",
      role: "Fashion Consultant",
      content: "Professional, clean, and skilled. They understand modern styles while respecting classic techniques. Highly recommended!",
      rating: 5,
      image: "/placeholder.svg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            CLIENT <span className="text-gradient">REVIEWS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients say about their experience.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {[0, 1].map((offset) => {
              const testimonialIndex = (currentIndex + offset) % testimonials.length;
              const testimonial = testimonials[testimonialIndex];
              
              return (
                <Card key={testimonialIndex} className="bg-card border-border">
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
