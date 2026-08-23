"use client";

import { useState } from "react";
import { ArrowUpRight, Braces, Briefcase, Code2, Database, FileCode2, GitBranch, Globe2, GraduationCap, User, MapPin, Phone, Languages, Sparkles, Terminal } from "lucide-react";
import { personalData } from "../data/portfolio";

const tabs = [
  ["experience", "Expérience", Briefcase],
  ["education", "Formation", GraduationCap],
  ["skills", "Compétences", Code2],
  ["about", "À propos", User],
];

const skillIcons = { "Power BI (avancé)": Database, DAX: Code2, "Power Query": FileCode2, "SQL (intermédiaire)": Database, "Python (intermédiaire)": Terminal, "Excel (avancé)": FileCode2, MySQL: Database, "Data Storytelling": Globe2, "Gestion CRM": User, GitHub: GitBranch, "Modélisation en étoile": Database, Reporting: FileCode2, "Analyse stratégique": Code2 };

export default function CVTabs() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="cv" className="cv-section">
      <div className="section-heading inline-heading"><div><p className="eyebrow">Repères professionnels</p><h2><span>Mon parcours.</span></h2></div><span className="section-index">03 / 04</span><div className="section-rule" aria-hidden="true"><span /></div></div>
      <div className="cv-tabs" role="tablist" aria-label="Parcours professionnel">
        {tabs.map(([id, label, Icon]) => <button key={id} type="button" role="tab" aria-selected={activeTab === id} className={activeTab === id ? "active" : ""} onClick={() => setActiveTab(id)}><Icon size={17} />{label}</button>)}
      </div>
      <div className="cv-panel" data-tab={activeTab} role="tabpanel">
        {activeTab === "experience" && <div className="timeline-grid">{personalData.experience.map((item) => <article className="timeline-card" key={`${item.period}-${item.role}`}><span className="timeline-period">{item.period}</span><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.description}</p></article>)}</div>}
        {activeTab === "education" && <div className="timeline-grid">{personalData.education.map((item) => <article className="timeline-card" key={item.degree}><span className="timeline-period">{item.period}</span><h3>{item.degree}</h3><a className="timeline-company school-link" href={item.schoolUrl} target="_blank" rel="noreferrer">{item.institution}<ArrowUpRight size={14} /></a><p>{item.focus}</p></article>)}</div>}
        {activeTab === "skills" && <div className="cv-skill-groups">{personalData.skills.map((group) => <section key={group.category}><h3>{group.category}</h3><div className="cv-skills-grid">{group.items.map((skill) => { const Icon = skillIcons[skill]; return <article className="cv-skill" key={skill}><span>{Icon ? <Icon /> : "•"}</span><strong>{skill}</strong></article>; })}</div></section>)}</div>}
        {activeTab === "about" && <div className="about-panel"><p className="about-lead">{personalData.about}</p><div className="personal-grid"><div><User /><span>Nom complet<strong>{personalData.name}</strong></span></div><div><Phone /><span>Téléphone<strong>{personalData.phone}</strong></span></div><div><MapPin /><span>Localisation<strong>{personalData.location}</strong></span></div><div><Sparkles /><span>Statut<strong>{personalData.status}</strong></span></div><div><Code2 /><span>Spécialités<strong>{personalData.specialties}</strong></span></div><div><Languages /><span>Langues<strong>{personalData.languages}</strong></span></div><div><Globe2 /><span>Portfolio<strong>{personalData.website}</strong></span></div><div><Phone /><span>Email<strong>{personalData.email}</strong></span></div><div><User /><span>LinkedIn<strong>Profil professionnel</strong></span></div></div><div className="soft-skills"><span>Soft skills</span>{personalData.softSkills.map((skill) => <strong key={skill}>{skill}</strong>)}</div></div>}
      </div>
    </section>
  );
}