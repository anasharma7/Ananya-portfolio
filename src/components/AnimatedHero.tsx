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
      className={`relative w-full h-96 mx-auto mb-8 overflow-hidden transition-all duration-1000 ${
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
      
      {/* Vignette Background with Circular Effect */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-all duration-1000 ${
          isDarkMode 
            ? 'bg-gradient-radial from-slate-800 via-slate-900 to-black' 
            : 'bg-gradient-radial from-blue-100 via-indigo-200 to-purple-300'
        }`} style={{
          background: isDarkMode 
            ? 'radial-gradient(circle at center, #1e293b 0%, #0f172a 50%, #000000 100%)'
            : 'radial-gradient(circle at center, #dbeafe 0%, #c7d2fe 50%, #a78bfa 100%)'
        }}></div>
      </div>

      {/* Interactive Floating Orbs */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDarkMode 
                ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
                : 'bg-gradient-to-r from-blue-400 to-purple-400'
            }`}
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${20 + (i % 3) * 30}%`,
              top: `${15 + Math.floor(i / 3) * 25}%`,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 15, 0],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.3, 0.8, 0.4, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Interactive Code Blocks that follow mouse */}
      <div className="absolute inset-0 pointer-events-none">
        {['React', 'TypeScript', 'Next.js', 'Node.js'].map((tech, index) => (
          <motion.div
            key={tech}
            className={`absolute px-3 py-1 rounded-lg text-sm font-mono shadow-lg ${
              isDarkMode 
                ? 'bg-slate-800 text-green-400 border border-slate-600' 
                : 'bg-white text-gray-800 border border-gray-200'
            }`}
            style={{
              left: mousePosition.x + (Math.cos(index * 90 * Math.PI / 180) * 120),
              top: mousePosition.y + (Math.sin(index * 90 * Math.PI / 180) * 120),
            }}
            animate={{
              scale: [0.8, 1.1, 0.8],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>

      {/* Interactive Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 4 }, (_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 2 === 0 ? 'rounded-full' : 'rounded-lg'
            } ${
              isDarkMode 
                ? 'bg-gradient-to-r from-cyan-400 to-blue-400' 
                : 'bg-gradient-to-r from-pink-400 to-rose-400'
            }`}
            style={{
              width: `${40 + i * 15}px`,
              height: `${40 + i * 15}px`,
              left: mousePosition.x + (Math.cos(i * 60 * Math.PI / 180) * 80),
              top: mousePosition.y + (Math.sin(i * 60 * Math.PI / 180) * 80),
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1.2, 0.5],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        ))}
      </div>

      {/* Center Content - Just the typewriter */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className={`text-2xl font-medium transition-colors duration-1000 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <TypewriterText />
        </motion.div>
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
        Move your mouse to see the magic! ✨
      </motion.div>
    </div>
  );
};

export default AnimatedHero; 