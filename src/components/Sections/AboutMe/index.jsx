import React from "react";
import ProfilePic from "../../../assets/yo.jpg";

export const AboutMe = () => {
  return (
    <div id="about-me" data-color="about-me" className="section about-me">
      <div className="about-me__section">
        <div className="description">
          <div className="about-me__profile-pic">
            <img src={ProfilePic} alt="profile-pic" />
          </div>

          <span>
            Hi! I'm Matias Benitez, a talented and experienced{" "}
            <span style={{ color: "var(--secondary)" }}>
              Front-End Developer
            </span>{" "}
            based on Buenos Aires, Argentina.
          </span>
        </div>
        <div className="label muted">
          <i>{"/*Appasionated for programming and science 👨‍💻.*/"}</i>
        </div>
      </div>
    </div>
  );
};
