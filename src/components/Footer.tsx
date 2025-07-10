
import { Scissors, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/80 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Scissors className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold text-gradient">Carolina Nieto</span>
            </div>
            <p className="text-muted-foreground">
              Experiencia premium de barbería donde la tradición se encuentra con el lujo moderno. 
              Elevando tu estilo desde 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">Inicio</a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">Servicios</a>
              <a href="#gallery" className="block text-muted-foreground hover:text-primary transition-colors">Galería</a>
              <a href="#testimonials" className="block text-muted-foreground hover:text-primary transition-colors">Reseñas</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Servicios</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">Cortes de Precisión</p>
              <p className="text-muted-foreground">Esculpido de Barba</p>
              <p className="text-muted-foreground">Afeitado con Toalla Caliente</p>
              <p className="text-muted-foreground">Paquetes de Lujo</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-10 h-10 bg-gold-deep rounded-lg flex items-center justify-center hover:bg-gold-dark transition-colors">
                <Instagram className="w-5 h-5 text-gold" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold-deep rounded-lg flex items-center justify-center hover:bg-gold-dark transition-colors">
                <Facebook className="w-5 h-5 text-gold" />
              </a>
              <a href="#" className="w-10 h-10 bg-gold-deep rounded-lg flex items-center justify-center hover:bg-gold-dark transition-colors">
                <Twitter className="w-5 h-5 text-gold" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Reynolds aluminio<br />
              Vista Hermosa<br />
              Estado de Mexico, 54080
              (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Carolina Nieto. Todos los derechos reservados. | Diseños para caballero modernos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
