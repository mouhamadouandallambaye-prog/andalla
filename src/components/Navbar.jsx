"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { personalData } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    ["À propos", "about"],
    ["Services", "services"],
    ["Projets", "projects"],
    ["Parcours", "cv"],
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a111e]/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 min-h-20 flex items-center justify-between gap-6">
        <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-[#f97316] transition-colors" onClick={() => setIsOpen(false)}>
          Andalla<span className="text-[#f97316]">.</span>
        </Link>

        <div className="flex items-center justify-end gap-6">
          <nav className={`${isOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-5 border-b border-white/10 bg-[#0a111e] px-6 py-6 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}>
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link text-base font-medium text-gray-300 hover:text-[#f97316] transition-colors" onClick={() => setIsOpen(false)}>
                <span>{label}</span>
              </a>
            ))}
          </nav>

          <a
            href={`mailto:${personalData.email}`} 
            className="hidden md:inline-flex px-4 py-2 text-sm font-semibold text-white bg-[#f97316] rounded-lg hover:bg-[#ea580c] transition-colors"
          >
            Contactez moi
          </a>
        </div>

        <button type="button" className="md:hidden p-2 text-gray-300 hover:text-[#f97316]" aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}