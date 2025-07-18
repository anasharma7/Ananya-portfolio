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
      <div className={`w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}`}>
        <span className="text-white font-graffiti text-3xl">AS</span>
            </div>
            
            {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg blur-md transition-all duration-300 ${
        isHovered ? 'opacity-60 scale-125' : 'opacity-0 scale-100'
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