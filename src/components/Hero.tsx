
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Main content */}
      <div className="text-center fade-in relative z-10">
        <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-8 tracking-tight">
          Noer
        </h1>
        
        {/* Subtle tagline that appears after the main logo */}
        <div className="fade-in-delay">
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
            AI Automation Redefined
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 cursor-pointer scroll-indicator z-10"
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
