'use client';

import React, { useState } from 'react';

const InteractiveLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo container */}
      <div className={`w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 ${
        isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
      }`}>
        <span className="text-white font-bold text-lg">A</span>
      </div>

      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg blur-md transition-all duration-300 ${
        isHovered ? 'opacity-60 scale-125' : 'opacity-0 scale-100'
      }`} />

      {/* Text */}
      <div className="ml-3">
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Ana Sharma
        </span>
      </div>

      {/* Underline effect */}
      <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
        isHovered ? 'w-full' : 'w-0'
      }`} />

      {/* Floating particles */}
      {isHovered && (
        <>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full animate-ping" />
          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
          <div className="absolute top-1/2 -right-2 w-1 h-1 bg-pink-300 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
        </>
      )}
    </div>
  );
};

export default InteractiveLogo; 