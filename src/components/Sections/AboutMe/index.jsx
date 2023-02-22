import React from "react";
import FOTO from "../../../assets/yo.jpg";

export const AboutMe = () => {
  return (
    <div id="about-me" data-color="about-me" className="section about-me">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1.7rem",
          background: "rgba(0,0,0,0.1)",
          borderRadius: "20px",
        }}
      >
        <div style={{ display: "inline-flex" }}>
          <div className="about-me__profile-pic">
            <img src={FOTO} alt="as" />
          </div>

          <span
            style={{
              fontSize: "1.8em",
              padding: "0px 2rem",
              margin: "auto",
              fontWeight: 700,
            }}
          >
            Hi! I'm Matias Benitez, a talented and experienced{" "}
            <span style={{ color: "var(--secondary)" }}>
              Front-End Developer
            </span>{" "}
            based on Buenos Aires, Argentina.
          </span>
        </div>
        <div
          style={{ width: "20rem", paddingTop: "1.7rem", textAlign: "center" }}
          className="muted"
        >
          <span>
            {"{"}Appasionated for programming and science 👨‍💻.{"}"}
          </span>
        </div>
      </div>
      {/* <div style={{ display: "inline-flex" }}>
        <div style={{ display: "flex" }}>
          <h2 style={{ fontSize: "1.8em" }}>2</h2>
          <span>years of experience</span>
        </div>
        <div>
          <h2 style={{ fontSize: "1.8em" }}>10+</h2>
          <span>projects</span>
        </div>
      </div> */}
      {/* <h1 style={{ fontSize: "3rem", color: "#fdf7e7" }}>My Stack</h1>
      <div style={{ display: "inline-flex", gap: "7px" }}>
        <div className="cards">
          <IoDesktopOutline style={{ height: 24, width: 24 }} />
          <h4>Front-End Developer</h4>
        </div>
        <div className="cards">
          <GrPersonalComputer style={{ height: 24, width: 24 }} />
          <h4>Backend-Stack Developer</h4>
        </div>
        <div className="cards">
          <IoPhonePortraitOutline style={{ height: 24, width: 24 }} />
          <h4>Mobile Developer</h4>
        </div>
      </div> */}
    </div>
  );
};
