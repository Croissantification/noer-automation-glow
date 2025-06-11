
import { useEffect, useState } from "react";

const CursorIllumination = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300"
      style={{
        background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.15) 40%, transparent 70%)`,
        transition: 'background 0.1s ease-out'
      }}
    />
  );
};

export default CursorIllumination;
