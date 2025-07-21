'use client';

import React from 'react';
import './AnimatedHero.css';

const SKIN = '#c68642'; // Warm, tan skin tone
const HAIR = '#3b2412'; // Dark brown
const DRESS = '#7c4dff';
const DRESS_ACCENT = '#a084e8';

const AnimatedHero = () => {
  return (
    // Force a fresh build with a minor change
    <div className="relative w-60 h-60 mx-auto mb-8">
      {/* Main Circle Container */}
      <div className="relative w-full h-full">
        {/* Darker Background Circle */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2a1745] via-[#1a237e] to-[#0d1333] shadow-2xl"></div>
        {/* SVG Container for Animation */}
        <div className="absolute inset-0 flex items-center justify-center overflow-visible">
          <svg width="240" height="240" viewBox="0 0 240 240" fill="none" className="walking-girl-svg">
            {/* The invisible path the girl will walk on */}
            <path id="walk-path" d="M40,120 A80,80 0 1,1 200,120" stroke="transparent" />

            {/* The group for the entire girl character, this will be animated */}
            <g id="girl-character">
              {/* Legs for walking animation */}
              <g className="girl-legs">
                <ellipse className="girl-leg-left" cx="0" cy="18" rx="4" ry="8" fill={SKIN} />
                <ellipse className="girl-leg-right" cx="10" cy="18" rx="4" ry="8" fill={SKIN} />
              </g>
              {/* Dress */}
              <ellipse cx="5" cy="0" rx="14" ry="10" fill={DRESS} />
              <rect x="-9" y="-12" width="28" height="18" rx="10" fill={DRESS_ACCENT} />
              {/* Arms */}
              <ellipse className="girl-arm-left" cx="-18" cy="-5" rx="4" ry="9" fill={SKIN} />
              <g className="girl-arm-right-waving">
                <ellipse cx="28" cy="-5" rx="4" ry="9" fill={SKIN} />
                <ellipse cx="28" cy="-12" rx="4" ry="3" fill={SKIN} />
              </g>
              {/* Head */}
              <ellipse cx="5" cy="-25" rx="14" ry="15" fill={SKIN} />
              {/* Hair */}
              <path d="M-9 -25 Q-15 -5 5 0 Q25 -5 19 -25 Q22 -40 5 -45 Q-12 -40 -9 -25 Z" fill={HAIR} />
              {/* Earrings */}
              <circle cx="-8" cy="-20" r="1.5" fill="gold" />
              <circle cx="18" cy="-20" r="1.5" fill="gold" />
              {/* Face Features */}
              <g className="girl-face">
                <ellipse cx="0" cy="-26" rx="1.5" ry="2" fill="#2d1a0b" />
                <ellipse cx="10" cy="-26" rx="1.5" ry="2" fill="#2d1a0b" />
                <path d="M2 -20 Q5 -17 8 -20" stroke="#7a4a1e" strokeWidth="1" fill="none" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero; 