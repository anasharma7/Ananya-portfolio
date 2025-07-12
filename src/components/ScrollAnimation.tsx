'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-up' | 'rotate-in' | 'slide-in-left' | 'slide-in-right' | 'bounce-in' | 'flip-in' | 'zoom-in';
  delay?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimation = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0, 
  threshold = 0.1,
  className = ''
}: ScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold, hasAnimated]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch (animation) {
      case 'fade-in-up':
        return 'animate-fade-in-up';
      case 'fade-in-down':
        return 'animate-fade-in-down';
      case 'fade-in-left':
        return 'animate-fade-in-left';
      case 'fade-in-right':
        return 'animate-fade-in-right';
      case 'scale-up':
        return 'animate-scale-up';
      case 'rotate-in':
        return 'animate-rotate-in';
      case 'slide-in-left':
        return 'animate-slide-in-left';
      case 'slide-in-right':
        return 'animate-slide-in-right';
      case 'bounce-in':
        return 'animate-bounce-in';
      case 'flip-in':
        return 'animate-flip-in';
      case 'zoom-in':
        return 'animate-zoom-in';
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation; 