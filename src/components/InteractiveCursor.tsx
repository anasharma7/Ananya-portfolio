'use client';

import { useEffect, useState } from 'react';

const InteractiveCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseEnter);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseEnter);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: `scale(${isClicking ? 0.8 : 1})`,
        }}
      >
        <div
          className={`w-2 h-2 bg-white rounded-full transition-all duration-200 ease-out ${
            isHovering ? 'scale-150 opacity-80' : 'scale-100 opacity-100'
          }`}
        />
      </div>

      {/* Cursor ring */}
      <div
        className="fixed pointer-events-none z-[9998] mix-blend-difference"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: `scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div
          className={`w-10 h-10 border border-white rounded-full transition-all duration-300 ease-out ${
            isHovering ? 'opacity-60 scale-100' : 'opacity-30 scale-75'
          } ${isClicking ? 'scale-90' : ''}`}
        />
      </div>

      {/* Magnetic effect ring */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9997]"
          style={{
            left: mousePosition.x - 30,
            top: mousePosition.y - 30,
          }}
        >
          <div className="w-16 h-16 border-2 border-primary-400/30 rounded-full animate-pulse-slow" />
        </div>
      )}
    </>
  );
};

export default InteractiveCursor; 