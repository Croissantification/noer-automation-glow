
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
            src="/lovable-uploads/51808f1d-6d5d-42f8-b060-dcbdca2422de.png" 
            alt="Noer Logo" 
            className="w-[500px] h-auto mx-auto"
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
