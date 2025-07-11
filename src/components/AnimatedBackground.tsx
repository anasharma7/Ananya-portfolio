'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => i);
  const shapes = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating geometric shapes */}
      {shapes.map((i) => (
        <motion.div
          key={i}
          className={`absolute ${
            i % 2 === 0 ? 'bg-accent-400/10' : 'bg-secondary-400/10'
          } ${
            i % 3 === 0 ? 'w-16 h-16' : i % 3 === 1 ? 'w-12 h-12' : 'w-8 h-8'
          } ${
            i % 2 === 0 ? 'rounded-full' : 'rotate-45'
          }`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Mouse-following gradient */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-primary-400/10 to-accent-400/10 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 20,
        }}
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-400 to-transparent h-px animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-400 to-transparent w-px animate-pulse" />
      </div>
    </div>
  );
};

export default AnimatedBackground; 