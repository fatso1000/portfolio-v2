import React from "react";
import { Accordion } from "../../Accordion";
import MobeatsLogo from "../../../assets/mobeats_logo.jfif";
import SoyHenryLogo from "../../../assets/soyhenry_logo.jfif";

export const Experience = () => {
  return (
    <div id="experience" className="section experience" data-color="experience">
      <div className="experience-container">
        <h1>Working Experience</h1>
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
          location={"Berazategui, Buenos Aires Province, Argentina"}
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
              description: "FullStack",
              technologies: "React typescript, NodeJs, MaterialUI, Bootstrap",
            },
            {
              title: "SEVENTEEN",
              description: "E-Commerce of curtains",
              technologies: "Angular, PHP",
            },
            {
              title: "ZECATDIFAPRO",
              description: "FullStack",
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
              title: "Individual Project",
              description: "lol",
              technologies:
                "React Typescript, NodeJs Typescript, Postgresql, Heroku",
            },
            {
              title: "Groupal Project",
              description: "",
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
