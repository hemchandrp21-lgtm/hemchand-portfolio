import { useEffect, useState } from 'react';

function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on desktop (min-width 1024px)
    if (window.innerWidth < 1024) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor') || 'VIEW';
        setCursorText(text);
        setIsHovered(true);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-transform duration-100 ease-out -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center rounded-full ${
        isHovered
          ? 'w-20 h-20 bg-white/90 text-zinc-950 font-bold text-xs tracking-widest uppercase shadow-2xl backdrop-blur-sm scale-100'
          : 'w-3.5 h-3.5 bg-white mix-blend-difference'
      }`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    >
      {isHovered && <span>{cursorText}</span>}
    </div>
  );
}

export default CustomCursor;
