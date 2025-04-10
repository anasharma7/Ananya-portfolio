import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
          >
            Hi, I&apos;m Ana Sharma
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-300"
          >
            UX Designer & Cybersecurity Enthusiast
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex justify-center space-x-4"
          >
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-8 w-8 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-8 w-8 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" />
            </Link>
            <Link href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-8 w-8 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection; 