import React from "react";
import { IoHeartOutline, IoTimeOutline } from "react-icons/io5";
import {
  SiTypescript,
  SiRedux,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiFigma,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscOrganization } from "react-icons/vsc";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BsPuzzle } from "react-icons/bs";

const TechHeader = (props) => (
  <div>
    <h2>{props.title}</h2>
    <span>{props.label}</span>
  </div>
);

const TechSkills = (props) => (
  <div>
    {props.icon}
    <span>{props.label}</span>
  </div>
);

const hardSkills = [
    { icon: <SiTypescript />, label: "Typescript" },
    { icon: <SiJavascript />, label: "Javascript" },
    { icon: <SiReact />, label: "React" },
    { icon: <SiRedux />, label: "Redux" },
    { icon: <SiNodedotjs />, label: "NodeJS" },
    { icon: <TbBrandReactNative />, label: "React Native" },
    { icon: <SiFigma />, label: "Figma" },
  ],
  softSkills = [
    { icon: <VscOrganization />, label: "Team Work" },
    { icon: <IoHeartOutline />, label: "Good Mood" },
    { icon: <HiOutlineBookOpen />, label: "Fast Learning" },
    { icon: <IoTimeOutline />, label: "Time Management" },
    { icon: <BsPuzzle />, label: "Problem Solving" },
  ];

export const Technologies = () => {
  return (
    <section id="technologies" data-color="blue" className="section technologies">
      <div className="tech__header">
        <TechHeader title="Experience" label="2 Years" />
        <TechHeader title="Projects" label="5+" />
        <TechHeader title="Professionalism" label="100%" />
      </div>
      <div className="tech__body">
        <div className="hard-skills">
          <h2>Hard Skills</h2>
          <div className="list">
            {hardSkills.map(({ icon, label }) => (
              <TechSkills icon={icon} label={label} />
            ))}
          </div>
        </div>
        <div className="hard-skills">
          <h2>Soft Skills</h2>
          <div className="list">
            {softSkills.map(({ icon, label }) => (
              <TechSkills icon={icon} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
