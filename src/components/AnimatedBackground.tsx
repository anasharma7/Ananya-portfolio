'use client';

import { useEffect, useRef } from 'react';

const STAR_COUNT = 120;

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Generate stars with twinkle phase
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.2,
      baseOpacity: Math.random() * 0.5 + 0.5,
      twinkleSpeed: Math.random() * 0.8 + 0.2,
      twinklePhase: Math.random() * Math.PI * 2,
    }));

    function drawStars(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        // Twinkle by animating opacity with a sine wave
        const twinkle = Math.sin(time * 0.001 * star.twinkleSpeed + star.twinklePhase) * 0.3 + star.baseOpacity;
        ctx.globalAlpha = Math.max(0, Math.min(1, twinkle));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function animate(time: number) {
      drawStars(time);
      animationFrameId = requestAnimationFrame(animate);
    }
    animate(0);

    function handleResize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ display: 'block' }} />
    </div>
  );
};

export default AnimatedBackground; 