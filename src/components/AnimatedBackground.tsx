'use client';

import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = Array.from({ length: 8 }, (_, i) => i); // Reduced from 20 to 8
  const shapes = Array.from({ length: 4 }, (_, i) => i); // Reduced from 8 to 4

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated particles */}
      {particles.map((i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary-400/15 rounded-full animate-float-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${Math.random() * 20 + 30}s`, // Slower animation
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      {shapes.map((i) => (
        <div
          key={i}
          className={`absolute animate-float-slow ${
            i % 2 === 0 ? 'bg-accent-400/8' : 'bg-secondary-400/8'
          } ${
            i % 3 === 0 ? 'w-20 h-20' : i % 3 === 1 ? 'w-16 h-16' : 'w-12 h-12'
          } ${
            i % 2 === 0 ? 'rounded-full' : 'rotate-45'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 25}s`,
            animationDuration: `${Math.random() * 30 + 40}s`, // Much slower animation
          }}
        />
      ))}

      {/* Mouse-following gradient */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-primary-400/8 to-accent-400/8 rounded-full blur-3xl transition-all duration-500 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-400 to-transparent h-px animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-400 to-transparent w-px animate-pulse-slow" />
      </div>
    </div>
  );
};

export default AnimatedBackground; 