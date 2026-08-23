"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useSpring(cursorX, { stiffness: 420, damping: 34, mass: 0.35 });
  const ringY = useSpring(cursorY, { stiffness: 420, damping: 34, mass: 0.35 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(mediaQuery.matches);
    const handleMove = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      const isClickable = event.target instanceof Element && Boolean(event.target.closest("a, button, .floating-stat"));
      setHovering(isClickable);
    };

    updateEnabled();
    mediaQuery.addEventListener("change", updateEnabled);
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => {
      mediaQuery.removeEventListener("change", updateEnabled);
      window.removeEventListener("pointermove", handleMove);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div className="custom-cursor-shell" style={{ x: ringX, y: ringY }} animate={{ scale: hovering ? 1.42 : 1 }} transition={{ type: "spring", stiffness: 420, damping: 28 }}>
        <div className="custom-cursor-target" aria-hidden="true">
          <span className="target-segment target-segment-top" />
          <span className="target-segment target-segment-right" />
          <span className="target-segment target-segment-bottom" />
          <span className="target-segment target-segment-left" />
        </div>
      </motion.div>
      <motion.div className="custom-cursor-dot" style={{ x: cursorX, y: cursorY }} animate={{ opacity: hovering ? 0 : 1, scale: hovering ? 0.5 : 1 }} transition={{ duration: 0.16 }} />
    </>
  );
}
