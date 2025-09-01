'use client';

import React, { useEffect } from 'react';
import './AnimatedHero.css';
import { motion, useAnimation } from 'framer-motion';

// --- Character Style Constants ---
const SKIN_TONE = '#d2a074'; // Light brown, tan skin tone
const HAIR_COLOR = '#6b4226'; // Cute brown hair
const SHIRT_COLOR = '#ffacc7'; // Cute pink shirt
const JEANS_COLOR = '#6c96ff'; // Blue jeans
const EYE_COLOR = '#2d1a0b'; // Dark brown eyes

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
            
            {/* Legs & Shoes - Slimmer and more proportional */}
            <g className="girl-legs">
              <ellipse className="girl-leg-left" cx="0" cy="25" rx="3" ry="10" fill={SKIN_TONE} />
              <ellipse className="girl-leg-right" cx="10" cy="25" rx="3" ry="10" fill={SKIN_TONE} />
              {/* Simple shoes */}
              <ellipse cx="0" cy="35" rx="4" ry="2" fill="#333" />
              <ellipse cx="10" cy="35" rx="4" ry="2" fill="#333" />
            </g>

            {/* Clothes: Shirt and Jeans - Slimmer and more proportional */}
            <rect x="-6" y="0" width="22" height="12" rx="6" fill={SHIRT_COLOR} />
            <rect x="-5" y="11" width="20" height="8" rx="4" fill={JEANS_COLOR} />

            {/* Arms - Slimmer and more proportional */}
            <ellipse className="girl-arm-left" cx="-15" cy="6" rx="3" ry="8" fill={SKIN_TONE} />
            <motion.g
              className="girl-arm-right-waving"
              animate={armControls}
              initial={{ rotate: 0 }}
              style={{ transformOrigin: '22px -2px' }}
            >
              <ellipse cx="22" cy="6" rx="3" ry="8" fill={SKIN_TONE} />
            </motion.g>

            {/* Head and Face - Bigger and cuter */}
            <g className="girl-head-group">
              {/* Head base */}
              <ellipse cx="5" cy="-20" rx="18" ry="18" fill={SKIN_TONE} />
              
              {/* Hair - Layered bob style */}
              <g className="girl-hair">
                {/* Main hair shape */}
                <path d="M-13 -20 Q-20 5 5 20 Q30 5 23 -20 Q30 -40 5 -45 Q-20 -40 -13 -20 Z" fill={HAIR_COLOR} />
                {/* Hair layers for bob effect */}
                <path d="M-10 -15 Q-15 8 5 18 Q25 8 20 -15 Q25 -30 5 -35 Q-15 -30 -10 -15 Z" fill={HAIR_COLOR} opacity="0.8" />
                <path d="M-8 -10 Q-12 12 5 15 Q22 12 18 -10 Q22 -25 5 -30 Q-12 -25 -8 -10 Z" fill={HAIR_COLOR} opacity="0.6" />
              </g>
              
              {/* Face Features */}
              <g className="girl-face">
                {/* Eyes with blink animation */}
                <motion.ellipse 
                  cx="-2" cy="-22" 
                  rx="2" ry="2.5" 
                  fill={EYE_COLOR}
                  animate={eyeControls}
                  initial={{ scaleY: 1 }}
                  style={{ transformOrigin: 'center' }}
                />
                <motion.ellipse 
                  cx="12" cy="-22" 
                  rx="2" ry="2.5" 
                  fill={EYE_COLOR}
                  animate={eyeControls}
                  initial={{ scaleY: 1 }}
                  style={{ transformOrigin: 'center' }}
                />
                
                {/* Cute nose */}
                <ellipse cx="5" cy="-18" rx="1" ry="1.5" fill={SKIN_TONE} opacity="0.7" />
                
                {/* Sweet smile */}
                <path d="M-1 -14 Q5 -10 11 -14" stroke="#7a4a1e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </g>
              
              {/* Cute rosy cheeks */}
              <circle cx="-8" cy="-15" r="2" fill="#ffb3ba" opacity="0.6" />
              <circle cx="18" cy="-15" r="2" fill="#ffb3ba" opacity="0.6" />
            </g>
          </motion.g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedHero; 