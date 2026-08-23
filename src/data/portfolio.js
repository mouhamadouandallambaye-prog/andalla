export const personalData = {
  name: "Mouhamadou Andalla Mbaye",
  title: "Business Intelligence & Data Analyst",
  email: "m.andalla.mbaye@gmail.com",
  location: "Dakar, Sénégal",
  about: "Étudiant en Informatique de Gestion (IAM) et Sciences Économiques & Gestion (UVS). Passionné par la transformation de données complexes en leviers décisionnels stratégiques grâce à Power BI, SQL et l'analyse de données.",
  stats: [
    { value: "2+", label: "Années d'apprentissage" },
    { value: "2", label: "Projets présentés" },
    { value: "10+", label: "Technologies étudiées" },
  ],
  
  socials: {
    github: "https://github.com/mouhamadouandallambaye-prog",
    linkedin: "https://www.linkedin.com/in/mouhamadou-andalla-mbaye-4681442a9",
  },

  skills: [
    { category: "Data & Analytics", items: ["Power BI", "DAX", "Power Query", "SQL Server", "Python", "Excel Advance"] },
    { category: "Développement & Web", items: ["C++", "Java", "HTML/CSS", "Git & GitHub"] },
    { category: "Infrastructure & Réseaux", items: ["Cisco Packet Tracer", "Subnetting", "NAT", "Administration IP"] },
  ],

  education: [
    {
      degree: "Bachelor en Informatique de Gestion (BIG)",
      institution: "Institut Africain de Management (IAM)",
      period: "En cours",
    },
    {
      degree: "Licence en Sciences Économiques et de Gestion (SEG)",
      institution: "Université Virtuelle du Sénégal (UVS)",
      period: "En cours",
    },
  ],

  services: [
    {
      number: "01",
      title: "Dashboards décisionnels",
      description: "Des tableaux de bord Power BI lisibles et orientés vers les indicateurs qui aident vraiment à décider.",
      tools: ["Power BI", "DAX", "Power Query"],
    },
    {
      number: "02",
      title: "Analyse & préparation des données",
      description: "Nettoyage, transformation et exploration de données pour faire émerger des tendances fiables.",
      tools: ["SQL Server", "Python", "Excel"],
    },
    {
      number: "03",
      title: "Modélisation BI",
      description: "Des modèles de données structurés pour suivre la performance et garder une information cohérente.",
      tools: ["SQL", "Data Modeling", "DAX"],
    },
  ],

  projects: [
    {
      id: "togo-labs",
      title: "Tableau de Bord - Togo Labs",
      description: "Conception d'un dashboard interactif sous Power BI pour le suivi des indicateurs clés et l'analyse de données d'exploitation.",
      technologies: ["Power BI", "DAX", "Power Query", "Excel"],
      image: "/assets/togo-labs.png", // Image à placer dans public/assets
      embedUrl: "", // Lien d'intégration Power BI si disponible
    },
    {
      id: "velocity-sales",
      title: "Analyse des Ventes - Velocity Sales",
      description: "Modélisation des données de ventes, création de KPIs de performance commerciale et prévisions sous Power BI & SQL Server.",
      technologies: ["Power BI", "SQL Server", "DAX", "Data Modeling"],
      image: "/assets/velocity-sales.png", // Image à placer dans public/assets
      embedUrl: "",
    },
  ],
};