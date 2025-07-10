
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
              <span className="text-2xl font-bold text-gradient">LUXE CUTS</span>
            </div>
            <p className="text-muted-foreground">
              Premium barbershop experience where tradition meets modern luxury. 
              Elevating your style since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#gallery" className="block text-muted-foreground hover:text-primary transition-colors">Gallery</a>
              <a href="#testimonials" className="block text-muted-foreground hover:text-primary transition-colors">Reviews</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">Precision Haircuts</p>
              <p className="text-muted-foreground">Beard Sculpting</p>
              <p className="text-muted-foreground">Hot Towel Shaves</p>
              <p className="text-muted-foreground">Luxury Packages</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors">
                <Twitter className="w-5 h-5 text-primary" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              123 Luxury Street<br />
              New York, NY 10001<br />
              (555) 123-4567
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Luxe Cuts. All rights reserved. | Designed for the modern gentleman.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
