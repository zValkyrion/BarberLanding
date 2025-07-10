
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with neon accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary"></div>
      
      {/* Neon geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-accent/30 rotate-45 glow-blue"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary/30 rotate-12 glow-gold"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-accent/20 rounded-full glow-blue"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-1">
              <Sparkles className="w-4 h-4 mr-2" />
              Premium Barbershop Experience
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                ELEVATE YOUR
                <span className="block text-gradient">STYLE</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Experience the art of premium grooming with our master barbers. 
                Where tradition meets modern luxury.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold px-8 py-4 text-lg glow-gold">
                Book Your Cut
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-black px-8 py-4 text-lg neon-border">
                View Gallery
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <span className="text-3xl font-bold text-primary">4.9</span>
                  <Star className="w-6 h-6 text-primary fill-current" />
                </div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img 
                src="/placeholder.svg" 
                alt="Professional barbershop styling"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <Badge className="bg-primary text-black font-semibold">
                  Master Barber Approved
                </Badge>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full glow-gold"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full glow-blue"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
