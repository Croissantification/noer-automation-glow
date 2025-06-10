
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
      {/* Main content */}
      <div className="text-center fade-in relative z-10">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/5303a8d7-de63-46cd-a6b0-bbadbd39c951.png" 
            alt="Noer Logo" 
            className="w-96 h-auto mx-auto filter brightness-0 invert"
            style={{
              filter: 'brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(207deg) brightness(97%) contrast(96%)'
            }}
          />
        </div>
        
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
