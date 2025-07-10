
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Scissors className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-bold text-gradient">BarberShop</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Inicio</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Servicios</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Galería</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Reseñas</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contacto</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gold-deep text-white font-semibold px-6 py-2 glow-gold hover:bg-gold-dark hover:text-white">
              Reserva Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Inicio</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Servicios</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Galería</a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Reseñas</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contacto</a>
              <Button className="bg-gold-deep text-white font-semibold mt-4 hover:bg-gold-dark hover:text-white">
                Reserva Ahora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
