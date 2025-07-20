'use client';

import React from 'react';
import './AnimatedHero.css';

const AnimatedHero = () => {
  return (
    <div className="relative w-60 h-60 mx-auto mb-8">
      {/* Main Circle Container */}
      <div className="relative w-full h-full">
        {/* Background Circle */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-indigo-400 shadow-2xl"></div>
        
        {/* Girl Animation Container */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="girl-container">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="girl-svg">
              {/* Girl's Head */}
              <ellipse cx="100" cy="120" rx="35" ry="40" fill="#f9d6b7" className="girl-head" />
              
              {/* Hair (shoulder length, brown) */}
              <path d="M65 120 Q50 170 100 190 Q150 170 135 120 Q135 80 100 70 Q65 80 65 120 Z" fill="#7c4a1e" className="girl-hair" />
              
              {/* Bangs */}
              <ellipse cx="100" cy="85" rx="30" ry="15" fill="#7c4a1e" />
              
              {/* Shoulders */}
              <ellipse cx="100" cy="170" rx="30" ry="10" fill="#e0bfa3" />
              
              {/* Body (shirt) */}
              <rect x="70" y="150" width="60" height="30" rx="15" fill="#a78bfa" />
              
              {/* Smile */}
              <path d="M75 135 Q100 150 125 135" stroke="#a05a2c" strokeWidth="3" fill="none" />
              
              {/* Eyes */}
              <ellipse cx="80" cy="115" rx="5" ry="6" fill="#3b2c1a" />
              <ellipse cx="120" cy="115" rx="5" ry="6" fill="#3b2c1a" />
              
              {/* Blush */}
              <ellipse cx="70" cy="130" rx="4" ry="2" fill="#f7b2b2" />
              <ellipse cx="130" cy="130" rx="4" ry="2" fill="#f7b2b2" />
              
              {/* Waving Hand */}
              <g className="girl-hand">
                <ellipse cx="150" cy="100" rx="15" ry="10" fill="#f9d6b7" />
                <ellipse cx="155" cy="98" rx="3" ry="4" fill="#e0bfa3" />
                <ellipse cx="145" cy="98" rx="3" ry="4" fill="#e0bfa3" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero; 