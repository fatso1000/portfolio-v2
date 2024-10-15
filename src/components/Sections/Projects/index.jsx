import React from "react";
import MELIImg from "../../../assets/projects/mercadolibre_clone.jpg";
import PORTFOLIOImg from "../../../assets/projects/portfolio.jpg";
import SOCLONEImg from "../../../assets/projects/so_clone.jpg";
import PERSONALBLOGImg from "../../../assets/projects/personal_blog.png";
import LearnLanguagesOnlineImg from "../../../assets/projects/learn_languages_online.jpg";
import BSASTRAVELImg from "../../../assets/projects/bsas_travel.png";
import GAMESDBImg from "../../../assets/projects/gamesdb.jpg";
import { IoGlobe, IoLogoGithub } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const ProjectCard = (props) => (
  <div className="cards">
    <div className="img__container">
      <img src={props.img} alt={props.imgAlt} />
    </div>
    <div className="cards__body">
      <h3>{props.title}</h3>
      <span style={{ marginBottom: "auto", fontSize: "0.96em" }}>
        {props.text}
      </span>
      <div style={{ display: "flex", width: "100%", gap: "0.3rem" }}>
        {props.links.map((val, i) => (
          <a
            href={val.href}
            target="_blank"
            rel="noreferrer"
            key={i}
            style={{ lineHeight: "1rem" }}
          >
            {val.icon}
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
      imgAlt: "BSAS TRAVEL",
      links: [
        {
          href: "https://github.com/fatso1000/bsas-travel",
          icon: <IoLogoGithub />,
        },
        {
          href: "https://bsas-travel.netlify.app/",
          icon: <IoGlobe />,
        },
      ],
    },
    {
      img: LearnLanguagesOnlineImg,
      imgAlt: "LEARN LANGUAGES ONLINE",
      links: [
        {
          href: "https://github.com/fatso1000/learn-languages",
          icon: <IoLogoGithub />,
        },
        {
          href: "https://learn-languages-zeta.vercel.app/",
          icon: <IoGlobe />,
        },
      ],
    },
    {
      img: PERSONALBLOGImg,
      imgAlt: "PERSONAL BLOG",
      links: [
        {
          href: "https://github.com/fatso1000/personal-blog",
          icon: <IoLogoGithub />,
        },
        {
          href: "https://personal-blog-delta-amber.vercel.app/",
          icon: <IoGlobe />,
        },
      ],
    },
    {
      img: SOCLONEImg,
      imgAlt: "SO CLONE",
      links: [
        {
          href: "https://github.com/fatso1000/windows-clone-copy",
          icon: <IoLogoGithub />,
        },
        {
          href: "https://so-clone.netlify.app/",
          icon: <IoGlobe />,
        },
      ],
    },
    {
      img: PORTFOLIOImg,
      imgAlt: "PORTFOLIO",
      links: [
        {
          href: "https://github.com/fatso1000/portfolio-v2",
          icon: <IoLogoGithub />,
        },
      ],
    },
    {
      img: MELIImg,
      imgAlt: "MERCADOLIBRE CLONE",
      links: [
        {
          href: "https://github.com/fatso1000/mercadolibre-clone",
          icon: <IoLogoGithub />,
        },
      ],
    },
    {
      img: GAMESDBImg,
      imgAlt: "GAMES DB",
      links: [
        {
          href: "https://github.com/fatso1000/individual-project-henry",
          icon: <IoLogoGithub />,
        },
        {
          href: "https://pi-videogames.netlify.app/",
          icon: <IoGlobe />,
        },
      ],
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="education__container">
        <div>
          <h2>{t("header.projects")}</h2>
        </div>
        <div className="cards--container">
          {t("projects", { returnObjects: true }).map((val, i) => (
            <ProjectCard {...val} key={i} {...extraData[i]} />
          ))}
        </div>
      </div>
    </section>
  );
};
