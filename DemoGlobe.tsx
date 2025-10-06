import { useEffect, useRef } from 'react';

interface DemoGlobeProps {
  phase: 'intro' | 'radio' | 'human' | 'composite' | 'dsn' | 'outro';
  onPhaseComplete?: () => void;
}

export default function DemoGlobe({ phase, onPhaseComplete }: DemoGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rotation = 0;
    startTimeRef.current = Date.now();

    const animate = () => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) - 40;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(centerX, centerY);

      const baseGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
      if (phase === 'intro') {
        baseGradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
        baseGradient.addColorStop(1, 'rgba(59, 130, 246, 0.05)');
      } else if (phase === 'radio') {
        baseGradient.addColorStop(0, 'rgba(59, 130, 246, 0.6)');
        baseGradient.addColorStop(1, 'rgba(59, 130, 246, 0.1)');
      } else if (phase === 'human') {
        baseGradient.addColorStop(0, 'rgba(234, 179, 8, 0.6)');
        baseGradient.addColorStop(1, 'rgba(234, 179, 8, 0.1)');
      } else if (phase === 'composite') {
        baseGradient.addColorStop(0, 'rgba(168, 85, 247, 0.6)');
        baseGradient.addColorStop(1, 'rgba(168, 85, 247, 0.1)');
      } else {
        baseGradient.addColorStop(0, 'rgba(147, 197, 253, 0.4)');
        baseGradient.addColorStop(1, 'rgba(147, 197, 253, 0.1)');
      }

      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.fillStyle = baseGradient;
      ctx.fill();

      const strokeColor =
        phase === 'radio' ? '#3b82f6' :
        phase === 'human' ? '#eab308' :
        phase === 'composite' ? '#a855f7' : '#60a5fa';

      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.strokeStyle = phase === 'radio' ? 'rgba(59, 130, 246, 0.2)' :
                        phase === 'human' ? 'rgba(234, 179, 8, 0.2)' :
                        phase === 'composite' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(96, 165, 250, 0.2)';
      ctx.lineWidth = 1;

      for (let i = 0; i < 9; i++) {
        const lat = (i / 8) * Math.PI - Math.PI / 2;
        const y = radius * Math.sin(lat);
        const r = radius * Math.cos(lat);
        ctx.beginPath();
        ctx.ellipse(0, y, r, r * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + (rotation * Math.PI / 180);
        ctx.beginPath();
        for (let lat = -Math.PI / 2; lat <= Math.PI / 2; lat += 0.1) {
          const x = radius * Math.cos(lat) * Math.cos(angle);
          const z = radius * Math.cos(lat) * Math.sin(angle);
          const y = radius * Math.sin(lat);
          const perspective = 1 - (z / radius) * 0.3;
          const screenX = x * perspective;
          const screenY = y * perspective;
          if (lat === -Math.PI / 2) ctx.moveTo(screenX, screenY);
          else ctx.lineTo(screenX, screenY);
        }
        ctx.stroke();
      }

      if (phase === 'radio' || phase === 'human' || phase === 'composite') {
        const numSpikes = 40;
        const spikeColor =
          phase === 'radio' ? '#3b82f6' :
          phase === 'human' ? '#eab308' : '#a855f7';

        const pulseProgress = (elapsed % 2) / 2;
        const pulseScale = 0.7 + Math.sin(pulseProgress * Math.PI) * 0.3;

        for (let i = 0; i < numSpikes; i++) {
          const lat = (Math.random() - 0.5) * Math.PI;
          const lon = Math.random() * Math.PI * 2 + (rotation * Math.PI / 180);

          const x = Math.cos(lat) * Math.cos(lon);
          const z = Math.cos(lat) * Math.sin(lon);
          const y = Math.sin(lat);

          if (z > -0.3) {
            const perspective = 1 - (z / 1) * 0.3;
            const baseX = radius * x * perspective;
            const baseY = radius * y * perspective;

            const spikeLength = radius * 0.4 * pulseScale * perspective;
            const tipX = (radius + spikeLength) * x * perspective;
            const tipY = (radius + spikeLength) * y * perspective;

            const gradient = ctx.createLinearGradient(baseX, baseY, tipX, tipY);
            gradient.addColorStop(0, spikeColor + '00');
            gradient.addColorStop(0.3, spikeColor);
            gradient.addColorStop(1, spikeColor + '40');

            ctx.beginPath();
            ctx.moveTo(baseX, baseY);
            ctx.lineTo(tipX, tipY);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2 * perspective;
            ctx.stroke();
          }
        }
      }

      if (phase === 'dsn') {
        const numWaves = 3;
        const waveProgress = (elapsed % 3) / 3;

        for (let w = 0; w < numWaves; w++) {
          const waveOffset = w / numWaves;
          const waveRadius = radius * (1 + (waveProgress + waveOffset) % 1);
          const waveAlpha = 1 - ((waveProgress + waveOffset) % 1);

          ctx.beginPath();
          ctx.arc(0, 0, waveRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(96, 165, 250, ${waveAlpha * 0.5})`;
          ctx.lineWidth = 3;
          ctx.stroke();
        }
      }

      if (phase === 'outro') {
        const haloSize = radius * (1 + Math.sin(elapsed * 2) * 0.05);
        const haloGradient = ctx.createRadialGradient(0, 0, radius * 0.8, 0, 0, haloSize);
        haloGradient.addColorStop(0, 'rgba(168, 85, 247, 0)');
        haloGradient.addColorStop(0.7, 'rgba(168, 85, 247, 0.1)');
        haloGradient.addColorStop(1, 'rgba(59, 130, 246, 0.3)');

        ctx.beginPath();
        ctx.arc(0, 0, haloSize, 0, Math.PI * 2);
        ctx.fillStyle = haloGradient;
        ctx.fill();
      }

      ctx.restore();

      rotation += 0.3;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [phase]);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black rounded-xl">
      <canvas
        ref={canvasRef}
        width={700}
        height={700}
        className="max-w-full max-h-full"
      />
    </div>
  );
}

