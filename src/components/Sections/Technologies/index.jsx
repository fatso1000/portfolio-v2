import React from "react";
import { IoLogoReact, IoLogoNodejs, IoHeartOutline } from "react-icons/io5";
import { SiTypescript, SiRedux, SiJavascript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscOrganization } from "react-icons/vsc";
import { HiOutlineBookOpen } from "react-icons/hi";

export const Technologies = () => {
  return (
    <div id="technologies" data-color="blue" className="section technologies">
      <div className="tech-header">
        <div>
          <h2>Experience</h2>
          <span>2 Years</span>
        </div>
        <div>
          <h2>Projects</h2>
          <span>5+</span>
        </div>
        <div>
          <h2>Professionalism</h2>
          <span>100%</span>
        </div>
      </div>
      <div className="tech-body">
        <div className="hard-skills">
          <h2>Hard Skills</h2>
          <div className="list">
            <div>
              <IoLogoReact />
              <span>React</span>
            </div>
            <div>
              <SiTypescript />
              <span>Typescript</span>
            </div>
            <div>
              <SiRedux />
              <span>Redux</span>
            </div>
            <div>
              <SiJavascript />
              <span>Javascript</span>
            </div>
            <div>
              <IoLogoNodejs />
              <span>NodeJS</span>
            </div>
            <div>
              <TbBrandReactNative />
              <span>React Native</span>
            </div>
          </div>
        </div>
        <div className="hard-skills">
          <h2>Soft Skills</h2>
          <div className="list">
            <div>
              <VscOrganization />
              <span>Team Work</span>
            </div>
            <div>
              <IoHeartOutline />
              <span>Good Mood</span>
            </div>
            <div>
              <HiOutlineBookOpen />
              <span>Fast Learning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
