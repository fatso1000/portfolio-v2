import React from "react";
import { Accordion } from "../../Accordion";
import MobeatsLogo from "../../../assets/mobeats_logo.jfif";
import SoyHenryLogo from "../../../assets/soyhenry_logo.jfif";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="section experience"
      data-color="experience"
    >
      <div className="experience__container">
        <h2>Working Experience</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Accordion
          position={"Front End Developer"}
          enterprise={"MOBEATS"}
          date={`April 2021 - Present · 2 years`}
          location={"Berazategui, Buenos Aires, Argentina"}
          experiences={[
            {
              title: "ENFOKE",
              description:
                'New Eges, "The Management software that optimizes the most important Diagnostic Centers in Argentina"',
              technologies: "React Typescript",
            },
            {
              title: "LAFKEN",
              description:
                "Lafken App, mobile app to track and manage the patient's medicines",
              technologies: "React Native",
            },
            {
              title: "IOF",
              description:
                "Backoffice and AppWeb to monitor and control the temperature of crops and silo bags.",
              technologies:
                "React typescript, NodeJs, MaterialUI, Bootstrap, Mysql",
            },
            {
              title: "SEVENTEEN",
              description: "E-Commerce of curtains",
              technologies: "Angular, PHP",
            },
            {
              title: "ZECATDIFAPRO",
              description:
                "E-Commerce, Proveedor integral de productos promocionales",
              technologies: "Vue, NodeJs",
            },
          ]}
          logo={MobeatsLogo}
        />
        <Accordion
          position={"Full Stack Developer"}
          enterprise={"SOY HENRY"}
          date={"Dec 2020 - Apr 2021"}
          location={"Remote, Latin America"}
          experiences={[
            {
              title: "VideoGamesDB Search",
              description:
                "WebApp utilizando una API privada debia filtrar y buscar videojuegos, utlizando React, NodeJS y Postgresql. Actualmente se encuentra obsoleto, debido a que la API utilizada ya no existe.",
              technologies:
                "React Typescript, NodeJs Typescript, Postgresql, Heroku",
            },
          ]}
          logo={SoyHenryLogo}
        />
      </div>
    </section>
  );
};
