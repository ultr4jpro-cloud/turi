import { GraduationCap, Target, Users2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-card to-muted">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-wide mb-6">
          ¿Qué es TURI?
        </h2>
        <div className="mb-12">
          <p className="font-sans text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            Una app que premia por visitar puntos de interés en la ciudad
          </p>
          
          <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            TURI nace de la pasión por nuestra tierra mendocina y el deseo de compartir 
            sus tesoros con el mundo. Combinamos tecnología moderna con la calidez de 
            nuestra cultura para crear experiencias memorables.
          </p>
        </div>

        <div id="#about" className="grid md:grid-cols-1 gap-8 mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-warm hover:shadow-mountain transition-smooth">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-card-foreground mb-4">
              Quiénes somos
            </h3>
            <p className="font-sans text-muted-foreground">
              Estudiantes comprometidos de <strong>Conectados por Mendoza Futura</strong>, 
              trabajando por el desarrollo tecnológico de nuestra provincia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;