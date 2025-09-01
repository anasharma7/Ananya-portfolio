'use client';

import React, { useEffect, useState } from 'react';
import './AnimatedHero.css';
import { motion } from 'framer-motion';

/**
 * AnimatedHero Component
 * 
 * A unique, personality-driven hero section featuring floating skill cards,
 * dynamic backgrounds, and creative animations that showcase creativity and technical skills.
 * 
 * Features:
 * - Floating skill cards with hover effects
 * - Dynamic particle-like background elements
 * - Creative color transitions
 * - Interactive elements that respond to user
 * - Unique visual style that stands out
 * 
 * @component
 * @returns {JSX.Element} The animated hero section
 */
const AnimatedHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: "React", icon: "⚛️", color: "#61dafb" },
    { name: "TypeScript", icon: "📘", color: "#3178c6" },
    { name: "Node.js", icon: "🟢", color: "#339933" },
    { name: "AWS", icon: "☁️", color: "#ff9900" },
    { name: "SQL", icon: "🗄️", color: "#336791" },
    { name: "Git", icon: "📝", color: "#f05032" }
  ];

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 2
  }));

  return (
    <div 
      className="relative w-full h-96 mx-auto mb-8 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic Background with Floating Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + element.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay
            }}
          />
        ))}
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        
        {/* Hero Title with Dynamic Effects */}
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Ananya
          </span>
        </motion.h1>

        {/* Subtitle with Typewriter Effect */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Crafting digital experiences with code & creativity
        </motion.p>

        {/* Floating Skill Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl w-full">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                rotate: isHovered ? [0, 5, -5, 0] : 0
              }}
              transition={{ 
                duration: 0.6, 
                delay: 0.5 + index * 0.1,
                rotate: { duration: 0.5, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 15,
                transition: { duration: 0.3 }
              }}
            >
              <div 
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{
                  boxShadow: isHovered ? `0 0 30px ${skill.color}40` : '0 4px 20px rgba(0,0,0,0.1)'
                }}
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <div className="text-white font-semibold">{skill.name}</div>
                
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}20, transparent)`,
                    filter: 'blur(20px)'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive CTA Button */}
        <motion.button
          className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Explore My Work →
        </motion.button>

        {/* Mouse-following Glow Effect */}
        <motion.div
          className="fixed pointer-events-none w-96 h-96 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            zIndex: -1
          }}
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.5 : 0.3
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default AnimatedHero; 