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
    <div className="relative w-full h-96 mx-auto mb-8 overflow-hidden bg-black">
      
      {/* Abstract Background with Morphing Shapes */}
      <div className="absolute inset-0">
        {/* Clean Professional Background with Dark Mode Support */}
        <div className={`absolute inset-0 transition-all duration-1000 ${
          isDarkMode 
            ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900' 
            : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
        }`}>
          {/* Subtle pattern overlay */}
          <div className={`absolute inset-0 opacity-5 ${
            isDarkMode ? 'bg-white' : 'bg-gray-900'
          }`} style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Original morphing shapes with reduced opacity */}
        {morphingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute opacity-30"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 0.8, 1],
              borderRadius: ['0%', '50%', '0%', '50%'],
              background: [
                'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                'linear-gradient(45deg, #4ecdc4, #45b7d1)',
                'linear-gradient(45deg, #45b7d1, #96ceb4)',
                'linear-gradient(45deg, #96ceb4, #feca57)',
                'linear-gradient(45deg, #feca57, #ff9ff3)',
                'linear-gradient(45deg, #ff9ff3, #ff6b6b)'
              ]
            }}
            transition={{
              duration: 8 + shape.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay
            }}
          />
        ))}
      </div>

      {/* Flowing Particle System */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 6 + particle.speed,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay
            }}
          />
        ))}
      </div>

      {/* Additional Ripple Effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={`ripple-${i}`}
            className="absolute border border-white/20 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              width: '20px',
              height: '20px',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              width: [20, 300, 600],
              height: [20, 300, 600],
              opacity: [0.8, 0.4, 0],
              scale: [1, 1.2, 1.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Expanding Wave Effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`wave-${i}`}
            className="absolute border-2 border-cyan-400/30 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              width: '50px',
              height: '50px',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              width: [50, 200, 400, 600],
              height: [50, 200, 400, 600],
              opacity: [0.6, 0.3, 0.1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute"
            style={{
              left: `${20 + (i % 5) * 15}%`,
              top: `${20 + Math.floor(i / 5) * 15}%`,
              width: '15px',
              height: '15px'
            }}
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.4, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          >
            {i % 4 === 0 ? (
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-full" />
            ) : i % 4 === 1 ? (
              <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-400 transform rotate-45" />
            ) : i % 4 === 2 ? (
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-400 transform rotate-45" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-400 rounded-lg" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Geometric Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Interactive Light Rays */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `conic-gradient(from ${mousePosition.x}deg, transparent, rgba(255,255,255,0.1), transparent)`,
          opacity: 0.3
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Center Content - Floating Elements with Fade Transitions */}
      <div className="relative z-10 flex items-center justify-center h-full">
        
        {/* Clean Paper Unfolding Animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Paper Layer 1 - Base Layer */}
          <motion.div
            className="absolute w-80 h-80 bg-white shadow-2xl border border-gray-200"
            style={{
              transformOrigin: 'center center',
              transformStyle: 'preserve-3d'
            }}
            initial={{ 
              rotateX: 0,
              rotateY: 0,
              scale: 1,
              z: 0
            }}
            animate={{ 
              rotateX: [0, 15, 0],
              rotateY: [0, 10, 0],
              scale: [1, 1.05, 1],
              z: [0, 20, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Paper content */}
            <div className="absolute inset-4 p-6">
              <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Portfolio Base</span>
              </div>
            </div>
          </motion.div>

          {/* Paper Layer 2 - Unfolding */}
          <motion.div
            className="absolute w-72 h-72 bg-blue-50 shadow-xl border border-blue-200"
            style={{
              transformOrigin: 'center center',
              transformStyle: 'preserve-3d'
            }}
            initial={{ 
              rotateX: 0,
              rotateY: 0,
              scale: 0.9,
              z: 10
            }}
            animate={{ 
              rotateX: [0, -20, 0],
              rotateY: [0, -15, 0],
              scale: [0.9, 0.95, 0.9],
              z: [10, 30, 10]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            {/* Paper content */}
            <div className="absolute inset-4 p-4">
              <div className="w-full h-full border border-blue-300 rounded flex items-center justify-center">
                <span className="text-blue-600 text-sm font-medium">Projects</span>
              </div>
            </div>
          </motion.div>

          {/* Paper Layer 3 - Main Content Layer */}
          <motion.div
            className="absolute w-64 h-64 bg-green-50 shadow-lg border border-green-200"
            style={{
              transformOrigin: 'center center',
              transformStyle: 'preserve-3d'
            }}
            initial={{ 
              rotateX: 0,
              rotateY: 0,
              scale: 0.8,
              z: 20
            }}
            animate={{ 
              rotateX: [0, 25, 0],
              rotateY: [0, 20, 0],
              scale: [0.8, 0.9, 0.8],
              z: [20, 40, 20]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            {/* Paper content */}
            <div className="absolute inset-4 p-4">
              <div className="w-full h-full border border-green-300 rounded flex items-center justify-center">
                <span className="text-green-600 text-sm font-medium">Skills</span>
              </div>
            </div>
          </motion.div>

          {/* Paper Layer 4 - Top Layer */}
          <motion.div
            className="absolute w-56 h-56 bg-yellow-50 shadow-md border border-yellow-200"
            style={{
              transformOrigin: 'center center',
              transformStyle: 'preserve-3d'
            }}
            initial={{ 
              rotateX: 0,
              rotateY: 0,
              scale: 0.7,
              z: 30
            }}
            animate={{ 
              rotateX: [0, -30, 0],
              rotateY: [0, -25, 0],
              scale: [0.7, 0.85, 0.7],
              z: [30, 50, 30]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          >
            {/* Paper content */}
            <div className="absolute inset-4 p-4">
              <div className="w-full h-full border border-yellow-300 rounded flex items-center justify-center">
                <span className="text-yellow-600 text-sm font-medium">About</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Real Objects - Books and Stationery */}
        <div className="absolute inset-0">
          {/* Book 1 */}
          <motion.div
            className="absolute w-12 h-16 bg-red-500 shadow-lg"
            style={{
              left: '15%',
              top: '20%',
              transform: 'rotate(-15deg)'
            }}
            animate={{
              y: [0, -5, 0],
              rotate: [-15, -12, -15]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full bg-red-600 border-l-2 border-red-700"></div>
            <div className="absolute top-1 left-1 right-1 h-1 bg-red-400"></div>
            <div className="absolute top-3 left-1 right-1 h-1 bg-red-400"></div>
          </motion.div>

          {/* Book 2 */}
          <motion.div
            className="absolute w-10 h-14 bg-blue-500 shadow-lg"
            style={{
              right: '20%',
              top: '25%',
              transform: 'rotate(20deg)'
            }}
            animate={{
              y: [0, -8, 0],
              rotate: [20, 23, 20]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <div className="w-full h-full bg-blue-600 border-l-2 border-blue-700"></div>
            <div className="absolute top-1 left-1 right-1 h-1 bg-blue-400"></div>
          </motion.div>

          {/* Pen */}
          <motion.div
            className="absolute w-1 h-8 bg-gray-800 shadow-md"
            style={{
              left: '25%',
              top: '60%',
              transform: 'rotate(45deg)'
            }}
            animate={{
              y: [0, -3, 0],
              rotate: [45, 48, 45]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <div className="absolute top-0 w-2 h-2 bg-yellow-400 rounded-full"></div>
          </motion.div>

          {/* Notebook */}
          <motion.div
            className="absolute w-16 h-12 bg-white shadow-lg border border-gray-300"
            style={{
              right: '15%',
              bottom: '30%',
              transform: 'rotate(-10deg)'
            }}
            animate={{
              y: [0, -4, 0],
              rotate: [-10, -7, -10]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <div className="absolute top-1 left-1 right-1 h-0.5 bg-gray-400"></div>
            <div className="absolute top-3 left-1 right-1 h-0.5 bg-gray-400"></div>
            <div className="absolute top-5 left-1 right-1 h-0.5 bg-gray-400"></div>
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-400"></div>
          </motion.div>

          {/* Coffee Cup */}
          <motion.div
            className="absolute w-8 h-10 bg-white shadow-lg border border-gray-300"
            style={{
              left: '70%',
              bottom: '20%',
              transform: 'rotate(15deg)'
            }}
            animate={{
              y: [0, -2, 0],
              rotate: [15, 18, 15]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <div className="absolute top-0 left-1 right-1 h-2 bg-amber-200 rounded-t"></div>
            <div className="absolute top-2 left-0 right-0 h-6 bg-white border border-gray-300"></div>
            <div className="absolute top-1 right-0 w-2 h-1 bg-gray-300"></div>
          </motion.div>
        </div>


      </div>

      {/* Morphing Border */}
      <motion.div
        className="absolute inset-4 border-2 border-transparent"
        style={{
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3)',
          backgroundSize: '400% 400%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          borderRadius: ['0%', '50%', '0%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default AnimatedHero; 