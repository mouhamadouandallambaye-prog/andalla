"use client";

import { personalData } from "../data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { SiPowerbi, SiMicrosoftsqlserver, SiPython, SiCplusplus, SiCisco } from "react-icons/si";
import { FaJava } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
      
      {/* SECTION 1: HERO */}
      <section id="about" className="flex flex-col md:flex-row items-center justify-between gap-12 pt-8">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#f97316] bg-[#f97316]/10 rounded-full border border-[#f97316]/20">
            {personalData.title}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Bonjour, je suis <br />
            <span className="text-[#f97316]">{personalData.name}</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            {personalData.about}
          </p>

          {/* Boutons d'action & Réseaux */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <a
              href="/assets/CV_Mouhamadou_Andalla_Mbaye.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#f97316] rounded-lg hover:bg-[#ea580c] transition-all shadow-lg shadow-[#f97316]/20"
            >
              <FaFileDownload /> Télécharger CV
            </a>
            <div className="flex gap-3">
              <a href={personalData.socials.github} target="_blank" rel="noreferrer" className="p-3 text-gray-400 hover:text-white bg-[#111d33] rounded-lg border border-white/5 hover:border-[#f97316] transition-all">
                <FaGithub className="text-xl" />
              </a>
              <a href={personalData.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 text-gray-400 hover:text-white bg-[#111d33] rounded-lg border border-white/5 hover:border-[#f97316] transition-all">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Cadre Photo / Avatar */}
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-tr from-[#f97316] to-[#111d33] p-1">
            <div className="w-full h-full bg-[#0a111e] rounded-2xl flex items-center justify-center overflow-hidden border border-white/10">
              {/* Remplacez la source par votre photo dans public/assets/photo.png */}
              <img src="/assets/photo.png" alt={personalData.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <span className="text-gray-500 text-sm font-mono">Photo.png</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SKILLS */}
      <section id="skills" className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
          <span className="text-[#f97316]">#</span> Compétences Techniques
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalData.skills.map((skillGroup, idx) => (
            <div key={idx} className="p-6 bg-[#111d33] rounded-xl border border-white/5 hover:border-[#f97316]/40 transition-all">
              <h3 className="text-lg font-semibold text-[#f97316] mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, itemIdx) => (
                  <span key={itemIdx} className="px-3 py-1 text-xs font-medium bg-[#0a111e] text-gray-300 rounded-md border border-white/5">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: PROJETS */}
      <section id="projects" className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
          <span className="text-[#f97316]">#</span> Projets Récents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalData.projects.map((project) => (
            <div key={project.id} className="bg-[#111d33] rounded-xl overflow-hidden border border-white/5 hover:border-[#f97316]/50 transition-all flex flex-col justify-between">
              <div className="h-48 bg-[#0a111e] relative flex items-center justify-center border-b border-white/5">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <span className="text-gray-500 text-xs font-mono">{project.title} (Aperçu)</span>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="px-2.5 py-1 text-[11px] font-semibold text-[#f97316] bg-[#f97316]/10 rounded border border-[#f97316]/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: PARCOURS ACADÉMIQUE */}
      <section id="education" className="space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
          <span className="text-[#f97316]">#</span> Formation & Cursus
        </h2>
        <div className="space-y-4">
          {personalData.education.map((edu, idx) => (
            <div key={idx} className="p-6 bg-[#111d33] rounded-xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                <p className="text-gray-400 text-sm">{edu.institution}</p>
              </div>
              <span className="px-3 py-1 text-xs font-medium text-[#f97316] bg-[#f97316]/10 rounded-full border border-[#f97316]/20 self-start md:self-auto">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}