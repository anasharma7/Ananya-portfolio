'use client';

import { useEffect, useState, ReactNode } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  speed?: number;
  revealType?: 'character' | 'word' | 'line';
}

const TextReveal = ({ 
  children, 
  className = '', 
  delay = 0, 
  speed = 50,
  revealType = 'character'
}: TextRevealProps) => {
  const [revealedText, setRevealedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0;
      const text = children;
      
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setRevealedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [children, delay, speed]);

  const renderText = () => {
    if (revealType === 'character') {
      return (
        <span className={className}>
          {revealedText}
          {!isComplete && <span className="animate-blink">|</span>}
        </span>
      );
    } else if (revealType === 'word') {
      const words = children.split(' ');
      const revealedWords = revealedText.split(' ');
      
      return (
        <span className={className}>
          {words.map((word, index) => (
            <span
              key={index}
              className={`transition-all duration-300 ${
                index < revealedWords.length ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {word}
              {index < words.length - 1 && ' '}
            </span>
          ))}
        </span>
      );
    }
    
    return (
      <span className={className}>
        {revealedText}
        {!isComplete && <span className="animate-blink">|</span>}
      </span>
    );
  };

  return renderText();
};

export default TextReveal; 