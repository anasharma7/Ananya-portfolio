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
        {morphingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute"
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
          initial={{ x: -200, y: 0 }}
          animate={{ 
            x: [-200, 0, 200],
            y: 0
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Realistic Airplane Design */}
          <svg width="120" height="60" viewBox="0 0 120 60" className="relative z-20">
            {/* Main Aircraft Body - Long, sleek fuselage */}
            <ellipse cx="60" cy="30" rx="40" ry="10" fill="url(#airplaneGradient)" stroke="#fff" strokeWidth="2" />
            
            {/* Aircraft Nose - Pointed and aerodynamic */}
            <path d="M90 30 L100 25 L100 35 Z" fill="#ff6b6b" stroke="#fff" strokeWidth="2" />
            
            {/* Cockpit Windows - Multiple realistic windows */}
            <ellipse cx="75" cy="25" r="4" fill="#87ceeb" stroke="#fff" strokeWidth="1" />
            <ellipse cx="75" cy="35" r="4" fill="#87ceeb" stroke="#fff" strokeWidth="1" />
            <ellipse cx="70" cy="25" r="3" fill="#87ceeb" stroke="#fff" strokeWidth="0.5" />
            <ellipse cx="70" cy="35" r="3" fill="#87ceeb" stroke="#fff" strokeWidth="0.5" />
            
            {/* Main Wings - Large, realistic airplane wings */}
            <path d="M40 20 L20 5 L30 15 Z" fill="#4ecdc4" stroke="#fff" strokeWidth="1.5" />
            <path d="M40 40 L20 55 L30 45 Z" fill="#4ecdc4" stroke="#fff" strokeWidth="1.5" />
            
            {/* Wing Details - Wing flaps and ailerons */}
            <path d="M30 15 L25 8 L35 12 Z" fill="#45b7d1" stroke="#fff" strokeWidth="1" />
            <path d="M30 45 L25 52 L35 48 Z" fill="#45b7d1" stroke="#fff" strokeWidth="1" />
            
            {/* Tail Section - Vertical and horizontal stabilizers */}
            <path d="M25 15 L20 5 L30 10 Z" fill="#4ecdc4" stroke="#fff" strokeWidth="1.5" />
            <path d="M25 45 L20 55 L30 50 Z" fill="#4ecdc4" stroke="#fff" strokeWidth="1.5" />
            <path d="M20 10 L15 8 L25 12 Z" fill="#45b7d1" stroke="#fff" strokeWidth="1" />
            <path d="M20 50 L15 52 L25 48 Z" fill="#45b7d1" stroke="#fff" strokeWidth="1" />
            
            {/* Engine Nacelles - Realistic jet engines */}
            <ellipse cx="35" cy="20" rx="6" ry="3" fill="#333" stroke="#fff" strokeWidth="1" />
            <ellipse cx="35" cy="40" rx="6" ry="3" fill="#333" stroke="#fff" strokeWidth="1" />
            
            {/* Engine Thrusters - Glowing engine exhaust */}
            <motion.ellipse
              cx="32" cy="20" rx="4" ry="2"
              fill="#ffa500"
              animate={{
                rx: [4, 6, 4],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.ellipse
              cx="32" cy="40" rx="4" ry="2"
              fill="#ffa500"
              animate={{
                rx: [4, 6, 4],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 0.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Landing Gear - Retracted position */}
            <ellipse cx="50" cy="20" rx="2" ry="1" fill="#666" stroke="#fff" strokeWidth="0.5" />
            <ellipse cx="50" cy="40" rx="2" ry="1" fill="#666" stroke="#fff" strokeWidth="0.5" />
            
            {/* Gradient Definition */}
            <defs>
              <linearGradient id="airplaneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ecdc4" />
                <stop offset="50%" stopColor="#45b7d1" />
                <stop offset="100%" stopColor="#96ceb4" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Smoke Trail - More realistic contrails */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gray-300 rounded-full opacity-50"
                style={{
                  left: `${-15 - i * 8}px`,
                  top: `${-5 + (i % 2) * 10}px`
                }}
                animate={{
                  opacity: [0.5, 0.2, 0],
                  scale: [1, 1.5, 2.5],
                  x: [-15 - i * 8, -25 - i * 8, -40 - i * 8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
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