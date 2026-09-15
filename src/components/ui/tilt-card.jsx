import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function TiltCard({
  children,
  className = "",
  tiltMaxAngleX = 14,
  tiltMaxAngleY = 14,
  scale = 1.03,
  glareEnable = true,
  glareMaxOpacity = 0.3,
  onClick,
  onMouseEnter,
  ...props
}) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);

  // Motion values for smooth mouse tracking relative to card center [-0.5, 0.5]
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [isHovered, setIsHovered] = useState(false);

  // Physics spring config for realistic 3D movement
  const springConfig = { damping: 22, stiffness: 220, mass: 0.6 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltMaxAngleX, -tiltMaxAngleX]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltMaxAngleY, tiltMaxAngleY]), springConfig);
  const scaleSpring = useSpring(isHovered ? scale : 1, springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const px = mouseX / rect.width;
    const py = mouseY / rect.height;

    x.set(px - 0.5);
    y.set(py - 0.5);

    if (glareRef.current) {
      const gx = Math.round(px * 100);
      const gy = Math.round(py * 100);
      glareRef.current.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 30%, transparent 70%)`;
    }
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter(e);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        perspective: 1000,
        rotateX,
        rotateY,
        scale: scaleSpring,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      className={`relative overflow-hidden transition-[box-shadow,border-color] duration-300 select-none ${className}`}
      {...props}
    >
      {children}

      {/* Dynamic 3D Glare & Spotlight Effect */}
      {glareEnable && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            opacity: isHovered ? glareMaxOpacity : 0,
            background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 30%, transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
}

export default TiltCard;
