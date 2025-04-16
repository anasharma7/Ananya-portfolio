import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Hi, I&apos;m Ana Sharma
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            UX Designer & Security Solutions Architect
          </p>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
            Crafting secure, user-centric digital experiences
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link href="https://github.com/anasharma7" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-8 w-8 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" />
            </Link>
            <Link href="https://linkedin.com/in/anasharma7" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-8 w-8 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" />
            </Link>
            <Link href="https://twitter.com/anasharma7" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-8 w-8 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 