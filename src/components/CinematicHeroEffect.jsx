import { useState, useEffect, useRef } from 'react';

function CinematicHeroEffect({ imageSrc = '/hero_portrait_suit.jpg', className = '' }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Mouse interaction handler
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({ x, y });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      setMousePos({ x: 0, y: 0 });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Animated Background Smoke & Ember Canvas Physics Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || 800);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate smoke cloud particles
    const smokeCount = 32;
    const smokeParticles = Array.from({ length: smokeCount }, (_, i) => {
      const isAmberZone = i % 2 === 0; // Alternate amber smoke on right and cool charcoal mist
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 180 + 120, // Volumetric soft puffs
        vx: (Math.random() - 0.5) * 0.35,
        vy: -(Math.random() * 0.4 + 0.15), // Slow upward drift
        rotation: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.002,
        alpha: Math.random() * 0.25 + 0.1,
        maxAlpha: Math.random() * 0.35 + 0.15,
        fadeSpeed: Math.random() * 0.002 + 0.001,
        fadeDirection: Math.random() > 0.5 ? 1 : -1,
        isAmber: isAmberZone,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.01 + 0.005,
      };
    });

    // Floating embers/sparks in smoke atmosphere
    const emberCount = 35;
    const emberParticles = Array.from({ length: emberCount }, () => ({
      x: width * 0.4 + Math.random() * width * 0.6, // Concentrated near glowing right side
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -(Math.random() * 0.8 + 0.3),
      alpha: Math.random() * 0.8 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    let mouseShiftX = 0;
    let mouseShiftY = 0;

    const render = () => {
      // Smooth interpolation for parallax
      mouseShiftX += (mousePos.x * 25 - mouseShiftX) * 0.05;
      mouseShiftY += (mousePos.y * 20 - mouseShiftY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Render Smoke Cloud Puffs
      smokeParticles.forEach((p) => {
        // Position update with subtle sway
        p.swayPhase += p.swaySpeed;
        p.x += p.vx + Math.sin(p.swayPhase) * 0.25;
        p.y += p.vy;
        p.rotation += p.spin;

        // Opacity pulsing
        p.alpha += p.fadeSpeed * p.fadeDirection;
        if (p.alpha >= p.maxAlpha) {
          p.alpha = p.maxAlpha;
          p.fadeDirection = -1;
        } else if (p.alpha <= 0.05) {
          p.alpha = 0.05;
          p.fadeDirection = 1;
        }

        // Boundary wrap
        if (p.y + p.radius < -50) {
          p.y = height + p.radius + 20;
          p.x = Math.random() * width;
        }
        if (p.x - p.radius > width + 50) p.x = -p.radius;
        if (p.x + p.radius < -50) p.x = width + p.radius;

        // Apply mouse parallax to smoke layer
        const drawX = p.x + mouseShiftX * 0.4;
        const drawY = p.y + mouseShiftY * 0.3;

        ctx.save();
        ctx.translate(drawX, drawY);
        ctx.rotate(p.rotation);

        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.radius);
        if (p.isAmber) {
          // Warm amber smoke puff
          grad.addColorStop(0, `rgba(245, 158, 11, ${p.alpha * 0.45})`);
          grad.addColorStop(0.4, `rgba(217, 119, 6, ${p.alpha * 0.25})`);
          grad.addColorStop(0.75, `rgba(180, 83, 9, ${p.alpha * 0.08})`);
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          // Moody cool charcoal mist
          grad.addColorStop(0, `rgba(180, 185, 200, ${p.alpha * 0.3})`);
          grad.addColorStop(0.5, `rgba(100, 105, 120, ${p.alpha * 0.15})`);
          grad.addColorStop(0.8, `rgba(40, 40, 50, ${p.alpha * 0.05})`);
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Render Floating Embers
      emberParticles.forEach((e) => {
        e.y += e.vy;
        e.x += e.vx + Math.sin(e.pulse) * 0.3;
        e.pulse += 0.03;

        if (e.y < -10) {
          e.y = height + 10;
          e.x = width * 0.3 + Math.random() * width * 0.7;
        }

        const drawX = e.x + mouseShiftX * 0.8;
        const drawY = e.y + mouseShiftY * 0.6;
        const currentAlpha = Math.max(0.1, e.alpha * (0.6 + 0.4 * Math.sin(e.pulse)));

        ctx.save();
        ctx.beginPath();
        ctx.arc(drawX, drawY, e.size, 0, Math.PI * 2);
        const emberGrad = ctx.createRadialGradient(drawX, drawY, 0, drawX, drawY, e.size * 2);
        emberGrad.addColorStop(0, `rgba(253, 224, 71, ${currentAlpha})`);
        emberGrad.addColorStop(0.5, `rgba(245, 158, 11, ${currentAlpha * 0.7})`);
        emberGrad.addColorStop(1, 'rgba(217, 119, 6, 0)');
        ctx.fillStyle = emberGrad;
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePos]);

  const shiftX = mousePos.x * 20;
  const shiftY = mousePos.y * 15;

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none bg-[#070707] ${className}`}
    >
      {/* Slightly Darkened Portrait Photo for Crisp Text Contrast */}
      <img
        src={imageSrc}
        alt="Hemchand Paunikar"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.1] opacity-100 transition-transform duration-700 ease-out"
        style={{
          transform: `scale(${isHovered ? 1.02 : 1.0}) translate(${shiftX * 0.08}px, ${shiftY * 0.08}px)`,
        }}
      />

      {/* Animated Canvas Smoke & Ember Effect Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-85 z-10"
      />

      {/* Warm Amber Fire Lens Flare Glow on Right */}
      <div
        className="absolute right-0 top-1/4 w-[45rem] h-[45rem] pointer-events-none mix-blend-screen opacity-50 transition-transform duration-700 animate-pulse"
        style={{
          background: 'radial-gradient(circle at 75% 50%, rgba(245, 158, 11, 0.45) 0%, rgba(217, 119, 6, 0.2) 40%, transparent 75%)',
          transform: `translate(${shiftX * 0.6}px, ${shiftY * 0.4}px)`,
          filter: 'blur(60px)',
          animationDuration: '6s',
        }}
      />

      {/* Dark Legibility Gradient Overlays behind Text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/60 via-transparent to-[#070707]/50 pointer-events-none z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-[#070707]/40 pointer-events-none z-20" />
    </div>
  );
}

export default CinematicHeroEffect;

