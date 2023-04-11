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
  {
    name: "Archlinux",
    path: `${import.meta.env.BASE_URL}/assets/svg/archlinux.svg`,
  },
  { name: "git", path: `${import.meta.env.BASE_URL}/assets/svg/git.svg` },
  // ! TODO add soft skill
];
export const projects: list[] = [
  {
    name: "Ereko",
    path: `${import.meta.env.BASE_URL}/assets/svg/ereko_logo.svg`,
    description:
      "Ereko était un projet de cours où nous avons utilisé l'API de recherche YouTube pour récupérer les musiques les plus populaires, que nous avons enregistrées sur un serveur avant de les redistribuer aux playlists ciblées. Ce projet a été une opportunité de développer mes compétences en développement web et en intégration de services tiers.",
    githubLink: "https://github.com/Daniere-Mathieu/ereko",
    // link: "http://ereko.devcarotte.fr",
    alt: "logo de Ereko",
  },
  {
    name: "Pronto",
    path: `${import.meta.env.BASE_URL}/assets/pronto.png`,
    link: "https://www.lepronto.fr",
    description:
      "Le projet Pronto est un ERP destiné aux restaurateurs, que j'ai développé en collaboration avec une équipe en tant que développeur en alternance. Ce projet m'a permis d'acquérir des compétences solides en développement d'applications métier et en travail d'équipe pour répondre aux besoins des clients. Je suis fier de contribuer à cette initiative qui apporte une réelle valeur ajoutée au secteur de la restauration.",
    alt: "logo de pronto",
  },
];
