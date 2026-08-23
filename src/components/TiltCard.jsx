"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export default function TiltCard({ children, className = "" }) {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 260, damping: 22 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 260, damping: 22 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(249, 115, 22, .24), transparent 42%)`;

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    rotateY.set((x / bounds.width - 0.5) * 10);
    rotateX.set((0.5 - y / bounds.height) * 10);
    glowX.set((x / bounds.width) * 100);
    glowY.set((y / bounds.height) * 100);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.div className={`tilt-card ${className}`} style={{ rotateX, rotateY, transformPerspective: 900 }} onMouseMove={handleMove} onMouseLeave={reset}>
      <motion.div className="tilt-glow" style={{ background: glow }} />
      <div className="tilt-content">{children}</div>
    </motion.div>
  );
}
