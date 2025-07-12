'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  className?: string;
}

const TypewriterText = ({ texts, speed = 100, className = '' }: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
      
      const timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1));
      }, speed / 2);
      
      return () => clearTimeout(timeout);
    } else {
      if (currentText === currentFullText) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        
        return () => clearTimeout(timeout);
      }
      
      const timeout = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentTextIndex, isDeleting, texts, speed]);

  return (
    <span className={`inline-block animate-fade-in ${className}`}>
      {currentText}
      <span className="inline-block w-0.5 h-6 bg-purple-500 ml-1 animate-blink" />
    </span>
  );
};

export default TypewriterText; 