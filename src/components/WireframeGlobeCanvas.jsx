import { useEffect, useRef } from 'react';

export default function WireframeGlobeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId = null;
    let isVisible = true;
    let isTabActive = !document.hidden;

    // Pre-bucket opacity strings for performance
    const dotColors = Array.from({ length: 20 }, (_, i) => `rgba(255, 255, 255, ${(0.05 + (i / 20) * 0.6).toFixed(2)})`);

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Globe parameters - optimized dot density (250 points)
    const radius = Math.min(width, height) * 0.32;
    const dotsCount = 250;
    const dots = [];

    // Mouse tracking
    let targetRotationY = 0;
    let targetRotationX = 0;
    let currentRotationY = 0;
    let currentRotationX = 0;

    const handleMouseMove = (e) => {
      const cx = width / 2;
      const cy = height / 2;
      const mouseX = (e.clientX - cx) / cx;
      const mouseY = (e.clientY - cy) / cy;
      targetRotationY = mouseX * 0.5;
      targetRotationX = -mouseY * 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Create sphere points (Fibonacci sphere)
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < dotsCount; i++) {
      const y = 1 - (i / (dotsCount - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;

      dots.push({
        x: Math.cos(theta) * r,
        y: y,
        z: Math.sin(theta) * r,
      });
    }

    let autoRotation = 0;

    function render() {
      if (!isVisible || !isTabActive) {
        animId = null;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      autoRotation += 0.003;
      currentRotationY += (targetRotationY + autoRotation - currentRotationY) * 0.05;
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;

      const cosY = Math.cos(currentRotationY);
      const sinY = Math.sin(currentRotationY);
      const cosX = Math.cos(currentRotationX);
      const sinX = Math.sin(currentRotationX);

      const cx = width / 2;
      const cy = height / 2;

      // Draw dots
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Rotate Y
        let x1 = dot.x * cosY - dot.z * sinY;
        let z1 = dot.z * cosY + dot.x * sinY;

        // Rotate X
        let y2 = dot.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + dot.y * sinX;

        // 3D to 2D projection
        const scale = 300 / (300 + z2 * radius * 0.5);
        const px = cx + x1 * radius * scale;
        const py = cy + y2 * radius * scale;
        const alpha = Math.max(0.1, (z2 + 1) / 2);

        // Draw dot using precomputed color index
        const colorIdx = Math.min(19, Math.max(0, Math.floor(alpha * 19)));
        ctx.fillStyle = dotColors[colorIdx];
        ctx.beginPath();
        ctx.arc(px, py, Math.max(1, scale * 1.5), 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && isTabActive && !animId) {
          render();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const handleVisibility = () => {
      isTabActive = !document.hidden;
      if (isVisible && isTabActive && !animId) {
        render();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    render();

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[2] opacity-70 will-change-transform transform-gpu"
    />
  );
}
