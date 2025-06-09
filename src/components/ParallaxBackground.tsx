
import { useEffect, useState } from "react";

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Neural network node positions
  const networkNodes = [
    { x: 10, y: 15, size: 8, delay: 0 },
    { x: 25, y: 25, size: 6, delay: 0.5 },
    { x: 15, y: 40, size: 10, delay: 1 },
    { x: 35, y: 35, size: 7, delay: 1.5 },
    { x: 45, y: 20, size: 9, delay: 2 },
    { x: 55, y: 45, size: 8, delay: 2.5 },
    { x: 70, y: 30, size: 6, delay: 3 },
    { x: 80, y: 50, size: 11, delay: 3.5 },
    { x: 65, y: 65, size: 7, delay: 4 },
    { x: 85, y: 15, size: 9, delay: 4.5 },
    { x: 90, y: 75, size: 8, delay: 5 },
    { x: 20, y: 70, size: 10, delay: 5.5 },
    { x: 40, y: 80, size: 6, delay: 6 },
    { x: 75, y: 85, size: 8, delay: 6.5 }
  ];

  // Neural network connections
  const networkConnections = [
    { from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 3 },
    { from: 2, to: 3 }, { from: 3, to: 4 }, { from: 4, to: 5 },
    { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 8 },
    { from: 8, to: 9 }, { from: 9, to: 10 }, { from: 10, to: 11 },
    { from: 11, to: 12 }, { from: 12, to: 13 }, { from: 1, to: 4 },
    { from: 2, to: 5 }, { from: 3, to: 6 }, { from: 5, to: 8 },
    { from: 6, to: 9 }, { from: 7, to: 11 }, { from: 8, to: 12 }
  ];

  return (
    <div className="fixed inset-0 parallax-bg pointer-events-none z-0">
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

      {/* Neural Network Layer */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      >
        {/* Neural network connections */}
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
              <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.4" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {networkConnections.map((connection, index) => {
            const fromNode = networkNodes[connection.from];
            const toNode = networkNodes[connection.to];
            return (
              <line
                key={index}
                x1={`${fromNode.x}%`}
                y1={`${fromNode.y}%`}
                x2={`${toNode.x}%`}
                y2={`${toNode.y}%`}
                stroke="url(#connectionGradient)"
                strokeWidth="1.5"
                filter="url(#glow)"
                className="animate-pulse"
                style={{ 
                  animationDelay: `${index * 0.3}s`,
                  animationDuration: `${2 + (index % 3)}s`
                }}
              />
            );
          })}
        </svg>

        {/* Neural network nodes */}
        {networkNodes.map((node, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              transform: `translate(-50%, -50%) translateY(${scrollY * (0.05 + index * 0.002)}px)`,
              animationDelay: `${node.delay}s`,
              animationDuration: `${2 + (index % 4)}s`,
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
            }}
          ></div>
        ))}

        {/* Data flow particles along connections */}
        {networkConnections.slice(0, 8).map((connection, index) => {
          const fromNode = networkNodes[connection.from];
          const toNode = networkNodes[connection.to];
          return (
            <div
              key={`particle-${index}`}
              className="absolute w-1 h-1 bg-accent rounded-full animate-float"
              style={{
                left: `${fromNode.x + (toNode.x - fromNode.x) * 0.3}%`,
                top: `${fromNode.y + (toNode.y - fromNode.y) * 0.3}%`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${3 + (index % 3)}s`,
                transform: `translateY(${scrollY * (0.03 + index * 0.01)}px)`
              }}
            ></div>
          );
        })}
      </div>

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
