import { useEffect, useState, useRef } from 'react';

function CustomCursor() {
  const cursorRef = useRef(null);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on desktop (min-width 1024px)
    if (window.innerWidth < 1024) return;

    document.body.classList.add('custom-cursor-active');

    let animFrameId = null;
    let clientX = -100;
    let clientY = -100;
    let scheduled = false;

    const handleMouseMove = (e) => {
      clientX = e.clientX;
      clientY = e.clientY;

      if (!scheduled) {
        scheduled = true;
        animFrameId = requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
          }
          scheduled = false;
        });
      }

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

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-150 hidden lg:flex items-center justify-center rounded-full ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${
        isHovered
          ? 'w-20 h-20 bg-white/90 text-zinc-950 font-bold text-xs tracking-widest uppercase shadow-2xl backdrop-blur-sm'
          : 'w-3.5 h-3.5 bg-white mix-blend-difference'
      }`}
      style={{
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        willChange: 'transform',
      }}
    >
      {isHovered && <span>{cursorText}</span>}
    </div>
  );
}

export default CustomCursor;

