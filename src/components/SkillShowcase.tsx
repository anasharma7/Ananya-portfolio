'use client';

import { useState } from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaShieldAlt, FaPalette } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiFigma } from 'react-icons/si';
import React from 'react'; // Added missing import for React.cloneElement

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const SkillShowcase = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    {
      name: 'React',
      level: 95,
      icon: <FaReact className="text-4xl" />,
      color: 'from-blue-400 to-blue-600',
      description: 'Building interactive user interfaces with modern React patterns'
    },
    {
      name: 'TypeScript',
      level: 92,
      icon: <SiTypescript className="text-4xl" />,
      color: 'from-blue-500 to-blue-700',
      description: 'Type-safe development with advanced TypeScript features'
    },
    {
      name: 'Next.js',
      level: 94,
      icon: <SiNextdotjs className="text-4xl" />,
      color: 'from-gray-600 to-gray-800',
      description: 'Full-stack development with Next.js and server-side rendering'
    },
    {
      name: 'Tailwind CSS',
      level: 96,
      icon: <SiTailwindcss className="text-4xl" />,
      color: 'from-cyan-400 to-cyan-600',
      description: 'Modern CSS framework for rapid UI development'
    },
    {
      name: 'UX Design',
      level: 93,
      icon: <FaPalette className="text-4xl" />,
      color: 'from-purple-400 to-purple-600',
      description: 'User experience design and prototyping with Figma'
    },
    {
      name: 'Cybersecurity',
      level: 90,
      icon: <FaShieldAlt className="text-4xl" />,
      color: 'from-red-400 to-red-600',
      description: 'Security analysis, penetration testing, and secure coding'
    },
    {
      name: 'Node.js',
      level: 88,
      icon: <FaNodeJs className="text-4xl" />,
      color: 'from-green-400 to-green-600',
      description: 'Backend development and API creation with Node.js'
    },
    {
      name: 'Python',
      level: 85,
      icon: <FaPython className="text-4xl" />,
      color: 'from-yellow-400 to-blue-600',
      description: 'Data analysis, automation, and backend development'
    }
  ];

  return (
    <section id="skills" className="py-12 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            What I Know
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Here’s a quick look at the tools and skills I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="relative group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-2 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 transform hover:scale-105 hover:-translate-y-1 min-h-[110px]">
                <div className="flex items-center justify-center mb-1">
                  <div className={`p-1 rounded-full bg-gradient-to-r ${skill.color} text-white`}>{React.cloneElement(skill.icon as any, { className: 'text-lg' })}</div>
                </div>
                <h3 className="text-xs font-semibold text-gray-900 dark:text-white mb-0.5">{skill.name}</h3>
                <div className="mb-1">
                  <div className="flex justify-between text-[10px] text-gray-600 dark:text-gray-400 mb-0.5">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-0.5 overflow-hidden">
                    <div className={`h-0.5 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`} style={{ width: hoveredSkill === skill.name ? `${skill.level}%` : '0%' }} />
                  </div>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${hoveredSkill === skill.name ? 'max-h-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[10px] text-gray-600 dark:text-gray-400">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillShowcase; 