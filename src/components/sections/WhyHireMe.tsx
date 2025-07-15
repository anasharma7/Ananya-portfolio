'use client';

import { FaCode, FaServer, FaMobile, FaLightbulb, FaPalette, FaShieldAlt, FaRocket, FaBrain, FaEye, FaHeart, FaMagic } from 'react-icons/fa';
import React, { useState, useRef } from 'react';

const reasons = [
  {
    icon: <FaPalette className="h-8 w-8" />,
    title: 'Creative Vision',
    description: 'I bring a creative approach to every project, turning challenges into opportunities for innovation and beautiful solutions.',
    gradient: 'from-purple-500 to-pink-500',
    question: 'Looking for fresh ideas?'
  },
  {
    icon: <FaCode className="h-8 w-8" />,
    title: 'Technical Excellence',
    description: 'I deliver clean, scalable, and reliable code that stands the test of time and adapts to your business needs.',
    gradient: 'from-indigo-500 to-purple-500',
    question: 'Want robust, maintainable solutions?'
  },
  {
    icon: <FaShieldAlt className="h-8 w-8" />,
    title: 'Security First',
    description: 'Security is at the core of my work, ensuring your data and users are always protected.',
    gradient: 'from-emerald-500 to-teal-500',
    question: 'Value peace of mind?'
  },
  {
    icon: <FaBrain className="h-8 w-8" />,
    title: 'Problem Solving',
    description: 'I thrive on tackling complex problems and finding elegant, effective solutions.',
    gradient: 'from-rose-500 to-pink-500',
    question: 'Need a strategic thinker?'
  },
  {
    icon: <FaRocket className="h-8 w-8" />,
    title: 'Results Driven',
    description: 'I focus on outcomes, delivering features and products that drive real business value.',
    gradient: 'from-violet-500 to-purple-500',
    question: 'Ready to see results?'
  },
  {
    icon: <FaHeart className="h-8 w-8" />,
    title: 'User Focused',
    description: 'I design and build with the end user in mind, creating seamless and delightful experiences.',
    gradient: 'from-pink-500 to-rose-500',
    question: 'Want happy users?'
  },
  {
    icon: <FaLightbulb className="h-8 w-8" />,
    title: 'Collaboration & Teamwork',
    description: 'I thrive in collaborative environments, communicate clearly, and love working with diverse teams to achieve shared goals.',
    gradient: 'from-blue-400 to-indigo-400',
    question: 'Looking for a team player?'
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
    <div className="relative bg-gradient-to-br from-slate-50 via-purple-50/20 to-pink-50/10 dark:from-slate-900 dark:via-purple-900/20 dark:to-pink-900/10 py-24 overflow-hidden animate-fade-in-up">
      {/* Animated SVG wave background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 w-full h-64 animate-wave-slow">
          <path fill="#b39ddb22">
            <animate attributeName="d" dur="12s" repeatCount="indefinite"
              values="M0,160L60,170C120,180,240,200,360,192C480,184,600,136,720,128C840,120,960,152,1080,181.3C1200,211,1320,229,1380,238.7L1440,248L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;M0,180L60,160C120,140,240,120,360,128C480,136,600,184,720,192C840,200,960,168,1080,138.7C1200,109,1320,91,1380,81.3L1440,72L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z;M0,160L60,170C120,180,240,200,360,192C480,184,600,136,720,128C840,120,960,152,1080,181.3C1200,211,1320,229,1380,238.7L1440,248L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-handwriting font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 sm:text-6xl mb-6">
            What I Bring to the Table
          </h2>
          <p className="max-w-4xl mx-auto text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Here’s how I add value to your team and projects—combining technical expertise, creativity, and a collaborative spirit to help you succeed in today’s job market.
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
                          background: `radial-gradient(circle 180px at ${spotlight.x}px ${spotlight.y}px, #fff8 0%, #b39ddb88 40%, #b39ddb22 80%, transparent 100%)`,
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