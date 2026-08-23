"use client";

import { motion } from "framer-motion";
import React from "react";

const revealVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div className={className} variants={revealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }} transition={{ delay }}>
      {children}
    </motion.div>
  );
}

export function RevealList({ children, className = "" }) {
  return (
    <motion.div className={className} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "" }) {
  return <motion.div className={className} variants={revealVariants}>{children}</motion.div>;
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
