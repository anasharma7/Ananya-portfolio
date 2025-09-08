'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaRocket, FaHeart, FaMagic } from 'react-icons/fa';
import Link from 'next/link';
import AnimatedBackground from '../AnimatedBackground';
import AnimatedHero from '../AnimatedHero';

const HeroSection = () => {
  const [buttonState, setButtonState] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const buttonStates = [
    { text: "Let's Explore", icon: <FaRocket className="ml-2 w-5 h-5" />, action: () => window.open('/projects', '_self') },
    { text: "Get Inspired", icon: <FaMagic className="ml-2 w-5 h-5" />, action: () => {
      // Create a magical sparkle effect
      const sparkles = document.createElement('div');
      sparkles.className = 'fixed inset-0 pointer-events-none z-50';
      sparkles.innerHTML = Array.from({length: 20}, () => 
        `<div class="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping" style="left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation-delay: ${Math.random() * 2}s;"></div>`
      ).join('');
      document.body.appendChild(sparkles);
      setTimeout(() => document.body.removeChild(sparkles), 3000);
    }},
    { text: "Connect", icon: <FaHeart className="ml-2 w-5 h-5" />, action: () => window.open('/contact', '_self') }
  ];

  const handleButtonClick = () => {
    setIsAnimating(true);
    buttonStates[buttonState].action();
    
    setTimeout(() => {
      setButtonState((prev) => (prev + 1) % buttonStates.length);
      setIsAnimating(false);
    }, 500);
  };


  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-purple-50/50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white animate-fade-in mb-8">
                Hi, I&apos;m Ana Sharma
              </h1>
              
              {/* New animated hero with circle and waving girl */}
              <AnimatedHero />
            </div>
            
            
            <div 
              className="mt-8 flex justify-center space-x-4 animate-slide-up"
              style={{ animationDelay: '0.9s' }}
            >
              <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                <Link href="https://github.com/anasharma7" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="h-8 w-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 transition-colors" />
                </Link>
              </div>
              
              <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                <Link href="https://linkedin.com/in/anasharma7" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="h-8 w-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 transition-colors" />
                </Link>
              </div>
              
              <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                <Link href="https://twitter.com/anasharma7" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="h-8 w-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-700 transition-colors" />
                </Link>
              </div>
            </div>
            
            <div
              className="mt-12 animate-slide-up"
              style={{ animationDelay: '1.2s' }}
            >
              <button
                onClick={handleButtonClick}
                disabled={isAnimating}
                className={`group relative bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-10 rounded-xl transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 overflow-hidden ${isAnimating ? 'animate-pulse' : ''}`}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
                
                {/* Button text */}
                <span className="relative z-10 flex items-center transition-all duration-300">
                  {buttonStates[buttonState].text}
                  <span className={`transform transition-all duration-300 ${isAnimating ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`}>
                    {buttonStates[buttonState].icon}
                  </span>
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