function FilmOverlay() {
  return (
    <>
      {/* 1. Ambient Spotlight Cyan & Rust Glow (Top Glow) */}
      <div 
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] max-w-full pointer-events-none z-0 opacity-60 blur-[130px] rounded-full"
        style={{
          background: 'radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.22) 0%, rgba(169, 50, 7, 0.16) 45%, transparent 75%)'
        }}
        aria-hidden="true"
      />

      {/* 2. Grid Background Matrix with Radial Spotlight Mask */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 20%, rgba(0,0,0,0.5) 60%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 20%, rgba(0,0,0,0.5) 60%, transparent 95%)'
        }}
        aria-hidden="true" 
      />

      {/* 3. SVG Noise Effect Layer */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-[1] opacity-[0.045] mix-blend-overlay" aria-hidden="true">
        <filter id="bg-spotlight-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#bg-spotlight-noise)" />
      </svg>

      {/* 4. Cinematic Vignette */}
      <div className="cinematic-vignette" aria-hidden="true" />
    </>
  );
}

export default FilmOverlay;
