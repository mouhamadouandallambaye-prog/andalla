"use client";

import { personalData } from "../data/portfolio";
import { FaArrowRight, FaChartBar, FaCode, FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiPython, SiSqlite } from "react-icons/si";
import TiltCard from "../components/TiltCard";
import { Reveal, RevealItem, RevealList, Typewriter } from "../components/Motion";
import Contact from "../components/Contact";
import TechMarquee from "../components/TechMarquee";

const toolIcons = {
  "Power BI": FaChartBar,
  Python: SiPython,
  "SQL Server": SiSqlite,
};

const floatingStats = [
  ["2+", "Années d'exp."],
  ["2", "Projets BI & Web"],
  ["10+", "Technologies"],
  ["Active", "GitHub"],
];

function SectionHeading({ eyebrow, children, index }) {
  return <div className="section-heading inline-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{children}</h2></div>{index && <span className="section-index">{index}</span>}<div className="section-rule" aria-hidden="true"><span /></div></div>;
}

export default function Home() {
  return (
    <div className="portfolio-shell">
      <main className="max-w-6xl mx-auto px-6">
        <Reveal><section id="about" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow role-heading">Business Intelligence &amp; Software Developer</p>
            <h1>Je transforme les données en <span><Typewriter text="clarté." /></span></h1>
            <p className="hero-description">{personalData.about} Je développe également des interfaces et logiciels avec React, Next.js, Python, C++ et Java.</p>
            <div className="hero-actions">
              <a href="/assets/CV_Mouhamadou_Andalla_Mbaye.pdf" download className="primary-action"><FaFileDownload /> Télécharger mon CV</a>
              <div className="social-links" aria-label="Réseaux sociaux">
                <a href={personalData.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href={personalData.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              </div>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <p className="portrait-heading">Moi c&apos;est Mouhamadou Andalla Mbaye</p>
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-portrait"><img src="/assets/photo.jpeg" alt={personalData.name} /></div>
            {floatingStats.map(([value, label], index) => <div className={`floating-stat floating-stat-${index + 1}`} key={label}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </section></Reveal>

        <TechMarquee />

        <Reveal><section className="stats-strip" aria-label="Chiffres clés">
          {personalData.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </section></Reveal>

        <Reveal className="section-block"><section id="skills">
          <SectionHeading eyebrow="Ma double expertise">Analyser, construire,<br /><span>faire avancer.</span></SectionHeading>
          <RevealList className="skills-grid">
            {personalData.skills.map((group) => {
              const Icon = toolIcons[group.items[0]];
              return <RevealItem key={group.category}><article className="skill-card"><div className="skill-icon">{Icon ? <Icon /> : "#"}</div><h3>{group.category}</h3><div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article></RevealItem>;
            })}
          </RevealList>
        </section></Reveal>

        <Reveal className="section-block projects-section"><section id="projects">
          <SectionHeading eyebrow="Sélection de travaux" index="02 / 04">Mes projets</SectionHeading>
          <RevealList className="projects-grid">
            {personalData.projects.map((project, index) => <RevealItem key={project.id}><TiltCard><article className="project-card"><div className="project-visual"><span className="project-number">0{index + 1}</span><img src={project.image} alt={project.title} /></div><div className="project-content"><p className="project-type">Power BI / Data</p><h3>{project.title}</h3><ul className="project-highlights">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>{project.githubUrl && <a className="project-link" href={project.githubUrl} target="_blank" rel="noreferrer"><FaCode /> Voir le code sur GitHub <FaArrowRight /></a>}</div></article></TiltCard></RevealItem>)}
          </RevealList>
        </section></Reveal>

        <Reveal className="section-block services-section"><section>
          <SectionHeading eyebrow="Ce que je peux apporter">Une approche pensée<br />pour <span>l&apos;action.</span></SectionHeading>
          <div className="services-list">{personalData.services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.description}</p><div className="tag-list">{service.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div><FaArrowRight className="service-arrow" /></article>)}</div>
        </section></Reveal>

        <Reveal className="section-block education-section"><section id="education">
          <SectionHeading eyebrow="Formation & cursus" index="03 / 04">Mon parcours</SectionHeading>
          <div className="education-list">{personalData.education.map((item) => <article key={item.degree}><span className="education-period">{item.period}</span><div><h3>{item.degree}</h3><p>{item.institution}</p></div></article>)}</div>
        </section></Reveal>

        <Reveal><Contact email={personalData.email} location={personalData.location} /></Reveal>
      </main>
    </div>
  );
}
