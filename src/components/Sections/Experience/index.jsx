import React from "react";
import { Accordion } from "../../Accordion";
import MobeatsLogo from "../../../assets/mobeats_logo.jfif";
import SoyHenryLogo from "../../../assets/soyhenry_logo.jfif";

export const Experience = () => {
  return (
    <div id="experience" className="section" data-color="experience">
      <h1>EXPERIENCE</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "0.6rem",
        }}
      >
        <Accordion
          position={"Front End Developer"}
          enterprise={"MOBEATS"}
          date={"Apr 2021 - Present · 1 yr 10 mos"}
          location={"Berazategui, Buenos Aires Province, Argentina"}
          experiences={[
            { title: "ENFOKE", description: "React" },
            { title: "LAFKEN", description: "React Native" },
            { title: "IOF", description: "FullStack" },
            { title: "SEVENTEEN", description: "Angular" },
            { title: "ZECATDIFAPRO", description: "FullStack" },
          ]}
          logo={MobeatsLogo}
        />
        <Accordion
          position={"Full Stack Developer"}
          enterprise={"SOY HENRY"}
          date={"Dec 2020 - Apr 2021"}
          experiences={[{ title: "Individual Project", description: "lol" }]}
          logo={SoyHenryLogo}
        />
      </div>
    </div>
  );
};
