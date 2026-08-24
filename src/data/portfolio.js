export const personalData = {
  name: "Mouhamadou Andalla Mbaye",
  title: "Junior Business Intelligence Analyst",
  email: "m.andalla.mbaye@gmail.com",
  location: "Sénégal, Dakar Plateau",
  about: "Étudiant en double cursus Informatique de gestion et Économie, je cherche un stage en Business Intelligence afin de mettre ma double compétence technique et business au service de l'analyse et de la valorisation des données.",
  phone: "+221 77 631 92 00",
  website: "www.andalla.vercel.app",
  status: "À la recherche d'un stage en BI",
  specialties: "Power BI, SQL, Python, Excel",
  languages: "Français professionnel, Anglais B1, Wolof maternel",
  softSkills: ["Rigueur", "Curiosité technique", "Apprentissage continu", "Esprit d'analyse", "Travail en équipe", "Autonomie"],
  stats: [
    { value: "2+", label: "Années d'apprentissage" },
    { value: "2", label: "Projets présentés" },
    { value: "20+", label: "Technologies étudiées" },
  ],
  
  socials: {
    github: "https://github.com/mouhamadouandallambaye-prog",
    linkedin: "https://www.linkedin.com/in/mouhamadou-andalla-mbaye-4681442a9",
  },

  skills: [
    { category: "Data & Analytics", items: ["Power BI (avancé)", "DAX", "SQL (intermédiaire)", "Python (intermédiaire)", "Excel (avancé)", "MySQL", "Data Storytelling"] },
    { category: "Outils & méthodes", items: ["Gestion CRM", "GitHub", "Power Query", "Modélisation en étoile", "Reporting", "Analyse stratégique"] },
  ],

  education: [
    {
      degree: "Licence en informatique de gestion",
      institution: "Institut Africain de Management (IAM)",
      schoolUrl: "https://groupeiam.com/",
      period: "2024 - 2027 | L2 en cours",
      focus: "Systèmes d'information, développement logiciel, bases de données et gestion des projets numériques.",
    },
    {
      degree: "Licence en science économique et gestion",
      institution: "Université Cheikh Hamidou Kane (UN-CHK)",
      schoolUrl: "https://www.unchk.sn/",
      period: "2024 - 2027 | L2 validé",
      focus: "Économie, gestion, analyse et compréhension des enjeux business liés à la valorisation des données.",
    },
  ],

  experience: [
    {
      period: "2026 - aujourd'hui",
      role: "Agent commercial indépendant",
      company: "AFRO GROUP",
      description: "Collecte de 150+ données et profils utilisateurs qualifiés pour optimiser le lancement de l'application Afrodemy, puis onboarding de 70+ utilisateurs durant la phase de parrainage et de test.",
    },
    {
      period: "2025 - aujourd'hui",
      role: "Membre actif",
      company: "Amnesty International Sénégal",
      description: "Suivi de 12+ rapports géopolitiques et notes d'actualité sur les droits fondamentaux par an, avec participation à 5+ campagnes nationales et internationales.",
    },
    {
      period: "2024 - 2025",
      role: "Vice-président du CLAP",
      company: "Lycée Lamine Gueye de Dakar",
      description: "Représentation du lycée au sein du réseau RÉSACLAP, animation de 15+ présentations et séances d'orientation pour informer plus de 300 élèves.",
    },
  ],

  recommendations: [
    {
      title: "Lettre de recommandation de M. Ameth Camara",
      author: "Professeur de C++ chez Institut Africain de Management (IAM)",
      quote: "Sa rigueur intellectuelle et sa curiosité technique lui ont permis d'assimiler rapidement des concepts de programmation complexes. Il aborde chaque exercice avec méthode, patience et un souci constant de bien comprendre avant d'agir.",
      file: "/assets/lettre_recommandation_Camara.pdf",
    },
    {
      title: "Lettre de recommandation de M. Baba TOP",
      author: "Lead Tech & Développeur Full Stack Senior, enseignant en Génie Logiciel chez Institut Africain de Management (IAM)",
      quote: "Il fait partie des étudiants qui posent les bonnes questions et qui cherchent à relier ce qu'ils apprennent aux besoins concrets d'un système d'information. Autonome, persévérant et doté d'un bon esprit d'équipe, il sait s'investir sérieusement dans les missions qui lui sont confiées.",
      file: "/assets/Lettre_recommandation_Top.pdf",
    },
  ],

  services: [
    {
      number: "01",
      title: "Dashboards décisionnels",
      description: "Des tableaux de bord Power BI lisibles et orientés vers les indicateurs qui aident vraiment à décider.",
      impact: "Pilotez votre activité avec une vision claire de la performance.",
      features: ["KPIs métier et suivi de performance", "Filtres interactifs et vues exécutives", "Livrable documenté et exploitable"],
      tools: ["Power BI", "DAX", "Power Query"],
      icon: "chart",
    },
    {
      number: "02",
      title: "Analyse & préparation des données",
      description: "Nettoyage, transformation et exploration de données pour faire émerger des tendances fiables.",
      impact: "Réduisez le temps passé à chercher l'information et fiabilisez vos décisions.",
      features: ["Nettoyage et contrôle qualité", "Transformation de sources hétérogènes", "Analyse exploratoire et recommandations"],
      tools: ["SQL Server", "Python", "Excel"],
      icon: "database",
    },
    {
      number: "03",
      title: "Modélisation BI",
      description: "Des modèles de données structurés pour suivre la performance et garder une information cohérente.",
      impact: "Construisez une base solide pour faire évoluer vos reportings sereinement.",
      features: ["Modèle en étoile et relations", "Mesures DAX cohérentes", "Sources préparées pour la croissance"],
      tools: ["SQL", "Data Modeling", "DAX"],
      icon: "code",
    },
  ],

  projects: [
    {
      id: "velocity-sales",
      title: "Dashboard hydraulique - TDE",
      description: "Dashboard et rapport stratégique sur les indicateurs hydrauliques, avec analyse de la couverture et de l'avancement du programme.",
      highlights: ["Taux de décaissement de 4 Mds FCFA", "Taux d'avancement de 55,96 %", "Rapport interactif de 3 pages et analyse stratégique de 10 pages"],
      technologies: ["Power BI", "DAX", "Data Storytelling", "Excel"],
      image: "/assets/togo-labs.png",
      githubUrl: "https://github.com/mouhamadouandallambaye-prog/togo-labs-defi1-analysis",
      embedUrl: "",
    },
    {
      id: "commercial-dashboard",
      title: "Dashboard BI - Pilotage de la Rentabilité Ventes",
      description: "Modélisation d'un schéma en étoile sous Power BI pour consolider le suivi des ventes et des flux de paiement.",
      highlights: ["Analyse de 192,5 K€ de CA (+49,5% vs budget) et suivi de 64,2 K€ de marge", "Pilotage multi-dimensionnel : performance par commercial, région et portefeuille clients", "Modélisation DAX & Power Query : calculs d'écarts, taux de marge et réalisations YTD"],
      technologies: ["Power BI", "DAX", "Power Query", "Data Modeling", "Sales Analytics"],
      image: "/assets/velocity-sales.png",
      embedUrl: "",
    },
  ],
};