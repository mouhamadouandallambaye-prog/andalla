"use client";

const technologies = [
  "Power BI", "DAX", "Power Query", "SQL", "Python", "Data Modeling",
  "React", "Next.js", "JavaScript", "C++", "Java", "Tailwind CSS", "Git",
];

export default function TechMarquee() {
  const items = [...technologies, ...technologies];

  return (
    <section className="tech-marquee" aria-label="Technologies maîtrisées">
      <div className="tech-marquee-track">
        {items.map((technology, index) => (
          <span className="tech-marquee-item" key={`${technology}-${index}`}>
            <span className="tech-marquee-dot" aria-hidden="true" />
            {technology}
          </span>
        ))}
      </div>
    </section>
  );
}