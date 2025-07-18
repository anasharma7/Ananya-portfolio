'use client';

import React from 'react';
import './AnimatedHero.css';

const AnimatedHero = () => {
  return (
    <div className="relative w-60 h-60 mx-auto mb-8 flex items-center justify-center">
      {/* Main Circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg width="240" height="240" viewBox="0 0 240 240" className="z-10">
          {/* Outer Circle */}
          <circle cx="120" cy="120" r="110" fill="url(#circleGradient)" />
          <defs>
            <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f3e8ff" />
              <stop offset="80%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#7c3aed" />
            </radialGradient>
          </defs>
        </svg>
        {/* Girl popping out and waving */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 girl-pop-anim" style={{ width: 160, height: 160 }}>
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none" className="girl-svg">
            {/* Head */}
            <ellipse className="girl-head" cx="80" cy="90" rx="32" ry="34" fill="#f9d6b7" />
            {/* Hair (shoulder length, brown) */}
            <path className="girl-hair" d="M48 90 Q35 130 80 145 Q125 130 112 90 Q112 60 80 55 Q48 60 48 90 Z" fill="#7c4a1e" />
            {/* Bangs */}
            <ellipse cx="80" cy="70" rx="28" ry="12" fill="#7c4a1e" />
            {/* Shoulders */}
            <ellipse cx="80" cy="140" rx="28" ry="8" fill="#e0bfa3" />
            {/* Body (shirt) */}
            <rect x="56" y="120" width="48" height="24" rx="12" fill="#a78bfa" />
            {/* Smile */}
            <path d="M62 110 Q80 122 98 110" stroke="#a05a2c" strokeWidth="3" fill="none" />
            {/* Eyes */}
            <ellipse cx="66" cy="92" rx="4" ry="5" fill="#3b2c1a" />
            <ellipse cx="94" cy="92" rx="4" ry="5" fill="#3b2c1a" />
            {/* Blush */}
            <ellipse cx="60" cy="104" rx="3" ry="1.5" fill="#f7b2b2" />
            <ellipse cx="100" cy="104" rx="3" ry="1.5" fill="#f7b2b2" />
            {/* Waving hand (animated) */}
            <g className="girl-hand-group">
              <ellipse className="girl-hand" cx="120" cy="80" rx="12" ry="8" fill="#f9d6b7" />
              {/* Hand details */}
              <ellipse cx="124" cy="78" rx="2" ry="2.5" fill="#e0bfa3" />
              <ellipse cx="116" cy="78" rx="2" ry="2.5" fill="#e0bfa3" />
            </g>
          </svg>
        </div>
      </div>
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/30 via-pink-400/30 to-indigo-400/30 blur-xl animate-pulse"></div>
    </div>
  );
};

export default AnimatedHero; 