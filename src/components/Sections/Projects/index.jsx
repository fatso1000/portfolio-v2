import React from "react";
import XKCDImg from "../../../assets/projects/xkcd.jpeg";
import MELIImg from "../../../assets/projects/mercadolibre_clone.png";
import PORTFOLIOImg from "../../../assets/projects/portfolio.png";
import { IoLogoGithub } from "react-icons/io5";

export const Projects = () => {
  return (
    <div id="projects" className="section projects">
      <div className="experience-container">
        <h1>Projects</h1>
      </div>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <a href="https://youtu.be/R6dPAIne0AE" className="cards">
          <div className="img-container">
            <img src={XKCDImg} alt="lol" />
          </div>
          <div className="cards-body">
            <h3>XKCD Comic Search</h3>
            <span>
              Buscador de comics XKCD mediante su id, no funciona debido a la
              baja de la API
            </span>
            <a href="https://github.com/fatso1000/xkcd-react">
              <IoLogoGithub />
            </a>
          </div>
        </a>
        <a
          href="https://github.com/fatso1000/mercadolibre-clone"
          className="cards"
        >
          <div className="img-container">
            <img src={MELIImg} alt="lol" />
          </div>
          <div className="cards-body">
            <h3>MercadoLibre Clone</h3>
            <span>
              Clon de mercado libre creado con react-native, solamente
              funcionalidades esteticas y de interfaz
            </span>
            <a href="https://github.com/fatso1000/mercadolibre-clone">
              <IoLogoGithub />
            </a>
          </div>
        </a>
        <a href="2" className="cards">
          <div className="img-container">
            <img src={PORTFOLIOImg} alt="" />
          </div>
          <div className="cards-body">
            <h3>Portfolio</h3>
            <span>
              Este proyecto es mi ultimo portfolio, es el mismo en el que estas
              viendo esto :p
            </span>
            <a href="https://github.com/fatso1000/portfolio-v2">
              <IoLogoGithub />
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};
