import { useEffect, useRef, useState } from 'react';
import { useIceFire } from '../context/IceFireContext';

function CinematicHeroEffect({ imageSrc = '/hero_portrait_suit.jpg', className = '' }) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const fireFlareRef = useRef(null);
  const iceFlareRef = useRef(null);
  const spotlightRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
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
      const relativeX = ((e.clientX - rect.left) / rect.width) * 100;
      const relativeY = ((e.clientY - rect.top) / rect.height) * 100;
      
      setMousePos({ x: relativeX.toFixed(1), y: relativeY.toFixed(1) });

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

      const shiftX = currentX * 18;
      const shiftY = currentY * 14;
      const scale = isHovered ? 1.02 : 1.0;

      if (imgRef.current) {
        imgRef.current.style.transform = `scale3d(${scale}, ${scale}, 1) translate3d(${shiftX * 0.08}px, ${shiftY * 0.08}px, 0)`;
      }

      if (fireFlareRef.current) {
        fireFlareRef.current.style.transform = `translate3d(${shiftX * 0.6}px, ${shiftY * 0.4}px, 0)`;
      }

      if (iceFlareRef.current) {
        iceFlareRef.current.style.transform = `translate3d(${-shiftX * 0.6}px, ${-shiftY * 0.4}px, 0)`;
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${((currentX / 2 + 0.5) * 100).toFixed(1)}% ${((currentY / 2 + 0.5) * 100).toFixed(1)}%, ${
          isFire ? 'rgba(245, 158, 11, 0.15)' : 'rgba(6, 182, 212, 0.15)'
        }, transparent 70%)`;
      }

      // Pause loop when settled to save CPU/GPU
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
  }, [isFire]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none bg-[#050505] ${className}`}
      style={{ contain: 'layout style paint' }}
    >
      {/* 1. Cinematic Portrait Image (Clear & Crisp) */}
      <img
        ref={imgRef}
        src={imageSrc}
        alt="Hemchand Paunikar"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.06] opacity-100 will-change-transform transition-all duration-700"
        style={{
          transform: 'scale3d(1, 1, 1) translate3d(0px, 0px, 0)',
        }}
      />

      {/* 2. Interactive Spotlight Follow Glow */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none transition-colors duration-500 z-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, ${
            isFire ? 'rgba(245, 158, 11, 0.12)' : 'rgba(6, 182, 212, 0.12)'
          }, transparent 70%)`
        }}
      />

      {/* 3. Cold Icy Cyan Volumetric Glow */}
      <div
        ref={iceFlareRef}
        className={`absolute -left-20 -top-20 w-[44rem] h-[44rem] pointer-events-none mix-blend-screen transition-opacity duration-700 will-change-transform ${
          isFire ? 'opacity-35' : 'opacity-85'
        }`}
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(114, 216, 255, 0.48) 0%, rgba(63, 188, 232, 0.22) 45%, transparent 75%)',
          transform: 'translate3d(0px, 0px, 0)',
        }}
      />

      {/* 4. Warm Amber Fire Volumetric Flare Glow */}
      <div
        ref={fireFlareRef}
        className={`absolute -right-20 bottom-0 w-[48rem] h-[48rem] pointer-events-none mix-blend-screen transition-opacity duration-700 will-change-transform ${
          isFire ? 'opacity-85' : 'opacity-35'
        }`}
        style={{
          background: 'radial-gradient(circle at 75% 65%, rgba(255, 122, 24, 0.55) 0%, rgba(255, 181, 46, 0.22) 45%, transparent 75%)',
          transform: 'translate3d(0px, 0px, 0)',
        }}
      />

      {/* 5. Subtle Technical Grid Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02] z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 6. Subtle Edge Vignette for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/75 via-transparent to-[#050505]/60 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-[#050505]/40 pointer-events-none z-10" />
    </div>
  );
}

export default CinematicHeroEffect;

