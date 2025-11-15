import { Button } from "@/components/ui/enhanced-button";
import { MapPin, Smartphone, Award, Menu } from "lucide-react";
import heroImage from "@/assets/hero-mendoza.jpeg";
import React, { Component } from "react";

const Hero = () => {
  // Estado para el menú móvil
  const [open, setOpen] = React.useState(false);
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-20 bg-gradient-to-b from-black/70 via-black/30 to-transparent px-4 py-3 flex items-center justify-between backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl md:text-2xl font-bold text-white tracking-wide">TURI</span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" className="font-sans text-white/90 hover:text-accent transition-colors font-medium">Sobre nosotros</a>
          <a href="#como-funciona" className="font-sans text-white/90 hover:text-accent transition-colors font-medium">¿Cómo funciona?</a>
          <a href="#contacto" className="font-sans text-white/90 hover:text-accent transition-colors font-medium">Contacto</a>
          <Button color="#FD6229" size="sm" className="ml-2 shadow-glow font-sans">Descubrí la app</Button>
        </div>
        {/* Botón menú móvil */}
        <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent" onClick={() => setOpen(!open)}>
          <Menu className="h-7 w-7 text-white" />
        </button>
        {/* Menú móvil */}
        {open && (
          <div className="absolute top-full right-4 mt-2 bg-black/90 rounded-lg shadow-lg flex flex-col items-end gap-4 p-6 md:hidden animate-fade-up">
            <a href="#como-funciona" className="font-sans text-white/90 hover:text-accent transition-colors font-medium" onClick={() => setOpen(false)}>¿Cómo funciona?</a>
            <a href="#about" className="font-sans text-white/90 hover:text-accent transition-colors font-medium" onClick={() => setOpen(false)}>Sobre nosotros</a>
            <a href="#contacto" className="font-sans text-white/90 hover:text-accent transition-colors font-medium" onClick={() => setOpen(false)}>Contacto</a>
            <Button color="#FD6229 " size="sm" className="w-full mt-2 shadow-glow font-sans" onClick={() => setOpen(false)}>Descubrí la app</Button>
          </div>
        )}
      </nav>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Paisaje de Mendoza con viñedos" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Mucho más que
             <br />
            turismo

          </h1>
          
          <p className="font-sans text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Explorá Mendoza, conectá con su cultura e historia, y ganá mientras caminás.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 px-0 py-0">
                <MapPin color="lightblue" className="h-5 w-5 text-accent" />
                <span className="font-sans text-sm font-medium text-white/80">Descubrí lugares únicos</span>
              </div>
              <div className="flex items-center gap-2 px-0 py-0">
                <Award color="lightblue" className="h-5 w-5 text-primary-glow" />
                <span className="font-sans text-sm font-medium text-white/80">Ganá recompensas</span>
              </div>
              <div className="flex items-center gap-2 px-0 py-0">
                <Smartphone color="lightblue" className="h-5 w-5 text-secondary" />
                <span className="font-sans text-sm font-medium text-white/80">Experiencia móvil</span>
              </div>
          </div>

          <Button color="#FD6229" size="xl" className="animate-scale-in shadow-glow font-sans">
            Descubrí la app
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;