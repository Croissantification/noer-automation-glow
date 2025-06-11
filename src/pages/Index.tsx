
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import ParallaxBackground from "@/components/ParallaxBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParallaxBackground />
      <div className="relative z-20">
        <Hero />
        <About />
        <Pricing />
        <Benefits />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
