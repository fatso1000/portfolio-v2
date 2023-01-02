import React from "react";
import { Accordion } from "../../Accordion";

export const Experience = () => {
  return (
    <div id="experience" className="section" data-color="experience">
      <h1>
        <i>EXPERIENCE</i>
      </h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Accordion
          position={"Full-Stack Developer"}
          enterprise={"Mobeats"}
          date={"2021-now"}
        />
        <Accordion
          position={"Full-Stack Developer"}
          enterprise={"Mobeats"}
          date={"2021-now"}
        />
      </div>
    </div>
  );
};
