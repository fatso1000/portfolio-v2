import React from "react";
import { Accordion } from "../../Accordion";
import MobeatsLogo from "../../../assets/mobeats_logo.jfif";
import SoyHenryLogo from "../../../assets/soyhenry_logo.jfif";

export const Experience = () => {
  return (
    <div
      id="experience"
      className="section"
      data-color="experience"
      style={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          background: "var(--secondary)",
          borderRadius: "20px",
          padding: "1rem",
          color: "var(--primary)",
          border: "1px solid var(--secondary)",
        }}
      >
        <h1 style={{ fontSize: "2.3em" }}>Working Experience</h1>
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
          date={`Apr 2021 - Present · 2 years`}
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
          location={"Remote, Latin America"}
          experiences={[{ title: "Individual Project", description: "lol" }]}
          logo={SoyHenryLogo}
        />
      </div>
    </div>
  );
};
