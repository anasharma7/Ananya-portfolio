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
        
        {/* Animated Flying Airplane */}
        <motion.div
          className="absolute"
          initial={{ x: -200, y: 0, rotateZ: -15 }}
          animate={{ 
            x: [-200, 0, 200],
            y: [-20, 0, -20],
            rotateZ: [-15, -5, -15]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* 3D Realistic Airplane with Tilt */}
          <svg width="180" height="120" viewBox="0 0 180 120" className="relative z-20">
            <defs>
              {/* 3D gradients and shadows */}
              <linearGradient id="fuselageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#f8f9fa" />
                <stop offset="70%" stopColor="#e9ecef" />
                <stop offset="100%" stopColor="#dee2e6" />
              </linearGradient>
              
              <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#f1f3f4" />
                <stop offset="100%" stopColor="#e8eaed" />
              </linearGradient>
              
              <linearGradient id="engineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6c757d" />
                <stop offset="50%" stopColor="#495057" />
                <stop offset="100%" stopColor="#343a40" />
              </linearGradient>
              
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="3" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.4"/>
              </filter>
            </defs>
            
            {/* Main Fuselage - 3D rectangular with perspective */}
            <g className="fuselage" filter="url(#shadow)">
              {/* Main body - rectangular with rounded corners */}
              <rect x="30" y="45" width="80" height="20" rx="10" ry="10" fill="url(#fuselageGradient)" stroke="#495057" strokeWidth="2" />
              
              {/* Top surface highlight */}
              <rect x="32" y="43" width="76" height="16" rx="8" ry="8" fill="#ffffff" opacity="0.8" />
              
              {/* Bottom surface shadow */}
              <rect x="32" y="59" width="76" height="16" rx="8" ry="8" fill="#6c757d" opacity="0.3" />
            </g>
            
            {/* 3D Nose Cone - Pointed with perspective */}
            <g className="nose" filter="url(#shadow)">
              <path d="M110 45 L130 50 L110 65 Z" fill="#0066cc" stroke="#495057" strokeWidth="2" />
              <path d="M112 47 L128 50 L112 63 Z" fill="#ffffff" opacity="0.6" />
            </g>
            
            {/* Windows with 3D depth */}
            <g className="windows">
              {/* Passenger windows - rectangular with depth */}
              <rect x="40" y="48" width="6" height="6" rx="3" fill="#87ceeb" stroke="#495057" strokeWidth="1" filter="url(#shadow)" />
              <rect x="40" y="46" width="5" height="5" rx="2.5" fill="#ffffff" opacity="0.7" />
              
              <rect x="55" y="48" width="6" height="6" rx="3" fill="#87ceeb" stroke="#495057" strokeWidth="1" filter="url(#shadow)" />
              <rect x="55" y="46" width="5" height="5" rx="2.5" fill="#ffffff" opacity="0.7" />
              
              <rect x="70" y="48" width="6" height="6" rx="3" fill="#87ceeb" stroke="#495057" strokeWidth="1" filter="url(#shadow)" />
              <rect x="70" y="46" width="5" height="5" rx="2.5" fill="#ffffff" opacity="0.7" />
              
              <rect x="85" y="48" width="6" height="6" rx="3" fill="#87ceeb" stroke="#495057" strokeWidth="1" filter="url(#shadow)" />
              <rect x="85" y="46" width="5" height="5" rx="2.5" fill="#ffffff" opacity="0.7" />
              
              {/* Cockpit windows - larger and more prominent */}
              <rect x="100" y="43" width="8" height="8" rx="4" fill="#87ceeb" stroke="#495057" strokeWidth="2" filter="url(#shadow)" />
              <rect x="100" y="41" width="7" height="7" rx="3.5" fill="#ffffff" opacity="0.8" />
              <rect x="100" y="57" width="8" height="8" rx="4" fill="#87ceeb" stroke="#495057" strokeWidth="2" filter="url(#shadow)" />
              <rect x="100" y="55" width="7" height="7" rx="3.5" fill="#ffffff" opacity="0.8" />
            </g>
            
            {/* Main Wings - Proper Airplane Wings with Realistic Design */}
            <g className="wings" filter="url(#shadow)">
              {/* Top wing - Proper swept-back aircraft wing */}
              <path d="M35 35 L15 28 L25 35 L45 42 L55 40 L45 35 Z" fill="url(#wingGradient)" stroke="#495057" strokeWidth="2" />
              <path d="M25 35 L20 30 L30 36 L40 40 L45 38 L35 35 Z" fill="#ffffff" opacity="0.9" />
              
              {/* Bottom wing - Larger, more prominent aircraft wing */}
              <path d="M40 75 L10 82 L20 78 L50 68 L60 70 L50 75 Z" fill="url(#wingGradient)" stroke="#495057" strokeWidth="2" />
              <path d="M20 78 L15 80 L25 76 L45 70 L50 72 L40 75 Z" fill="#ffffff" opacity="0.9" />
              
              {/* Wing tips with red accent - proper aircraft wingtip design */}
              <path d="M15 28 L10 26 L20 32 L25 30 Z" fill="#dc3545" stroke="#495057" strokeWidth="1" />
              <path d="M10 82 L5 84 L15 80 L20 78 Z" fill="#dc3545" stroke="#495057" strokeWidth="1" />
              
              {/* Wing flaps and ailerons for realism */}
              <path d="M25 35 L20 33 L30 37 L35 35 Z" fill="#e9ecef" stroke="#495057" strokeWidth="1" opacity="0.7" />
              <path d="M20 78 L15 80 L25 76 L30 78 Z" fill="#e9ecef" stroke="#495057" strokeWidth="1" opacity="0.7" />
            </g>
            
            {/* Engine Nacelles - 3D cylindrical with proper perspective */}
            <g className="engines" filter="url(#shadow)">
              {/* Left engine */}
              <rect x="35" y="72" width="16" height="8" rx="4" fill="url(#engineGradient)" stroke="#212529" strokeWidth="1.5" />
              <rect x="35" y="70" width="14" height="6" rx="3" fill="#adb5bd" opacity="0.8" />
              
              {/* Right engine */}
              <rect x="20" y="72" width="16" height="8" rx="4" fill="url(#engineGradient)" stroke="#212529" strokeWidth="1.5" />
              <rect x="20" y="70" width="14" height="6" rx="3" fill="#adb5bd" opacity="0.8" />
              
              {/* Engine exhaust - glowing orange effect */}
              <motion.rect
                x="33" y="72" width="12" height="6" rx="3"
                fill="#ff6b35"
                animate={{
                  width: [12, 16, 12],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.rect
                x="18" y="72" width="12" height="6" rx="3"
                fill="#ff6b35"
                animate={{
                  width: [12, 16, 12],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </g>
            
            {/* Tail Section - 3D with proper perspective */}
            <g className="tail" filter="url(#shadow)">
              {/* Vertical stabilizer */}
              <path d="M25 35 L20 15 L30 22 L35 32 Z" fill="url(#wingGradient)" stroke="#495057" strokeWidth="2" />
              <path d="M30 22 L25 18 L32 25 L35 30 Z" fill="#ffffff" opacity="0.9" />
              
              {/* Horizontal stabilizers */}
              <path d="M20 15 L15 12 L25 18 Z" fill="#dc3545" stroke="#495057" strokeWidth="1" />
              <path d="M20 22 L15 25 L25 19 Z" fill="#dc3545" stroke="#495057" strokeWidth="1" />
            </g>
            
            {/* Landing Gear - Retracted with 3D effect */}
            <g className="landing-gear" filter="url(#shadow)">
              <rect x="60" y="25" width="8" height="4" rx="2" fill="#6c757d" stroke="#495057" strokeWidth="1" />
              <rect x="60" y="23" width="6" height="3" rx="1.5" fill="#adb5bd" opacity="0.8" />
              <rect x="60" y="85" width="8" height="4" rx="2" fill="#6c757d" stroke="#495057" strokeWidth="1" />
              <rect x="60" y="83" width="6" height="3" rx="1.5" fill="#adb5bd" opacity="0.8" />
            </g>
          </svg>
          
          {/* Enhanced Smoke Trail - More realistic contrails */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            {Array.from({ length: 10 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-gray-200 rounded-full opacity-60"
                style={{
                  left: `${-25 - i * 12}px`,
                  top: `${-10 + (i % 2) * 20}px`
                }}
                animate={{
                  opacity: [0.6, 0.3, 0],
                  scale: [1, 2, 3.5],
                  x: [-25 - i * 12, -40 - i * 12, -65 - i * 12]
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