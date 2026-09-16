import { useEffect, useRef } from 'react';

export function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = null;
    let isTabVisible = !document.hidden;

    // Pre-bucket opacity strings to avoid garbage collection allocations per frame
    const opacityBuckets = Array.from({ length: 20 }, (_, i) => `rgba(255, 255, 255, ${(i / 20).toFixed(2)})`);

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Generate optimized stars array (max 140 stars for peak 60fps performance)
    const starCount = Math.min(140, Math.floor((width * height) / 12000));
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.3 + 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.15 + 0.05,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleFactor: Math.random() * Math.PI
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    function render() {
      if (!isTabVisible) {
        animId = null;
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const targetParallaxX = (mouseX - width / 2) * 0.015;
      const targetParallaxY = (mouseY - height / 2) * 0.015;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move star vertically
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        // Twinkle effect
        star.twinkleFactor += star.twinkleSpeed;
        const currentAlpha = Math.max(0.1, Math.min(1, star.alpha + Math.sin(star.twinkleFactor) * 0.25));
        const bucketIndex = Math.min(19, Math.max(0, Math.floor(currentAlpha * 20)));

        // Draw star
        ctx.beginPath();
        const renderX = star.x + targetParallaxX * (star.size * 0.5);
        const renderY = star.y + targetParallaxY * (star.size * 0.5);

        ctx.arc(renderX, renderY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = opacityBuckets[bucketIndex];
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    }

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !animId) {
        render();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-70 will-change-transform transform-gpu"
    />
  );
}

export default StarfieldCanvas;
