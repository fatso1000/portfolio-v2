import React from "react";
import { Icon } from "@iconify/react";
import MELIImg from "../../../assets/projects/mercadolibre_clone.jpg";
import PORTFOLIOImg from "../../../assets/projects/portfolio.png";
import SOCLONEImg from "../../../assets/projects/so_clone.jpg";
import PERSONALBLOGImg from "../../../assets/projects/personal_blog.png";
import LearnLanguagesOnlineImg from "../../../assets/projects/learn_languages_online.jpg";
import BSASTRAVELImg from "../../../assets/projects/bsas_travel.png";
import GAMESDBImg from "../../../assets/projects/gamesdb.jpg";
import { useTranslation } from "react-i18next";

const ICON_GITHUB = "simple-icons:github";
const ICON_LIVE = "lucide:globe";

const ProjectCard = (props) => (
  <div className="cards">
    <div className="img__container">
      <img src={props.img} alt={`${props.title} — project preview`} />
    </div>
    <div className="cards__body">
      <h3>{props.title}</h3>
      <span className="cards__body-text">{props.text}</span>
      <div className="cards__body-links">
        {props.links.map((val, i) => (
          <a
            href={val.href}
            target="_blank"
            rel="noreferrer"
            key={i}
            className="cards__body-link"
          >
            <Icon icon={val.icon} aria-hidden />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export const Projects = () => {
  const { t } = useTranslation();

  const extraData = [
    {
      img: BSASTRAVELImg,
      links: [
        { href: "https://github.com/fatso1000/bsas-travel", icon: ICON_GITHUB },
        { href: "https://bsas-travel.netlify.app/", icon: ICON_LIVE },
      ],
    },
    {
      img: LearnLanguagesOnlineImg,
      links: [
        { href: "https://github.com/fatso1000/learn-languages", icon: ICON_GITHUB },
        { href: "https://learn-languages-zeta.vercel.app/", icon: ICON_LIVE },
      ],
    },
    {
      img: PERSONALBLOGImg,
      links: [
        { href: "https://github.com/fatso1000/personal-blog", icon: ICON_GITHUB },
        { href: "https://personal-blog-delta-amber.vercel.app/", icon: ICON_LIVE },
      ],
    },
    {
      img: SOCLONEImg,
      links: [
        { href: "https://github.com/fatso1000/windows-clone-copy", icon: ICON_GITHUB },
        { href: "https://so-clone.netlify.app/", icon: ICON_LIVE },
      ],
    },
    {
      img: PORTFOLIOImg,
      links: [{ href: "https://github.com/fatso1000/portfolio-v2", icon: ICON_GITHUB }],
    },
    {
      img: MELIImg,
      links: [{ href: "https://github.com/fatso1000/mercadolibre-clone", icon: ICON_GITHUB }],
    },
    {
      img: GAMESDBImg,
      links: [
        { href: "https://github.com/fatso1000/individual-project-henry", icon: ICON_GITHUB },
        { href: "https://pi-videogames.netlify.app/", icon: ICON_LIVE },
      ],
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="glass-panel projects__section-inner">
        <h2>{t("header.projects")}</h2>
        <div className="cards--container">
          {t("projects", { returnObjects: true }).map((val, i) => (
            <ProjectCard {...val} key={i} {...extraData[i]} />
          ))}
        </div>
      </div>
    </section>
  );
};
