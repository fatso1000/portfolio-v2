import React from "react";
import XKCDImg from "../../../assets/projects/xkcd.jpeg";
import MELIImg from "../../../assets/projects/mercadolibre_clone.png";
import PORTFOLIOImg from "../../../assets/projects/portfolio.png";
import SOCLONEImg from "../../../assets/projects/so_clone.jpeg";
import GAMESDBImg from "../../../assets/projects/gamesdb.PNG";
import { IoGlobe, IoLogoGithub, IoLogoYoutube } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const ProjectCard = (props) => (
  <div className="cards">
    <div className="img__container">
      <img src={props.img} alt={props.imgAlt} />
    </div>
    <div className="cards__body">
      <h3>{props.title}</h3>
      <span>{props.text}</span>
      <div>
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
  const { t, i18n } = useTranslation();

  const extraData = [
    {
      img: XKCDImg,
      imgAlt: "XKCD-APP",
      links: [
        {
          href: "https://github.com/fatso1000/xkcd-react",
          icon: <IoLogoGithub />,
        },
        { href: "https://youtu.be/R6dPAIne0AE", icon: <IoLogoYoutube /> },
      ],
    },
    {
      img: MELIImg,
      imgAlt: "MERCADOLIBRE-CLONE-APP",
      links: [
        {
          href: "https://github.com/fatso1000/mercadolibre-clone",
          icon: <IoLogoGithub />,
        },
      ],
    },
    {
      img: PORTFOLIOImg,
      imgAlt: "PORTFOLIO-APP",
      links: [
        {
          href: "https://github.com/fatso1000/portfolio-v2",
          icon: <IoLogoGithub />,
        },
      ],
    },
    {
      img: GAMESDBImg,
      imgAlt: "GAMES-DB-APP",
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
    {
      img: SOCLONEImg,
      imgAlt: "SO-CLONE-IMG",
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
  ];

  return (
    <section id="projects" className="section projects">
      <div className="experience__container">
        <h2>{t("header.projects")}</h2>
      </div>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          gap: 4,
        }}
      >
        {t("projects", { returnObjects: true }).map((val, i) => (
          <ProjectCard {...val} key={i} {...extraData[i]} />
        ))}
      </div>
    </section>
  );
};
