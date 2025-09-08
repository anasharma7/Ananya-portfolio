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
    { text: "Show Me Magic", icon: <FaMagic className="ml-2 w-5 h-5" />, action: () => {
      // Create EPIC full-screen particle explosion effect
      const explosion = document.createElement('div');
      explosion.className = 'fixed inset-0 pointer-events-none z-50 overflow-hidden';
      explosion.style.background = 'radial-gradient(circle at center, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 100%)';
      
      // Create massive particle explosion
      const particles = [];
      const codeSnippets = ['React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Tailwind', 'Framer Motion'];
      
      // Create 200+ particles for explosion
      for (let i = 0; i < 200; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 2;
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 300 + 100;
        const x = window.innerWidth / 2;
        const y = window.innerHeight / 2;
        
        particle.className = 'absolute rounded-full';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.background = `linear-gradient(45deg, 
          hsl(${Math.random() * 60 + 260}, 70%, 60%), 
          hsl(${Math.random() * 60 + 300}, 70%, 60%)
        )`;
        particle.style.boxShadow = `0 0 ${size * 2}px currentColor`;
        
        particles.push({ element: particle, angle, velocity, x, y, size });
        explosion.appendChild(particle);
      }
      
      // Add floating code snippets
      for (let i = 0; i < 12; i++) {
        const codeElement = document.createElement('div');
        codeElement.className = 'absolute px-4 py-2 rounded-lg text-sm font-mono font-bold text-white shadow-lg';
        codeElement.style.background = 'linear-gradient(45deg, #8b5cf6, #ec4899)';
        codeElement.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
        codeElement.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
        codeElement.style.transform = 'scale(0)';
        codeElement.style.opacity = '0';
        codeElement.textContent = codeSnippets[i];
        explosion.appendChild(codeElement);
        
        // Animate code snippets
        setTimeout(() => {
          codeElement.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
          codeElement.style.transform = 'scale(1) rotate(360deg)';
          codeElement.style.opacity = '1';
        }, i * 100);
        
        // Remove code snippets
        setTimeout(() => {
          codeElement.style.transition = 'all 0.5s ease-out';
          codeElement.style.transform = 'scale(0) rotate(-180deg)';
          codeElement.style.opacity = '0';
        }, 2000 + i * 100);
      }
      
      document.body.appendChild(explosion);
      
      // Animate particles explosion
      let startTime = Date.now();
      const animateParticles = () => {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / 2000; // 2 second animation
        
        particles.forEach((particle, index) => {
          const distance = particle.velocity * progress;
          const newX = particle.x + Math.cos(particle.angle) * distance;
          const newY = particle.y + Math.sin(particle.angle) * distance;
          const scale = Math.max(0, 1 - progress);
          const opacity = Math.max(0, 1 - progress * 1.5);
          
          particle.element.style.left = `${newX}px`;
          particle.element.style.top = `${newY}px`;
          particle.element.style.transform = `scale(${scale})`;
          particle.element.style.opacity = opacity;
        });
        
        if (progress < 1) {
          requestAnimationFrame(animateParticles);
        } else {
          // Cleanup
          setTimeout(() => {
            if (document.body.contains(explosion)) {
              document.body.removeChild(explosion);
            }
          }, 1000);
        }
      };
      
      requestAnimationFrame(animateParticles);
    }},
    { text: "Get Inspired", icon: <FaRocket className="ml-2 w-5 h-5" />, action: () => {
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