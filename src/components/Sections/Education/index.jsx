import React from "react";
import { Accordion } from "../../Accordion";
import SoyHenryLogo from "../../../assets/soyhenry_logo.jfif";
import Tec4Logo from "../../../assets/tec4.png";

export const Education = () => {
  return (
    <section id="education" className="section experience">
      <div className="experience__container">
        <h2>Education</h2>
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
              title: "Programming Technician",
              description:
                "Programming Technician career, developed various projects for the school.",
              technologies:
                "React, javascript, C, C++, Python, Mysql, Arduino, nodeJs, RaspberryPi, Relational Databases.",
            },
          ]}
          logo={Tec4Logo}
        />
        <Accordion
          position={"Full-Stack Developer"}
          enterprise={"SOY HENRY"}
          date={"Nov 2020 - Apr 2021"}
          location={"Remote, Latin America"}
          experiences={[
            {
              title: "Full-Stack Career",
              description:
                "Full-Stack career, intensive bootcamp where you learn the mayority of technologies and how to develop new projects.",
              technologies:
                "React Typescript, NodeJs Typescript, Postgresql, Redux, API, Data Structures, WebPack, Non-Relational databases",
            },
          ]}
          logo={SoyHenryLogo}
        />
      </div>
    </section>
  );
};
