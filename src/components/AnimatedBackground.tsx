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

  const particles = Array.from({ length: 6 }, (_, i) => i); // Even fewer particles
  const shapes = Array.from({ length: 3 }, (_, i) => i); // Even fewer shapes

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle floating particles */}
      {particles.map((i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary-400/10 rounded-full animate-float-very-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${Math.random() * 40 + 90}s`, // Even slower
          }}
        />
      ))}

      {/* Elegant geometric shapes */}
      {shapes.map((i) => (
        <div
          key={i}
          className={`absolute animate-float-very-slow ${
            i % 2 === 0 ? 'bg-accent-400/5' : 'bg-secondary-400/5'
          } ${
            i % 3 === 0 ? 'w-24 h-24' : i % 3 === 1 ? 'w-20 h-20' : 'w-16 h-16'
          } ${
            i % 2 === 0 ? 'rounded-full' : 'rotate-45'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 30}s`,
            animationDuration: `${Math.random() * 60 + 120}s`, // Extremely slow animation
          }}
        />
      ))}

      {/* Subtle mouse-following gradient */}
      <div
        className="absolute w-[500px] h-[500px] bg-gradient-to-r from-primary-400/5 to-accent-400/5 rounded-full blur-3xl transition-all duration-700 ease-out"
        style={{
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-2">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-400/20 to-transparent h-px animate-pulse-very-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-400/20 to-transparent w-px animate-pulse-very-slow" />
      </div>

      {/* Subtle corner accents */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-primary-400/10 rounded-full animate-pulse-very-slow" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-accent-400/10 rounded-full animate-pulse-very-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-10 w-16 h-16 border border-secondary-400/10 rounded-full animate-pulse-very-slow" style={{ animationDelay: '4s' }} />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 right-20 w-8 h-8 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-lg rotate-45 animate-float-very-slow" style={{ animationDelay: '5s' }} />
      <div className="absolute bottom-32 left-32 w-12 h-12 bg-gradient-to-br from-secondary-400/15 to-primary-400/15 rounded-full animate-float-very-slow" style={{ animationDelay: '8s' }} />
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-gradient-to-br from-accent-400/25 to-secondary-400/25 transform rotate-12 animate-float-very-slow" style={{ animationDelay: '12s' }} />
      
      {/* Interactive glow orbs */}
      <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-primary-400/30 rounded-full animate-pulse-very-slow blur-sm" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent-400/40 rounded-full animate-pulse-very-slow blur-sm" style={{ animationDelay: '6s' }} />
      <div className="absolute top-3/4 right-1/4 w-5 h-5 bg-secondary-400/35 rounded-full animate-pulse-very-slow blur-sm" style={{ animationDelay: '9s' }} />
    </div>
  );
};

export default AnimatedBackground; 