import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import AnimatedBackground from '../AnimatedBackground';
import TypewriterText from '../TypewriterText';

const HeroSection = () => {
  const typewriterTexts = [
    "UX Designer & Security Solutions Architect",
    "Building secure, user-centric experiences",
    "Passionate about innovation & technology",
    "Creating digital solutions that matter"
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white animate-fade-in"
          >
            Hi, I&apos;m Ana Sharma
          </h1>
          
          <div className="mt-4 text-xl text-gray-600 dark:text-gray-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <TypewriterText 
              texts={typewriterTexts}
              speed={80}
              className="text-primary-600 dark:text-primary-400 font-semibold"
            />
          </div>
          
          <p
            className="mt-2 text-lg text-gray-500 dark:text-gray-400 animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            Crafting secure, user-centric digital experiences
          </p>
          
          <div 
            className="mt-8 flex justify-center space-x-4 animate-slide-up"
            style={{ animationDelay: '0.9s' }}
          >
            <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <Link href="https://github.com/anasharma7" target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-8 w-8 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" />
              </Link>
            </div>
            
            <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <Link href="https://linkedin.com/in/anasharma7" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-8 w-8 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" />
              </Link>
            </div>
            
            <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300">
              <Link href="https://twitter.com/anasharma7" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-8 w-8 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" />
              </Link>
            </div>
          </div>
          
          <div
            className="mt-12 animate-slide-up"
            style={{ animationDelay: '1.2s' }}
          >
            <button
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 