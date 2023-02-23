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
          <i>{"/*Appasionated for programming and science 👨‍💻.*/"}</i>
        </div>
      </div>
    </div>
  );
};
