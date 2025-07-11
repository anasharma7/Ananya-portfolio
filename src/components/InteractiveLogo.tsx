'use client';

import { useState } from 'react';
import Link from 'next/link';

const InteractiveLogo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/" className="block">
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center space-x-2">
          {/* Animated icon */}
          <div className="relative">
            <div className={`w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isHovered ? 'scale-110 rotate-12 shadow-lg' : 'scale-100 rotate-0'
            }`}>
              <span className="text-white font-bold text-lg">A</span>
            </div>
            
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-lg blur-md transition-all duration-300 ${
              isHovered ? 'opacity-50 scale-125' : 'opacity-0 scale-100'
            }`} />
          </div>
          
          {/* Text */}
          <div className="relative">
            <span className={`font-bold text-2xl transition-all duration-300 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}>
              <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </span>
            
            {/* Underline effect */}
            <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 ${
              isHovered ? 'w-full' : 'w-0'
            }`} />
          </div>
        </div>
        
        {/* Particle effects on hover */}
        {isHovered && (
          <>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent-400 rounded-full animate-ping" />
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-primary-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
            <div className="absolute top-1/2 -right-2 w-1 h-1 bg-accent-300 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
          </>
        )}
      </div>
    </Link>
  );
};

export default InteractiveLogo; 