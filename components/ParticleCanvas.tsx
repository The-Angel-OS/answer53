'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * Starfield + Nebula + LCARS Scan Grid
 * A deep-space visualization with:
 *   - Multi-layer parallax starfield (3 depths)
 *   - Drifting nebula clouds (soft radial gradients)
 *   - LCARS-style horizontal scan line
 *   - Constellation connection lines between close stars
 *   - Subtle 53-degree grid overlay
 */
export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;

    c.width = window.innerWidth;
    c.height = window.innerHeight;

    const W = c.width;
    const H = c.height;

    // --- Star layers (back, mid, front) ---
    interface Star {
      x: number; y: number; z: number; r: number;
      vx: number; vy: number;
      color: string; baseAlpha: number; twinkleSpeed: number; twinklePhase: number;
    }

    const LCARS_COLORS = [
      '#C4956A', '#9B8EC4', '#7AB5B0', '#7A9EC4', '#C48A7A', '#A8879E',
      '#E8D5B7', '#C9BDE8', '#B8DDD8', '#FFFFFF',
    ];

    const stars: Star[] = [];
    const STAR_COUNT = Math.min(350, Math.floor((W * H) / 5000));

    for (let i = 0; i < STAR_COUNT; i++) {
      const z = Math.random(); // 0=far, 1=near
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        z,
        r: 0.3 + z * 1.8,
        vx: (Math.random() - 0.5) * 0.15 * (1 + z),
        vy: (Math.random() - 0.5) * 0.1 * (1 + z),
        color: LCARS_COLORS[Math.floor(Math.random() * LCARS_COLORS.length)],
        baseAlpha: 0.2 + z * 0.6,
        twinkleSpeed: 0.5 + Math.random() * 2,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    // --- Nebula clouds ---
    interface Nebula {
      x: number; y: number; rx: number; ry: number;
      color: string; alpha: number; drift: number; phase: number;
    }

    const nebulae: Nebula[] = [];
    const NEBULA_COLORS = [
      'rgba(196, 149, 106, ALPHA)', // amber
      'rgba(155, 142, 196, ALPHA)', // lavender
      'rgba(122, 181, 176, ALPHA)', // teal
      'rgba(122, 158, 196, ALPHA)', // blue
      'rgba(168, 135, 158, ALPHA)', // mauve
    ];

    for (let i = 0; i < 6; i++) {
      nebulae.push({
        x: Math.random() * W,
        y: Math.random() * H,
        rx: 150 + Math.random() * 300,
        ry: 100 + Math.random() * 200,
        color: NEBULA_COLORS[Math.floor(Math.random() * NEBULA_COLORS.length)],
        alpha: 0.015 + Math.random() * 0.025,
        drift: 0.05 + Math.random() * 0.1,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // --- Scan line ---
    let scanY = 0;
    const SCAN_SPEED = 0.4;

    // --- Animation loop ---
    let frame = 0;
    let animId: number;

    const animate = () => {
      frame++;
      ctx.fillStyle = '#0A0810';
      ctx.fillRect(0, 0, W, H);

      // Nebula clouds (drawn first, behind everything)
      for (const n of nebulae) {
        const breathe = Math.sin(frame * 0.005 + n.phase) * 0.3 + 0.7;
        const nx = n.x + Math.sin(frame * 0.002 * n.drift + n.phase) * 40;
        const ny = n.y + Math.cos(frame * 0.0015 * n.drift + n.phase) * 30;

        const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, n.rx * breathe);
        const col = n.color.replace('ALPHA', String(n.alpha * breathe));
        const colOuter = n.color.replace('ALPHA', '0');
        grad.addColorStop(0, col);
        grad.addColorStop(0.6, col.replace(String(n.alpha * breathe), String(n.alpha * breathe * 0.3)));
        grad.addColorStop(1, colOuter);

        ctx.save();
        ctx.scale(1, n.ry / n.rx);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(nx, ny * (n.rx / n.ry), n.rx * breathe, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 53-degree grid overlay (very subtle)
      if (frame % 2 === 0) {
        ctx.save();
        ctx.strokeStyle = 'rgba(196, 149, 106, 0.012)';
        ctx.lineWidth = 0.5;
        const angleRad = (53 * Math.PI) / 180;
        const spacing = 120;
        for (let offset = -W; offset < W + H; offset += spacing) {
          ctx.beginPath();
          ctx.moveTo(offset, 0);
          ctx.lineTo(offset + H / Math.tan(angleRad), H);
          ctx.stroke();
        }
        ctx.restore();
      }

      // Stars
      for (const s of stars) {
        s.x += s.vx;
        s.y += s.vy;
        if (s.x < -5) s.x = W + 5;
        if (s.x > W + 5) s.x = -5;
        if (s.y < -5) s.y = H + 5;
        if (s.y > H + 5) s.y = -5;

        const twinkle = Math.sin(frame * 0.03 * s.twinkleSpeed + s.twinklePhase);
        const alpha = s.baseAlpha * (0.6 + twinkle * 0.4);

        // Glow halo for brighter stars
        if (s.z > 0.6) {
          ctx.save();
          ctx.globalAlpha = alpha * 0.15;
          ctx.fillStyle = s.color;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // Star core
        ctx.globalAlpha = alpha;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        // Cross-spike for brightest stars
        if (s.z > 0.85 && s.r > 1.5) {
          ctx.strokeStyle = s.color;
          ctx.lineWidth = 0.3;
          ctx.globalAlpha = alpha * 0.4;
          const spike = s.r * 6;
          ctx.beginPath();
          ctx.moveTo(s.x - spike, s.y);
          ctx.lineTo(s.x + spike, s.y);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(s.x, s.y - spike);
          ctx.lineTo(s.x, s.y + spike);
          ctx.stroke();
        }

        ctx.globalAlpha = 1;
      }

      // Constellation lines (only between nearby front-layer stars)
      ctx.strokeStyle = 'rgba(196, 149, 106, 0.04)';
      ctx.lineWidth = 0.5;
      const frontStars = stars.filter(s => s.z > 0.5);
      for (let i = 0; i < frontStars.length; i++) {
        for (let j = i + 1; j < frontStars.length; j++) {
          const dx = frontStars[i].x - frontStars[j].x;
          const dy = frontStars[i].y - frontStars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const lineAlpha = 0.04 * (1 - dist / 120);
            ctx.strokeStyle = `rgba(196, 149, 106, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(frontStars[i].x, frontStars[i].y);
            ctx.lineTo(frontStars[j].x, frontStars[j].y);
            ctx.stroke();
          }
        }
      }

      // LCARS scan line
      scanY += SCAN_SPEED;
      if (scanY > H) scanY = 0;

      const scanGrad = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 60);
      scanGrad.addColorStop(0, 'rgba(196, 149, 106, 0)');
      scanGrad.addColorStop(0.4, 'rgba(196, 149, 106, 0.03)');
      scanGrad.addColorStop(0.5, 'rgba(196, 149, 106, 0.06)');
      scanGrad.addColorStop(0.6, 'rgba(196, 149, 106, 0.03)');
      scanGrad.addColorStop(1, 'rgba(196, 149, 106, 0)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, scanY - 60, W, 120);

      // Subtle vignette
      const vigGrad = ctx.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.9);
      vigGrad.addColorStop(0, 'rgba(10, 8, 16, 0)');
      vigGrad.addColorStop(1, 'rgba(10, 8, 16, 0.4)');
      ctx.fillStyle = vigGrad;
      ctx.fillRect(0, 0, W, H);

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

  useEffect(() => {
    const cleanup = draw();
    return cleanup;
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10"
      style={{ opacity: 0.75 }}
    />
  );
}
