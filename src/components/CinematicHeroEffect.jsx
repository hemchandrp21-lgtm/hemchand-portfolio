import { useEffect, useRef } from 'react';

function CinematicHeroEffect({ imageSrc = '/hero_portrait_suit.webp', className = '' }) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isVisible = true;
    let isTabActive = !document.hidden;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && isTabActive && !animFrameId) {
          animFrameId = requestAnimationFrame(loop);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    const handleVisibility = () => {
      isTabActive = !document.hidden;
      if (isVisible && isTabActive && !animFrameId) {
        animFrameId = requestAnimationFrame(loop);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    let animFrameId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let time = 0;
    let rectWidth = window.innerWidth;
    let rectHeight = window.innerHeight;
    let rectLeft = 0;
    let rectTop = 0;

    const updateRect = () => {
      if (container) {
        const r = container.getBoundingClientRect();
        rectWidth = r.width || window.innerWidth;
        rectHeight = r.height || window.innerHeight;
        rectLeft = r.left;
        rectTop = r.top;
      }
    };
    updateRect();

    window.addEventListener('resize', updateRect, { passive: true });

    const handleMouseMove = (e) => {
      targetX = ((e.clientX - rectLeft) / rectWidth - 0.5) * 2;
      targetY = ((e.clientY - rectTop) / rectHeight - 0.5) * 2;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    let lastSpotX = '';
    let lastSpotY = '';

    const loop = () => {
      if (!isVisible || !isTabActive) {
        animFrameId = null;
        return;
      }

      time += 0.006;

      // Smooth mouse lerp
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      currentX += dx * 0.04;
      currentY += dy * 0.04;

      // Minimal Prisma Hero floating motion: continuous smooth pan & breathing zoom
      const ambientX = Math.sin(time * 0.5) * 14;
      const ambientY = Math.cos(time * 0.35) * 10;
      const ambientScale = 1.06 + Math.sin(time * 0.25) * 0.03;

      const mouseShiftX = currentX * 16;
      const mouseShiftY = currentY * 12;

      const totalX = ambientX + mouseShiftX;
      const totalY = ambientY + mouseShiftY;

      if (imgRef.current) {
        imgRef.current.style.transform = `scale3d(${ambientScale.toFixed(3)}, ${ambientScale.toFixed(3)}, 1) translate3d(${totalX.toFixed(1)}px, ${totalY.toFixed(1)}px, 0)`;
      }

      if (spotlightRef.current) {
        const spotX = ((currentX / 2 + 0.5) * 100).toFixed(0);
        const spotY = ((currentY / 2 + 0.5) * 100).toFixed(0);
        if (spotX !== lastSpotX || spotY !== lastSpotY) {
          lastSpotX = spotX;
          lastSpotY = spotY;
          spotlightRef.current.style.background = `radial-gradient(700px circle at ${spotX}% ${spotY}%, rgba(255, 255, 255, 0.07), transparent 70%)`;
        }
      }

      animFrameId = requestAnimationFrame(loop);
    };

    animFrameId = requestAnimationFrame(loop);

    container.addEventListener('mouseenter', updateRect, { passive: true });
    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('resize', updateRect);
      container.removeEventListener('mouseenter', updateRect);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none bg-[#040507] ${className}`}
      style={{ contain: 'layout style paint' }}
    >
      {/* 1. Original Cinematic Portrait Background Image (100% True Color & Clarity) */}
      <img
        ref={imgRef}
        src={imageSrc}
        alt="Hemchand Paunikar"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-100 will-change-transform"
        style={{
          transform: 'scale3d(1.06, 1.06, 1) translate3d(0px, 0px, 0)',
        }}
      />

      {/* 2. Soft Ambient Cursor Spotlight */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none transition-colors duration-500 z-10"
      />

      {/* 3. Bottom Blend Gradient for Seamless Section Transition */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#040507] via-[#040507]/60 to-transparent pointer-events-none z-20" />
    </div>
  );
}

export default CinematicHeroEffect;

