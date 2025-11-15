import Hero from "@/components/Hero";
import About from "@/components/About";
import Purpose from "@/components/Purpose";
import HowItWorks from "@/components/HowItWorks";
import CityShowcase from "@/components/CityShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Purpose />
      <HowItWorks />
      <CityShowcase />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
