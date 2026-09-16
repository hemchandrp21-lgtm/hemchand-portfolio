import { useEffect, useRef } from 'react';

function CustomCursor() {
  const cursorRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    // Only activate on desktop (min-width 1024px)
    if (window.innerWidth < 1024) return;

    document.body.classList.add('custom-cursor-active');

    let animFrameId = null;
    let clientX = -100;
    let clientY = -100;
    let scheduled = false;
    let isHovered = false;
    let currentText = '';

    const handleMouseMove = (e) => {
      clientX = e.clientX;
      clientY = e.clientY;

      const target = e.target && e.target.closest ? e.target.closest('[data-cursor]') : null;
      if (target) {
        const text = target.getAttribute('data-cursor') || 'VIEW';
        if (!isHovered || currentText !== text) {
          isHovered = true;
          currentText = text;
          if (cursorRef.current) cursorRef.current.classList.add('is-hovered');
          if (spanRef.current) spanRef.current.textContent = text;
        }
      } else if (isHovered) {
        isHovered = false;
        currentText = '';
        if (cursorRef.current) cursorRef.current.classList.remove('is-hovered');
        if (spanRef.current) spanRef.current.textContent = '';
      }

      if (!scheduled) {
        scheduled = true;
        animFrameId = requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
          }
          scheduled = false;
        });
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
    };
    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
    };

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
      className="fixed top-0 left-0 pointer-events-none z-50 transition-[width,height,background-color,border-color,opacity] duration-150 ease-out hidden lg:flex items-center justify-center rounded-full w-3.5 h-3.5 bg-white mix-blend-difference [&.is-hovered]:w-20 [&.is-hovered]:h-20 [&.is-hovered]:bg-white/90 [&.is-hovered]:text-zinc-950 [&.is-hovered]:font-bold [&.is-hovered]:text-xs [&.is-hovered]:tracking-widest [&.is-hovered]:uppercase [&.is-hovered]:shadow-2xl [&.is-hovered]:mix-blend-normal"
      style={{
        transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        willChange: 'transform',
      }}
    >
      <span ref={spanRef} />
    </div>
  );
}

export default CustomCursor;
