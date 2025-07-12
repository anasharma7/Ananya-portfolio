'use client';

import { FaCode, FaServer, FaMobile, FaLightbulb, FaPalette, FaShieldAlt, FaRocket, FaBrain, FaEye, FaHeart, FaMagic } from 'react-icons/fa';
import React, { useState, useRef } from 'react';

const reasons = [
  {
    icon: <FaPalette className="h-8 w-8" />,
    title: 'Creative Vision',
    description: 'I see possibilities where others see problems. Every project is an opportunity to create something beautiful and meaningful.',
    gradient: 'from-purple-500 to-pink-500',
    question: 'Need someone who thinks outside the box?'
  },
  {
    icon: <FaCode className="h-8 w-8" />,
    title: 'Technical Excellence',
    description: 'Clean, efficient, and scalable code that not only works flawlessly but is a joy to maintain and build upon.',
    gradient: 'from-indigo-500 to-purple-500',
    question: 'Want code that actually works?'
  },
  {
    icon: <FaShieldAlt className="h-8 w-8" />,
    title: 'Security First',
    description: 'In today\'s digital landscape, security isn\'t optional. I build with protection and privacy at the core.',
    gradient: 'from-emerald-500 to-teal-500',
    question: 'Care about keeping things secure?'
  },
  {
    icon: <FaBrain className="h-8 w-8" />,
    title: 'Problem Solver',
    description: 'Complex challenges don\'t intimidate me—they excite me. I love finding elegant solutions to difficult problems.',
    gradient: 'from-rose-500 to-pink-500',
    question: 'Have a tricky problem to solve?'
  },
  {
    icon: <FaRocket className="h-8 w-8" />,
    title: 'Results Driven',
    description: 'I don\'t just build features—I build solutions that drive real business value and user satisfaction.',
    gradient: 'from-violet-500 to-purple-500',
    question: 'Want results, not just code?'
  },
  {
    icon: <FaHeart className="h-8 w-8" />,
    title: 'User Focused',
    description: 'Every decision I make starts with the user. Because great technology is invisible—it just works beautifully.',
    gradient: 'from-pink-500 to-rose-500',
    question: 'Want users to actually love your product?'
  }
];

const WhyHireMe = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [spotlight, setSpotlight] = useState<{ x: number; y: number } | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (reasons[index].title !== 'Technical Excellence') return;
    const rect = cardRefs.current[index]?.getBoundingClientRect();
    if (!rect) return;
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = (index: number) => {
    if (reasons[index].title !== 'Technical Excellence') return;
    setSpotlight(null);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-purple-50/20 to-pink-50/10 dark:from-slate-900 dark:via-purple-900/20 dark:to-pink-900/10 py-24 overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-handwriting font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 sm:text-6xl mb-6">
            Why Choose Me?
          </h2>
          <p className="max-w-4xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Great question! Here are six compelling reasons why I might be the perfect fit for your next project. 
            Hover over each card to discover what makes me different.
          </p>
        </div>

        {/* Elegant grid layout instead of floating cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const isHovered = hoveredSkill === index;
            
            return (
              <div
                key={reason.title}
                ref={el => { cardRefs.current[index] = el; }}
                className={`relative group transition-all duration-500 ease-out ${
                  isHovered ? 'transform scale-105 z-10' : 'transform scale-100'
                }`}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => { setHoveredSkill(null); handleMouseLeave(index); }}
                onMouseMove={e => handleMouseMove(e, index)}
              >
                <div
                  className={`relative w-full h-80 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 transition-all duration-500 ${
                    isHovered ? 'shadow-2xl border-purple-200/50 dark:border-purple-700/50' : 'shadow-lg'
                  }`}
                  style={
                    reason.title === 'Technical Excellence' && spotlight
                      ? {
                          background: `radial-gradient(circle at ${spotlight.x}px ${spotlight.y}px, rgba(168,85,247,0.18) 0%, rgba(236,72,153,0.10) 60%, transparent 100%)`,
                        }
                      : undefined
                  }
                >
                  {/* Subtle glow effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${reason.gradient} opacity-0 transition-opacity duration-500 ${
                      isHovered ? 'opacity-10' : ''
                    }`}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 transform transition-all duration-300 ${
                      isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                    }`}>
                      {reason.icon}
                    </div>
                    
                    <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-4 ${reason.title === 'Technical Excellence' ? 'font-graffiti text-2xl text-purple-700 dark:text-purple-300' : ''}`}>
                      {reason.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                      {reason.description}
                    </p>
                    
                    {isHovered && (
                      <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200/50 dark:border-purple-700/50">
                        <p className="text-lg font-handwriting text-purple-700 dark:text-purple-300">
                          {reason.question}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Subtle floating elements */}
                  {isHovered && (
                    <>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-ping" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full animate-pulse" />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Ready to bring your vision to life?
          </p>
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            <span className="relative z-10">Let's Create Something Amazing</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe; 