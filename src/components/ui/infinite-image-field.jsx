import { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, RefreshCw, X, Compass, Move } from 'lucide-react';
import { playHoverSound, playClickSound } from '../../utils/audioEngine';

const DEFAULT_IMAGES = [
  { id: '1', title: 'CHROMATIC SHADER LAB', category: '3D GRAPHICS', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80' },
  { id: '2', title: 'QUANTUM GRID MATRIX', category: 'SCI-FI LAB', src: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80' },
  { id: '3', title: 'CYBERPUNK NEON DRIFT', category: 'CREATIVE TECH', src: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&auto=format&fit=crop&q=80' },
  { id: '4', title: 'ABSTRACT FLUID SYNTH', category: 'SHADERS', src: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80' },
  { id: '5', title: 'KINETIC PROCESSOR CORE', category: 'HARDWARE', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80' },
  { id: '6', title: 'DEEP SPACE NEBULA', category: 'ASTRONOMY', src: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=800&auto=format&fit=crop&q=80' },
  { id: '7', title: 'RETRO TECH LAB', category: 'SYSTEMS', src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80' },
  { id: '8', title: 'CYBER CITY LIGHTS', category: 'ENVIRONMENTS', src: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80' },
  { id: '9', title: 'DATA STREAM MATRIX', category: 'CYBERNETICS', src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80' },
  { id: '10', title: 'COSMIC HORIZON', category: 'SPACE LAB', src: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&auto=format&fit=crop&q=80' },
  { id: '11', title: 'MODERNIST GEOMETRY', category: 'ARCHITECTURE', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80' },
  { id: '12', title: 'NOBROKER RELOCATION UX', category: 'CASE STUDY', src: '/nobroker_behance.jpg' },
];

const GRID_COLS = 12;
const GRID_ROWS = 12;

export function InfiniteImageField({
  images = DEFAULT_IMAGES,
  imageWidth = 340,
  imageHeight = 230,
  gap = 32,
  maxSpeed = 4.0,
  smoothing = 0.06,
  className = '',
}) {
  const containerRef = useRef(null);
  const tileRefs = useRef([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Cell dimensions
  const cellW = imageWidth + gap;
  const cellH = imageHeight + gap;
  const totalW = GRID_COLS * cellW;
  const totalH = GRID_ROWS * cellH;
  const halfW = totalW / 2;
  const halfH = totalH / 2;

  // Animation & Drag physics state
  const physicsRef = useRef({
    panX: 0,
    panY: 0,
    targetVx: 0.15,
    targetVy: 0.10,
    currentVx: 0,
    currentVy: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    dragPanStartX: 0,
    dragPanStartY: 0,
    dragDist: 0,
    isRecentering: false,
  });

  // Pre-generate static tile matrix list mapping to images
  const cells = useMemo(() => {
    const list = [];
    for (let r = 0; r < GRID_ROWS; r++) {
      for (let c = 0; c < GRID_COLS; c++) {
        const idx = r * GRID_COLS + c;
        const imageIndex = (c + r * 5) % images.length;
        const item = images[imageIndex];
        // Calculate base offset relative to grid center
        const baseX = (c - GRID_COLS / 2 + 0.5) * cellW;
        const baseY = (r - GRID_ROWS / 2 + 0.5) * cellH;
        list.push({ idx, c, r, item, baseX, baseY });
      }
    }
    return list;
  }, [images, cellW, cellH]);

  // Main 120FPS+ RAF Loop with true 360 infinite modulo wrapping
  useEffect(() => {
    let animFrameId = null;

    const wrapPos = (val, max, half) => {
      let r = val % max;
      if (r < -half) r += max;
      if (r > half) r -= max;
      return r;
    };

    const loop = () => {
      const p = physicsRef.current;

      if (p.isRecentering) {
        // Smooth lerp back to (0,0)
        p.panX += (0 - p.panX) * 0.1;
        p.panY += (0 - p.panY) * 0.1;
        p.currentVx = 0;
        p.currentVy = 0;
        if (Math.abs(p.panX) < 0.1 && Math.abs(p.panY) < 0.1) {
          p.panX = 0;
          p.panY = 0;
          p.isRecentering = false;
        }
      } else if (!p.isDragging) {
        // Velocity damping & mouse drift integration
        p.currentVx += (p.targetVx - p.currentVx) * smoothing;
        p.currentVy += (p.targetVy - p.currentVy) * smoothing;
        p.panX += p.currentVx * maxSpeed;
        p.panY += p.currentVy * maxSpeed;
      }

      // Update positions of all tile DOM elements directly
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        const el = tileRefs.current[cell.idx];
        if (!el) continue;

        // Wrap relative positions so grid repeats endlessly in all 360 directions
        const relX = wrapPos(cell.baseX - p.panX, totalW, halfW);
        const relY = wrapPos(cell.baseY - p.panY, totalH, halfH);

        const screenX = relX - imageWidth / 2;
        const screenY = relY - imageHeight / 2;

        el.style.transform = `translate3d(${screenX.toFixed(1)}px, ${screenY.toFixed(1)}px, 0)`;
      }

      animFrameId = requestAnimationFrame(loop);
    };

    animFrameId = requestAnimationFrame(loop);

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [cells, totalW, totalH, halfW, halfH, imageWidth, imageHeight, maxSpeed, smoothing]);

  // Mouse movement listener for floating cursor tilt / velocity
  useEffect(() => {
    const handleMouseMove = (e) => {
      const p = physicsRef.current;
      if (p.isDragging) {
        const dx = e.clientX - p.dragStartX;
        const dy = e.clientY - p.dragStartY;
        p.dragDist = Math.hypot(dx, dy);

        // Update target pan with direct drag offset + calculate drag velocity
        const nextPanX = p.dragPanStartX - dx;
        const nextPanY = p.dragPanStartY - dy;

        p.currentVx = (nextPanX - p.panX) / maxSpeed;
        p.currentVy = (nextPanY - p.panY) / maxSpeed;
        p.panX = nextPanX;
        p.panY = nextPanY;
        return;
      }

      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const mx = (e.clientX - rect.left - cx) / cx;
      const my = (e.clientY - rect.top - cy) / cy;

      p.targetVx = Math.max(-1, Math.min(1, mx));
      p.targetVy = Math.max(-1, Math.min(1, my));
    };

    const handleMouseUp = () => {
      physicsRef.current.isDragging = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [maxSpeed]);

  const handleMouseDown = (e) => {
    // Only drag on left mouse button
    if (e.button !== 0) return;
    const p = physicsRef.current;
    p.isDragging = true;
    p.isRecentering = false;
    p.dragStartX = e.clientX;
    p.dragStartY = e.clientY;
    p.dragPanStartX = p.panX;
    p.dragPanStartY = p.panY;
    p.dragDist = 0;
  };

  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    const p = physicsRef.current;
    p.isDragging = true;
    p.isRecentering = false;
    p.dragStartX = touch.clientX;
    p.dragStartY = touch.clientY;
    p.dragPanStartX = p.panX;
    p.dragPanStartY = p.panY;
    p.dragDist = 0;
  };

  const handleTouchMove = (e) => {
    if (!physicsRef.current.isDragging || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const p = physicsRef.current;
    const dx = touch.clientX - p.dragStartX;
    const dy = touch.clientY - p.dragStartY;
    p.dragDist = Math.hypot(dx, dy);

    p.panX = p.dragPanStartX - dx;
    p.panY = p.dragPanStartY - dy;
  };

  const handleTouchEnd = () => {
    physicsRef.current.isDragging = false;
  };

  const handleResetPan = useCallback(() => {
    playClickSound();
    const p = physicsRef.current;
    p.isRecentering = true;
    p.targetVx = 0.15;
    p.targetVy = 0.10;
  }, []);

  const handleTileClick = (cellItem) => {
    // Prevent trigger if user was dragging
    if (physicsRef.current.dragDist > 6) return;
    playClickSound();
    setSelectedImage(cellItem);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`relative w-screen h-screen overflow-hidden bg-[#040507] text-white select-none cursor-grab active:cursor-grabbing ${className}`}
    >
      {/* Ambient Volumetric Red Glow Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[900px] bg-[#A93207]/12 rounded-full blur-[240px] pointer-events-none z-10" />

      {/* Edge Vignette Fades */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#040507] via-[#040507]/60 to-transparent pointer-events-none z-20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#040507] via-[#040507]/60 to-transparent pointer-events-none z-20" />
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#040507] via-[#040507]/40 to-transparent pointer-events-none z-20" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#040507] via-[#040507]/40 to-transparent pointer-events-none z-20" />

      {/* Screen Center Target Origin Container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 pointer-events-none z-10">
        {cells.map((cell) => (
          <div
            key={`${cell.c}_${cell.r}`}
            ref={(el) => (tileRefs.current[cell.idx] = el)}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: `${imageWidth}px`,
              height: `${imageHeight}px`,
              willChange: 'transform',
            }}
            onClick={() => handleTileClick(cell.item)}
            onMouseEnter={playHoverSound}
            className="group absolute pointer-events-auto rounded-2xl overflow-hidden border border-white/15 bg-[#080b12] shadow-2xl transition-[border-color,box-shadow,scale] duration-300 hover:border-white/60 hover:scale-105 hover:z-40 cursor-pointer transform-gpu"
          >
            <img
              src={cell.item.src}
              alt={cell.item.title}
              draggable={false}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

            {/* Tile Metadata */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] text-white">
              <span className="font-bold tracking-wider uppercase truncate max-w-[85%] drop-shadow-md">
                {cell.item.title}
              </span>
              <Maximize2 className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#A93207]" />
            </div>

            <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/15 font-mono text-[9px] text-white/80 uppercase font-bold tracking-widest">
              {cell.item.category}
            </span>
          </div>
        ))}
      </div>

      {/* Floating Bottom Control HUD Bar */}
      <div className="absolute bottom-8 left-8 right-8 z-30 flex items-center justify-between pointer-events-none">
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black/80 backdrop-blur-xl border border-white/15 font-mono text-xs text-white uppercase tracking-widest shadow-2xl pointer-events-auto">
          <Compass className="w-4 h-4 text-[#A93207] animate-spin-slow" />
          <span>INFINITE FIELD &bull; MOVE OR DRAG TO PAN &bull; CLICK TILE TO ZOOM</span>
        </div>

        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            onClick={handleResetPan}
            onMouseEnter={playHoverSound}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black hover:bg-[#A93207] hover:text-white border border-white/20 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-2xl cursor-pointer active:scale-95"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>RECENTER</span>
          </button>
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6 select-none"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden border border-white/20 bg-[#080b12] p-6 space-y-6 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="flex items-center justify-between font-mono">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A93207] block">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white tracking-tight">
                    {selectedImage.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#A93207] hover:text-white transition-all cursor-pointer shadow-lg"
                >
                  CLOSE PREVIEW
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default InfiniteImageField;
