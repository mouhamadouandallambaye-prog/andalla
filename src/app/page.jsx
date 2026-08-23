"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { personalData } from "../data/portfolio";
import { FaArrowRight, FaCode, FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUpRight, BarChart3, Code2, Database } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { Reveal, RevealItem, RevealList, Typewriter } from "../components/Motion";
import Contact from "../components/Contact";
import TechMarquee from "../components/TechMarquee";
import HeroNameWave from "../components/HeroNameWave";
import CVTabs from "../components/CVTabs";

const floatingStats = [
  ["2+", "Années d'exp."],
  ["7+", "Projets BI & Web"],
  ["10+", "Technologies"],
  ["Active", "GitHub"],
];
const metricBursts = ["+1", "100%", "DATA", "BI"];
const statOffsets = [
  { x: -24, y: -18 },
  { x: 24, y: -18 },
  { x: -24, y: 18 },
  { x: 24, y: 18 },
];

function SectionHeading({ eyebrow, children, index }) {
  return <div className="section-heading inline-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{children}</h2></div>{index && <span className="section-index">{index}</span>}<div className="section-rule" aria-hidden="true"><span /></div></div>;
}

export default function Home() {
  const waveRef = useRef(null);
  const scanTimer = useRef(null);
  const [isScanning, setIsScanning] = useState(false);

  function triggerScan() {
    setIsScanning(true);
    waveRef.current?.triggerWave();
    window.clearTimeout(scanTimer.current);
    scanTimer.current = window.setTimeout(() => setIsScanning(false), 1150);
  }

  return (
    <div className="portfolio-shell">
      <main className="max-w-6xl mx-auto px-6">
        <Reveal><section id="about" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow role-heading">Business Intelligence &amp; Software Developer</p>
            <h1>Je transforme les données en <span><Typewriter text="clarté." /></span></h1>
            <p className="hero-description">{personalData.about} Je développe également des interfaces et logiciels avec React, Next.js, Python, C++ et Java.</p>
            <div className="hero-actions">
              <a href="/assets/CV_Mouhamadou_Andalla_Mbaye.pdf.pdf" download className="primary-action"><FaFileDownload /> Télécharger mon CV</a>
              <div className="social-links" aria-label="Réseaux sociaux">
                <a href={personalData.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href={personalData.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              </div>
            </div>
          </div>
          <div className={`hero-portrait-wrap ${isScanning ? "hero-scanning" : ""}`}>
            <HeroNameWave ref={waveRef} />
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <motion.div className="hero-portrait" onPointerDown={triggerScan} whileTap={{ scale: .97 }}><img src="/assets/photo.jpeg" alt={personalData.name} /><span className="scan-grid" aria-hidden="true" /><span className="scan-laser" aria-hidden="true" /></motion.div>
            {floatingStats.map(([value, label], index) => <motion.div className={`floating-stat floating-stat-${index + 1}`} key={label} animate={isScanning ? statOffsets[index] : { x: 0, y: 0 }} transition={{ type: "spring", stiffness: 360, damping: 15, mass: .65 }}><strong>{value}</strong><span>{label}</span><AnimatePresence>{isScanning && <motion.span className="metric-burst" initial={{ opacity: 0, y: 4, scale: .7 }} animate={{ opacity: [0, 1, 0], y: -34, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .9, delay: index * .06, ease: "easeOut" }}>{metricBursts[index]}</motion.span>}</AnimatePresence></motion.div>)}
          </div>
        </section></Reveal>

        <TechMarquee />

        <Reveal className="section-block projects-section"><section id="projects">
          <SectionHeading eyebrow="Sélection de travaux" index="02 / 04">Mes projets</SectionHeading>
          <RevealList className="projects-grid">
            {personalData.projects.map((project, index) => <RevealItem key={project.id}><TiltCard><article className="project-card"><div className="project-visual"><span className="project-number">0{index + 1}</span><img src={project.image} alt={project.title} /></div><div className="project-content"><p className="project-type">Power BI / Data</p><h3>{project.title}</h3><ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>{project.githubUrl && <a className="project-link" href={project.githubUrl} target="_blank" rel="noreferrer"><FaCode /> Voir le code sur GitHub <FaArrowRight /></a>}</div></article></TiltCard></RevealItem>)}
          </RevealList>
        </section></Reveal>

        <Reveal className="section-block services-section"><section id="services">
          <SectionHeading eyebrow="Ce que je peux apporter">Mes <span>Services.</span></SectionHeading>
          <div className="services-grid">{personalData.services.map((service) => { const Icon = service.icon === "chart" ? BarChart3 : service.icon === "database" ? Database : Code2; return <article className="service-card" key={service.number}><div className="service-card-top"><span className="service-number">{service.number}</span><Icon size={28} /></div><h3>{service.title}</h3><p>{service.description}</p><p className="service-impact">{service.impact}</p><ul>{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="tag-list">{service.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><a href="#contact" className="service-cta">Lancer un projet <ArrowUpRight size={16} /></a></article>; })}</div>
        </section></Reveal>

        <Reveal className="section-block"><CVTabs /></Reveal>

        <Reveal><Contact email={personalData.email} location={personalData.location} phone={personalData.phone} socials={personalData.socials} /></Reveal>
      </main>
    </div>
  );
}
