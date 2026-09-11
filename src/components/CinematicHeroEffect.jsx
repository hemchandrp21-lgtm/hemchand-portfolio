import { useEffect, useRef } from 'react';

function CinematicHeroEffect({ imageSrc = '/hero_portrait_suit.jpg', className = '' }) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const flareRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animFrameId = null;
    let isHovered = false;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isMoving = false;
    let rect = container.getBoundingClientRect();

    const updateRect = () => {
      rect = container.getBoundingClientRect();
    };

    window.addEventListener('resize', updateRect, { passive: true });

    const handleMouseMove = (e) => {
      if (!rect.width || !rect.height) rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      
      if (!isMoving) {
        isMoving = true;
        animFrameId = requestAnimationFrame(loop);
      }
    };

    const handleMouseEnter = () => {
      isHovered = true;
      updateRect();
      if (!isMoving) {
        isMoving = true;
        animFrameId = requestAnimationFrame(loop);
      }
    };

    const handleMouseLeave = () => {
      isHovered = false;
      targetX = 0;
      targetY = 0;
      if (!isMoving) {
        isMoving = true;
        animFrameId = requestAnimationFrame(loop);
      }
    };

    const loop = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      // Smooth lerp
      currentX += dx * 0.08;
      currentY += dy * 0.08;

      const shiftX = currentX * 16;
      const shiftY = currentY * 12;
      const scale = isHovered ? 1.015 : 1.0;

      if (imgRef.current) {
        imgRef.current.style.transform = `scale3d(${scale}, ${scale}, 1) translate3d(${shiftX * 0.06}px, ${shiftY * 0.06}px, 0)`;
      }

      if (flareRef.current) {
        flareRef.current.style.transform = `translate3d(${shiftX * 0.5}px, ${shiftY * 0.35}px, 0)`;
      }

      // If animation has settled, stop rAF loop to save 100% CPU/GPU when idle
      if (Math.abs(dx) < 0.0005 && Math.abs(dy) < 0.0005) {
        isMoving = false;
        animFrameId = null;
      } else {
        animFrameId = requestAnimationFrame(loop);
      }
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener('resize', updateRect);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none bg-[#070707] ${className}`}
      style={{ contain: 'layout style paint' }}
    >
      {/* 1. Portrait Photo */}
      <img
        ref={imgRef}
        src={imageSrc}
        alt="Hemchand Paunikar"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.1] opacity-100 will-change-transform"
        style={{
          transform: 'scale3d(1, 1, 1) translate3d(0px, 0px, 0)',
        }}
      />

      {/* 2. Warm Amber Fire Lens Flare Glow (Pre-computed smooth radial gradient, 0 CSS blur cost) */}
      <div
        ref={flareRef}
        className="absolute right-0 top-1/4 w-[45rem] h-[45rem] pointer-events-none mix-blend-screen opacity-50 will-change-transform"
        style={{
          background: 'radial-gradient(circle at 75% 50%, rgba(245, 158, 11, 0.45) 0%, rgba(245, 158, 11, 0.25) 25%, rgba(217, 119, 6, 0.12) 50%, transparent 75%)',
          transform: 'translate3d(0px, 0px, 0)',
        }}
      />

      {/* 3. Dark Legibility Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/60 via-transparent to-[#070707]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070707]/80 via-transparent to-[#070707]/40 pointer-events-none" />
    </div>
  );
}

export default CinematicHeroEffect;
