
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="text-center fade-in">
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
        className="absolute bottom-8 cursor-pointer scroll-indicator"
        onClick={scrollToAbout}
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;
