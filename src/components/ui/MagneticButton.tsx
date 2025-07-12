'use client';

import { useRef, useState, ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  magneticStrength?: number;
  href?: string;
  target?: string;
  rel?: string;
}

const MagneticButton = ({ 
  children, 
  onClick, 
  className = '', 
  magneticStrength = 0.3,
  href,
  target,
  rel
}: MagneticButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * magneticStrength;
    const deltaY = (e.clientY - centerY) * magneticStrength;
    
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const baseClasses = `
    relative inline-flex items-center justify-center px-8 py-4 
    bg-gradient-to-r from-primary-600 to-primary-700 
    hover:from-primary-700 hover:to-primary-800
    text-white font-semibold rounded-xl 
    transition-all duration-300 ease-out
    shadow-lg hover:shadow-xl
    transform hover:scale-105
    cursor-pointer
    overflow-hidden
    group
  `;

  const content = (
    <div
      ref={ref}
      className={`${baseClasses} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {/* Background glow effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 
          rounded-xl transition-all duration-300 ease-out
          ${isHovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`}
      />
      
      {/* Shimmer effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
          -skew-x-12 transition-all duration-700 ease-out
          ${isHovered ? 'translate-x-full' : '-translate-x-full'}`}
      />
      
      {/* Content */}
      <span className="relative z-10 transition-all duration-300 ease-out">
        {children}
      </span>
      
      {/* Border glow */}
      <div 
        className={`absolute inset-0 rounded-xl border-2 border-primary-400/30 
          transition-all duration-300 ease-out
          ${isHovered ? 'border-primary-300/60 scale-105' : 'scale-100'}`}
      />
    </div>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return content;
};

export default MagneticButton; 