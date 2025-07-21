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
          <div className="bitmoji-girl-container">
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none" className="bitmoji-girl-svg">
              {/* Shoulder-length, dark brown hair */}
              <path d="M50 110 Q30 160 90 175 Q150 160 130 110 Q140 70 90 60 Q40 70 50 110 Z" fill="#3b2412" />
              {/* Face (tan skin) */}
              <ellipse cx="90" cy="110" rx="34" ry="38" fill="#d2a074" />
              {/* Bangs */}
              <ellipse cx="90" cy="80" rx="28" ry="12" fill="#3b2412" />
              {/* Neck */}
              <rect x="80" y="140" width="20" height="16" rx="8" fill="#d2a074" />
              {/* Shoulders */}
              <ellipse cx="90" cy="160" rx="30" ry="8" fill="#b98a5a" />
              {/* Shirt (blue) */}
              <rect x="65" y="150" width="50" height="25" rx="12" fill="#4f8edc" />
              {/* Smile (subtle, friendly) */}
              <path d="M75 128 Q90 140 105 128" stroke="#7a4a1e" strokeWidth="2" fill="none" />
              {/* Eyes (smaller, more natural) */}
              <ellipse cx="78" cy="112" rx="3.2" ry="4" fill="#2d1a0b" />
              <ellipse cx="102" cy="112" rx="3.2" ry="4" fill="#2d1a0b" />
              {/* Brows */}
              <path d="M72 104 Q78 100 84 104" stroke="#2d1a0b" strokeWidth="1.2" />
              <path d="M96 104 Q102 100 108 104" stroke="#2d1a0b" strokeWidth="1.2" />
              {/* Blush */}
              <ellipse cx="70" cy="124" rx="4" ry="1.5" fill="#e7b7a3" />
              <ellipse cx="110" cy="124" rx="4" ry="1.5" fill="#e7b7a3" />
              {/* Waving Arm (more natural, human-like) */}
              <g className="bitmoji-girl-arm">
                {/* Arm: more natural bend */}
                <path d="M120 120 Q140 110 150 100" stroke="#d2a074" strokeWidth="10" fill="none" strokeLinecap="round" />
                {/* Hand: more natural shape */}
                <ellipse cx="153" cy="97" rx="7" ry="5" fill="#d2a074" />
                {/* Thumb */}
                <ellipse cx="157" cy="99" rx="1.5" ry="1" fill="#d2a074" />
                {/* Fingers */}
                <ellipse cx="152" cy="94" rx="1.2" ry="2" fill="#d2a074" />
                <ellipse cx="155" cy="94" rx="1.2" ry="2" fill="#d2a074" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero; 