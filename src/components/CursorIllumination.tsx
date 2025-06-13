
import { useEffect, useState } from "react";

const CursorIllumination = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailPositions, setTrailPositions] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 }
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const updateTrail = () => {
      setTrailPositions(prev => [
        mousePosition,
        prev[0],
        prev[1],
        prev[2],
        prev[3]
      ]);
    };

    const interval = setInterval(updateTrail, 50);
    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <>
      {/* Trail layers - creating gel-like consistency */}
      {trailPositions.map((pos, index) => (
        <div
          key={index}
          className="fixed inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(${220 + index * 30}px circle at ${pos.x}px ${pos.y}px, rgba(59, 130, 246, ${0.15 - index * 0.025}), rgba(147, 51, 234, ${0.1 - index * 0.015}) 40%, transparent 70%)`,
            transition: 'background 0.15s ease-out',
            animation: 'smoothPulse 3s ease-in-out infinite',
            animationDelay: `${index * 0.1}s`,
            opacity: 1 - index * 0.15
          }}
        />
      ))}
      
      {/* Main illumination */}
      <div 
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.15) 40%, transparent 70%)`,
          transition: 'background 0.1s ease-out',
          animation: 'smoothPulse 3s ease-in-out infinite'
        }}
      />
    </>
  );
};

export default CursorIllumination;
