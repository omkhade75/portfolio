import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Shape3D {
  x: number;
  y: number;
  z: number;
  size: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  speedX: number;
  speedY: number;
  speedRotX: number;
  speedRotY: number;
  type: 'cube' | 'pyramid' | 'cross' | 'plus';
}

export const MonoKineticBackground: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (theme !== 'mono') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate floating 3D kinetic wireframe objects for Mono mode
    const numShapes = Math.min(Math.floor(window.innerWidth / 100), 16);
    const shapes: Shape3D[] = [];

    for (let i = 0; i < numShapes; i++) {
      shapes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 200 + 50,
        size: Math.random() * 22 + 14,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.3,
        speedRotX: (Math.random() - 0.5) * 0.015,
        speedRotY: (Math.random() - 0.5) * 0.015,
        type: ['cube', 'pyramid', 'cross', 'plus'][Math.floor(Math.random() * 4)] as any,
      });
    }

    // Interactive mouse tracking
    let mouseX = width / 2;
    let mouseY = height / 2;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      shapes.forEach((s) => {
        // Update positions
        s.x += s.speedX;
        s.y += s.speedY;
        s.rotX += s.speedRotX;
        s.rotY += s.speedRotY;

        // Subtle interactive mouse deflection
        const dx = mouseX - s.x;
        const dy = mouseY - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          s.x -= (dx / dist) * 0.5;
          s.y -= (dy / dist) * 0.5;
        }

        // Screen wrap
        if (s.x < -50) s.x = width + 50;
        if (s.x > width + 50) s.x = -50;
        if (s.y < -50) s.y = height + 50;
        if (s.y > height + 50) s.y = -50;

        ctx.save();
        ctx.translate(s.x, s.y);

        // Draw 3D wireframe cube
        if (s.type === 'cube') {
          const sz = s.size;
          const verts = [
            [-sz, -sz, -sz], [sz, -sz, -sz], [sz, sz, -sz], [-sz, sz, -sz],
            [-sz, -sz, sz], [sz, -sz, sz], [sz, sz, sz], [-sz, sz, sz],
          ];

          // Rotate
          const projected = verts.map(([x, y, z]) => {
            let x1 = x * Math.cos(s.rotY) + z * Math.sin(s.rotY);
            let z1 = -x * Math.sin(s.rotY) + z * Math.cos(s.rotY);
            let y2 = y * Math.cos(s.rotX) - z1 * Math.sin(s.rotX);
            return [x1, y2];
          });

          const edges = [
            [0, 1], [1, 2], [2, 3], [3, 0],
            [4, 5], [5, 6], [6, 7], [7, 4],
            [0, 4], [1, 5], [2, 6], [3, 7],
          ];

          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          edges.forEach(([i, j]) => {
            ctx.moveTo(projected[i][0], projected[i][1]);
            ctx.lineTo(projected[j][0], projected[j][1]);
          });
          ctx.stroke();
        } else if (s.type === 'pyramid') {
          const sz = s.size * 1.1;
          const verts = [
            [0, -sz, 0],
            [-sz, sz, -sz], [sz, sz, -sz], [sz, sz, sz], [-sz, sz, sz],
          ];

          const projected = verts.map(([x, y, z]) => {
            let x1 = x * Math.cos(s.rotY) + z * Math.sin(s.rotY);
            let z1 = -x * Math.sin(s.rotY) + z * Math.cos(s.rotY);
            let y2 = y * Math.cos(s.rotX) - z1 * Math.sin(s.rotX);
            return [x1, y2];
          });

          const edges = [
            [0, 1], [0, 2], [0, 3], [0, 4],
            [1, 2], [2, 3], [3, 4], [4, 1],
          ];

          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 1.4;
          ctx.beginPath();
          edges.forEach(([i, j]) => {
            ctx.moveTo(projected[i][0], projected[i][1]);
            ctx.lineTo(projected[j][0], projected[j][1]);
          });
          ctx.stroke();
        } else {
          // Plus / Crosshair
          const sz = s.size * 0.8;
          ctx.rotate(s.rotZ);
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(-sz, 0);
          ctx.lineTo(sz, 0);
          ctx.moveTo(0, -sz);
          ctx.lineTo(0, sz);
          ctx.stroke();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  if (theme !== 'mono') return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-25"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};
