interface list {
  name: string;
  path: string;
  alt?: string;
  description?: string;
  link?: string;
  githubLink?: string;
}
export const tech: list[] = [
  { name: "Javascript", path: "/assets/svg/js.svg" },
  { name: "Typescript", path: "/assets/svg/typescript.svg" },
  { name: "PHP", path: "/assets/svg/php.svg" },
  { name: "Vuejs", path: "/assets/svg/vuejs.svg" },
  { name: "Quasar", path: "/assets/svg/quasar.svg" },
  { name: "Nodejs", path: "/assets/svg/nodejs.svg" },
  { name: "Archlinux", path: "/assets/svg/archlinux.svg" },
  { name: "git", path: "/assets/svg/git.svg" },
];
export const projects: list[] = [
  {
    name: "Ereko",
    path: "/assets/svg/ereko_logo.svg",
    description:
      "Le projet Ereko est un lecteur de musique qui recupere les musiques depuis youtube , les enregistre coter serveur et les redistribue au playlist qui ont besoin de cette musique",
    githubLink: "https://github.com/Daniere-Mathieu/ereko",
    link: "http://ereko.devcarotte.fr",
    alt: "logo de Ereko",
  },

  {
    name: "Pronto",
    path: "/assets/pronto.png",
    link: "https://www.lepronto.fr",
    description:
      "Le projet pronto est un projet que je réalise durant mon alternance, il s'agit d'un ERP pour les restaurateur qui leur permet de gerer leurs caisse ainsi que leurs ressources humaines.",
    alt: "logo de pronto",
  },
];
