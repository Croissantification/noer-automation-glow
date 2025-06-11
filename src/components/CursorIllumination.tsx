
import { useEffect, useState } from "react";

const CursorIllumination = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Clear existing timeout
      clearTimeout(timeoutId);

      // Set timeout to fade out after cursor stops moving
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 1000); // Fade out after 1 second of no movement
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-10 transition-opacity duration-500 ${
        isMoving ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.15) 40%, transparent 70%)`,
        transition: 'background 0.1s ease-out'
      }}
    />
  );
};

export default CursorIllumination;
