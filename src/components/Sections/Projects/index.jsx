import React from "react";

export const Projects = () => {
  return (
    <div id="projects" className="section projects">
      <div className="experience-container">
        <h1>Education</h1>
      </div>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <a href="2" className="cards">
          <div className="img-container"></div>
          <div>
            <h3>LOREM IPSUM</h3>
          </div>
        </a>
        <a href="2" className="cards">
          <div className="img-container"></div>
          <div>
            <h3>LOREM IPSUM</h3>
          </div>
        </a>
        <a href="2" className="cards">
          <div className="img-container"></div>
          <div>
            <h3>LOREM IPSUM</h3>
          </div>
        </a>
      </div>
    </div>
  );
};
