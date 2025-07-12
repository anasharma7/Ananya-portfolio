'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  background?: boolean;
}

const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = '',
  background = false 
}: ParallaxSectionProps) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div
        className={`${background ? 'absolute inset-0' : 'relative'}`}
        style={{
          transform: `translateY(${offset}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection; 