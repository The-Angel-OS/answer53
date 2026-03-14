'use client';

import { useEffect, useRef } from 'react';

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const context = c.getContext('2d');
    if (!context) return;

    c.width = window.innerWidth;
    c.height = window.innerHeight;

    interface P { x: number; y: number; vx: number; vy: number; r: number; o: number; col: string; }
    const colors = ['#C4956A', '#9B8EC4', '#7AB5B0', '#7A9EC4'];
    const particles: P[] = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.5,
        o: Math.random() * 0.5 + 0.2,
        col: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;

    const animate = () => {
      context.fillStyle = '#0A0810';
      context.fillRect(0, 0, c.width, c.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = c.width;
        if (p.x > c.width) p.x = 0;
        if (p.y < 0) p.y = c.height;
        if (p.y > c.height) p.y = 0;

        context.fillStyle = p.col;
        context.globalAlpha = p.o;
        context.beginPath();
        context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        context.fill();
        context.globalAlpha = 1;
      }

      context.strokeStyle = 'rgba(196, 149, 106, 0.1)';
      context.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 bg-lcars-bg"
      style={{ opacity: 0.6 }}
    />
  );
}
