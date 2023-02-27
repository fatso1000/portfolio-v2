import React from "react";
import { Accordion } from "../../Accordion";
import MobeatsLogo from "../../../assets/mobeats_logo.jfif";
import SoyHenryLogo from "../../../assets/soyhenry_logo.jfif";

export const Projects = () => {
  return (
    <div id="education" className="section experience">
      <div className="experience-container">
        <h1>Education</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Accordion
          position={"Programming Technician"}
          enterprise={"Escuela Tecnica Nro 4 de Berazategui"}
          date={`Feb 2014 - Dec 2020 · 6 years`}
          location={"Berazategui, Buenos Aires, Argentina"}
          experiences={[
            {
              title: "ENFOKE",
              description:
                'New Eges, "The Management software that optimizes the most important Diagnostic Centers in Argentina"',
              technologies: "React Typescript",
            },
          ]}
          logo={MobeatsLogo}
        />
        <Accordion
          position={"Full Stack Developer"}
          enterprise={"SOY HENRY"}
          date={"Nov 2020 - Apr 2021"}
          location={"Remote, Latin America"}
          experiences={[
            {
              title: "Individual Project",
              description: "lol",
              technologies:
                "React Typescript, NodeJs Typescript, Postgresql, Heroku",
            },
          ]}
          logo={SoyHenryLogo}
        />
      </div>
    </div>
  );
};
