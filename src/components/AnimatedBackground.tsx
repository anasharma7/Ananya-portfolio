'use client';

import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  // Static, elegant background with sophisticated colors
  const particles = Array.from({ length: 15 }, (_, i) => i);
  const shapes = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20" />
      
      {/* Very subtle floating particles - static positions */}
      {particles.map((i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full animate-pulse-very-slow"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(135deg, #8b5cf6${i % 2 ? '20' : '15'}, #ec4899${i % 3 ? '20' : '15'}, #6366f1${i % 4 ? '20' : '15'})`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 20 + 30}s`,
            opacity: 0.3 + Math.random() * 0.2,
          }}
        />
      ))}

      {/* Static geometric shapes */}
      {shapes.map((i) => (
        <div
          key={i}
          className={`absolute animate-pulse-very-slow ${
            i % 2 === 0 ? 'bg-purple-400/5' : 'bg-pink-400/5'
          } ${
            i % 3 === 0 ? 'w-32 h-32' : i % 3 === 1 ? 'w-24 h-24' : 'w-20 h-20'
          } ${
            i % 2 === 0 ? 'rounded-full' : 'rotate-45'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${Math.random() * 25 + 40}s`,
            opacity: 0.2 + Math.random() * 0.3,
          }}
        />
      ))}

      {/* Static gradient orbs - very subtle */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/3 to-pink-400/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-indigo-400/3 to-purple-400/3 rounded-full blur-3xl" />

      {/* Very subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent h-px" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-400/10 to-transparent w-px" />
      </div>
    </div>
  );
};

export default AnimatedBackground; 