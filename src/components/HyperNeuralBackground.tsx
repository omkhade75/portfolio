import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Node3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  radius: number;
  color: string;
  pulsePhase: number;
  isCore?: boolean;
}

interface Edge3D {
  from: number;
  to: number;
  activePulse: number;
  pulseSpeed: number;
  color: string;
}

interface CyberParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

export const HyperNeuralBackground: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (theme !== 'hyper') return;

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

    // Mouse tracking with smooth damping
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Ultra-Vivid Neon Colors for Hyper Mode
    const neonColors = ['#00F5FF', '#FF0055', '#FFE600', '#B026FF', '#39FF14'];

    const isMobile = width < 768;
    const nodeCount = isMobile ? 30 : 60;
    const nodes: Node3D[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = Math.random() * (isMobile ? 260 : 450) + 50;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      nodes.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        radius: Math.random() * 3.5 + 2,
        color: neonColors[i % neonColors.length],
        pulsePhase: Math.random() * Math.PI * 2,
        isCore: i < 8,
      });
    }

    // Build connections (k-nearest neighbors)
    const edges: Edge3D[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const distances: Array<{ index: number; dist: number }> = [];
      for (let j = 0; j < nodes.length; j++) {
        if (i !== j) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          distances.push({ index: j, dist: Math.sqrt(dx * dx + dy * dy + dz * dz) });
        }
      }
      distances.sort((a, b) => a.dist - b.dist);
      for (let k = 0; k < Math.min(3, distances.length); k++) {
        const target = distances[k].index;
        if (!edges.some((e) => (e.from === i && e.to === target) || (e.from === target && e.to === i))) {
          edges.push({
            from: i,
            to: target,
            activePulse: Math.random(),
            pulseSpeed: Math.random() * 0.008 + 0.004,
            color: neonColors[(i + target) % neonColors.length],
          });
        }
      }
    }

    // Ambient floating Cyber Particles
    const particleCount = isMobile ? 25 : 50;
    const particles: CyberParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5 - 0.2,
        size: Math.random() * 2.5 + 1,
        color: neonColors[Math.floor(Math.random() * neonColors.length)],
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    let angleX = 0;
    let angleY = 0;
    const fov = 480;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const mouseRotY = ((mouseX - width / 2) / width) * 0.6;
      const mouseRotX = ((mouseY - height / 2) / height) * 0.6;

      angleY += 0.003;
      angleX = Math.sin(angleY * 0.6) * 0.15;

      const totalRotX = angleX + mouseRotX;
      const totalRotY = angleY + mouseRotY;

      const cosY = Math.cos(totalRotY);
      const sinY = Math.sin(totalRotY);
      const cosX = Math.cos(totalRotX);
      const sinX = Math.sin(totalRotX);

      // Draw Floating Cyber Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;

      // Project 3D nodes to 2D
      const projected = nodes.map((n) => {
        n.pulsePhase += 0.035;
        const currentX = n.baseX + Math.sin(n.pulsePhase) * 8;
        const currentY = n.baseY + Math.cos(n.pulsePhase * 0.8) * 8;
        const currentZ = n.baseZ + Math.sin(n.pulsePhase * 1.2) * 8;

        const x1 = currentX * cosY + currentZ * sinY;
        const z1 = -currentX * sinY + currentZ * cosY;

        const y2 = currentY * cosX - z1 * sinX;
        const z2 = currentY * sinX + z1 * cosX + 650;

        const scale = fov / Math.max(z2, 100);
        const px = x1 * scale + width / 2;
        const py = y2 * scale + height / 2;

        return { px, py, scale, z: z2, color: n.color, radius: n.radius, isCore: n.isCore };
      });

      // 1. Draw Glowing Laser Edges
      edges.forEach((edge) => {
        const p1 = projected[edge.from];
        const p2 = projected[edge.to];

        if (p1.z > 0 && p2.z > 0) {
          const dx = p2.px - p1.px;
          const dy = p2.py - p1.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 320) {
            const alpha = Math.max(0, (1 - dist / 320) * 0.45);
            ctx.strokeStyle = edge.color;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();

            // Glowing Data Packet Pulse
            edge.activePulse = (edge.activePulse + edge.pulseSpeed) % 1;
            const pulseX = p1.px + dx * edge.activePulse;
            const pulseY = p1.py + dy * edge.activePulse;

            ctx.globalAlpha = 0.9;
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 2.5 * p1.scale, 0, Math.PI * 2);
            ctx.fill();

            // Packet Neon Glow Aura
            ctx.fillStyle = edge.color;
            ctx.globalAlpha = 0.5;
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 5 * p1.scale, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });
      ctx.globalAlpha = 1.0;

      // 2. Draw Glowing Core Nodes
      projected.forEach((p) => {
        if (p.z > 0) {
          const r = p.radius * p.scale;

          // Outer Glow
          ctx.fillStyle = p.color;
          ctx.globalAlpha = 0.25;
          ctx.beginPath();
          ctx.arc(p.px, p.py, r * 2.8, 0, Math.PI * 2);
          ctx.fill();

          // Node Solid Core
          ctx.globalAlpha = 1.0;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.px, p.py, Math.max(r, 2), 0, Math.PI * 2);
          ctx.fill();

          // White center point for hyper luminescence
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(p.px, p.py, Math.max(r * 0.4, 1), 0, Math.PI * 2);
          ctx.fill();
        }
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

  if (theme !== 'hyper') return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
