'use client';

import React from 'react';
import './AnimatedHero.css';

const AnimatedHero = () => {
  return (
    <div className="relative w-60 h-60 mx-auto mb-8">
      {/* Main Circle Container */}
      <div className="relative w-full h-full">
        {/* Darker Background Circle */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2a1745] via-[#1a237e] to-[#0d1333] shadow-2xl"></div>
        {/* Girl Animation Container */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <svg width="240" height="240" viewBox="0 0 240 240" fill="none" className="fullgirl-svg">
            <g className="girl-anim-sequence">
              {/* Legs climbing */}
              <rect x="98" y="180" width="10" height="35" rx="5" fill="#b98a5a" className="girl-leg-left" />
              <rect x="120" y="180" width="10" height="35" rx="5" fill="#b98a5a" className="girl-leg-right" />
              {/* Body */}
              <rect x="100" y="130" width="30" height="50" rx="15" fill="#4f8edc" className="girl-body" />
              {/* Left arm climbing */}
              <rect x="85" y="140" width="10" height="40" rx="5" fill="#d2a074" className="girl-arm-left" />
              {/* Right arm waving */}
              <g className="girl-arm-right-group">
                <rect x="145" y="140" width="10" height="40" rx="5" fill="#d2a074" />
                {/* Hand */}
                <ellipse cx="150" cy="135" rx="7" ry="5" fill="#d2a074" />
              </g>
              {/* Head (tan skin) */}
              <ellipse cx="115" cy="120" rx="20" ry="22" fill="#d2a074" className="girl-head" />
              {/* Hair (shoulder-length, dark brown) */}
              <path d="M95 120 Q90 150 115 155 Q140 150 135 120 Q135 100 115 95 Q95 100 95 120 Z" fill="#3b2412" className="girl-hair" />
              {/* Bangs */}
              <ellipse cx="115" cy="108" rx="18" ry="7" fill="#3b2412" />
              {/* Smile */}
              <path d="M105 130 Q115 138 125 130" stroke="#7a4a1e" strokeWidth="2" fill="none" />
              {/* Eyes (smaller, natural) */}
              <ellipse cx="108" cy="120" rx="2.5" ry="3.2" fill="#2d1a0b" />
              <ellipse cx="122" cy="120" rx="2.5" ry="3.2" fill="#2d1a0b" />
              {/* Brows */}
              <path d="M104 115 Q108 113 112 115" stroke="#2d1a0b" strokeWidth="1" />
              <path d="M118 115 Q122 113 126 115" stroke="#2d1a0b" strokeWidth="1" />
              {/* Blush */}
              <ellipse cx="105" cy="127" rx="2.5" ry="1" fill="#e7b7a3" />
              <ellipse cx="125" cy="127" rx="2.5" ry="1" fill="#e7b7a3" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero; 