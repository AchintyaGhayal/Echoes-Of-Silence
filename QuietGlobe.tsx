import { useEffect, useRef, useState } from 'react';
import { LayerType, WeightSettings, QuietScoreData } from '../types';

interface QuietGlobeProps {
  activeLayer: LayerType;
  weights: WeightSettings;
  onLocationClick?: (data: QuietScoreData) => void;
}

export default function QuietGlobe({ activeLayer, weights, onLocationClick }: QuietGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState(20);

  useEffect(() => {
    if (!isDragging) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 0.2) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isDragging]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 20;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(centerX, centerY);

    const gradient = ctx.createRadialGradient(0, 0, radius * 0.5, 0, 0, radius);

    if (activeLayer === 'radio') {
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
      gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.4)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.1)');
    } else if (activeLayer === 'human') {
      gradient.addColorStop(0, 'rgba(234, 179, 8, 0.8)');
      gradient.addColorStop(0.5, 'rgba(234, 179, 8, 0.4)');
      gradient.addColorStop(1, 'rgba(234, 179, 8, 0.1)');
    } else {
      gradient.addColorStop(0, 'rgba(168, 85, 247, 0.8)');
      gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.4)');
      gradient.addColorStop(1, 'rgba(168, 85, 247, 0.1)');
    }

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.strokeStyle = activeLayer === 'radio' ? '#3b82f6' :
                      activeLayer === 'human' ? '#eab308' : '#a855f7';
    ctx.lineWidth = 2;
    ctx.stroke();

    const latLines = 9;
    const lonLines = 12;

    ctx.strokeStyle = activeLayer === 'radio' ? 'rgba(59, 130, 246, 0.3)' :
                      activeLayer === 'human' ? 'rgba(234, 179, 8, 0.3)' : 'rgba(168, 85, 247, 0.3)';
    ctx.lineWidth = 1;

    for (let i = 0; i < latLines; i++) {
      const lat = (i / (latLines - 1)) * Math.PI - Math.PI / 2;
      const y = radius * Math.sin(lat);
      const r = radius * Math.cos(lat);

      ctx.beginPath();
      ctx.ellipse(0, y, r, r * 0.3, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    for (let i = 0; i < lonLines; i++) {
      const angle = (i / lonLines) * Math.PI * 2 + (rotation * Math.PI / 180);

      ctx.beginPath();
      for (let lat = -Math.PI / 2; lat <= Math.PI / 2; lat += 0.1) {
        const x = radius * Math.cos(lat) * Math.cos(angle);
        const z = radius * Math.cos(lat) * Math.sin(angle);
        const y = radius * Math.sin(lat);

        const perspective = 1 - (z / radius) * 0.3;
        const screenX = x * perspective;
        const screenY = y * perspective;

        if (lat === -Math.PI / 2) {
          ctx.moveTo(screenX, screenY);
        } else {
          ctx.lineTo(screenX, screenY);
        }
      }
      ctx.stroke();
    }

    const numPoints = 200;
    const pointColors = {
      radio: ['#3b82f6', '#60a5fa', '#93c5fd'],
      human: ['#eab308', '#facc15', '#fde047'],
      composite: ['#a855f7', '#c084fc', '#e9d5ff']
    };

    const colors = pointColors[activeLayer];

    for (let i = 0; i < numPoints; i++) {
      const lat = (Math.random() - 0.5) * Math.PI;
      const lon = Math.random() * Math.PI * 2 + (rotation * Math.PI / 180);

      const x = radius * Math.cos(lat) * Math.cos(lon);
      const z = radius * Math.cos(lat) * Math.sin(lon);
      const y = radius * Math.sin(lat);

      if (z > 0) {
        const perspective = 1 - (z / radius) * 0.3;
        const screenX = x * perspective;
        const screenY = y * perspective;

        const intensity = Math.random();
        const color = colors[Math.floor(intensity * colors.length)];

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(screenX, screenY, 2 * perspective, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.restore();
  }, [rotation, activeLayer, weights, tilt]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const dx = e.clientX - dragStart.x;
      setRotation((prev) => (prev + dx * 0.5) % 360);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
    const sampleData: QuietScoreData = {
      lat: Math.random() * 180 - 90,
      lng: Math.random() * 360 - 180,
      radioQuietScore: Math.random() * 100,
      humanQuietScore: Math.random() * 100,
      compositeQ: Math.random() * 100,
      rfiRate: Math.random() * 0.1,
      radiance: Math.random() * 50,
      context: 'Low radio noise and minimal lighting support wildlife communication and astronomical observation.'
    };
    onLocationClick?.(sampleData);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black/50 rounded-xl">
      <canvas
        ref={canvasRef}
        width={600}
        height={600}
        className="cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleClick}
      />
      <div className="absolute bottom-4 left-4 text-xs text-gray-400 bg-black/70 px-3 py-2 rounded">
        Click and drag to rotate • Click to sample location
      </div>
    </div>
  );
}
