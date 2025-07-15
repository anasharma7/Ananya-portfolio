'use client';

import { useEffect, useRef } from 'react';

const STAR_COUNT = 120;
const STAR_COLORS = ['#b3cfff', '#e0e7ff', '#a5b4fc', '#f0f9ff', '#fff', '#c7d2fe', '#818cf8']; // blue, indigo, white, soft

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

    // Generate stars with color, twinkle phase, and speed
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.4, // smaller stars
      color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
      twinkleSpeed: Math.random() * 0.3 + 0.07, // slower twinkle
      twinklePhase: Math.random() * Math.PI * 2,
    }));

    function drawStars(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        // Glow and fade: use a sine wave for opacity, clamp to [0,1]
        const twinkle = Math.max(0, Math.sin(time * 0.001 * star.twinkleSpeed + star.twinklePhase));
        const opacity = 0.08 + 0.45 * twinkle; // range from 0.08 to 0.53
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = star.color;
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 32 * opacity; // more glow
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
      {/* Light mode overlay for visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-indigo-100/30 to-white/0 dark:hidden" />
    </div>
  );
};

export default AnimatedBackground; 