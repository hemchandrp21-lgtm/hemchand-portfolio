import { useEffect, useRef } from 'react';
import { useIceFire } from '../context/IceFireContext';

function CinematicHeroEffect({ imageSrc = '/hero_portrait_suit.jpg', className = '' }) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const fireFlareRef = useRef(null);
  const iceFlareRef = useRef(null);
  const { isFire } = useIceFire();

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

      if (fireFlareRef.current) {
        fireFlareRef.current.style.transform = `translate3d(${shiftX * 0.5}px, ${shiftY * 0.35}px, 0)`;
      }

      if (iceFlareRef.current) {
        iceFlareRef.current.style.transform = `translate3d(${-shiftX * 0.5}px, ${-shiftY * 0.35}px, 0)`;
      }

      // Pause loop when settled to save 100% CPU/GPU when idle
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
      className={`relative w-full h-full overflow-hidden select-none bg-[#050505] ${className}`}
      style={{ contain: 'layout style paint' }}
    >
      {/* 1. Cinematic Portrait Image */}
      <img
        ref={imgRef}
        src={imageSrc}
        alt="Hemchand Paunikar"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.15] opacity-100 will-change-transform transition-all duration-700"
        style={{
          transform: 'scale3d(1, 1, 1) translate3d(0px, 0px, 0)',
        }}
      />

      {/* 2. Cold Icy Cyan Volumetric Glow (Top-Left / Opposite Balance) */}
      <div
        ref={iceFlareRef}
        className={`absolute -left-20 -top-20 w-[42rem] h-[42rem] pointer-events-none mix-blend-screen transition-opacity duration-700 will-change-transform ${
          isFire ? 'opacity-35' : 'opacity-80'
        }`}
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(114, 216, 255, 0.45) 0%, rgba(63, 188, 232, 0.2) 45%, transparent 75%)',
          transform: 'translate3d(0px, 0px, 0)',
        }}
      />

      {/* 3. Warm Amber Fire Volumetric Flare Glow (Bottom-Right / Fire Balance) */}
      <div
        ref={fireFlareRef}
        className={`absolute -right-20 bottom-0 w-[46rem] h-[46rem] pointer-events-none mix-blend-screen transition-opacity duration-700 will-change-transform ${
          isFire ? 'opacity-80' : 'opacity-35'
        }`}
        style={{
          background: 'radial-gradient(circle at 75% 65%, rgba(255, 122, 24, 0.5) 0%, rgba(255, 181, 46, 0.2) 45%, transparent 75%)',
          transform: 'translate3d(0px, 0px, 0)',
        }}
      />

      {/* 4. Editorial Legibility Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/85 via-[#050505]/40 to-[#050505]/75 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50 pointer-events-none" />
    </div>
  );
}

export default CinematicHeroEffect;
