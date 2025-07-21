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
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none" className="fullgirl-svg">
            <g className="girl-anim-sequence">
              {/* Dress */}
              <ellipse cx="90" cy="140" rx="24" ry="18" fill="#7c4dff" />
              <rect x="66" y="120" width="48" height="28" rx="18" fill="#a084e8" />
              {/* Left leg */}
              <ellipse cx="80" cy="165" rx="7" ry="13" fill="#d2a074" />
              {/* Right leg */}
              <ellipse cx="100" cy="165" rx="7" ry="13" fill="#d2a074" />
              {/* Left arm (peeking) */}
              <ellipse cx="60" cy="120" rx="7" ry="15" fill="#d2a074" />
              {/* Right arm (waving) */}
              <g className="girl-arm-right-group">
                <ellipse cx="120" cy="110" rx="7" ry="15" fill="#d2a074" />
                {/* Hand */}
                <ellipse cx="120" cy="98" rx="6" ry="4" fill="#d2a074" />
              </g>
              {/* Head (round, tan) */}
              <ellipse cx="90" cy="100" rx="22" ry="24" fill="#d2a074" />
              {/* Hair (shoulder-length, dark, feminine) */}
              <path d="M68 100 Q60 120 90 130 Q120 120 112 100 Q112 80 90 75 Q68 80 68 100 Z" fill="#2d1a0b" />
              {/* Bangs */}
              <ellipse cx="90" cy="88" rx="18" ry="8" fill="#2d1a0b" />
              {/* Smile */}
              <path d="M80 110 Q90 120 100 110" stroke="#7a4a1e" strokeWidth="2" fill="none" />
              {/* Eyes (smaller, lashes) */}
              <ellipse cx="82" cy="100" rx="2.2" ry="3" fill="#2d1a0b" />
              <ellipse cx="98" cy="100" rx="2.2" ry="3" fill="#2d1a0b" />
              {/* Lashes */}
              <path d="M80 98 Q81 96 83 98" stroke="#2d1a0b" strokeWidth="0.8" />
              <path d="M96 98 Q97 96 99 98" stroke="#2d1a0b" strokeWidth="0.8" />
              {/* Blush */}
              <ellipse cx="78" cy="108" rx="2.5" ry="1" fill="#e7b7a3" />
              <ellipse cx="102" cy="108" rx="2.5" ry="1" fill="#e7b7a3" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero; 