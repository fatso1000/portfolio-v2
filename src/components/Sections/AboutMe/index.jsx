import React from "react";
import { IoDesktopOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { GrPersonalComputer } from "react-icons/gr";

export const AboutMe = () => {
  return (
    <div id="about-me" data-color="about-me" className="section about-me">
      <h1 style={{ fontSize: "3rem", color: "#fdf7e7" }}>ABOUT ME</h1>
      <div>Talented and experienced Front-End developer.</div>
      <div style={{ display: "inline-flex" }}>
        <div style={{ display: "flex" }}>
          <h3 style={{ fontSize: "2rem" }}>3</h3>
          <span>years of experience</span>
        </div>
        <div>
          <h3>10+</h3>
          <span>projects</span>
        </div>
      </div>
      <h1 style={{ fontSize: "3rem", color: "#fdf7e7" }}>My Stack</h1>
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
      </div>
    </div>
  );
};
