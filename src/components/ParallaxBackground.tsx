import { useEffect, useState } from "react";
import CursorIllumination from "./CursorIllumination";

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 parallax-bg pointer-events-none z-0">
      {/* Cursor illumination effect */}
      <CursorIllumination />
      
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card"></div>
      
      {/* Animated geometric grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Large floating orbs with parallax */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"
        style={{ transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.1}px)` }}
      ></div>
      
      <div 
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-accent/15 to-primary/15 rounded-full blur-3xl"
        style={{ 
          transform: `translate(${scrollY * -0.2}px, ${scrollY * 0.08}px)`,
          animationDelay: '1s'
        }}
      ></div>

      <div 
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-2xl"
        style={{ transform: `translate(-50%, -50%) translate(${scrollY * 0.05}px, ${scrollY * -0.12}px)` }}
      ></div>

      {/* Additional orbs for more coverage */}
      <div 
        className="absolute top-3/4 left-1/3 w-72 h-72 bg-gradient-to-r from-accent/10 to-secondary/15 rounded-full blur-3xl"
        style={{ transform: `translate(${scrollY * 0.1}px, ${scrollY * -0.15}px)` }}
      ></div>

      <div 
        className="absolute bottom-1/4 right-1/3 w-60 h-60 bg-gradient-to-l from-primary/15 to-accent/10 rounded-full blur-2xl"
        style={{ transform: `translate(${scrollY * -0.1}px, ${scrollY * 0.2}px)` }}
      ></div>

      {/* Geometric shapes */}
      <div 
        className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rotate-45 animate-spin-slow"
        style={{ transform: `rotate(45deg) translateY(${scrollY * 0.3}px)`, animationDuration: '20s' }}
      ></div>
      
      <div 
        className="absolute bottom-32 left-16 w-24 h-24 border-2 border-secondary/20 rounded-lg rotate-12"
        style={{ transform: `rotate(12deg) translateY(${scrollY * -0.2}px)` }}
      ></div>

      <div 
        className="absolute top-1/3 right-1/3 w-16 h-16 bg-accent/10 transform rotate-45"
        style={{ transform: `rotate(45deg) translateY(${scrollY * 0.25}px)` }}
      ></div>

      <div 
        className="absolute top-2/3 left-1/4 w-20 h-20 border border-accent/20 rounded-full"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      ></div>

      <div 
        className="absolute bottom-1/3 left-2/3 w-14 h-14 bg-secondary/10 rotate-12"
        style={{ transform: `rotate(12deg) translateY(${scrollY * 0.15}px)` }}
      ></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${10 + (i * 4)}%`,
              top: `${15 + (i * 4)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 4)}s`,
              transform: `translateY(${scrollY * (0.05 + i * 0.01)}px)`
            }}
          ></div>
        ))}
      </div>

      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/60"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      ></div>

      {/* Neural network-like connecting lines */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" />
              <stop offset="100%" stopColor="rgb(147, 51, 234)" />
            </linearGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1={`${i * 10}%`}
              y1="5%"
              x2={`${90 - i * 8}%`}
              y2="95%"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default ParallaxBackground;
