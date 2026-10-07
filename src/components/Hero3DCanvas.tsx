import React, { useEffect, useRef } from 'react';

interface Pulse {
  edgeIndex: number;
  progress: number;
  speed: number;
  color: string;
}

export const Hero3DCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 320);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 280);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // 3D Vertices for Inner Icosahedron
    const phi = (1 + Math.sqrt(5)) / 2;
    const icosaNodes = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ];

    // Outer Cube Vertices for Mono 3D Mode
    const cubeScale = 1.35;
    const cubeNodes = [
      [-cubeScale, -cubeScale, -cubeScale], [cubeScale, -cubeScale, -cubeScale],
      [cubeScale, cubeScale, -cubeScale], [-cubeScale, cubeScale, -cubeScale],
      [-cubeScale, -cubeScale, cubeScale], [cubeScale, -cubeScale, cubeScale],
      [cubeScale, cubeScale, cubeScale], [-cubeScale, cubeScale, cubeScale],
    ];

    const icosaEdges: Array<[number, number]> = [
      [0, 1], [0, 5], [0, 7], [0, 10], [0, 11],
      [1, 5], [1, 7], [1, 8], [1, 9],
      [2, 3], [2, 4], [2, 6], [2, 10], [2, 11],
      [3, 4], [3, 6], [3, 8], [3, 9],
      [4, 5], [4, 9], [4, 11],
      [5, 9], [5, 11],
      [6, 7], [6, 8], [6, 10],
      [7, 8], [7, 10],
      [8, 9], [10, 11]
    ];

    const cubeEdges: Array<[number, number]> = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ];

    // Data-flow pulses along edges
    const pulseColors = ['#FFDE00', '#00D2FE', '#FF4D4D', '#10B981'];
    const pulses: Pulse[] = [
      { edgeIndex: 0, progress: 0.1, speed: 0.008, color: pulseColors[0] },
      { edgeIndex: 4, progress: 0.4, speed: 0.010, color: pulseColors[1] },
      { edgeIndex: 8, progress: 0.7, speed: 0.007, color: pulseColors[2] },
      { edgeIndex: 12, progress: 0.2, speed: 0.009, color: pulseColors[3] },
      { edgeIndex: 16, progress: 0.8, speed: 0.011, color: pulseColors[0] },
      { edgeIndex: 20, progress: 0.5, speed: 0.008, color: pulseColors[1] },
    ];

    let rotX = 0;
    let rotY = 0;
    let rotCubeX = 0;
    let rotCubeY = 0;
    let radarRadius = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = (e.clientX - rect.left - width / 2) * 0.00014;
      targetMouseY = (e.clientY - rect.top - height / 2) * 0.00014;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        targetMouseX = (e.touches[0].clientX - rect.left - width / 2) * 0.0002;
        targetMouseY = (e.touches[0].clientY - rect.top - height / 2) * 0.0002;
      }
    };

    const handleReset = () => {
      targetMouseX = 0;
      targetMouseY = 0;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleReset);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleReset);

    // Project 3D nodes helper
    const project = (nodes: number[][], rX: number, rY: number, scale: number, cx: number, cy: number) => {
      return nodes.map(([x, y, z]) => {
        let x1 = x * Math.cos(rY) + z * Math.sin(rY);
        let z1 = -x * Math.sin(rY) + z * Math.cos(rY);

        let y2 = y * Math.cos(rX) - z1 * Math.sin(rX);
        let z2 = y * Math.sin(rX) + z1 * Math.cos(rX);

        const distance = 4;
        const fov = distance / (distance + z2);

        return {
          x: cx + x1 * scale * fov,
          y: cy + y2 * scale * fov,
          z: z2,
          fov
        };
      });
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const root = document.documentElement;
      const isHyper = root.classList.contains('theme-hyper');
      const isMono = root.classList.contains('theme-mono');
      const isCyber = root.classList.contains('theme-cyber');

      // Smooth inertia Damping
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Ambient orbital rotation
      rotX += (isMono ? 0.0025 : 0.0014) + currentMouseY;
      rotY += (isMono ? 0.0035 : 0.0020) + currentMouseX;
      rotCubeX -= 0.0018;
      rotCubeY += 0.0022;

      radarRadius = (radarRadius + 1.2) % (Math.min(width, height) * 0.45);

      const scale = Math.min(width, height) * 0.24;
      const cx = width / 2;
      const cy = height / 2;

      // In Mono mode, draw expanding radar waves and crosshair grid
      if (isMono) {
        ctx.save();
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);

        // Expanding radar circle
        ctx.beginPath();
        ctx.arc(cx, cy, radarRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Outer stationary ring
        ctx.beginPath();
        ctx.arc(cx, cy, scale * 1.6, 0, Math.PI * 2);
        ctx.stroke();

        // 3D Axis crosshairs
        ctx.beginPath();
        ctx.moveTo(cx - scale * 1.7, cy);
        ctx.lineTo(cx + scale * 1.7, cy);
        ctx.moveTo(cx, cy - scale * 1.7);
        ctx.lineTo(cx, cy + scale * 1.7);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }

      // Outer Orbiting Rings (Solar, Cyber, Hyper)
      if (!isMono) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rotY * 0.6);
        ctx.strokeStyle = isHyper ? '#FF007F' : '#FF4D4D';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 0, scale * 1.35, scale * 0.45, Math.PI / 4, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = isHyper ? '#00F5FF' : isCyber ? '#00D2FE' : '#2563EB';
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.ellipse(0, 0, scale * 1.55, scale * 0.55, -Math.PI / 3, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // In Mono mode: Draw Outer Counter-Rotating Wireframe Cube
      if (isMono) {
        const projectedCube = project(cubeNodes, rotCubeX, rotCubeY, scale, cx, cy);
        ctx.save();
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1.8;
        ctx.setLineDash([6, 3]);
        cubeEdges.forEach(([i, j]) => {
          const p1 = projectedCube[i];
          const p2 = projectedCube[j];
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        });
        ctx.setLineDash([]);

        // Cube vertices
        projectedCube.forEach((p) => {
          ctx.fillStyle = '#000000';
          ctx.fillRect(p.x - 3, p.y - 3, 6, 6);
        });
        ctx.restore();
      }

      // Draw Inner Icosahedron
      const projectedNodes = project(icosaNodes, rotX, rotY, scale, cx, cy);
      const edgeColor = isHyper ? '#8B5CF6' : isMono ? '#000000' : isCyber ? '#00FF66' : '#121212';
      const nodeFill = isHyper ? '#FF007F' : isMono ? '#FFFFFF' : '#FFDE00';
      const nodeOutline = isMono ? '#000000' : '#121212';

      // Draw Wireframe Edges
      icosaEdges.forEach(([i, j]) => {
        const p1 = projectedNodes[i];
        const p2 = projectedNodes[j];

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = edgeColor;
        ctx.lineWidth = isMono ? 2.4 : 2;
        ctx.stroke();
      });

      // Draw Data Pulses
      pulses.forEach((pulse) => {
        pulse.progress += pulse.speed * (isMono ? 1.6 : 1);
        if (pulse.progress > 1) {
          pulse.progress = 0;
          pulse.edgeIndex = Math.floor(Math.random() * icosaEdges.length);
        }

        const [i, j] = icosaEdges[pulse.edgeIndex];
        const p1 = projectedNodes[i];
        const p2 = projectedNodes[j];

        const px = p1.x + (p2.x - p1.x) * pulse.progress;
        const py = p1.y + (p2.y - p1.y) * pulse.progress;
        const pfov = (p1.fov + p2.fov) / 2;

        ctx.beginPath();
        ctx.arc(px, py, 4.5 * pfov, 0, Math.PI * 2);
        ctx.fillStyle = isMono ? '#000000' : nodeOutline;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 3 * pfov, 0, Math.PI * 2);
        ctx.fillStyle = isHyper
          ? ['#FF007F', '#39FF14', '#00F5FF', '#FFE600'][pulse.edgeIndex % 4]
          : isMono
          ? '#FFFFFF'
          : pulse.color;
        ctx.fill();
      });

      // Draw Vertex Nodes
      projectedNodes.forEach((p) => {
        const nodeSize = 5.2 * p.fov;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, nodeSize + 2, 0, Math.PI * 2);
        ctx.fillStyle = nodeOutline;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, nodeSize, 0, Math.PI * 2);
        ctx.fillStyle = nodeFill;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleReset);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleReset);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[250px] sm:min-h-[380px] lg:min-h-[480px] flex items-center justify-center bg-[#FAF7F2] dark:bg-[#0E0E14] overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-2 sm:inset-4 border-2 sm:border-3 border-[#121212] dark:border-[#383848] bg-[#FFDE00]/10 pointer-events-none" />
      
      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 neo-badge bg-neo-yellow text-[9px] sm:text-xs z-10 shadow-brutal-sm text-[#121212]">
        ★ 3D NEURAL ENGINE
      </div>

      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 font-mono text-[8px] sm:text-[10px] bg-white dark:bg-[#161622] text-[#121212] dark:text-white border border-black sm:border-2 sm:border-[#121212] dark:border-[#444] px-1.5 py-0.5 sm:px-2 sm:py-0.5 shadow-brutal-sm font-bold flex items-center gap-1">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-neo-green animate-pulse" />
        <span>STREAMING 60FPS</span>
      </div>

      <canvas ref={canvasRef} className="w-full h-full z-0 cursor-grab active:cursor-grabbing" />
    </div>
  );
};
