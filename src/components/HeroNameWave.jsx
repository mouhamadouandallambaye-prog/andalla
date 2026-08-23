"use client";

import { forwardRef, useImperativeHandle } from "react";
import { motion, useAnimationControls } from "framer-motion";

const name = "Moi c'est Mouhamadou Andalla Mbaye";
const waveVariants = {
  idle: { scale: 1, y: 0 },
  wave: { scale: [1, 1.45, 1], y: [0, -10, 0], transition: { duration: 0.4, ease: "easeInOut" } },
};

const HeroNameWave = forwardRef(function HeroNameWave(_, ref) {
  const controls = useAnimationControls();
  const letters = Array.from(name);

  async function triggerWave() {
    controls.set("idle");
    await controls.start("wave");
  }

  useImperativeHandle(ref, () => ({ triggerWave }), []);

  return (
    <motion.button type="button" className="portrait-heading hero-name-wave" onClick={triggerWave} animate={controls} initial="idle" variants={{ wave: { transition: { staggerChildren: 0.022 } } }} aria-label="Animer mon nom">
      {letters.map((letter, index) => (
        <motion.span key={`${letter}-${index}`} variants={waveVariants} aria-hidden="true">
          {letter === " " ? "\u00a0" : letter}
        </motion.span>
      ))}
    </motion.button>
  );
});

export default HeroNameWave;