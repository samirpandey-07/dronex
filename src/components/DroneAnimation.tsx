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

    const drones = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 8 + 6,
      speed: Math.random() * 0.8 + 0.3,
      opacity: Math.random() * 0.6 + 0.3,
      angle: Math.random() * Math.PI * 2,
      rotationSpeed: Math.random() * 0.02 + 0.01,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drones.forEach((drone) => {
        // Move
        drone.x += Math.cos(drone.angle) * drone.speed;
        drone.y += Math.sin(drone.angle) * drone.speed;
        drone.angle += drone.rotationSpeed;

        // Wrap
        if (drone.x > canvas.width) drone.x = 0;
        if (drone.x < 0) drone.x = canvas.width;
        if (drone.y > canvas.height) drone.y = 0;
        if (drone.y < 0) drone.y = canvas.height;

        // Draw
        ctx.save();
        ctx.translate(drone.x, drone.y);
        ctx.rotate(drone.angle);
        ctx.globalAlpha = drone.opacity;
        ctx.fillStyle = '#60A5FA'; // Tailwind blue-400
        ctx.shadowColor = '#93C5FD';
        ctx.shadowBlur = 10;

        // Drone body
        ctx.beginPath();
        ctx.arc(0, 0, drone.size / 2, 0, Math.PI * 2);
        ctx.fill();

        // Props
        for (let i = 0; i < 4; i++) {
          const propAngle = (Math.PI / 2) * i;
          const propX = Math.cos(propAngle) * drone.size;
          const propY = Math.sin(propAngle) * drone.size;

          ctx.beginPath();
          ctx.arc(propX, propY, drone.size / 4, 0, Math.PI * 2);
          ctx.fillStyle = '#3B82F6'; // Tailwind blue-500
          ctx.fill();
        }

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
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1] opacity-25"
    />
  );
};

export default DroneAnimation;
