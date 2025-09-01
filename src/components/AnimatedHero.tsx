'use client';

import React, { useState, useEffect } from 'react';
import './AnimatedHero.css';
import { motion } from 'framer-motion';

/**
 * AnimatedHero Component
 * 
 * A professional typing animation that showcases coding skills and expertise.
 * Features a terminal-style interface that types out key skills and technologies.
 * 
 * Features:
 * - Terminal-style typing animation
 * - Professional skill showcase
 * - Clean, modern design
 * - Responsive and accessible
 * 
 * @component
 * @returns {JSX.Element} The animated hero section
 */
const AnimatedHero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const skills = [
    "Full Stack Developer",
    "React & TypeScript Expert",
    "Node.js & Express.js",
    "AWS & Cloud Architecture",
    "Database Design & SQL",
    "RESTful APIs & GraphQL",
    "DevOps & CI/CD",
    "Problem Solver & Team Player"
  ];

  const currentSkill = skills[currentTextIndex];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentCharIndex < currentSkill.length) {
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentCharIndex > 0) {
          setCurrentCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % skills.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentCharIndex, isDeleting, currentSkill, skills.length]);

  return (
    <div 
      className="relative w-60 h-60 mx-auto mb-8"
      role="img"
      aria-label="Interactive typing animation showcasing coding skills and expertise"
    >
      {/* Circle Background - Professional gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2a1745] via-[#1a237e] to-[#0d1333] shadow-2xl"></div>
      
      {/* Terminal Container */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-48 h-48 bg-black bg-opacity-90 rounded-lg border border-blue-400 p-4 font-mono text-sm">
          {/* Terminal Header */}
          <div className="flex items-center mb-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-blue-400 ml-3 text-xs">portfolio:~$</span>
          </div>
          
          {/* Typing Animation */}
          <div className="text-green-400 h-20 flex items-center">
            <span className="mr-2">{'>'}</span>
            <span className="text-white">
              {currentSkill.substring(0, currentCharIndex)}
            </span>
            <motion.span
              className="inline-block w-2 h-5 bg-green-400 ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </div>
          
          {/* Skill Progress */}
          <div className="mt-4 space-y-2">
            {skills.slice(0, 4).map((skill, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className={`text-xs ${index === currentTextIndex ? 'text-green-400' : 'text-gray-400'}`}>
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHero; 