
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-4">
            AGENDA TU <span className="text-gradient">CITA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para la mejor experiencia de barbería? Contáctanos y agenda tu transformación.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card shadow-2xl border-gold/40 backdrop-blur-md bg-gradient-to-br from-gold/10 to-background/80 fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Nombre" className="bg-background border-border" />
                  <Input placeholder="Apellido" className="bg-background border-border" />
                </div>
                <Input type="email" placeholder="Correo Electrónico" className="bg-background border-border" />
                <Input type="tel" placeholder="Teléfono" className="bg-background border-border" />
                <Textarea 
                  placeholder="Cuéntanos sobre el servicio que deseas..."
                  className="bg-background border-border min-h-[120px]"
                />
                <Button className="w-full bg-primary text-black hover:bg-primary/90 font-bold py-3 glow-gold">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="glass-card shadow-xl border-gold/30 backdrop-blur-md bg-gradient-to-br from-gold/5 to-background/90 fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Ubicación</h4>
                    <p className="text-muted-foreground">
                      Reynolds aluminio<br />
                      Vista Hermosa<br />
                      Estado de Mexico, 54080
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card shadow-xl border-gold/30 backdrop-blur-md bg-gradient-to-br from-gold/5 to-background/90 fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Teléfono</h4>
                    <p className="text-muted-foreground">
                      (555) 123-4567<br />
                      Llama o envía mensaje para citas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card shadow-xl border-gold/30 backdrop-blur-md bg-gradient-to-br from-gold/5 to-background/90 fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Horario</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lunes - Viernes: 9AM - 8PM</p>
                      <p>Sábado: 8AM - 6PM</p>
                      <p>Domingo: 10AM - 4PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card shadow-xl border-gold/30 backdrop-blur-md bg-gradient-to-br from-gold/5 to-background/90 fade-in-up">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Correo</h4>
                    <p className="text-muted-foreground">
                      info@luxecuts.com<br />
                      bookings@luxecuts.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
