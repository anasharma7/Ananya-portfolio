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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
        {/* Global Travel Background - World Landmarks */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-500">
          {/* Simple White Clouds */}
          <div className="absolute top-10 left-20 w-16 h-8 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-15 left-60 w-12 h-6 bg-white rounded-full opacity-70"></div>
          <div className="absolute top-8 right-32 w-14 h-7 bg-white rounded-full opacity-75"></div>
          <div className="absolute top-20 right-16 w-10 h-5 bg-white rounded-full opacity-65"></div>
          
          {/* Sparkles/Stars */}
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute text-white text-xs font-bold"
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
        
        {/* Enhanced Animated Flying Airplane */}
        <motion.div
          className="absolute"
          initial={{ x: -220, y: 0, rotateZ: -12, rotateX: 5 }}
          animate={{ 
            x: [-220, 0, 220],
            y: [-15, 0, -15],
            rotateZ: [-12, -3, -12],
            rotateX: [5, 2, 5]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Enhanced 3D Realistic Airplane */}
          <svg width="200" height="140" viewBox="0 0 200 140" className="relative z-20">
            <defs>
              {/* Enhanced 3D gradients and shadows */}
              <linearGradient id="fuselageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="25%" stopColor="#f8f9fa" />
                <stop offset="50%" stopColor="#e9ecef" />
                <stop offset="75%" stopColor="#dee2e6" />
                <stop offset="100%" stopColor="#ced4da" />
              </linearGradient>
              
              <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#f1f3f4" />
                <stop offset="70%" stopColor="#e8eaed" />
                <stop offset="100%" stopColor="#dee2e6" />
              </linearGradient>
              
              <linearGradient id="engineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#adb5bd" />
                <stop offset="30%" stopColor="#6c757d" />
                <stop offset="70%" stopColor="#495057" />
                <stop offset="100%" stopColor="#343a40" />
              </linearGradient>
              
              <linearGradient id="noseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0066cc" />
                <stop offset="50%" stopColor="#0052a3" />
                <stop offset="100%" stopColor="#003d7a" />
              </linearGradient>
              
              <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="4" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.5"/>
              </filter>
              
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Enhanced Main Fuselage - More realistic proportions */}
            <g className="fuselage" filter="url(#shadow)">
              {/* Main body - more streamlined */}
              <ellipse cx="100" cy="70" rx="45" ry="12" fill="url(#fuselageGradient)" stroke="#495057" strokeWidth="2" />
              
              {/* Top surface highlight */}
              <ellipse cx="100" cy="65" rx="42" ry="8" fill="#ffffff" opacity="0.9" />
              
              {/* Bottom surface shadow */}
              <ellipse cx="100" cy="75" rx="42" ry="8" fill="#6c757d" opacity="0.4" />
              
              {/* Fuselage side highlights */}
              <ellipse cx="85" cy="70" rx="8" ry="10" fill="#ffffff" opacity="0.6" />
              <ellipse cx="115" cy="70" rx="8" ry="10" fill="#ffffff" opacity="0.6" />
            </g>
            
            {/* Enhanced Nose Cone - More aerodynamic */}
            <g className="nose" filter="url(#shadow)">
              <ellipse cx="145" cy="70" rx="20" ry="8" fill="url(#noseGradient)" stroke="#495057" strokeWidth="2" />
              <ellipse cx="145" cy="68" rx="18" ry="6" fill="#ffffff" opacity="0.7" />
              <ellipse cx="150" cy="70" rx="8" ry="4" fill="#ffffff" opacity="0.5" />
            </g>
            
            {/* Enhanced Windows with better positioning */}
            <g className="windows">
              {/* Passenger windows - more realistic spacing */}
              <circle cx="60" cy="70" r="4" fill="#87ceeb" stroke="#495057" strokeWidth="1.5" filter="url(#shadow)" />
              <circle cx="60" cy="68" r="3" fill="#ffffff" opacity="0.8" />
              
              <circle cx="75" cy="70" r="4" fill="#87ceeb" stroke="#495057" strokeWidth="1.5" filter="url(#shadow)" />
              <circle cx="75" cy="68" r="3" fill="#ffffff" opacity="0.8" />
              
              <circle cx="90" cy="70" r="4" fill="#87ceeb" stroke="#495057" strokeWidth="1.5" filter="url(#shadow)" />
              <circle cx="90" cy="68" r="3" fill="#ffffff" opacity="0.8" />
              
              <circle cx="105" cy="70" r="4" fill="#87ceeb" stroke="#495057" strokeWidth="1.5" filter="url(#shadow)" />
              <circle cx="105" cy="68" r="3" fill="#ffffff" opacity="0.8" />
              
              <circle cx="120" cy="70" r="4" fill="#87ceeb" stroke="#495057" strokeWidth="1.5" filter="url(#shadow)" />
              <circle cx="120" cy="68" r="3" fill="#ffffff" opacity="0.8" />
              
              {/* Enhanced cockpit windows */}
              <ellipse cx="130" cy="65" rx="8" ry="6" fill="#87ceeb" stroke="#495057" strokeWidth="2" filter="url(#shadow)" />
              <ellipse cx="130" cy="63" rx="7" ry="5" fill="#ffffff" opacity="0.9" />
              <ellipse cx="130" cy="75" rx="8" ry="6" fill="#87ceeb" stroke="#495057" strokeWidth="2" filter="url(#shadow)" />
              <ellipse cx="130" cy="73" rx="7" ry="5" fill="#ffffff" opacity="0.9" />
            </g>
            
            {/* Enhanced Wings - More realistic aircraft design */}
            <g className="wings" filter="url(#shadow)">
              {/* Main wing - more aerodynamic shape */}
              <path d="M55 55 L25 45 L35 55 L75 65 L85 63 L75 55 Z" fill="url(#wingGradient)" stroke="#495057" strokeWidth="2" />
              <path d="M35 55 L30 50 L40 58 L70 65 L75 63 L65 55 Z" fill="#ffffff" opacity="0.9" />
              
              {/* Wing root fairing */}
              <ellipse cx="55" cy="60" rx="8" ry="3" fill="#e9ecef" stroke="#495057" strokeWidth="1" />
              
              {/* Wing flaps */}
              <path d="M35 55 L30 53 L40 57 L45 55 Z" fill="#dee2e6" stroke="#495057" strokeWidth="1" opacity="0.8" />
              <path d="M45 55 L40 53 L50 57 L55 55 Z" fill="#dee2e6" stroke="#495057" strokeWidth="1" opacity="0.8" />
              
              {/* Wing tips with red accent */}
              <path d="M25 45 L20 43 L30 50 L35 48 Z" fill="#dc3545" stroke="#495057" strokeWidth="1.5" />
              
              {/* Winglet */}
              <path d="M20 43 L18 40 L22 45 L25 43 Z" fill="#dc3545" stroke="#495057" strokeWidth="1" />
            </g>
            
            {/* Enhanced Engines - More realistic positioning */}
            <g className="engines" filter="url(#shadow)">
              {/* Left engine */}
              <ellipse cx="40" cy="85" rx="12" ry="6" fill="url(#engineGradient)" stroke="#212529" strokeWidth="2" />
              <ellipse cx="40" cy="83" rx="10" ry="4" fill="#adb5bd" opacity="0.9" />
              
              {/* Right engine */}
              <ellipse cx="25" cy="85" rx="12" ry="6" fill="url(#engineGradient)" stroke="#212529" strokeWidth="2" />
              <ellipse cx="25" cy="83" rx="10" ry="4" fill="#adb5bd" opacity="0.9" />
              
              {/* Engine fan blades */}
              <circle cx="40" cy="85" r="8" fill="none" stroke="#6c757d" strokeWidth="1" opacity="0.6" />
              <circle cx="25" cy="85" r="8" fill="none" stroke="#6c757d" strokeWidth="1" opacity="0.6" />
              
              {/* Enhanced engine exhaust with glow */}
              <motion.ellipse
                cx="38" cy="85" rx="8" ry="4"
                fill="#ff6b35"
                filter="url(#glow)"
                animate={{
                  rx: [8, 12, 8],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.ellipse
                cx="23" cy="85" rx="8" ry="4"
                fill="#ff6b35"
                filter="url(#glow)"
                animate={{
                  rx: [8, 12, 8],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </g>
            
            {/* Enhanced Tail Section */}
            <g className="tail" filter="url(#shadow)">
              {/* Vertical stabilizer - more realistic */}
              <path d="M30 50 L25 25 L35 35 L40 50 Z" fill="url(#wingGradient)" stroke="#495057" strokeWidth="2" />
              <path d="M35 35 L30 30 L38 40 L40 45 Z" fill="#ffffff" opacity="0.9" />
              
              {/* Horizontal stabilizers */}
              <path d="M25 25 L20 22 L30 30 Z" fill="#dc3545" stroke="#495057" strokeWidth="1.5" />
              <path d="M25 35 L20 38 L30 30 Z" fill="#dc3545" stroke="#495057" strokeWidth="1.5" />
              
              {/* Tail cone */}
              <ellipse cx="20" cy="70" rx="8" ry="4" fill="url(#fuselageGradient)" stroke="#495057" strokeWidth="1" />
            </g>
            
            {/* Enhanced Landing Gear - More realistic */}
            <g className="landing-gear" filter="url(#shadow)">
              <ellipse cx="70" cy="30" rx="6" ry="3" fill="#6c757d" stroke="#495057" strokeWidth="1" />
              <ellipse cx="70" cy="28" rx="4" ry="2" fill="#adb5bd" opacity="0.9" />
              <ellipse cx="70" cy="95" rx="6" ry="3" fill="#6c757d" stroke="#495057" strokeWidth="1" />
              <ellipse cx="70" cy="93" rx="4" ry="2" fill="#adb5bd" opacity="0.9" />
            </g>
          </svg>
          
          {/* Enhanced Smoke Trail - More realistic contrails */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            {Array.from({ length: 12 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-5 h-5 bg-gray-200 rounded-full opacity-70"
                style={{
                  left: `${-30 - i * 15}px`,
                  top: `${-12 + (i % 3) * 24}px`
                }}
                animate={{
                  opacity: [0.7, 0.4, 0.1, 0],
                  scale: [1, 1.5, 2.5, 4],
                  x: [-30 - i * 15, -45 - i * 15, -70 - i * 15, -100 - i * 15]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.08,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Flight Path - Smaller, more subtle dotted circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="250" height="250" viewBox="0 0 250 250" className="absolute">
            <defs>
              <pattern id="dottedLine" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="6" cy="6" r="1" fill="white" opacity="0.4" />
              </pattern>
            </defs>
            <circle 
              cx="125" cy="125" r="80" 
              fill="none" 
              stroke="url(#dottedLine)" 
              strokeWidth="1.5"
              opacity="0.3"
            />
          </svg>
        </div>

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