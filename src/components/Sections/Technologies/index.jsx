import React from "react";
import {
  IoHeartOutline,
  IoTimeOutline,
  IoLogoSass,
  IoLogoAngular,
} from "react-icons/io5";
import {
  SiTypescript,
  SiRedux,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiFigma,
  SiNextdotjs,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscOrganization } from "react-icons/vsc";
import { FaRegComments } from "react-icons/fa";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BsPuzzle } from "react-icons/bs";
import { useTranslation } from "react-i18next";

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

export const Technologies = () => {
  const { t } = useTranslation();

  const hardSkills = [
      { icon: <SiTypescript />, label: "Typescript" },
      { icon: <SiJavascript />, label: "Javascript" },
      { icon: <SiReact />, label: "React" },
      { icon: <SiRedux />, label: "Redux" },
      { icon: <SiNodedotjs />, label: "NodeJS" },
      { icon: <TbBrandReactNative />, label: "React Native" },
      { icon: <SiFigma />, label: "Figma" },
      { icon: <IoLogoSass />, label: "Sass" },
      { icon: <SiNextdotjs />, label: "NextJS" },
      { icon: <IoLogoAngular />, label: "Angular" },
    ],
    softSkills = [
      {
        icon: <VscOrganization />,
        label: t("technologies.softSkills.teamWork"),
      },
      {
        icon: <IoHeartOutline />,
        label: t("technologies.softSkills.goodMood"),
      },
      {
        icon: <HiOutlineBookOpen />,
        label: t("technologies.softSkills.fastLearning"),
      },
      {
        icon: <IoTimeOutline />,
        label: t("technologies.softSkills.timeManagement"),
      },
      {
        icon: <BsPuzzle />,
        label: t("technologies.softSkills.problemSolving"),
      },
      {
        icon: <FaRegComments />,
        label: t("technologies.softSkills.communication"),
      },
    ];

  return (
    <section
      id="technologies"
      data-color="blue"
      className="section technologies"
    >
      <div className="tech__header">
        <TechHeader
          title={t("technologies.header.experience")}
          label={t("technologies.header.experienceLabel")}
        />
        <TechHeader
          title={t("technologies.header.projects")}
          label={t("technologies.header.projectsLabel")}
        />
        <TechHeader
          title={t("technologies.header.professionalism")}
          label={t("technologies.header.professionalismLabel")}
        />
      </div>
      <div className="tech__body">
        <div className="hard-skills">
          <h2>Hard Skills</h2>
          <div className="list">
            {hardSkills.map(({ icon, label }, i) => (
              <TechSkills icon={icon} label={label} key={i} />
            ))}
          </div>
        </div>
        <div className="hard-skills">
          <h2>Soft Skills</h2>
          <div className="list">
            {softSkills.map(({ icon, label }, i) => (
              <TechSkills icon={icon} label={label} key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
