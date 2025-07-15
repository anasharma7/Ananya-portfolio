'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import AnimatedBackground from '../AnimatedBackground';
import TypewriterText from '../TypewriterText';

const HeroSection = () => {
  const typewriterTexts = [
    "Let’s build something meaningful together",
    "Designing with empathy, coding with care",
    "Your next teammate in digital innovation",
    "Driven by curiosity, focused on people"
  ];

  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-purple-50/50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center space-x-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white animate-fade-in">
                  Hi, I&apos;m Ana Sharma
                </h1>
                {/* Animated waving girl SVG */}
                <span className="inline-block animate-wave">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      {/* Face */}
                      <circle cx="30" cy="30" r="20" fill="#f9d6b7" />
                      {/* Hair */}
                      <ellipse cx="30" cy="28" rx="20" ry="18" fill="#7c4a1e" />
                      {/* Body */}
                      <rect x="22" y="40" width="16" height="14" rx="6" fill="#7c4a1e" />
                      {/* Arm (waving) */}
                      <g className="origin-[44px_32px]">
                        <rect x="42" y="28" width="10" height="6" rx="3" fill="#f9d6b7" />
                        <rect x="50" y="28" width="6" height="4" rx="2" fill="#f9d6b7" />
                      </g>
                      {/* Smile */}
                      <path d="M25 36 Q30 40 35 36" stroke="#a05a2c" strokeWidth="2" fill="none" />
                      {/* Eyes */}
                      <circle cx="25" cy="30" r="2" fill="#3b2c1a" />
                      <circle cx="35" cy="30" r="2" fill="#3b2c1a" />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            
            <div className="mt-4 text-xl text-gray-600 dark:text-gray-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <TypewriterText 
                texts={typewriterTexts}
                speed={80}
                className="text-purple-600 dark:text-purple-400 font-semibold"
              />
            </div>
            
            <p
              className="mt-2 text-lg text-gray-500 dark:text-gray-400 animate-slide-up"
              style={{ animationDelay: '0.6s' }}
            >
              Welcome! I love turning ideas into experiences people enjoy.
            </p>
            
            <div 
              className="mt-8 flex justify-center space-x-4 animate-slide-up"
              style={{ animationDelay: '0.9s' }}
            >
              <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                <Link href="https://github.com/anasharma7" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-8 w-8 text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors" />
                </Link>
              </div>
              
              <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                <Link href="https://linkedin.com/in/anasharma7" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-8 w-8 text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors" />
                </Link>
              </div>
              
              <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                <Link href="https://twitter.com/anasharma7" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="h-8 w-8 text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors" />
                </Link>
              </div>
            </div>
            
            <div
              className="mt-12 animate-slide-up"
              style={{ animationDelay: '1.2s' }}
            >
              <button
                onClick={() => {
                  // Smooth scroll to projects section
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                className="group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 overflow-hidden"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                
                {/* Button text */}
                <span className="relative z-10 flex items-center">
                  View My Work
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection; 