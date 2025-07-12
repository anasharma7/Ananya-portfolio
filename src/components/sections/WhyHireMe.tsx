'use client';

import { FaCode, FaServer, FaMobile, FaLightbulb, FaPalette, FaShieldAlt, FaRocket, FaBrain, FaEye, FaHeart, FaMagic } from 'react-icons/fa';
import { useState, useEffect } from 'react';

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
    gradient: 'from-blue-500 to-cyan-500',
    question: 'Want code that actually works?'
  },
  {
    icon: <FaShieldAlt className="h-8 w-8" />,
    title: 'Security First',
    description: 'In today\'s digital landscape, security isn\'t optional. I build with protection and privacy at the core.',
    gradient: 'from-green-500 to-emerald-500',
    question: 'Care about keeping things secure?'
  },
  {
    icon: <FaBrain className="h-8 w-8" />,
    title: 'Problem Solver',
    description: 'Complex challenges don\'t intimidate me—they excite me. I love finding elegant solutions to difficult problems.',
    gradient: 'from-orange-500 to-red-500',
    question: 'Have a tricky problem to solve?'
  },
  {
    icon: <FaRocket className="h-8 w-8" />,
    title: 'Results Driven',
    description: 'I don\'t just build features—I build solutions that drive real business value and user satisfaction.',
    gradient: 'from-indigo-500 to-purple-500',
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-24 overflow-hidden">
      {/* Interactive background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 sm:text-6xl mb-6">
            Why Choose Me?
          </h2>
          <p className="max-w-4xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Great question! Here are six compelling reasons why I might be the perfect fit for your next project. 
            Hover over each card to discover what makes me different.
          </p>
        </div>

        {/* Interactive floating cards */}
        <div className="relative min-h-[600px]">
          {reasons.map((reason, index) => {
            const isHovered = hoveredSkill === index;
            const distance = Math.sqrt(
              Math.pow(mousePosition.x - (window.innerWidth / 2), 2) +
              Math.pow(mousePosition.y - (window.innerHeight / 2), 2)
            );
            
                          return (
                <div
                  key={reason.title}
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${
                    isHovered ? 'z-20 scale-110' : 'z-10 scale-100'
                  }`}
                  style={{
                    transform: `translate(-50%, -50%) rotate(${index * 60}deg) translateY(${isHovered ? -100 : -80}px)`,
                  }}
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div
                    className={`relative w-64 h-80 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 transition-all duration-500 ${
                      isHovered ? 'shadow-2xl scale-110 rotate-0' : 'shadow-lg'
                    }`}
                    style={{
                      transform: isHovered ? 'rotate(0deg) scale(1.1)' : `rotate(${-index * 60}deg)`,
                    }}
                  >
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${reason.gradient} opacity-0 transition-opacity duration-500 ${
                        isHovered ? 'opacity-20' : ''
                      }`}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 transform transition-all duration-300 ${
                        isHovered ? 'scale-125 rotate-12' : 'scale-100 rotate-0'
                      }`}>
                        {reason.icon}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {reason.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                        {reason.description}
                      </p>
                      
                      {isHovered && (
                        <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                          <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                            {reason.question}
                          </p>
                        </div>
                      )}
                    </div>

                  {/* Floating elements */}
                  {isHovered && (
                    <>
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-ping" />
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full animate-pulse" />
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
            className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 overflow-hidden"
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