import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { playHoverSound, playClickSound } from '../../utils/audioEngine';

const defaultProjects = [
  {
    number: '01',
    id: 'nobroker-packers-movers-ux',
    title: 'NOBROKER PACKERS & MOVERS REDESIGN',
    subtitle: 'UX Research & Usability Testing',
    category: 'CASE STUDY',
    src: '/nobroker_behance.jpg',
    desc: 'Usability Testing & Flow Optimization'
  },
  {
    number: '02',
    id: 'hozatra-corporate-web-ui',
    title: 'HOZATRA CORPORATE & AFTTER STOREFRONT',
    subtitle: 'Brand Identity & Storefront',
    category: 'CASE STUDY',
    src: '/real_aftter.png',
    desc: 'E-commerce Storefront & Corporate UI'
  },
  {
    number: '03',
    id: 'resort-hospitality-web-ui',
    title: 'SEED TO SOUL E-COMMERCE',
    subtitle: 'Conversion E-Commerce & Hospitality',
    category: 'LIVE WEBSITE',
    src: '/real_seedtosoul.png',
    externalUrl: 'https://www.seedtosoul.co/',
    desc: 'High-conversion organic store'
  },
  {
    number: '04',
    id: 'texture-lab-web-app',
    title: 'LYNK FOODS & TEXTURE LAB 3D APP',
    subtitle: 'Regional Sweets & Creative Tech',
    category: 'LIVE WEBSITE',
    src: '/real_lynk.png',
    externalUrl: 'https://lynkfoods.com/',
    desc: '3D interactive sweet texture lab'
  }
];

const SCROLL_PER_PX = 2.5;
const LERP_FACTOR = 0.35;
const DRAG_LERP_FACTOR = 0.45;
const MOMENTUM_FRICTION = 0.92;
const MIN_MOMENTUM = 0.1;
const MOBILE_BREAKPOINT = 640;
const TABLET_BREAKPOINT = 1025;
const SLIDER_BOTTOM_OFFSET = 0;

const REDUCED_MOTION_LERP_FACTOR = 1;
const REDUCED_MOTION_FADE_DURATION = 0.18;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches === true;

const lerp = (a, b, n) => a + (b - a) * n;

export function ZoomSliderComp({
  sliderData = defaultProjects,
  title = "FEATURED CASES",
  subheading = "Scroll or drag horizontally to explore case studies",
  scaleOnHover = true,
  textOnHover = true,
  size = 1,
  easeScrollPercentage = 100,
  pinnedScrollProgress = null,
}) {
  const images = sliderData;

  const stripRef = useRef(null);
  const cardRefs = useRef([]);
  const imageWrapRefs = useRef([]);
  const textRefs = useRef([]);

  const [viewportWidth, setViewportWidth] = useState(1440);
  const [viewportHeight, setViewportHeight] = useState(900);
  const [reduceMotion, setReduceMotion] = useState(false);

  const isMobile = viewportWidth < MOBILE_BREAKPOINT;
  const isTablet =
    viewportWidth >= MOBILE_BREAKPOINT && viewportWidth < TABLET_BREAKPOINT;

  const resolvedSize = Math.max(0.5, Number(size) || 1);
  const resolvedEaseScrollPercentage = Math.max(20, Number(easeScrollPercentage) || 100);
  const cardWidthMin = (isMobile ? 75 : 190) * resolvedSize;
  const cardWidthMax = (isMobile ? 240 : isTablet ? 460 : 580) * resolvedSize;
  const cardHeightMax = isMobile ? 260 : 360;
  const cardHeightMin = isMobile ? 80 : 100;
  const cardStep = cardWidthMax;

  const stateRef = useRef({
    current: 0,
    target: 0,
    raf: null,
    isDragging: false,
    lastX: 0,
    lastY: 0,
    velocity: 0,
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const announcedIndexRef = useRef(0);

  useEffect(() => {
    const onResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');

    const syncReducedMotion = (event) => {
      setReduceMotion(
        'matches' in event ? event.matches : prefersReducedMotion()
      );
    };

    if (!mediaQuery) return;

    syncReducedMotion(mediaQuery);
    mediaQuery.addEventListener('change', syncReducedMotion);
    return () => mediaQuery.removeEventListener('change', syncReducedMotion);
  }, []);

  useEffect(() => {
    if (pinnedScrollProgress !== null && pinnedScrollProgress !== undefined && images.length > 1) {
      const maxTarget = (images.length - 1) * cardStep;
      stateRef.current.target = pinnedScrollProgress * maxTarget;
    }
  }, [pinnedScrollProgress, images.length, cardStep]);

  const positionCards = useCallback(
    (offset) => {
      if (!stripRef.current) return;

      const cards = Array.from(stripRef.current.children);
      const count = images.length;

      if (!count) return;

      const loopWidth = count * cardStep;
      const viewportWidthValue = window.innerWidth;
      const containerHeight = stripRef.current.parentElement?.clientHeight || 520;
      const easingDistance = 2 * viewportWidthValue * (resolvedEaseScrollPercentage / 100);

      const mapVtoX = (value) => {
        if (value <= 0) return 0;
        if (value >= easingDistance) return value - easingDistance / 2;
        return (value * value) / (2 * easingDistance);
      };

      const normalizedOffset =
        ((offset % loopWidth) + loopWidth) % loopWidth;
      const startIndex = Math.floor(normalizedOffset / cardStep);
      const fractionalOffset = (normalizedOffset % cardStep) / cardStep;

      for (let index = 0; index < count; index += 1) {
        const cardIndex = (startIndex + index) % count;
        const visualOffset = (index - fractionalOffset) * cardStep;
        const currentX = mapVtoX(visualOffset);
        const nextX = mapVtoX(visualOffset + cardStep);
        const visualWidth = nextX - currentX;
        const scale = visualWidth / cardWidthMax;
        const cardHeight =
          cardHeightMin + scale * (cardHeightMax - cardHeightMin);
        
        // Center card vertically inside the container
        const y = Math.round((containerHeight - cardHeight) / 2) + 20;

        if (!cards[cardIndex]) continue;

        cards[cardIndex].style.transform = `translate(${currentX}px, ${y}px)`;

        const imageWrap = imageWrapRefs.current[cardIndex];
        if (!imageWrap) continue;

        imageWrap.style.width = `${visualWidth}px`;
        imageWrap.style.height = `${cardHeight}px`;
      }
    },
    [cardHeightMax, cardHeightMin, cardStep, cardWidthMax, images.length, resolvedEaseScrollPercentage]
  );

  useEffect(() => {
    if (!images.length) return;

    const state = stateRef.current;
    const loopWidth = images.length * cardStep;

    const tick = () => {
      if (
        !reduceMotion &&
        !state.isDragging &&
        Math.abs(state.velocity) > MIN_MOMENTUM
      ) {
        state.target += state.velocity;
        state.velocity *= MOMENTUM_FRICTION;
      } else if (!state.isDragging) {
        state.velocity = 0;
      }

      const lerpFactor = reduceMotion
        ? REDUCED_MOTION_LERP_FACTOR
        : state.isDragging
          ? DRAG_LERP_FACTOR
          : LERP_FACTOR;
      state.current = lerp(state.current, state.target, lerpFactor);

      if (Math.abs(state.current - state.target) < 0.01) {
        const shift = Math.round(state.current / loopWidth) * loopWidth;
        state.current -= shift;
        state.target -= shift;
      }

      positionCards(state.current);

      if (images.length) {
        const normalizedOffset =
          ((state.current % loopWidth) + loopWidth) % loopWidth;
        const nextIndex =
          Math.floor(normalizedOffset / cardStep) % images.length;

        if (nextIndex !== announcedIndexRef.current) {
          announcedIndexRef.current = nextIndex;
          setActiveIndex(nextIndex);
        }
      }

      state.raf = requestAnimationFrame(tick);
    };

    const onWheel = (event) => {
      state.target -= event.deltaY * SCROLL_PER_PX;
    };

    const beginDrag = (clientX, clientY) => {
      state.isDragging = true;
      state.lastX = clientX;
      state.lastY = clientY;
      state.velocity = 0;
    };

    const moveDrag = (clientX, clientY, direction = 1) => {
      if (!state.isDragging) return;

      const deltaX = clientX - state.lastX;
      const deltaY = clientY - state.lastY;
      const rawDelta =
        Math.abs(deltaX) >= Math.abs(deltaY) ? -deltaX : -deltaY;
      const delta = rawDelta * direction;

      state.target += delta;
      state.velocity = lerp(state.velocity, delta, 0.5);
      state.lastX = clientX;
      state.lastY = clientY;
    };

    const endDrag = () => {
      state.isDragging = false;
    };

    const onMouseDown = (event) => beginDrag(event.clientX, event.clientY);
    const onMouseMove = (event) => moveDrag(event.clientX, event.clientY);
    const onMouseUp = endDrag;

    const onTouchStart = (event) =>
      beginDrag(event.touches[0].clientX, event.touches[0].clientY);
    const onTouchMove = (event) =>
      moveDrag(event.touches[0].clientX, event.touches[0].clientY, -1);
    const onTouchEnd = endDrag;

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchcancel', onTouchEnd);

    state.raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(state.raf);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
    };
  }, [cardStep, images, positionCards, reduceMotion]);

  useEffect(() => {
    if (!images.length) return;

    const cleanups = [];

    cardRefs.current.forEach((card, index) => {
      const textElement = textRefs.current[index];
      const imageWrap = imageWrapRefs.current[index];

      if (!card || !textElement || !imageWrap) return;

      gsap.set(textElement, { autoAlpha: 1 });

      const imageElement = imageWrap.querySelector('img');
      if (imageElement) {
        gsap.set(imageElement, { opacity: 1 });
      }

      const onEnter = () => {
        playHoverSound();

        if (!imageElement || !scaleOnHover || reduceMotion) return;

        gsap.to(imageElement, {
          scale: 1.05,
          duration: 0.6,
          ease: 'power2.out',
        });
      };

      const onLeave = () => {
        if (!imageElement || !scaleOnHover) return;

        gsap.to(imageElement, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
        });
      };

      imageWrap.addEventListener('mouseenter', onEnter);
      imageWrap.addEventListener('mouseleave', onLeave);

      cleanups.push(() => {
        imageWrap.removeEventListener('mouseenter', onEnter);
        imageWrap.removeEventListener('mouseleave', onLeave);
      });
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [images, reduceMotion, scaleOnHover, textOnHover]);

  const activeItem = images[activeIndex];
  const slideAnnouncement = images.length
    ? activeItem?.title
      ? `${activeItem.title}, slide ${activeIndex + 1} of ${images.length}`
      : `Slide ${activeIndex + 1} of ${images.length}`
    : '';

  return (
    <div
      className="relative w-full overflow-hidden bg-[#040507] text-white rounded-3xl border border-white/10"
      style={{ height: '70vh', minHeight: '520px', touchAction: 'none' }}
    >
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {slideAnnouncement}
      </div>

      {title ? (
        <div className="pointer-events-none absolute left-1/2 top-8 z-20 -translate-x-1/2 px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-tight text-white">
            {title}
          </h2>
          {subheading ? (
            <p className="mt-2 text-xs font-mono tracking-[0.18em] text-white/50 uppercase">
              {subheading}
            </p>
          ) : null}
        </div>
      ) : null}

      <div ref={stripRef} className="absolute inset-0">
        {images.map((item, index) => {
          const isExternal = Boolean(item.externalUrl);
          const CardWrapper = isExternal ? 'a' : Link;
          const linkProps = isExternal
            ? { href: item.externalUrl, target: '_blank', rel: 'noopener noreferrer' }
            : { to: `/work/${item.id}` };

          return (
            <div
              key={index}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="absolute left-0 top-0"
              style={{ willChange: 'transform' }}
            >
              <div
                ref={(element) => {
                  textRefs.current[index] = element;
                }}
                className="absolute z-10 flex w-full flex-col gap-1 font-mono"
                style={{
                  bottom: 'calc(100% + 12px)',
                  left: 0,
                  padding: '0 0 4px',
                  visibility: 'visible',
                }}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    data-number
                    className="select-none text-xs font-bold uppercase tracking-[0.18em] text-[#A93207]"
                  >
                    {item.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-black/60 border border-white/15 text-white/80">
                    {item.category}
                  </span>
                </div>

                <h3
                  data-title
                  className="select-none font-display text-sm sm:text-base font-extrabold uppercase tracking-tight text-white leading-tight truncate"
                >
                  {item.title}
                </h3>

                <p
                  data-desc
                  className="select-none text-[10px] font-mono tracking-wider text-white/60 truncate"
                >
                  {item.subtitle || item.desc}
                </p>
              </div>

              <div
                ref={(element) => {
                  imageWrapRefs.current[index] = element;
                }}
                className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#080a0f] shadow-2xl group cursor-pointer"
                style={{
                  width: cardWidthMin,
                  height: cardHeightMax,
                  willChange: 'width, height',
                }}
              >
                <CardWrapper
                  {...linkProps}
                  onClick={playClickSound}
                  className="block w-full h-full relative no-underline"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    draggable={false}
                    className="pointer-events-none absolute inset-0 select-none object-cover object-top opacity-100 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  <div className="absolute bottom-4 right-4 z-20">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#A93207] group-hover:text-white">
                      {isExternal ? (
                        <ExternalLink className="w-4 h-4" />
                      ) : (
                        <ArrowUpRight className="w-4 h-4" />
                      )}
                    </span>
                  </div>
                </CardWrapper>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ZoomSlider = ({
  scaleOnHover = true,
  textOnHover = true,
  size = 1,
  easeScrollPercentage = 100,
} = {}) => (
  <ZoomSliderComp
    title="FEATURED CASES"
    subheading="Scroll or drag horizontally to explore case studies"
    sliderData={defaultProjects}
    scaleOnHover={scaleOnHover}
    textOnHover={textOnHover}
    size={size}
    easeScrollPercentage={easeScrollPercentage}
  />
);

export default ZoomSlider;
