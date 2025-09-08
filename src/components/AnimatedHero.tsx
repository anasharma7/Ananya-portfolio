'use client';

import React, { useEffect, useState } from 'react';
import './AnimatedHero.css';
import { motion } from 'framer-motion';

/**
 * AnimatedHero Component
 * 
 * A purely visual, abstract artistic animation featuring morphing shapes,
 * flowing particles, and creative geometric patterns. No text, just art.
 * 
 * Features:
 * - Morphing geometric shapes
 * - Flowing particle systems
 * - Dynamic color transitions
 * - Abstract artistic patterns
 * - Pure visual creativity
 * 
 * @component
 * @returns {JSX.Element} The abstract animated art piece
 */
// Simple Typewriter Component
const TypewriterText = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const texts = [
    'Full Stack Developer',
    'React & TypeScript Expert',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[textIndex];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, texts]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const AnimatedHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Check for dark mode
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                    window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
    };

    // Initial check
    checkDarkMode();

    // Listen for dark mode changes
    const darkModeObserver = new MutationObserver(checkDarkMode);
    darkModeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', checkDarkMode);

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      darkModeObserver.disconnect();
      mediaQuery.removeEventListener('change', checkDarkMode);
    };
  }, []);

  // Create morphing shapes
  const morphingShapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 60 + 40,
    rotation: Math.random() * 360,
    delay: Math.random() * 2
  }));

  // Create flowing particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 2 + 1,
    delay: Math.random() * 3
  }));

  return (
    <div 
      className={`relative w-full h-96 mx-auto mb-8 overflow-hidden transition-all duration-1000 cursor-none ${
        isDarkMode ? 'bg-slate-900' : 'bg-gray-50'
      }`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({ 
          x: e.clientX - rect.left, 
          y: e.clientY - rect.top 
        });
      }}
    >
      
      {/* Interactive Sky Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-all duration-1000 ${
          isDarkMode 
            ? 'bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900' 
            : 'bg-gradient-to-b from-blue-200 via-blue-100 to-blue-200'
        }`}></div>
        
        {/* Interactive Clouds that follow mouse */}
        <motion.div
          className={`absolute w-32 h-16 rounded-full opacity-60 ${
            isDarkMode ? 'bg-gray-600' : 'bg-white'
          }`}
          style={{
            left: mousePosition.x - 100,
            top: mousePosition.y - 50,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className={`absolute w-24 h-12 rounded-full opacity-40 ${
            isDarkMode ? 'bg-gray-500' : 'bg-white'
          }`}
          style={{
            left: mousePosition.x + 50,
            top: mousePosition.y - 30,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>

      {/* Interactive Airplane that follows mouse */}
      <motion.div
        className="absolute z-20"
        style={{
          left: mousePosition.x - 60,
          top: mousePosition.y - 30,
        }}
        animate={{
          rotate: [0, 5, -5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Simple Airplane SVG */}
        <svg width="120" height="60" viewBox="0 0 120 60" className="drop-shadow-lg">
          {/* Main body */}
          <ellipse cx="60" cy="30" rx="35" ry="8" fill="white" stroke="#333" strokeWidth="2" />
          
          {/* Nose */}
          <ellipse cx="95" cy="30" rx="12" ry="6" fill="#0066cc" stroke="#333" strokeWidth="2" />
          
          {/* Windows */}
          <circle cx="40" cy="30" r="3" fill="#87ceeb" />
          <circle cx="55" cy="30" r="3" fill="#87ceeb" />
          <circle cx="70" cy="30" r="3" fill="#87ceeb" />
          <circle cx="85" cy="30" r="3" fill="#87ceeb" />
          
          {/* Wings */}
          <ellipse cx="50" cy="25" rx="25" ry="6" fill="white" stroke="#333" strokeWidth="2" />
          <ellipse cx="50" cy="35" rx="25" ry="6" fill="white" stroke="#333" strokeWidth="2" />
          
          {/* Wing tips */}
          <ellipse cx="25" cy="25" rx="4" ry="2" fill="#dc3545" />
          <ellipse cx="25" cy="35" rx="4" ry="2" fill="#dc3545" />
          <ellipse cx="75" cy="25" rx="4" ry="2" fill="#dc3545" />
          <ellipse cx="75" cy="35" rx="4" ry="2" fill="#dc3545" />
          
          {/* Engines */}
          <ellipse cx="30" cy="40" rx="6" ry="3" fill="#666" stroke="#333" strokeWidth="1" />
          <ellipse cx="20" cy="40" rx="6" ry="3" fill="#666" stroke="#333" strokeWidth="1" />
          
          {/* Tail */}
          <ellipse cx="15" cy="20" rx="8" ry="4" fill="white" stroke="#333" strokeWidth="1" />
          <ellipse cx="15" cy="20" rx="3" ry="2" fill="#dc3545" />
        </svg>
        
        {/* Smoke trail that follows airplane */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          {Array.from({ length: 5 }, (_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full opacity-60 ${
                isDarkMode ? 'bg-gray-400' : 'bg-gray-300'
              }`}
              style={{
                left: `${-20 - i * 8}px`,
                top: `${-2 + (i % 2) * 4}px`
              }}
              animate={{
                opacity: [0.6, 0.2, 0],
                scale: [1, 1.5, 2],
                x: [-20 - i * 8, -35 - i * 8, -50 - i * 8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Interactive Particles that follow mouse */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              isDarkMode ? 'bg-yellow-300' : 'bg-blue-400'
            }`}
            style={{
              left: mousePosition.x + (Math.cos(i * 45 * Math.PI / 180) * 100),
              top: mousePosition.y + (Math.sin(i * 45 * Math.PI / 180) * 100),
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <motion.h1 
            className={`text-4xl font-bold mb-2 transition-colors duration-1000 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Ananya Sharma
          </motion.h1>
          
          <motion.div 
            className={`text-lg transition-colors duration-1000 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <TypewriterText />
          </motion.div>
        </div>
      </div>

      {/* Interactive Instructions */}
      <motion.div
        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm transition-colors duration-1000 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}
        animate={{
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Move your mouse to fly the airplane! ✈️
      </motion.div>
    </div>
  );
};

export default AnimatedHero; 