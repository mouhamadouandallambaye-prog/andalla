"use client";

import { motion } from "framer-motion";
import React, { useSyncExternalStore } from "react";

const revealVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const responsiveRevealVariants = {
  hidden: ({ index, count, isMobile }) => {
    if (isMobile) return { opacity: 0, x: 0, y: 40 };
    if (count === 2) return { opacity: 0, x: index === 0 ? -100 : 100, y: 0 };
    if (count === 3) return { opacity: 0, x: index === 0 ? -100 : index === 2 ? 100 : 0, y: index === 1 ? -80 : 0 };
    if (index === 0) return { opacity: 0, x: -100, y: 0 };
    if (index === count - 1) return { opacity: 0, x: 100, y: 0 };
    return { opacity: 0, x: 0, y: index % 2 === 0 ? 80 : -80 };
  },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] } },
};

function subscribeToMobile(callback) {
  const mediaQuery = window.matchMedia("(max-width: 767px)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getIsMobile() {
  return window.matchMedia("(max-width: 767px)").matches;
}

export function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div className={className} variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }} transition={{ delay }}>
      {children}
    </motion.div>
  );
}

export function RevealList({ children, className = "" }) {
  const isMobile = useSyncExternalStore(subscribeToMobile, getIsMobile, () => false);
  const count = React.Children.count(children);

  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
      {React.Children.map(children, (child, index) => React.isValidElement(child) ? React.cloneElement(child, { animationIndex: index, animationCount: count, isMobile }) : child)}
    </motion.div>
  );
}

export function RevealItem({ children, className = "", animationIndex = 0, animationCount = 1, isMobile = false }) {
  return <motion.div className={`motion-reveal-item ${className}`} custom={{ index: animationIndex, count: animationCount, isMobile }} variants={responsiveRevealVariants}>{children}</motion.div>;
}

export function Typewriter({ text, speed = 70 }) {
  const [displayedText, setDisplayedText] = React.useState("");

  React.useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setDisplayedText(text.slice(0, index));
      if (index === text.length) window.clearInterval(timer);
    }, speed);
    return () => window.clearInterval(timer);
  }, [text, speed]);

  return <span className="typewriter-text">{displayedText}<span className="typewriter-caret" aria-hidden="true">|</span></span>;
}
