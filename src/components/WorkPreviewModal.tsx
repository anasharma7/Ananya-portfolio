'use client';

import { useState, useEffect } from 'react';
import { FaTimes, FaCode, FaPalette, FaShieldAlt, FaRocket } from 'react-icons/fa';

interface WorkPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WorkPreviewModal = ({ isOpen, onClose }: WorkPreviewModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative w-full max-w-2xl transform transition-all duration-300 ${
        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {/* Paper Note */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg shadow-2xl border-2 border-yellow-200 dark:border-yellow-700 relative overflow-hidden">
          {/* Paper texture overlay */}
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="paper" width="100" height="100" patternUnits="userSpaceOnUse"%3E%3Crect width="100" height="100" fill="%23fbbf24"/%3E%3Cpath d="M0 0h100v1H0zM0 0v100h1V0z" stroke="%23f59e0b" stroke-width="0.5" opacity="0.3"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23paper)"/%3E%3C/svg%3E')]" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 shadow-lg"
          >
            <FaTimes className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="relative z-10 p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mb-4 shadow-lg">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                Welcome to My World! 🚀
              </h2>
              <p className="text-gray-600 dark:text-gray-400 italic">
                A sneak peek into what I do best...
              </p>
            </div>

            {/* Work Preview Sections */}
            <div className="space-y-6">
              {/* UX/UI Design */}
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 border-l-4 border-purple-500">
                <div className="flex items-center mb-3">
                  <FaPalette className="text-purple-500 text-xl mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    UX/UI Design & HCI
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Crafting intuitive user experiences through human-centered design. 
                  From wireframes to interactive prototypes, I bridge the gap between 
                  user needs and technical possibilities. Specializing in accessibility 
                  and inclusive design principles.
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {['Figma', 'User Research', 'Prototyping', 'Accessibility'].map((skill) => (
                    <span key={skill} className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Development */}
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center mb-3">
                  <FaCode className="text-blue-500 text-xl mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Full-Stack Development
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Building modern web applications with cutting-edge technologies. 
                  From responsive frontends to robust backends, I create scalable 
                  solutions that perform beautifully across all devices.
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {['React', 'Next.js', 'TypeScript', 'Node.js'].map((skill) => (
                    <span key={skill} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cybersecurity */}
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 border-l-4 border-red-500">
                <div className="flex items-center mb-3">
                  <FaShieldAlt className="text-red-500 text-xl mr-3" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Cybersecurity Solutions
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  Developing secure applications and interactive security visualizations. 
                  Creating engaging ways to understand complex security concepts through 
                  interactive demonstrations and educational content.
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {['Security Analysis', 'Interactive Visualizations', 'Secure Coding', 'Penetration Testing'].map((skill) => (
                    <span key={skill} className="px-2 py-1 text-xs bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                "Ready to see these skills in action?"
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => {
                    onClose();
                    // Scroll to projects section
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Projects
                </button>
                <button
                  onClick={() => {
                    onClose();
                    // Scroll to skills section
                    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                >
                  View Skills
                </button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-2 left-2 w-8 h-8 border-2 border-yellow-400 rounded-full opacity-30" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-2 border-orange-400 rounded-full opacity-30" />
            <div className="absolute top-1/2 left-2 w-4 h-4 border-2 border-yellow-300 rounded-full opacity-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPreviewModal; 