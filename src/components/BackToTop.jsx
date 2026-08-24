"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="back-to-top"
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 18, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.85 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Retour en haut"
          title="Retour en haut"
        >
          <ArrowUp size={18} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
