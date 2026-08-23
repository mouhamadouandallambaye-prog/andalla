"use client";

import { personalData } from "../data/portfolio";
import { FaArrowRight, FaEnvelope, FaFileDownload, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { SiPowerbi, SiPython, SiMicrosoftsqlserver } from "react-icons/si";

const toolIcons = {
  "Power BI": SiPowerbi,
  Python: SiPython,
  "SQL Server": SiMicrosoftsqlserver,
};

export default function Home() {
  return (
    <div className="portfolio-shell">
      <main className="max-w-6xl mx-auto px-6">
        <section id="about" className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">{personalData.title}</p>
            <h1>Je transforme les données en <span>clarté.</span></h1>
            <p className="hero-description">{personalData.about}</p>
            <div className="hero-actions">
              <a href="/assets/CV_Mouhamadou_Andalla_Mbaye.pdf" download className="primary-action"><FaFileDownload /> Télécharger mon CV</a>
              <div className="social-links" aria-label="Réseaux sociaux">
                <a href={personalData.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href={personalData.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              </div>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="hero-portrait"><img src="/assets/photo.jpeg" alt={personalData.name} /></div>
            <div className="portrait-note"><span /> Disponible pour échanger</div>
          </div>
        </section>

        <section className="stats-strip" aria-label="Chiffres clés">
          {personalData.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </section>

        <section id="skills" className="section-block">
          <div className="section-heading"><p className="eyebrow">Mon expertise</p><h2>Des outils pour lire<br /><span>ce qui compte.</span></h2></div>
          <div className="skills-grid">
            {personalData.skills.map((group) => {
              const Icon = toolIcons[group.items[0]];
              return <article className="skill-card" key={group.category}><div className="skill-icon">{Icon ? <Icon /> : "#"}</div><h3>{group.category}</h3><div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>;
            })}
          </div>
        </section>

        <section id="projects" className="section-block projects-section">
          <div className="section-heading inline-heading"><div><p className="eyebrow">Sélection de travaux</p><h2>Mes projets</h2></div><span className="section-index">02 / 04</span></div>
          <div className="projects-grid">
            {personalData.projects.map((project, index) => <article className="project-card" key={project.id}><div className="project-visual"><span className="project-number">0{index + 1}</span><img src={project.image} alt="" /><div className="project-placeholder">{project.title}</div></div><div className="project-content"><p className="project-type">Power BI / Data</p><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div></article>)}
          </div>
        </section>

        <section className="section-block services-section">
          <div className="section-heading"><p className="eyebrow">Ce que je peux apporter</p><h2>Une approche pensée<br />pour <span>l&apos;action.</span></h2></div>
          <div className="services-list">{personalData.services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.description}</p><div className="tag-list">{service.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div><FaArrowRight className="service-arrow" /></article>)}</div>
        </section>

        <section id="education" className="section-block education-section">
          <div className="section-heading inline-heading"><div><p className="eyebrow">Formation & cursus</p><h2>Mon parcours</h2></div><span className="section-index">03 / 04</span></div>
          <div className="education-list">{personalData.education.map((item) => <article key={item.degree}><span className="education-period">{item.period}</span><div><h3>{item.degree}</h3><p>{item.institution}</p></div></article>)}</div>
        </section>

        <section id="contact" className="contact-section">
          <div><p className="eyebrow">Travaillons ensemble</p><h2>Un projet data<br /><span>en tête ?</span></h2><p>Échangeons sur tes besoins en analyse, reporting ou visualisation de données.</p></div>
          <div className="contact-details"><a href={`mailto:${personalData.email}`}><FaEnvelope /> {personalData.email}</a><p><FaMapMarkerAlt /> {personalData.location}</p><a className="primary-action" href={`mailto:${personalData.email}?subject=Projet%20data`}>Me contacter <FaArrowRight /></a></div>
        </section>
      </main>
    </div>
  );
}
