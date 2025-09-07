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
        {/* Global Travel Background - World Landmarks with Dark Mode Support */}
        <div className={`absolute inset-0 transition-all duration-1000 ${
          isDarkMode 
            ? 'bg-gradient-to-b from-slate-800 via-slate-900 to-black' 
            : 'bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500'
        }`}>
          {/* Enhanced Clouds with Dark Mode Support */}
          <div className={`absolute top-8 left-16 w-20 h-10 rounded-full opacity-80 transition-all duration-1000 ${
            isDarkMode ? 'bg-gray-600' : 'bg-white'
          }`}></div>
          <div className={`absolute top-12 left-50 w-16 h-8 rounded-full opacity-70 transition-all duration-1000 ${
            isDarkMode ? 'bg-gray-500' : 'bg-white'
          }`}></div>
          <div className={`absolute top-6 right-28 w-18 h-9 rounded-full opacity-75 transition-all duration-1000 ${
            isDarkMode ? 'bg-gray-600' : 'bg-white'
          }`}></div>
          <div className={`absolute top-15 right-12 w-14 h-7 rounded-full opacity-65 transition-all duration-1000 ${
            isDarkMode ? 'bg-gray-500' : 'bg-white'
          }`}></div>
          <div className={`absolute top-20 left-40 w-12 h-6 rounded-full opacity-60 transition-all duration-1000 ${
            isDarkMode ? 'bg-gray-400' : 'bg-white'
          }`}></div>
          <div className={`absolute top-4 left-70 w-15 h-8 rounded-full opacity-70 transition-all duration-1000 ${
            isDarkMode ? 'bg-gray-500' : 'bg-white'
          }`}></div>
          
          {/* Sparkles/Stars with Dark Mode Support */}
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={`sparkle-${i}`}
              className={`absolute text-xs font-bold transition-all duration-1000 ${
                isDarkMode ? 'text-yellow-300' : 'text-white'
              }`}
              style={{
                left: `${15 + (i % 4) * 20}%`,
                top: `${10 + Math.floor(i / 4) * 15}%`,
                transform: 'rotate(45deg)'
              }}
            >
              ✕
            </div>
          ))}
          
          {/* World Landmarks */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-around items-end px-8">
            {/* Mount Fuji */}
            <div className="relative">
              <div className="w-8 h-12 bg-gray-400 rounded-t-full"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-white rounded-t-full"></div>
            </div>
            
            {/* Pagoda */}
            <div className="relative">
              <div className="w-6 h-16 bg-red-600 rounded-t-lg"></div>
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-5 h-3 bg-green-600 rounded-t-lg"></div>
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-green-600 rounded-t-lg"></div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-600 rounded-t-lg"></div>
            </div>
            
            {/* Arc de Triomphe */}
            <div className="relative">
              <div className="w-8 h-12 bg-gray-500 rounded-t-lg"></div>
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gray-400 rounded-t-lg"></div>
            </div>
            
            {/* Stepped Pyramid */}
            <div className="relative">
              <div className="w-10 h-8 bg-yellow-700 rounded-t-lg"></div>
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-6 bg-yellow-600 rounded-t-lg"></div>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-yellow-500 rounded-t-lg"></div>
            </div>
            
            {/* Big Ben */}
            <div className="relative">
              <div className="w-6 h-16 bg-yellow-800 rounded-t-lg"></div>
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full"></div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-black rounded-t-lg"></div>
            </div>
            ``
            {/* Eiffel Tower */}
            <div className="relative">
              <div className="w-6 h-20 bg-gray-600 rounded-t-lg"></div>
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-500"></div>
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-500"></div>
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gray-500"></div>
            </div>
          </div>
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
        
        {/* Simple Realistic Airplane - Matching Reference Image */}
        <motion.div
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Simple Airplane SVG - Clean and Realistic */}
          <svg width="120" height="60" viewBox="0 0 120 60" className="relative z-20">
            {/* Main Fuselage - Simple white body */}
            <ellipse cx="60" cy="30" rx="35" ry="8" fill="white" stroke="#333" strokeWidth="1" />
            
            {/* Nose - Blue pointed nose */}
            <ellipse cx="95" cy="30" rx="12" ry="6" fill="#0066cc" stroke="#333" strokeWidth="1" />
            
            {/* Windows - Simple black rectangles */}
            <rect x="25" y="28" width="4" height="4" fill="black" />
            <rect x="35" y="28" width="4" height="4" fill="black" />
            <rect x="45" y="28" width="4" height="4" fill="black" />
            <rect x="55" y="28" width="4" height="4" fill="black" />
            <rect x="65" y="28" width="4" height="4" fill="black" />
            <rect x="75" y="28" width="4" height="4" fill="black" />
            
            {/* Cockpit Windows - Larger */}
            <rect x="85" y="26" width="6" height="8" fill="black" />
            
            {/* Main Wings - Simple white wings */}
            <ellipse cx="50" cy="25" rx="25" ry="6" fill="white" stroke="#333" strokeWidth="1" />
            <ellipse cx="50" cy="35" rx="25" ry="6" fill="white" stroke="#333" strokeWidth="1" />
            
            {/* Wing Tips - Red accents */}
            <ellipse cx="25" cy="25" rx="4" ry="2" fill="#dc3545" />
            <ellipse cx="25" cy="35" rx="4" ry="2" fill="#dc3545" />
            <ellipse cx="75" cy="25" rx="4" ry="2" fill="#dc3545" />
            <ellipse cx="75" cy="35" rx="4" ry="2" fill="#dc3545" />
            
            {/* Engines - Simple gray cylinders */}
            <ellipse cx="30" cy="40" rx="6" ry="3" fill="#666" stroke="#333" strokeWidth="1" />
            <ellipse cx="20" cy="40" rx="6" ry="3" fill="#666" stroke="#333" strokeWidth="1" />
            
            {/* Tail - Simple white tail with red accent */}
            <ellipse cx="15" cy="20" rx="8" ry="4" fill="white" stroke="#333" strokeWidth="1" />
            <ellipse cx="15" cy="20" rx="3" ry="2" fill="#dc3545" />
          </svg>
          
          {/* Simple Smoke Trail */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                className={`absolute w-3 h-3 rounded-full opacity-60 transition-all duration-1000 ${
                  isDarkMode ? 'bg-gray-400' : 'bg-gray-200'
                }`}
                style={{
                  left: `${-20 - i * 8}px`,
                  top: `${-5 + (i % 2) * 10}px`
                }}
                animate={{
                  opacity: [0.6, 0.3, 0],
                  scale: [1, 1.5, 2],
                  x: [-20 - i * 8, -35 - i * 8, -50 - i * 8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[
            { icon: "⚛️", x: -100, y: -80, delay: 0.8 },
            { icon: "📱", x: 100, y: -80, delay: 1.2 },
            { icon: "☁️", x: -100, y: 80, delay: 1.6 },
            { icon: "🔧", x: 100, y: 80, delay: 2.0 }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="absolute text-4xl"
              style={{ left: `${50 + item.x}%`, top: `${50 + item.y}%` }}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut"
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>

        {/* Central Glowing Orb */}
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            filter: 'blur(20px)',
            boxShadow: '0 0 60px rgba(147, 51, 234, 0.6)'
          }}
        />

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[
            { code: "npm start", x: -120, y: -40, delay: 1.0 },
            { code: "git push", x: 120, y: -40, delay: 1.4 },
            { code: "docker build", x: -120, y: 40, delay: 1.8 },
            { code: "deploy", x: 120, y: 40, delay: 2.2 }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="absolute text-sm font-mono text-gray-300 bg-black/20 px-3 py-1 rounded-lg backdrop-blur-sm"
              style={{ left: `${50 + item.x}%`, top: `${50 + item.y}%` }}
              initial={{ opacity: 0, x: item.x > 0 ? 20 : -20 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                x: [item.x > 0 ? 20 : -20, 0, 0, item.x > 0 ? 20 : -20]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut"
              }}
            >
              {item.code}
            </motion.div>
          ))}
        </div>

        {/* Pulsing Rings */}
        {[1, 2, 3].map((ring) => (
          <motion.div
            key={ring}
            className="absolute border-2 border-white/20 rounded-full"
            style={{
              width: `${200 + ring * 60}px`,
              height: `${200 + ring * 60}px`
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              scale: [0.8, 1, 1.2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: ring * 0.5,
              ease: "easeOut"
            }}
          />
        ))}
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