import React from "react";
import { IoDesktopOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { GrPersonalComputer } from "react-icons/gr";

export const AboutMe = () => {
  return (
    <div id="about-me" data-color="about-me" className="section about-me">
      <h1 style={{ fontSize: "2.7rem" }}>ABOUT ME</h1>
      <div style={{ color: "#fdf7e7" }}>
        Talented and experienced Front-End developer.
      </div>
      <div style={{ display: "inline-flex" }}>
        <div>
          <h3>3</h3>
          <span>years of experience</span>
        </div>
        <div>
          <h3>10+</h3>
          <span>projects</span>
        </div>
      </div>
      <h1>My Stack</h1>
      <div>
        <div>
          <IoDesktopOutline />
          <h5>Front-End Developer</h5>
        </div>
        <div>
          <GrPersonalComputer />
          <h5>Backend-Stack Developer</h5>
        </div>
        <div>
          <IoPhonePortraitOutline />
          <h5>Mobile Developer</h5>
        </div>
      </div>
    </div>
  );
};
