"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Moon, Sun } from "lucide-react";
import { personalData } from "@/data/portfolio";

const themeStorageKey = "portfolio-theme";

function subscribeToTheme(callback) {
  window.addEventListener("portfolio-theme-change", callback);
  return () => window.removeEventListener("portfolio-theme-change", callback);
}

function getStoredTheme() {
  return window.localStorage.getItem(themeStorageKey) === "light" ? "light" : "dark";
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useSyncExternalStore(subscribeToTheme, getStoredTheme, () => "dark");
  const isLight = theme === "light";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const nextTheme = isLight ? "dark" : "light";
    window.localStorage.setItem(themeStorageKey, nextTheme);
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }

  const links = [
    ["À propos", "about"],
    ["Services", "services"],
    ["Projets", "projects"],
    ["Parcours", "cv"],
  ];

  return (
    <header className="site-header sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 min-h-20 flex items-center justify-between gap-6">
        <Link href="/" className="brand-link text-xl font-bold tracking-tight transition-colors" onClick={() => setIsOpen(false)}>
          Andalla<span className="brand-mark">.</span>
        </Link>

        <div className="flex items-center justify-end gap-6">
          <nav className={`${isOpen ? "flex" : "hidden"} desktop-nav absolute left-0 right-0 top-full flex-col gap-5 px-6 py-6 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}>
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link nav-anchor text-base font-medium transition-colors" onClick={() => setIsOpen(false)}>
                <span>{label}</span>
              </a>
            ))}
          </nav>

          <a
            href={`mailto:${personalData.email}`} 
            className="contact-nav-link hidden md:inline-flex px-4 py-2 text-sm font-semibold rounded-lg transition-colors"
          >
            Contactez moi
          </a>
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={isLight ? "Activer le thème sombre" : "Activer le thème clair"} title={isLight ? "Thème sombre" : "Thème clair"}>
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        <button type="button" className="mobile-menu-button md:hidden p-2" aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}