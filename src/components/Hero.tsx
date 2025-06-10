
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
            src="/lovable-uploads/7d2a78a4-1219-4941-be6d-66d8b7070034.png" 
            alt="Noer Logo" 
            className="h-32 md:h-40 mx-auto object-contain"
            style={{
              filter: 'brightness(0) saturate(100%) invert(52%) sepia(94%) saturate(2455%) hue-rotate(209deg) brightness(94%) contrast(91%)'
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
