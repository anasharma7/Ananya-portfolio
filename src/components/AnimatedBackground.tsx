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

  // More particles and shapes, faster and more colorful
  const particles = Array.from({ length: 25 }, (_, i) => i);
  const shapes = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating particles */}
      {particles.map((i) => (
        <div
          key={i}
          className="absolute w-3 h-3 rounded-full animate-float-very-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(135deg, #38bdf8${i % 2 ? 'ff' : 'cc'}, #fb923c${i % 3 ? 'ff' : 'cc'}, #8b5cf6${i % 4 ? 'ff' : 'cc'})`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${Math.random() * 40 + 80}s`,
            opacity: 0.6 + Math.random() * 0.4,
            filter: 'blur(0.5px)',
          }}
        />
      ))}

      {/* Geometric shapes */}
      {shapes.map((i) => (
        <div
          key={i}
          className={`absolute animate-float-very-slow ${
            i % 2 === 0 ? 'bg-accent-400/10' : 'bg-secondary-400/10'
          } ${
            i % 3 === 0 ? 'w-24 h-24' : i % 3 === 1 ? 'w-20 h-20' : 'w-16 h-16'
          } ${
            i % 2 === 0 ? 'rounded-full' : 'rotate-45'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${Math.random() * 30 + 60}s`,
            opacity: 0.3 + Math.random() * 0.5,
          }}
        />
      ))}

      {/* Mouse-following gradient */}
      <div
        className="absolute w-[500px] h-[500px] bg-gradient-to-r from-primary-400/10 to-accent-400/10 rounded-full blur-3xl transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-400/20 to-transparent h-px animate-pulse-very-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-400/20 to-transparent w-px animate-pulse-very-slow" />
      </div>
    </div>
  );
};

export default AnimatedBackground; 