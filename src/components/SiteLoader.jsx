import { useState, useEffect } from 'react';

export default function SiteLoader({ onFinished }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            if (onFinished) onFinished();
          }, 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onFinished]);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#040507] text-white transition-opacity duration-700 pointer-events-auto"
      style={{ opacity: progress === 100 ? 0 : 1, pointerEvents: progress === 100 ? 'none' : 'auto' }}
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Geometric Glitch Mark */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 border border-white/20 rotate-45 animate-pulse" />
          <div className="absolute inset-2 border border-white/40 rotate-12" />
          <span className="font-display text-2xl font-bold tracking-widest text-white animate-glitch">
            HP
          </span>
        </div>

        {/* Glitch Loading Label */}
        <div className="relative overflow-hidden px-4 py-1">
          <span className="font-display text-xs tracking-[0.3em] uppercase text-white/80">
            LOADING [{Math.min(progress, 100)}%]
          </span>
          <div
            className="absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Ambient scan line */}
        <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>
    </div>
  );
}
