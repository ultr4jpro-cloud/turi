import { Instagram, Mail, Youtube, MapPin, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-card to-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conectá con nosotros
          </h2>
          <p className="font-sans text-xl text-muted-foreground">
            Seguinos en nuestras redes y mantente al día con las novedades de TURI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Datos de contacto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-sans font-medium text-foreground">Email</p>
                    <p className="font-sans text-muted-foreground">appturiarg@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-sans font-medium text-foreground">Ubicación</p>
                    <p className="font-sans text-muted-foreground">Mendoza, Argentina</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-sans font-medium text-foreground">Soporte</p>
                    <p className="font-sans text-muted-foreground">Disponible en la app</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-serif text-xl font-semibold text-foreground mb-4">
                Seguinos en redes
              </h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-bounce" onClick={() => window.open('https://www.instagram.com/turi_mdz/', '_blank')}>
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-red-500 hover:text-white hover:border-red-500 transition-bounce"onClick={() => window.open('https://youtube.com/@appturi.argentina?si=ZpKWQEGtVJem6IRe', '_blank')}>
                  <Youtube className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-cyan-500 hover:text-white hover:border-red-500 transition-bounce" onClick={() => window.open('https://www.tiktok.com/@app.turi', '_blank')}>
                  <User className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-muted rounded-2xl p-8 shadow-warm">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
              Conocé más sobre TURI
            </h3>
            
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6 border-2 border-dashed border-primary/30">
              <div className="text-center">
                <Youtube className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="font-sans text-muted-foreground font-medium">
                  Video de presentación
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  Próximamente disponible
                </p>
              </div>
            </div>
            
            <Button variant="mendoza" className="w-full" onClick={() => window.open('https://www.youtube.com/', '_blank')}>
              Ver video en YouTube
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-2xl">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
            ¿Listo para comenzar tu aventura?
          </h3>
          <p className="font-sans text-lg text-muted-foreground mb-6">
            Descargá TURI y comenzá a explorar Mendoza de una forma completamente nueva
          </p>
          <Button color="#FD6229" size="xl">
            Descargar TURI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;