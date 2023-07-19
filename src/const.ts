interface list {
  name: string;
  path: string;
  alt?: string;
  description?: string;
  link?: string;
  githubLink?: string;
}

export const tech: list[] = [
  { name: "Javascript", path: `${import.meta.env.BASE_URL}/assets/svg/js.svg` },
  {
    name: "Typescript",
    path: `${import.meta.env.BASE_URL}/assets/svg/typescript.svg`,
  },
  { name: "PHP", path: `${import.meta.env.BASE_URL}/assets/svg/php.svg` },
  { name: "Vuejs", path: `${import.meta.env.BASE_URL}/assets/svg/vuejs.svg` },
  { name: "Quasar", path: `${import.meta.env.BASE_URL}/assets/svg/quasar.svg` },
  { name: "Nodejs", path: `${import.meta.env.BASE_URL}/assets/svg/nodejs.svg` },
  { name: "Deno", path: `${import.meta.env.BASE_URL}/assets/svg/deno.svg` },
  {
    name: "Archlinux",
    path: `${import.meta.env.BASE_URL}/assets/svg/archlinux.svg`,
  },
  { name: "git", path: `${import.meta.env.BASE_URL}/assets/svg/git.svg` },
  { name: "Docker", path: `${import.meta.env.BASE_URL}/assets/svg/docker.svg` },
  { name: "Nginx", path: `${import.meta.env.BASE_URL}/assets/svg/nginx.svg` },
  { name: "Apache", path: `${import.meta.env.BASE_URL}/assets/svg/apache.svg` },
  {
    name: "MariaDB",
    path: `${import.meta.env.BASE_URL}/assets/svg/mariadb.svg`,
  },
  {
    name: "MongoDB",
    path: `${import.meta.env.BASE_URL}/assets/svg/mongodb.svg`,
  },
  {
    name: "Travail d'équipe",
    path: `${import.meta.env.BASE_URL}/assets/svg/teamwork.svg`,
  },
  {
    name: "Communication",
    path: `${import.meta.env.BASE_URL}/assets/svg/communication.svg`,
  },
];

export const projects: list[] = [
  {
    name: "Ereko",
    path: `${import.meta.env.BASE_URL}/assets/svg/ereko_logo.svg`,
    description:
      "Ereko était un projet de cours où nous avons utilisé l'API de recherche YouTube pour récupérer les musiques les plus populaires, que nous avons enregistrées sur un serveur avant de les redistribuer aux playlists ciblées. Ce projet a été une opportunité de développer mes compétences en développement web et en intégration de services tiers.",
    githubLink: "https://github.com/Daniere-Mathieu/ereko",
    alt: "logo de Ereko",
  },
  {
    name: "Pronto",
    path: `${import.meta.env.BASE_URL}/assets/pronto.png`,
    link: "https://www.lepronto.net",
    description:
      "Le projet Pronto est un ERP destiné aux restaurateurs, que j'ai développé en collaboration avec une équipe en tant que développeur en alternance. Ce projet m'a permis d'acquérir des compétences solides en développement d'applications métier et en travail d'équipe pour répondre aux besoins des clients. Je suis fier de contribuer à cette initiative qui apporte une réelle valeur ajoutée au secteur de la restauration.",
    alt: "logo de pronto",
  },
  {
    name: "Side Project",
    path: `${import.meta.env.BASE_URL}/assets/side_project.png`,
    description:
      "side project est un projet qui a pour objectif de rendre la mémorisation et le partage de side projet plus simple.Le projet est en cours de développement et est développé avec Svelte et Tauri.",
    githubLink: "https://github.com/Daniere-Mathieu/side-project",
    alt: "logo de side project",
  },
];
