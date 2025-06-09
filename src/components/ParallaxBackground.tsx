import { useEffect, useState } from "react";

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Neural network structure - Input layer (left), Hidden layers (middle), Output layer (right)
  const neuralNetwork = {
    inputLayer: [
      { id: 'i1', x: 15, y: 20, label: 'z₁' },
      { id: 'i2', x: 15, y: 35, label: 'z₂' },
      { id: 'i3', x: 15, y: 50, label: 'z₃' },
      { id: 'i4', x: 15, y: 65, label: 'z₄' },
      { id: 'i5', x: 15, y: 80, label: 'z₅' }
    ],
    hiddenLayer1: [
      { id: 'h1', x: 40, y: 25 },
      { id: 'h2', x: 40, y: 40 },
      { id: 'h3', x: 40, y: 55 },
      { id: 'h4', x: 40, y: 70 }
    ],
    hiddenLayer2: [
      { id: 'h5', x: 65, y: 30 },
      { id: 'h6', x: 65, y: 50 },
      { id: 'h7', x: 65, y: 70 }
    ],
    outputLayer: [
      { id: 'o1', x: 85, y: 35, label: 'y₁' },
      { id: 'o2', x: 85, y: 55, label: 'y₂' },
      { id: 'o3', x: 85, y: 75, label: 'y₃' }
    ]
  };

  // Generate connections between layers
  const generateConnections = () => {
    const connections = [];
    
    // Input to Hidden Layer 1
    neuralNetwork.inputLayer.forEach(input => {
      neuralNetwork.hiddenLayer1.forEach(hidden => {
        connections.push({
          from: input,
          to: hidden,
          id: `${input.id}-${hidden.id}`
        });
      });
    });

    // Hidden Layer 1 to Hidden Layer 2
    neuralNetwork.hiddenLayer1.forEach(hidden1 => {
      neuralNetwork.hiddenLayer2.forEach(hidden2 => {
        connections.push({
          from: hidden1,
          to: hidden2,
          id: `${hidden1.id}-${hidden2.id}`
        });
      });
    });

    // Hidden Layer 2 to Output
    neuralNetwork.hiddenLayer2.forEach(hidden => {
      neuralNetwork.outputLayer.forEach(output => {
        connections.push({
          from: hidden,
          to: output,
          id: `${hidden.id}-${output.id}`
        });
      });
    });

    return connections;
  };

  const connections = generateConnections();
  const allNodes = [
    ...neuralNetwork.inputLayer,
    ...neuralNetwork.hiddenLayer1,
    ...neuralNetwork.hiddenLayer2,
    ...neuralNetwork.outputLayer
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

      {/* Neural Network - Fixed position, no parallax */}
      <div className="absolute inset-0 opacity-40 flex items-center justify-center">
        <div className="relative w-4/5 h-3/5 max-w-4xl">
          
          {/* Neural network connections with data flow animation */}
          <svg className="w-full h-full absolute inset-0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6" />
                <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.4" />
              </linearGradient>
              
              <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0">
                  <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="rgb(34, 197, 94)" stopOpacity="1">
                  <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
                </stop>
                <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0">
                  <animate attributeName="stop-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
                </stop>
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Base connections */}
            {connections.map((connection, index) => (
              <line
                key={connection.id}
                x1={`${connection.from.x}%`}
                y1={`${connection.from.y}%`}
                x2={`${connection.to.x}%`}
                y2={`${connection.to.y}%`}
                stroke="url(#connectionGradient)"
                strokeWidth="1.5"
                filter="url(#glow)"
              />
            ))}

            {/* Data flow lines that pulse */}
            {connections.map((connection, index) => (
              <line
                key={`flow-${connection.id}`}
                x1={`${connection.from.x}%`}
                y1={`${connection.from.y}%`}
                x2={`${connection.to.x}%`}
                y2={`${connection.to.y}%`}
                stroke="url(#dataFlowGradient)"
                strokeWidth="3"
                filter="url(#glow)"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              />
            ))}
          </svg>

          {/* Neural network nodes */}
          {allNodes.map((node, index) => (
            <div
              key={node.id}
              className="absolute flex items-center justify-center"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              {/* Node circle */}
              <div
                className="rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-primary/50 animate-pulse"
                style={{
                  width: '20px',
                  height: '20px',
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: '3s',
                  boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)'
                }}
              ></div>
              
              {/* Node labels for input and output layers */}
              {node.label && (
                <span className="absolute text-xs text-muted-foreground font-mono" 
                      style={{
                        left: node.x < 50 ? '-25px' : '25px',
                        top: '50%',
                        transform: 'translateY(-50%)'
                      }}>
                  {node.label}
                </span>
              )}
            </div>
          ))}

          {/* Layer labels */}
          <div className="absolute top-0 left-[15%] transform -translate-x-1/2 -translate-y-8">
            <span className="text-sm text-muted-foreground font-semibold">Input Layer</span>
          </div>
          <div className="absolute top-0 left-[52.5%] transform -translate-x-1/2 -translate-y-8">
            <span className="text-sm text-muted-foreground font-semibold">Hidden Layers</span>
          </div>
          <div className="absolute top-0 left-[85%] transform -translate-x-1/2 -translate-y-8">
            <span className="text-sm text-muted-foreground font-semibold">Output Layer</span>
          </div>
        </div>
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
