'use client';

import React from 'react';

const AnimatedHero = () => {
  return (
    <div className="relative w-60 h-60 mx-auto mb-8">
      {/* Main Circle */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-400 shadow-2xl animate-pulse">
        {/* Inner circle for depth */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-300 via-pink-300 to-indigo-300"></div>
        
        {/* Girl popping head out and waving */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
            <g>
              {/* Girl's head and upper body */}
              <g className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
                {/* Face */}
                <ellipse cx="60" cy="65" rx="18" ry="20" fill="#f9d6b7" />
                
                {/* Hair (shoulder length, brown) */}
                <path d="M42 65 Q35 85 60 95 Q85 85 78 65 Q78 45 60 40 Q42 45 42 65 Z" fill="#7c4a1e" />
                
                {/* Bangs */}
                <ellipse cx="60" cy="48" rx="15" ry="8" fill="#7c4a1e" />
                
                {/* Shoulders */}
                <ellipse cx="60" cy="105" rx="16" ry="6" fill="#e0bfa3" />
                
                {/* Body (shirt) */}
                <rect x="44" y="85" width="32" height="20" rx="8" fill="#a78bfa" />
                
                {/* Smile */}
                <path d="M48 75 Q60 82 72 75" stroke="#a05a2c" strokeWidth="2.5" fill="none" />
                
                {/* Eyes */}
                <ellipse cx="48" cy="62" rx="2.5" ry="3" fill="#3b2c1a" />
                <ellipse cx="72" cy="62" rx="2.5" ry="3" fill="#3b2c1a" />
                
                {/* Blush */}
                <ellipse cx="44" cy="70" rx="2" ry="1" fill="#f7b2b2" />
                <ellipse cx="76" cy="70" rx="2" ry="1" fill="#f7b2b2" />
              </g>
              
              {/* Waving hand */}
              <g className="animate-wave" style={{ animationDelay: '1s' }}>
                <ellipse cx="85" cy="55" rx="8" ry="6" fill="#f9d6b7" />
                <path d="M77 55 Q75 45 85 40 Q95 45 93 55" stroke="#a05a2c" strokeWidth="2" fill="none" />
                <ellipse cx="82" cy="52" rx="1" ry="1.5" fill="#3b2c1a" />
                <ellipse cx="88" cy="52" rx="1" ry="1.5" fill="#3b2c1a" />
              </g>
            </g>
          </svg>
        </div>
        
        {/* Sparkle effects around the circle */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-yellow-300 rounded-full animate-ping"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${15 + (i % 2 * 20)}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/30 via-pink-400/30 to-indigo-400/30 blur-xl animate-pulse"></div>
    </div>
  );
};

export default AnimatedHero; 