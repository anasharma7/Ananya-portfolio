'use client';

import { useEffect, useRef } from 'react';

const STAR_COUNT = 120;
const SHOOTING_STAR_INTERVAL = 4000;

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shootingStarRef = useRef<HTMLDivElement>(null);

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

    // Generate stars
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.2,
      o: Math.random() * 0.5 + 0.5,
    }));

    function drawStars() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const star of stars) {
        ctx.globalAlpha = star.o;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function animate() {
      drawStars();
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

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

  // Shooting star effect
  useEffect(() => {
    const shootingStar = shootingStarRef.current;
    if (!shootingStar) return;
    let timeout: NodeJS.Timeout;
    function animateShootingStar() {
      if (!shootingStar) return;
      shootingStar.style.transition = 'none';
      shootingStar.style.opacity = '0';
      shootingStar.style.transform = 'translate(-50%, -50%) scaleX(1)';
      setTimeout(() => {
        if (!shootingStar) return;
        shootingStar.style.transition = 'all 1.2s cubic-bezier(0.4,0,0.2,1)';
        shootingStar.style.opacity = '1';
        shootingStar.style.transform = 'translate(-50%, -50%) scaleX(1.5) translate(400px, 120px)';
        setTimeout(() => {
          if (!shootingStar) return;
          shootingStar.style.opacity = '0';
        }, 1000);
      }, 100);
      timeout = setTimeout(animateShootingStar, SHOOTING_STAR_INTERVAL);
    }
    animateShootingStar();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Starfield Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ display: 'block' }} />
      {/* Shooting Star */}
      <div
        ref={shootingStarRef}
        className="absolute left-1/4 top-1/4 w-48 h-1 bg-gradient-to-r from-white via-pink-200 to-transparent rounded-full opacity-0 shadow-2xl"
        style={{ filter: 'blur(1px)' }}
      />
    </div>
  );
};

export default AnimatedBackground; 