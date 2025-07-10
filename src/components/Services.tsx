
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Coffee, Sparkles, Crown } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Precision Haircut",
      description: "Expert cuts tailored to your style and face shape using premium techniques.",
      price: "$45",
      features: ["Consultation", "Wash & Style", "Finishing Touch"]
    },
    {
      icon: Crown,
      title: "Beard Sculpting",
      description: "Professional beard trimming and shaping for the perfect masculine look.",
      price: "$35",
      features: ["Trim & Shape", "Hot Towel", "Beard Oil"]
    },
    {
      icon: Coffee,
      title: "Hot Towel Shave",
      description: "Classic straight razor shave with hot towels for ultimate relaxation.",
      price: "$55",
      features: ["Steam Treatment", "Straight Razor", "Aftercare"]
    },
    {
      icon: Sparkles,
      title: "Luxury Package",
      description: "Complete grooming experience combining all our premium services.",
      price: "$120",
      features: ["Full Service", "Complimentary Drink", "Head Massage"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            PREMIUM <span className="text-gradient">SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of luxury grooming services designed for the modern gentleman
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:glow-gold">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{service.price}</span>
                  <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-black">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
