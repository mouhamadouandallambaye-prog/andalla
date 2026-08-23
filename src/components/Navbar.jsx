import Link from "next/link";
import { personalData } from "@/data/portfolio";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0a111e]/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Nom */}
        <Link href="/" className="text-xl font-bold tracking-tight text-white hover:text-[#f97316] transition-colors">
          Andalla<span className="text-[#f97316]">.</span>
        </Link>

        {/* Liens de navigation */}
        <nav className="flex gap-8 text-sm font-medium text-gray-300">
          <a href="#about" className="hover:text-[#f97316] transition-colors">À propos</a>
          <a href="#skills" className="hover:text-[#f97316] transition-colors">Compétences</a>
          <a href="#projects" className="hover:text-[#f97316] transition-colors">Projets</a>
          <a href="#education" className="hover:text-[#f97316] transition-colors">Parcours</a>
        </nav>

        {/* Bouton Contact */}
        <a 
          href={`mailto:${personalData.email}`} 
          className="hidden md:inline-flex px-4 py-2 text-sm font-semibold text-white bg-[#f97316] rounded-lg hover:bg-[#ea580c] transition-colors"
        >
          Me contacter
        </a>
      </div>
    </header>
  );
}