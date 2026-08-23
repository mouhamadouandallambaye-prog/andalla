"use client";

import { useEffect, useState } from "react";
import { BriefcaseBusiness, FolderKanban, Home, Mail } from "lucide-react";

const items = [
  ["about", "Portfolio", Home],
  ["cv", "Parcours", BriefcaseBusiness],
  ["projects", "Projets", FolderKanban],
  ["contact", "Contact", Mail],
];

export default function SidebarNav() {
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const sections = items
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar-nav" aria-label="Navigation rapide">
      <span className="sidebar-line" aria-hidden="true" />
      {items.map(([id, label, Icon]) => (
        <a className={`sidebar-link ${activeId === id ? "active" : ""}`} href={`#${id}`} key={id} aria-label={label} aria-current={activeId === id ? "location" : undefined}>
          <Icon size={18} strokeWidth={1.8} />
          <span>{label}</span>
        </a>
      ))}
    </aside>
  );
}
