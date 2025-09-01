'use client';

import React, { useEffect } from 'react';
import './AnimatedHero.css';
import { motion, useAnimation } from 'framer-motion';

// --- Character Style Constants ---
const SKIN_TONE = '#d2a074'; // Light brown, tan skin tone
const HAIR_COLOR = '#4a2c2a'; // Rich dark brown hair
const SHIRT_COLOR = '#ffacc7'; // Cute pink shirt
const JEANS_COLOR = '#6c96ff'; // Blue jeans
const EYE_COLOR = '#2d1a0b'; // Dark brown eyes
const LIP_COLOR = '#c44569'; // Natural lip color

const AnimatedHero = () => {
  const controls = useAnimation();
  const armControls = useAnimation();
  const eyeControls = useAnimation();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let blinkInterval: NodeJS.Timeout;
    
    const sequence = async () => {
      // 1. Start hidden
      await controls.set({ y: 120, opacity: 0, scale: 0.8 });
      await armControls.set({ rotate: 0 });
      
      // 2. Pop up with bounce effect
      await controls.start({ 
        y: 0, 
        opacity: 1, 
        scale: 1,
        transition: { 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94], // Custom bounce
          scale: {
            type: "spring",
            stiffness: 300,
            damping: 15
          }
        } 
      });
      
      // 3. Arm wave (after pop up)
      await armControls.start({
        rotate: [0, -20, 20, -20, 20, 0],
        transition: { 
          duration: 1.2, 
          times: [0, 0.2, 0.4, 0.6, 0.8, 1], 
          ease: "easeInOut",
          repeat: 2, 
          repeatType: 'loop' 
        }
      });
      
      // 4. Wait a moment, then slide down
      await new Promise(res => setTimeout(res, 800));
      await controls.start({ 
        y: 120, 
        opacity: 0, 
        scale: 0.8,
        transition: { 
          duration: 1.0, 
          ease: "easeIn" 
        } 
      });
    };

    // Eye blink animation every 5 seconds
    const blinkSequence = async () => {
      await eyeControls.start({ 
        scaleY: 0.1,
        transition: { duration: 0.1 }
      });
      await eyeControls.start({ 
        scaleY: 1,
        transition: { duration: 0.1 }
      });
    };

    // Initial run
    sequence();
    
    // Loop every 8 seconds
    interval = setInterval(sequence, 8000);
    
    // Blink every 5 seconds
    blinkInterval = setInterval(blinkSequence, 5000);
    
    return () => {
      clearInterval(interval);
      clearInterval(blinkInterval);
    };
  }, [controls, armControls, eyeControls]);

  return (
    <div className="relative w-60 h-60 mx-auto mb-8">
      {/* Circle Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2a1745] via-[#1a237e] to-[#0d1333] shadow-2xl"></div>
      
      {/* SVG Container for the Animation */}
      <div className="absolute inset-0 flex items-center justify-center overflow-visible">
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" className="walking-girl-svg">
          
          {/* This group contains the entire character */}
          <motion.g
            id="girl-character"
            animate={controls}
            initial={{ y: 120, opacity: 0, scale: 0.8 }}
            style={{ willChange: 'transform' }}
          >
            {/* --- Character Body Parts --- */}
            
            {/* Legs - More realistic proportions */}
            <g className="girl-legs">
              <ellipse className="girl-leg-left" cx="0" cy="25" rx="3.5" ry="12" fill={SKIN_TONE} />
              <ellipse className="girl-leg-right" cx="10" cy="25" rx="3.5" ry="12" fill={SKIN_TONE} />
              {/* Simple shoes */}
              <ellipse cx="0" cy="37" rx="4.5" ry="2.5" fill="#333" />
              <ellipse cx="10" cy="37" rx="4.5" ry="2.5" fill="#333" />
            </g>

            {/* Clothes: Shirt and Jeans - More realistic fit */}
            <rect x="-7" y="0" width="24" height="13" rx="6.5" fill={SHIRT_COLOR} />
            <rect x="-6" y="12" width="22" height="9" rx="4.5" fill={JEANS_COLOR} />

            {/* Arms - More realistic proportions */}
            <ellipse className="girl-arm-left" cx="-16" cy="6" rx="3.5" ry="9" fill={SKIN_TONE} />
            <motion.g
              className="girl-arm-right-waving"
              animate={armControls}
              initial={{ rotate: 0 }}
              style={{ transformOrigin: '23px -2px' }}
            >
              <ellipse cx="23" cy="6" rx="3.5" ry="9" fill={SKIN_TONE} />
            </motion.g>

            {/* Head and Face - Realistic young woman */}
            <g className="girl-head-group">
              {/* Head base - more oval, realistic shape */}
              <ellipse cx="5" cy="-20" rx="16" ry="20" fill={SKIN_TONE} />
              
              {/* Hair - Realistic layered style for young woman */}
              <g className="girl-hair">
                {/* Main hair shape - more natural flow */}
                <path d="M-11 -20 Q-18 8 5 22 Q28 8 21 -20 Q27 -38 5 -42 Q-17 -38 -11 -20 Z" fill={HAIR_COLOR} />
                {/* Hair layers for natural look */}
                <path d="M-9 -15 Q-15 10 5 20 Q25 10 19 -15 Q24 -30 5 -35 Q-15 -30 -9 -15 Z" fill={HAIR_COLOR} opacity="0.85" />
                <path d="M-7 -10 Q-12 12 5 18 Q22 12 17 -10 Q21 -25 5 -30 Q-12 -25 -7 -10 Z" fill={HAIR_COLOR} opacity="0.7" />
                {/* Hair highlights */}
                <path d="M-8 -12 Q-13 8 5 16 Q23 8 18 -12 Q22 -26 5 -31 Q-13 -26 -8 -12 Z" fill="#6b4226" opacity="0.4" />
              </g>
              
              {/* Face Features - Realistic young woman */}
              <g className="girl-face">
                {/* Eyes with blink animation - more realistic shape */}
                <motion.ellipse 
                  cx="-3" cy="-22" 
                  rx="2.2" ry="3" 
                  fill={EYE_COLOR}
                  animate={eyeControls}
                  initial={{ scaleY: 1 }}
                  style={{ transformOrigin: 'center' }}
                />
                <motion.ellipse 
                  cx="13" cy="-22" 
                  rx="2.2" ry="3" 
                  fill={EYE_COLOR}
                  animate={eyeControls}
                  initial={{ scaleY: 1 }}
                  style={{ transformOrigin: 'center' }}
                />
                
                {/* Eye whites for more realism */}
                <ellipse cx="-3" cy="-22" rx="1.8" ry="2.5" fill="white" />
                <ellipse cx="13" cy="-22" rx="1.8" ry="2.5" fill="white" />
                {/* Iris */}
                <ellipse cx="-3" cy="-22" rx="1.2" ry="1.8" fill={EYE_COLOR} />
                <ellipse cx="13" cy="-22" rx="1.2" ry="1.8" fill={EYE_COLOR} />
                {/* Pupils */}
                <ellipse cx="-3" cy="-22" rx="0.6" ry="0.9" fill="black" />
                <ellipse cx="13" cy="-22" rx="0.6" ry="0.9" fill="black" />
                
                {/* Eyebrows - more defined */}
                <path d="M-5 -26 Q-3 -28 -1 -27" stroke="#2d1a0b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                <path d="M11 -26 Q13 -28 15 -27" stroke="#2d1a0b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                
                {/* Nose - more defined bridge */}
                <path d="M5 -18 Q5 -16 5 -14" stroke={SKIN_TONE} strokeWidth="1.5" fill="none" />
                <ellipse cx="5" cy="-14" rx="1.2" ry="1.8" fill={SKIN_TONE} opacity="0.8" />
                
                {/* Lips - more realistic shape */}
                <path d="M1 -12 Q5 -10 9 -12" stroke={LIP_COLOR} strokeWidth="1.8" fill="none" strokeLinecap="round" />
                <path d="M1 -12 Q5 -11 9 -12" stroke={LIP_COLOR} strokeWidth="0.8" fill="none" strokeLinecap="round" />
                
                {/* Cheekbones - subtle definition */}
                <ellipse cx="-8" cy="-16" rx="2.5" ry="1.5" fill="#ffb3ba" opacity="0.3" />
                <ellipse cx="18" cy="-16" rx="2.5" ry="1.5" fill="#ffb3ba" opacity="0.3" />
              </g>
              
              {/* Neck */}
              <ellipse cx="5" cy="0" rx="8" ry="6" fill={SKIN_TONE} />
            </g>
          </motion.g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedHero; 