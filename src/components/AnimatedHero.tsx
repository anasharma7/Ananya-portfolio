'use client';

import React from 'react';
import './AnimatedHero.css';

const AnimatedHero = () => {
  return (
    <div className="relative w-60 h-60 mx-auto mb-8">
      {/* Main Circle Container */}
      <div className="relative w-full h-full">
        {/* Darker Background Circle */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3b1c5c] via-[#1a237e] to-[#0d1333] shadow-2xl"></div>
        {/* Girl Animation Container */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="girl-container">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="girl-svg">
              {/* Hair (long, flowing, brown) */}
              <path d="M60 120 Q40 180 100 195 Q160 180 140 120 Q150 60 100 60 Q50 60 60 120 Z" fill="#6d4c2f" />
              {/* Face */}
              <ellipse cx="100" cy="120" rx="36" ry="40" fill="#fbeee6" />
              {/* Bangs */}
              <ellipse cx="100" cy="85" rx="30" ry="14" fill="#6d4c2f" />
              {/* Neck */}
              <rect x="90" y="155" width="20" height="18" rx="8" fill="#fbeee6" />
              {/* Shoulders */}
              <ellipse cx="100" cy="175" rx="32" ry="10" fill="#e0bfa3" />
              {/* Shirt (soft lavender) */}
              <rect x="70" y="160" width="60" height="30" rx="15" fill="#b39ddb" />
              {/* Smile */}
              <path d="M85 140 Q100 155 115 140" stroke="#a05a2c" strokeWidth="2.5" fill="none" />
              {/* Eyes (large, with lashes) */}
              <ellipse cx="85" cy="120" rx="6" ry="8" fill="#3b2c1a" />
              <ellipse cx="115" cy="120" rx="6" ry="8" fill="#3b2c1a" />
              {/* Lashes */}
              <path d="M80 115 Q83 113 85 117" stroke="#3b2c1a" strokeWidth="1.2" />
              <path d="M120 115 Q117 113 115 117" stroke="#3b2c1a" strokeWidth="1.2" />
              {/* Blush */}
              <ellipse cx="78" cy="135" rx="5" ry="2.2" fill="#f7b2b2" />
              <ellipse cx="122" cy="135" rx="5" ry="2.2" fill="#f7b2b2" />
              {/* Waving Hand (more natural shape) */}
              <g className="girl-hand">
                <ellipse cx="150" cy="105" rx="13" ry="9" fill="#fbeee6" />
                {/* Fingers */}
                <ellipse cx="155" cy="103" rx="2.2" ry="3.2" fill="#fbeee6" />
                <ellipse cx="146" cy="103" rx="2.2" ry="3.2" fill="#fbeee6" />
                <ellipse cx="152" cy="108" rx="2.2" ry="3.2" fill="#fbeee6" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero; 