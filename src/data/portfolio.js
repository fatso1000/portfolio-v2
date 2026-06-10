import AccentureLogo from "../assets/accenture_logo.png";
import DreamVentureLogo from "../assets/dream_venture_logo.jpg";
import GrowlatLogo from "../assets/growlat_logo.jpeg";
import MobeatsLogo from "../assets/mobeats_logo.jfif";
import SoyHenryLogo from "../assets/soyhenry_logo.jfif";
import Tec4Logo from "../assets/tec4.png";
import BsasTravelImage from "../assets/projects/bsas_travel.png";
import GamesDbImage from "../assets/projects/gamesdb.jpg";
import LearnLanguagesImage from "../assets/projects/learn_languages_online.jpg";
import MercadoLibreImage from "../assets/projects/mercadolibre_clone.jpg";
import OsCloneImage from "../assets/projects/so_clone.jpg";
import PersonalBlogImage from "../assets/projects/personal_blog.png";
import PortfolioImage from "../assets/projects/portfolio.png";

export const resumeUrl =
  process.env.PUBLIC_URL + "/Matias_Benitez_NZ_Tech_Resume.docx";

export const navItems = [
  { id: "home", key: "home" },
  { id: "selected-work", key: "work" },
  { id: "projects", key: "projects" },
  { id: "experience", key: "experience" },
  { id: "capabilities", key: "capabilities" },
  { id: "education", key: "education" },
  { id: "contact", key: "contact" },
];

export const workAssets = {
  growlat: { logo: GrowlatLogo, url: "https://growlat.ai/" },
  dreamVenture: { logo: DreamVentureLogo },
  mobeats: { logo: MobeatsLogo, url: "https://www.mobeats.io/" },
};

export const projectAssets = {
  bsasTravel: {
    image: BsasTravelImage,
    source: "https://github.com/fatso1000/bsas-travel",
    live: "https://bsas-travel.netlify.app/",
  },
  learnLanguages: {
    image: LearnLanguagesImage,
    source: "https://github.com/fatso1000/learn-languages",
    live: "https://learn-languages-zeta.vercel.app/",
  },
  osClone: {
    image: OsCloneImage,
    source: "https://github.com/fatso1000/windows-clone-copy",
    live: "https://so-clone.netlify.app/",
  },
  personalBlog: {
    image: PersonalBlogImage,
    source: "https://github.com/fatso1000/personal-blog",
    live: "https://personal-blog-delta-amber.vercel.app/",
  },
  portfolio: {
    image: PortfolioImage,
    source: "https://github.com/fatso1000/portfolio-v2",
  },
  mercadoLibre: {
    image: MercadoLibreImage,
    source: "https://github.com/fatso1000/mercadolibre-clone",
  },
  gamesDb: {
    image: GamesDbImage,
    source: "https://github.com/fatso1000/individual-project-henry",
    live: "https://pi-videogames.netlify.app/",
  },
};

export const experienceLogos = {
  growlat: GrowlatLogo,
  dreamVenture: DreamVentureLogo,
  mobeats: MobeatsLogo,
};

export const educationLogos = {
  technicalSchool: Tec4Logo,
  soyHenry: SoyHenryLogo,
  accenture: AccentureLogo,
};

export const capabilityIcons = {
  frontend: "lucide:panels-top-left",
  product: "lucide:chart-no-axes-combined",
  quality: "lucide:badge-check",
  platform: "lucide:database",
  ai: "lucide:sparkles",
};
