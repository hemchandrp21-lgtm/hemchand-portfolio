import React, { useState, useEffect, useRef } from 'react';

// A simple utility for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const CircularGallery = React.forwardRef(
  ({ items, className, radius = 550, autoRotateSpeed = 0.15, enableDrag = true, ...props }, ref) => {
    const [displayRotation, setDisplayRotation] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    
    // Physics & Rotation Refs for 60fps/120fps LERP smoothing
    const targetRotationRef = useRef(0);
    const currentRotationRef = useRef(0);
    const dragStartXRef = useRef(0);
    const dragStartRotationRef = useRef(0);
    const animationFrameRef = useRef(null);
    const containerRef = useRef(null);

    // Continuous LERP Loop for Butter-Smooth Rotation
    useEffect(() => {
      const animate = () => {
        // Auto-rotate slowly when not dragging
        if (!isDragging) {
          targetRotationRef.current += autoRotateSpeed;
        }

        // Linear Interpolation (LERP) for inertia and ultra-smooth motion
        const diff = targetRotationRef.current - currentRotationRef.current;
        currentRotationRef.current += diff * 0.065; // Smoothed momentum factor

        setDisplayRotation(currentRotationRef.current);
        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);
      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [isDragging, autoRotateSpeed]);

    // Handle Window Scroll to gently spin gallery
    useEffect(() => {
      let lastScrollY = window.scrollY;

      const handleScroll = () => {
        const delta = window.scrollY - lastScrollY;
        targetRotationRef.current += delta * 0.12; // Smooth scroll inertia multiplier
        lastScrollY = window.scrollY;
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Pointer / Touch / Drag Events for Interactive Spinning
    const handlePointerDown = (e) => {
      if (!enableDrag) return;
      setIsDragging(true);
      dragStartXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      dragStartRotationRef.current = targetRotationRef.current;
    };

    const handlePointerMove = (e) => {
      if (!isDragging || !enableDrag) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const deltaX = clientX - dragStartXRef.current;
      targetRotationRef.current = dragStartRotationRef.current + deltaX * 0.45; // Drag sensitivity
    };

    const handlePointerUp = () => {
      if (!enableDrag) return;
      setIsDragging(false);
    };

    const anglePerItem = 360 / items.length;

    return (
      <div
        ref={ref || containerRef}
        role="region"
        aria-label="Circular 3D Gallery"
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
        className={cn(
          "relative w-full h-full flex items-center justify-center select-none overflow-hidden cursor-grab active:cursor-grabbing",
          className
        )}
        style={{ perspective: '1800px' }}
        {...props}
      >
        <div
          className="relative w-full h-full will-change-transform"
          style={{
            transform: `rotateY(${displayRotation}deg)`,
            transformStyle: 'preserve-3d',
            transition: isDragging ? 'none' : 'transform 0.05s linear',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;
            const totalRotation = displayRotation % 360;
            const relativeAngle = (itemAngle + totalRotation + 360) % 360;
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
            
            // Opacity fade based on angle facing the viewer
            const opacity = Math.max(0.25, Math.pow(1 - normalizedAngle / 180, 1.5));

            return (
              <div
                key={item.photo.url + i}
                role="group"
                aria-label={item.common}
                className="absolute w-[260px] sm:w-[310px] h-[360px] sm:h-[430px] transition-opacity duration-300"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-130px',
                  marginTop: '-180px',
                  opacity: opacity,
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="relative w-full h-full rounded-3xl shadow-2xl overflow-hidden group border border-white/20 bg-[#080a0f]/90 backdrop-blur-xl hover:border-white/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(169,50,7,0.3)]">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040507] via-[#040507]/30 to-transparent opacity-90 group-hover:opacity-65 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-5 text-white z-10 space-y-1.5 pointer-events-none">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#A93207] text-[10px] font-display font-bold uppercase tracking-widest text-white inline-block shadow-md">
                      {item.binomial}
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-bold uppercase tracking-tight text-white leading-tight">
                      {item.common}
                    </h3>
                    <p className="text-xs text-white/70 font-sans leading-snug line-clamp-2">
                      {item.photo.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = 'CircularGallery';

export { CircularGallery };
