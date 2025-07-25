'use client';

import React, { useEffect } from 'react';
import './AnimatedHero.css';
import { motion, useAnimation } from 'framer-motion';

// --- Character Style Constants ---
const SKIN_TONE = '#d2a074'; // Light brown, tan skin tone
const HAIR_COLOR = '#4a2c2a'; // Dark, rich brown
const SHIRT_COLOR = '#ffacc7'; // Cute pink shirt
const SHORTS_COLOR = '#6c96ff'; // Blue shorts
const HEELS_COLOR = '#333333'; // Black heels

const AnimatedHero = () => {
  const controls = useAnimation();
  const armControls = useAnimation();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const sequence = async () => {
      // 1. Start hidden
      await controls.set({ y: 120, opacity: 0 });
      await armControls.set({ rotate: 0 });
      // 2. Pop up
      await controls.start({ y: 0, opacity: 1, transition: { duration: 1.2, ease: 'easeOut' } });
      // 3. Arm wave (after pop up)
      await armControls.start({
        rotate: [0, -15, 15, -15, 15, 0],
        transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], repeat: 2, repeatType: 'loop' }
      });
      // 4. Wait a moment, then slide down
      await new Promise(res => setTimeout(res, 600));
      await controls.start({ y: 120, opacity: 0, transition: { duration: 0.8, ease: 'easeIn' } });
    };
    // Initial run
    sequence();
    // Loop every 10s
    interval = setInterval(sequence, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [controls, armControls]);

  return (
    // Force a fresh build on Vercel with a minor change
    <div className="relative w-60 h-60 mx-auto mb-8">
      {/* Circle Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2a1745] via-[#1a237e] to-[#0d1333] shadow-2xl"></div>
      
      {/* SVG Container for the Animation */}
      <div className="absolute inset-0 flex items-center justify-center overflow-visible">
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" className="walking-girl-svg">
          {/* This is the invisible circular path the character will walk on */}
          <path id="walk-path" d="M40,120 A80,80 0 1,1 200,120" stroke="transparent" />

          {/* This group contains the entire character. It will be animated to follow the path. */}
          <motion.g
            id="girl-character"
            animate={controls}
            initial={{ y: 120, opacity: 0 }}
            style={{ willChange: 'transform' }}
          >
            {/* --- Character Body Parts --- */}
            
            {/* Legs & Shoes */}
            <g className="girl-legs">
              <ellipse className="girl-leg-left" cx="0" cy="20" rx="4" ry="12" fill={SKIN_TONE} />
              <ellipse className="girl-leg-right" cx="12" cy="20" rx="4" ry="12" fill={SKIN_TONE} />
              <path className="girl-heel-left" d="M -4 30 L 0 32 L 4 30 L 0 28 Z" fill={HEELS_COLOR} />
              <path className="girl-heel-right" d="M 8 30 L 12 32 L 16 30 L 12 28 Z" fill={HEELS_COLOR} />
            </g>

            {/* Clothes: Shirt and Shorts */}
            <rect x="-8" y="0" width="28" height="15" rx="7" fill={SHIRT_COLOR} />
            <rect x="-6" y="14" width="24" height="10" rx="5" fill={SHORTS_COLOR} />

            {/* Arms */}
            <ellipse className="girl-arm-left" cx="-18" cy="8" rx="4" ry="10" fill={SKIN_TONE} />
            <motion.g
              className="girl-arm-right-waving"
              animate={armControls}
              initial={{ rotate: 0 }}
              style={{ transformOrigin: '28px -5px' }}
            >
              <ellipse cx="28" cy="8" rx="4" ry="10" fill={SKIN_TONE} />
              <ellipse cx="28" cy="-1" rx="4" ry="3" fill={SKIN_TONE} />
            </motion.g>

            {/* Head and Face */}
            <g className="girl-head-group">
              <ellipse cx="6" cy="-15" rx="16" ry="16" fill={SKIN_TONE} />
              {/* Hair */}
              <path d="M-10 -15 Q-15 10 6 15 Q27 10 22 -15 Q28 -30 6 -35 Q-16 -30 -10 -15 Z" fill={HAIR_COLOR} />
              {/* Earrings */}
              <circle cx="-9" cy="-10" r="1.5" fill="gold" />
              <circle cx="21" cy="-10" r="1.5" fill="gold" />
              {/* Face Features */}
              <g className="girl-face">
                <ellipse cx="1" cy="-16" rx="1.5" ry="2.5" fill="#2d1a0b" />
                <ellipse cx="11" cy="-16" rx="1.5" ry="2.5" fill="#2d1a0b" />
                <path d="M3 -8 Q6 -5 9 -8" stroke="#7a4a1e" strokeWidth="1" fill="none" />
              </g>
            </g>
          </motion.g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedHero; 