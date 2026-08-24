"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { personalData } from "../data/portfolio";
import { FaArrowRight, FaCode, FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowUpRight, BarChart3, BriefcaseBusiness, Code2, Database, FolderKanban } from "lucide-react";
import TiltCard from "../components/TiltCard";
import { Reveal, RevealItem, RevealList, Typewriter } from "../components/Motion";
import Contact from "../components/Contact";
import TechMarquee from "../components/TechMarquee";
import HeroNameWave from "../components/HeroNameWave";
import CVTabs from "../components/CVTabs";

const floatingStats = [
  ["2+", "Années de pratique", BriefcaseBusiness],
  ["7+", "Projets BI & Web", FolderKanban],
  ["20+", "Technologies", Code2],
  ["Active", "GitHub", FaGithub],
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
            <p className="eyebrow role-heading">Analyste BI &amp; développeur de solutions</p>
            <h1>Je transforme les données en <span><Typewriter text="clarté." /></span></h1>
            <p className="hero-description">{personalData.about} Je développe également des interfaces et logiciels avec React, Next.js, Python, C++ et Java.</p>
            <div className="hero-actions">
              <a href="/assets/CV_Mouhamadou_Andalla_Mbaye.pdf.pdf" download className="primary-action"><FaFileDownload /> Recevoir mon CV</a>
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
            {floatingStats.map(([value, label, Icon], index) => <motion.div className={`floating-stat floating-stat-${index + 1}`} key={label} animate={isScanning ? statOffsets[index] : { x: 0, y: 0 }} transition={{ type: "spring", stiffness: 360, damping: 15, mass: .65 }}><div className="floating-stat-heading"><Icon size={15} aria-hidden="true" /><strong>{value}</strong></div><span>{label}</span><AnimatePresence>{isScanning && <motion.span className="metric-burst" initial={{ opacity: 0, y: 4, scale: .7 }} animate={{ opacity: [0, 1, 0], y: -34, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: .9, delay: index * .06, ease: "easeOut" }}>{metricBursts[index]}</motion.span>}</AnimatePresence></motion.div>)}
          </div>
        </section></Reveal>

        <TechMarquee />

        <Reveal className="section-block projects-section"><section id="projects">
          <SectionHeading eyebrow="Analyses mises en situation" index="02 / 04">Études de cas</SectionHeading>
          <RevealList className="projects-grid">
            {personalData.projects.map((project, index) => <RevealItem key={project.id}><TiltCard><article className="project-card"><div className="project-visual"><span className="project-number">0{index + 1}</span><img src={project.image} alt={project.title} /></div><div className="project-content"><p className="project-type">Power BI / Data</p><h3>{project.title}</h3><ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>{project.githubUrl && <a className="project-link" href={project.githubUrl} target="_blank" rel="noreferrer"><FaCode /> Voir le code sur GitHub <FaArrowRight /></a>}</div></article></TiltCard></RevealItem>)}
          </RevealList>
        </section></Reveal>

        <Reveal className="section-block services-section"><section id="services">
          <SectionHeading eyebrow="Mon terrain d'action">Mes <span>expertises.</span></SectionHeading>
          <RevealList className="services-grid">{personalData.services.map((service, index) => { const Icon = service.icon === "chart" ? BarChart3 : service.icon === "database" ? Database : Code2; return <RevealItem key={service.number}><article className={`service-card ${index === 0 ? "service-card-featured" : "service-card-secondary"}`}><div className="service-card-top"><span className="service-number">{service.number}</span><Icon size={28} /></div><h3>{service.title}</h3><p>{service.description}</p><p className="service-impact">{service.impact}</p><div className="service-metric" style={{ "--metric-value": `${service.score}%` }}><div><span>{service.metric}</span><strong>{service.score}%</strong></div><span className="service-meter"><span /></span></div><ul>{service.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><div className="tag-list">{service.tools.map((tool) => <span key={tool}>{tool}</span>)}</div><a href="#contact" className="service-cta">Discuter du besoin <ArrowUpRight size={16} /></a></article></RevealItem>; })}</RevealList>
        </section></Reveal>

        <Reveal className="section-block"><CVTabs /></Reveal>

        <Reveal><Contact email={personalData.email} location={personalData.location} phone={personalData.phone} socials={personalData.socials} /></Reveal>
      </main>
    </div>
  );
}
