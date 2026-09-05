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
      {/* 100% Crystal Clear Natural Portrait Photo */}
      <img
        src={imageSrc}
        alt="Hemchand Paunikar"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-100 transition-transform duration-700 ease-out"
        style={{
          transform: `scale(${isHovered ? 1.02 : 1.0}) translate(${shiftX * 0.08}px, ${shiftY * 0.08}px)`,
        }}
      />

      {/* Subtle Bottom Fade Only for Clean Transition into Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none" />
    </div>
  );
}

export default CinematicHeroEffect;
