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

    // 1. General ambient smoke cloud puffs
    const smokeCount = 28;
    const smokeParticles = Array.from({ length: smokeCount }, (_, i) => {
      const isAmberZone = i % 2 === 0;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 160 + 100,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 0.35 + 0.1),
        rotation: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.002,
        alpha: Math.random() * 0.2 + 0.08,
        maxAlpha: Math.random() * 0.3 + 0.12,
        fadeSpeed: Math.random() * 0.002 + 0.001,
        fadeDirection: Math.random() > 0.5 ? 1 : -1,
        isAmber: isAmberZone,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.01 + 0.005,
      };
    });

    // 2. Targeted Smoke Ring Vortex Tendrils (specifically around photo smoke cloud on left-center)
    const vortexCount = 22;
    const vortexParticles = Array.from({ length: vortexCount }, () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 140 + 40;
      return {
        angle,
        distance,
        orbitSpeed: (Math.random() * 0.006 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        radius: Math.random() * 90 + 50,
        alpha: Math.random() * 0.3 + 0.15,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.015 + 0.008,
      };
    });

    // 3. Floating embers/sparks in atmosphere
    const emberCount = 35;
    const emberParticles = Array.from({ length: emberCount }, () => ({
      x: width * 0.35 + Math.random() * width * 0.65,
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
      mouseShiftX += (mousePos.x * 25 - mouseShiftX) * 0.05;
      mouseShiftY += (mousePos.y * 20 - mouseShiftY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // --- Render Targeted Smoke Ring Vortex (Behind Subject Head) ---
      const vortexCenterX = width * 0.32 + mouseShiftX * 0.3;
      const vortexCenterY = height * 0.38 + mouseShiftY * 0.2;

      vortexParticles.forEach((vp) => {
        vp.angle += vp.orbitSpeed;
        vp.pulsePhase += vp.pulseSpeed;

        const currentDist = vp.distance + Math.sin(vp.pulsePhase) * 15;
        const x = vortexCenterX + Math.cos(vp.angle) * currentDist;
        const y = vortexCenterY + Math.sin(vp.angle) * (currentDist * 0.75); // Slightly oval ring
        const currentAlpha = vp.alpha * (0.6 + 0.4 * Math.sin(vp.pulsePhase));

        ctx.save();
        ctx.translate(x, y);

        const vGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, vp.radius);
        vGrad.addColorStop(0, `rgba(220, 225, 240, ${currentAlpha * 0.4})`);
        vGrad.addColorStop(0.4, `rgba(160, 170, 190, ${currentAlpha * 0.2})`);
        vGrad.addColorStop(0.8, `rgba(80, 90, 110, ${currentAlpha * 0.05})`);
        vGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = vGrad;
        ctx.beginPath();
        ctx.arc(0, 0, vp.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // --- Render Ambient Smoke Cloud Puffs ---
      smokeParticles.forEach((p) => {
        p.swayPhase += p.swaySpeed;
        p.x += p.vx + Math.sin(p.swayPhase) * 0.25;
        p.y += p.vy;
        p.rotation += p.spin;

        p.alpha += p.fadeSpeed * p.fadeDirection;
        if (p.alpha >= p.maxAlpha) {
          p.alpha = p.maxAlpha;
          p.fadeDirection = -1;
        } else if (p.alpha <= 0.05) {
          p.alpha = 0.05;
          p.fadeDirection = 1;
        }

        if (p.y + p.radius < -50) {
          p.y = height + p.radius + 20;
          p.x = Math.random() * width;
        }
        if (p.x - p.radius > width + 50) p.x = -p.radius;
        if (p.x + p.radius < -50) p.x = width + p.radius;

        const drawX = p.x + mouseShiftX * 0.4;
        const drawY = p.y + mouseShiftY * 0.3;

        ctx.save();
        ctx.translate(drawX, drawY);
        ctx.rotate(p.rotation);

        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.radius);
        if (p.isAmber) {
          grad.addColorStop(0, `rgba(245, 158, 11, ${p.alpha * 0.4})`);
          grad.addColorStop(0.4, `rgba(217, 119, 6, ${p.alpha * 0.22})`);
          grad.addColorStop(0.75, `rgba(180, 83, 9, ${p.alpha * 0.06})`);
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          grad.addColorStop(0, `rgba(190, 195, 210, ${p.alpha * 0.25})`);
          grad.addColorStop(0.5, `rgba(110, 115, 130, ${p.alpha * 0.12})`);
          grad.addColorStop(0.8, `rgba(40, 45, 55, ${p.alpha * 0.04})`);
          grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // --- Render Floating Embers ---
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
      {/* SVG Turbulence Filter for Fluid Photo Smoke Animation */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="photo-smoke-distortion">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="2" result="noise">
            <animate
              attributeName="baseFrequency"
              dur="18s"
              values="0.01 0.014; 0.018 0.024; 0.01 0.014"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Main Crisp Portrait Photo */}
      <img
        src={imageSrc}
        alt="Hemchand Paunikar"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.1] opacity-100 transition-transform duration-700 ease-out z-0"
        style={{
          transform: `scale(${isHovered ? 1.02 : 1.0}) translate(${shiftX * 0.08}px, ${shiftY * 0.08}px)`,
        }}
      />

      {/* Dynamic Animated Smoke Layer created directly from the Photo's background smoke ring */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-75 overflow-hidden z-0"
        style={{
          filter: 'url(#photo-smoke-distortion) blur(0.5px)',
          maskImage: 'radial-gradient(circle at 32% 38%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 30%, transparent 60%)',
          WebkitMaskImage: 'radial-gradient(circle at 32% 38%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 30%, transparent 60%)',
        }}
      >
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover object-center scale-[1.03] transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${shiftX * 0.12}px, ${shiftY * 0.12}px)`,
          }}
        />
      </div>

      {/* Interactive Canvas Smoke Vortex & Ambient Mist Overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-85 z-10"
      />

      {/* Warm Amber Fire Lens Flare Glow on Right */}
      <div
        className="absolute right-0 top-1/4 w-[45rem] h-[45rem] pointer-events-none mix-blend-screen opacity-50 transition-transform duration-700 animate-pulse z-10"
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


