import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import AnimatedBackground from '../AnimatedBackground';
import TypewriterText from '../TypewriterText';
import WorkPreviewModal from '../WorkPreviewModal';
import ScrollAnimation from '../ScrollAnimation';
import MagneticButton from '../ui/MagneticButton';
import TextReveal from '../TextReveal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const typewriterTexts = [
    "UX Designer & Security Solutions Architect",
    "Building secure, user-centric experiences",
    "Passionate about innovation & technology",
    "Creating digital solutions that matter"
  ];

  return (
    <>
      <section className="relative py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ScrollAnimation animation="fade-in-down" delay={200}>
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
              >
                <TextReveal delay={500} speed={100}>
                  Hi, I&apos;m Ana Sharma
                </TextReveal>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in-up" delay={400}>
              <div className="mt-4 text-xl text-gray-600 dark:text-gray-300">
                <TypewriterText 
                  texts={typewriterTexts}
                  speed={80}
                  className="text-primary-600 dark:text-primary-400 font-semibold"
                />
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in-up" delay={600}>
              <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
                Crafting secure, user-centric digital experiences
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation animation="bounce-in" delay={800}>
              <div className="mt-8 flex justify-center space-x-4">
                <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 magnetic-hover">
                  <Link href="https://github.com/anasharma7" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="h-8 w-8 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" />
                  </Link>
                </div>
                
                <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 magnetic-hover">
                  <Link href="https://linkedin.com/in/anasharma7" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="h-8 w-8 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" />
                  </Link>
                </div>
                
                <div className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 magnetic-hover">
                  <Link href="https://twitter.com/anasharma7" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="h-8 w-8 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="zoom-in" delay={1000}>
              <div className="mt-12">
                <MagneticButton
                  onClick={() => setIsModalOpen(true)}
                  className="text-lg"
                >
                  View My Work
                </MagneticButton>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Work Preview Modal */}
      <WorkPreviewModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection; 