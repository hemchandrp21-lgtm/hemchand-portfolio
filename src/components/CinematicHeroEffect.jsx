import { useState, useEffect, useRef } from 'react';

function CinematicHeroEffect({ imageSrc = '/hero_portrait_suit.jpg', className = '' }) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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

  const shiftX = mousePos.x * 20;
  const shiftY = mousePos.y * 15;

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none bg-[#070707] ${className}`}
    >
      {/* Base Dark Portrait Photo */}
      <img
        src={imageSrc}
        alt="Hemchand Paunikar"
        className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.2] brightness-[0.75] saturate-[1.05] opacity-100 transition-transform duration-700 ease-out"
        style={{
          transform: `scale(${isHovered ? 1.03 : 1.0}) translate(${shiftX * 0.1}px, ${shiftY * 0.1}px)`,
        }}
      />

      {/* Central Ethereal Smoke Swirling Ring Effect */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-40 transition-transform duration-500"
        style={{
          background: 'radial-gradient(circle at 45% 45%, rgba(255, 255, 255, 0.3) 0%, rgba(186, 230, 253, 0.15) 35%, transparent 65%)',
          transform: `scale(1.1) translate(${shiftX * 0.4}px, ${shiftY * 0.3}px) rotate(${mousePos.x * 3}deg)`,
          filter: 'blur(25px)',
        }}
      />

      {/* Warm Amber Fire Lens Flare Glow on Right matching reference */}
      <div
        className="absolute right-0 top-1/4 w-[45rem] h-[45rem] pointer-events-none mix-blend-screen opacity-70 transition-transform duration-700"
        style={{
          background: 'radial-gradient(circle at 75% 50%, rgba(245, 158, 11, 0.55) 0%, rgba(217, 119, 6, 0.25) 40%, transparent 75%)',
          transform: `translate(${shiftX * 0.6}px, ${shiftY * 0.4}px)`,
          filter: 'blur(60px)',
        }}
      />

      {/* Cool Smoke Accent Flare on Left */}
      <div
        className="absolute -left-20 top-1/3 w-[35rem] h-[35rem] pointer-events-none mix-blend-screen opacity-40 transition-transform duration-700"
        style={{
          background: 'radial-gradient(circle, rgba(148, 163, 184, 0.3) 0%, rgba(56, 189, 248, 0.15) 45%, transparent 70%)',
          transform: `translate(${-shiftX * 0.5}px, ${-shiftY * 0.3}px)`,
          filter: 'blur(50px)',
        }}
      />

      {/* Atmospheric Dark Vignette Masks */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070707]/80 via-transparent to-[#070707]/70 pointer-events-none" />
    </div>
  );
}

export default CinematicHeroEffect;
