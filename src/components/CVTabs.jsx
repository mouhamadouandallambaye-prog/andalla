"use client";

import { useState } from "react";
import { ArrowUpRight, Briefcase, CalendarDays, CheckCircle2, Code2, Database, Download, FileCode2, GitBranch, Globe2, GraduationCap, Search, ShieldCheck, User, MapPin, Phone, Languages, Sparkles, Terminal } from "lucide-react";
import { personalData } from "../data/portfolio";

const tabs = [
  ["experience", "Expérience", Briefcase],
  ["education", "Formation", GraduationCap],
  ["skills", "Compétences", Code2],
  ["about", "À propos", User],
  ["certifications", "Certifications", ShieldCheck],
  ["recommendations", "Recommandations", Briefcase],
];

const skillIcons = { "Power BI (avancé)": Database, DAX: Code2, "Power Query": FileCode2, "SQL (intermédiaire)": Database, "Python (intermédiaire)": Terminal, "Excel (avancé)": FileCode2, MySQL: Database, "Data Storytelling": Globe2, "Gestion CRM": User, GitHub: GitBranch, "Modélisation en étoile": Database, Reporting: FileCode2, "Analyse stratégique": Code2 };

function getCertificationStatus(certification) {
  if (!certification.expiresAt) return { label: "Valide sans expiration", className: "valid" };
  return new Date(certification.expiresAt) >= new Date() ? { label: "Valide", className: "valid" } : { label: "Expirée", className: "expired" };
}

export default function CVTabs() {
  const [activeTab, setActiveTab] = useState("experience");
  const [certificationQuery, setCertificationQuery] = useState("");
  const [certificationFilter, setCertificationFilter] = useState("Toutes");
  const certificationProviders = ["Toutes", ...new Set(personalData.certifications.map((certification) => certification.issuer))];
  const normalizedQuery = certificationQuery.trim().toLowerCase();
  const visibleCertifications = personalData.certifications.filter((certification) => {
    const searchableText = [certification.title, certification.issuer, certification.provider, certification.category, ...certification.skills].join(" ").toLowerCase();
    return (certificationFilter === "Toutes" || certification.issuer === certificationFilter) && (!normalizedQuery || searchableText.includes(normalizedQuery));
  }).sort((first, second) => new Date(second.obtainedAt) - new Date(first.obtainedAt));
  const validCertificationCount = personalData.certifications.filter((certification) => getCertificationStatus(certification).className === "valid").length;

  return (
    <section id="cv" className="cv-section">
      <div className="section-heading inline-heading"><div><p className="eyebrow">Repères professionnels</p><h2><span>Mon itinéraire.</span></h2></div><span className="section-index">03 / 04</span><div className="section-rule" aria-hidden="true"><span /></div></div>
      <div className="cv-tabs" role="tablist" aria-label="Parcours professionnel">
        {tabs.map(([id, label, Icon]) => <button key={id} type="button" role="tab" aria-selected={activeTab === id} className={activeTab === id ? "active" : ""} onClick={() => setActiveTab(id)}><Icon size={17} />{label}</button>)}
      </div>
      <div className="cv-panel" data-tab={activeTab} role="tabpanel">
        {activeTab === "experience" && <div className="timeline-grid">{personalData.experience.map((item) => <article className="timeline-card" key={`${item.period}-${item.role}`}><span className="timeline-period">{item.period}</span><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><p>{item.description}</p></article>)}</div>}
        {activeTab === "education" && <div className="timeline-grid">{personalData.education.map((item) => <article className="timeline-card" key={item.degree}><span className="timeline-period">{item.period}</span><h3>{item.degree}</h3><a className="timeline-company school-link" href={item.schoolUrl} target="_blank" rel="noreferrer">{item.institution}<ArrowUpRight size={14} /></a><p>{item.focus}</p></article>)}</div>}
        {activeTab === "skills" && <div className="cv-skill-groups">{personalData.skills.map((group) => <section key={group.category}><h3>{group.category}</h3><div className="cv-skills-grid">{group.items.map((skill) => { const Icon = skillIcons[skill]; const score = skill.includes("avancé") ? 90 : skill.includes("intermédiaire") ? 74 : 82; return <article className="cv-skill" key={skill}><span>{Icon ? <Icon /> : "•"}</span><div><strong>{skill}</strong><span className="skill-meter"><span style={{ width: `${score}%` }} /></span></div></article>; })}</div></section>)}</div>}
        {activeTab === "about" && <div className="about-panel"><p className="about-lead">{personalData.about}</p><div className="personal-grid"><div><User /><span>Nom complet<strong>{personalData.name}</strong></span></div><div><Phone /><span>Téléphone<strong>{personalData.phone}</strong></span></div><div><MapPin /><span>Localisation<strong>{personalData.location}</strong></span></div><div><Sparkles /><span>Statut<strong>{personalData.status}</strong></span></div><div><Code2 /><span>Spécialités<strong>{personalData.specialties}</strong></span></div><div><Languages /><span>Langues<strong>{personalData.languages}</strong></span></div><div><Globe2 /><span>Portfolio<strong>{personalData.website}</strong></span></div><div><Phone /><span>Email<strong>{personalData.email}</strong></span></div><div><User /><span>LinkedIn<strong>Profil professionnel</strong></span></div></div><div className="soft-skills"><span>Soft skills</span>{personalData.softSkills.map((skill) => <strong key={skill}>{skill}</strong>)}</div></div>}
        {activeTab === "certifications" && <div className="certification-panel"><div className="certification-overview"><div><span className="eyebrow">Portfolio de preuves</span><p>Une vue triée et filtrable de mes certifications.</p></div><div className="certification-stats"><span><strong>{personalData.certifications.length}</strong> certifications</span><span><strong>{validCertificationCount}</strong> valides</span></div></div><div className="certification-controls"><label className="certification-search"><Search size={16} /><span className="sr-only">Rechercher une certification</span><input type="search" value={certificationQuery} onChange={(event) => setCertificationQuery(event.target.value)} placeholder="Rechercher un titre, une compétence..." /></label><div className="certification-filters" role="group" aria-label="Filtrer par organisme">{certificationProviders.map((provider) => <button type="button" className={certificationFilter === provider ? "active" : ""} key={provider} onClick={() => setCertificationFilter(provider)}>{provider}</button>)}</div></div>{visibleCertifications.length > 0 ? <div className="certifications-grid">{visibleCertifications.map((certification) => { const status = getCertificationStatus(certification); return <article className="certification-card" key={certification.file}><div className="certification-badge"><ShieldCheck size={26} /><span>Certificat<br />vérifiable</span><small className={`certification-status ${status.className}`}><CheckCircle2 size={12} />{status.label}</small></div><div className="certification-content"><div className="certification-brands"><div><img src={certification.issuerLogo} alt={`Logo ${certification.issuer}`} /><span>{certification.issuer}</span></div><span className="certification-partner">partenaire</span><div><img src={certification.providerLogo} alt={`Logo ${certification.provider}`} /><span>{certification.provider}</span></div></div><h3>{certification.title}</h3><p className="certification-issued">Délivrée par <strong className="certification-company">{certification.issuer}</strong> avec <strong className="certification-company">{certification.provider}</strong></p><div className="certification-meta"><span><CalendarDays size={15} />Obtention<strong>{certification.obtained}</strong></span><span><CalendarDays size={15} />Expiration<strong>{certification.expires}</strong></span></div><div className="certification-skills">{certification.skills.map((skill) => <span key={skill}>{skill}</span>)}</div><p className="certification-note">{certification.verificationNote}</p><a className="recommendation-download certification-download" href={certification.file} download><Download size={17} /> Vérifier le certificat</a></div></article>; })}</div> : <p className="certification-empty">Aucune certification ne correspond à cette recherche.</p>}</div>}
        {activeTab === "recommendations" && <div className="recommendations-grid">{personalData.recommendations.map((recommendation) => <article className="recommendation-card" key={recommendation.file}><div className="recommendation-copy"><span className="timeline-period">Recommandation professionnelle</span><h3>{recommendation.title}</h3><p className="recommendation-author">{recommendation.author}</p><blockquote>&ldquo;{recommendation.quote}&rdquo;</blockquote></div><a className="recommendation-download" href={recommendation.file} download aria-label={`Télécharger ${recommendation.title}`}><Download size={17} /> Télécharger</a></article>)}</div>}
      </div>
    </section>
  );
}