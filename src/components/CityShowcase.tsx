import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import mendoza1 from "@/assets/plaza.jpg";
import mendoza2 from "@/assets/parque san martin.jpg";
import mendoza3 from "@/assets/cerro.jpg";
import mendoza4 from "@/assets/areaFundacional.jpg";

const CityShowcase = () => {
  const landmarks = [
    {
      name: "Plaza Independencia",
      description: "en el alma de mendoza , la plaza  independencia florece como un un símbolo de historia,  vida y encuentro.",
      image: mendoza1
    },
    {
      name: "Cerro Aconcagua",
      description: "El aconcagua no sólo toca con su altura, sino también el alma de quienes se atreven a soñarlo.",
      image: mendoza3
    },
    {
      name: "Parque San Martín",
      description: "Más que un parque, un pulmón  verde que respira historia, naturaleza y orgullo mendocino.",
      image: mendoza2
    },
    {
      name: "Area Fundacional",
      description: "Arquitectura que cuenta la historia de una ciudad que renació tras el terremoto de 1861.",
      image: mendoza4
    }
  ];

  const [currentLandmark, setCurrentLandmark] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const nextLandmark = () => {
    if (animating) return;
    setDirection('right');
    setAnimating(true);
    setTimeout(() => {
      setCurrentLandmark((prev) => (prev + 1) % landmarks.length);
      setAnimating(false);
    }, 400);
  };

  const prevLandmark = () => {
    if (animating) return;
    setDirection('left');
    setAnimating(true);
    setTimeout(() => {
      setCurrentLandmark((prev) => (prev - 1 + landmarks.length) % landmarks.length);
      setAnimating(false);
    }, 400);
  };

  return (
    <section className="py-20 mountain-gradient">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conocé nuestra ciudad
          </h2>
          <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubrí los lugares más emblemáticos de Mendoza, cada uno con su propia historia y encanto único.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Image Gallery con efecto slide y glassmorphism */}
          <div className="relative w-full max-w-xl lg:max-w-2xl">
            <div className={`relative overflow-hidden rounded-3xl shadow-mountain bg-white/10 backdrop-blur-xl transition-all duration-500 ${animating ? 'pointer-events-none' : ''}`}
              style={{ minHeight: 420 }}>
              <img 
                src={landmarks[currentLandmark].image}
                alt={`${landmarks[currentLandmark].name} - Mendoza`}
                className={`w-full h-[420px] object-cover transition-transform duration-500 ${animating ? (direction === 'right' ? 'translate-x-32 opacity-0 scale-90' : 'translate-x-[-8rem] opacity-0 scale-90') : 'translate-x-0 opacity-100 scale-100'} hover:scale-105`}
                style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent rounded-3xl"></div>
              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                onClick={prevLandmark}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md text-white hover:bg-primary/80 border-white/30 shadow-lg"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-7 w-7" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextLandmark}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md text-white hover:bg-primary/80 border-white/30 shadow-lg"
                aria-label="Siguiente"
              >
                <ChevronRight className="h-7 w-7" />
              </Button>
            </div>
            {/* Image Indicators modernos */}
            <div className="flex justify-center gap-3 mt-6">
              {landmarks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !animating && setCurrentLandmark(index)}
                  className={`w-4 h-4 rounded-full border-2 border-primary transition-all duration-300 ${index === currentLandmark ? 'bg-primary shadow-glow scale-110' : 'bg-white/40 hover:bg-primary/40'}`}
                  aria-label={`Ver ${landmarks[index].name}`}
                />
              ))}
            </div>
          </div>
          {/* Landmark Info con glassmorphism y animación */}
          <div className="w-full max-w-xl animate-fade-up">
            <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-10 shadow-lg border border-white/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-foreground">
                  {landmarks[currentLandmark].name}
                </h3>
              </div>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-6">
                {landmarks[currentLandmark].description}
              </p>
              <div className="bg-card/80 rounded-2xl p-6 shadow-warm">
                <h4 className="font-sans font-semibold text-card-foreground mb-4">
                  Con TURI podés:
                </h4>
                <ul className="space-y-2 font-sans text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Obtener información histórica detallada
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Ganar puntos por cada visita
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    Acceder a descuentos especiales
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                    Compartir tu experiencia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityShowcase;