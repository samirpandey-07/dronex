import React, { useEffect, useRef } from 'react';

const DroneAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drones: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      angle: number;
    }> = [];

    // Initialize drones
    for (let i = 0; i < 15; i++) {
      drones.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 2,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.5 + 0.1,
        angle: Math.random() * Math.PI * 2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drones.forEach((drone) => {
        // Update position
        drone.x += Math.cos(drone.angle) * drone.speed;
        drone.y += Math.sin(drone.angle) * drone.speed;

        // Wrap around edges
        if (drone.x > canvas.width) drone.x = 0;
        if (drone.x < 0) drone.x = canvas.width;
        if (drone.y > canvas.height) drone.y = 0;
        if (drone.y < 0) drone.y = canvas.height;

        // Draw drone
        ctx.save();
        ctx.globalAlpha = drone.opacity;
        ctx.fillStyle = '#3B82F6';
        ctx.translate(drone.x, drone.y);
        ctx.rotate(drone.angle);

        // Simple drone shape
        ctx.fillRect(-drone.size, -drone.size / 2, drone.size * 2, drone.size);
        ctx.fillRect(-drone.size / 2, -drone.size, drone.size, drone.size * 2);

        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
    />
  );
};

export default DroneAnimation;