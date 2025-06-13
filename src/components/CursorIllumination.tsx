
import { useEffect, useState } from "react";

const CursorIllumination = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailPositions, setTrailPositions] = useState([
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
        prev[1]
      ]);
    };

    const interval = setInterval(updateTrail, 20);
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
            background: `radial-gradient(${180 + index * 20}px circle at ${pos.x}px ${pos.y}px, rgba(59, 130, 246, ${0.18 - index * 0.04}), rgba(147, 51, 234, ${0.12 - index * 0.03}) 40%, transparent 70%)`,
            transition: 'background 0.08s ease-out',
            animation: 'smoothPulse 3s ease-in-out infinite',
            animationDelay: `${index * 0.05}s`,
            opacity: 1 - index * 0.25
          }}
        />
      ))}
      
      {/* Main illumination */}
      <div 
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(160px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.25), rgba(147, 51, 234, 0.18) 40%, transparent 70%)`,
          transition: 'background 0.05s ease-out',
          animation: 'smoothPulse 3s ease-in-out infinite'
        }}
      />
    </>
  );
};

export default CursorIllumination;
