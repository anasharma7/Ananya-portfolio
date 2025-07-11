import React from 'react';
import { motion } from 'framer-motion';
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
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I&apos;m Ana Sharma
          </motion.h1>
          
          <motion.div
            className="mt-4 text-xl text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TypewriterText 
              texts={typewriterTexts}
              speed={80}
              className="text-primary-600 dark:text-primary-400 font-semibold"
            />
          </motion.div>
          
          <motion.p
            className="mt-2 text-lg text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Crafting secure, user-centric digital experiences
          </motion.p>
          
          <motion.div 
            className="mt-8 flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="https://github.com/anasharma7" target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-8 w-8 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="https://linkedin.com/in/anasharma7" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-8 w-8 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="https://twitter.com/anasharma7" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-8 w-8 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 