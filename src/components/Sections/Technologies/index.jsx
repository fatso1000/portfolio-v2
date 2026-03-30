import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const TechHeader = (props) => (
  <div>
    <h2>{props.title}</h2>
    <span>{props.label}</span>
  </div>
);

/* Hard skills: Simple Icons for brands; Tabler for React Native (no SI slug). */
const HARD_SKILL_GROUPS = [
  {
    group: "languages",
    items: [
      { icon: "simple-icons:typescript", label: "TypeScript" },
      { icon: "simple-icons:javascript", label: "JavaScript" },
    ],
  },
  {
    group: "ui",
    items: [
      { icon: "simple-icons:react", label: "React" },
      { icon: "simple-icons:redux", label: "Redux" },
      { icon: "simple-icons:vuedotjs", label: "Vue" },
      { icon: "simple-icons:pinia", label: "Pinia" },
      { icon: "simple-icons:tailwindcss", label: "Tailwind" },
      { icon: "tabler:brand-react-native", label: "React Native" },
      { icon: "simple-icons:sass", label: "Sass" },
      { icon: "simple-icons:nextdotjs", label: "Next.js" },
      { icon: "simple-icons:angular", label: "Angular" },
    ],
  },
  {
    group: "tooling",
    items: [
      { icon: "simple-icons:nodedotjs", label: "Node.js" },
      { icon: "simple-icons:figma", label: "Figma" },
      { icon: "simple-icons:cursor", label: "Cursor" },
      { icon: "simple-icons:googlegemini", label: "AI Studio" },
    ],
  },
];

export const Technologies = () => {
  const { t } = useTranslation();

  /* Soft skills: single Lucide outline set for consistent stroke + weight next to pills. */
  const softSkills = [
    { id: "teamWork", icon: "lucide:users-round", label: t("technologies.softSkills.teamWork") },
    { id: "goodMood", icon: "lucide:heart", label: t("technologies.softSkills.goodMood") },
    { id: "fastLearning", icon: "lucide:book-open", label: t("technologies.softSkills.fastLearning") },
    { id: "timeManagement", icon: "lucide:clock", label: t("technologies.softSkills.timeManagement") },
    { id: "problemSolving", icon: "lucide:puzzle", label: t("technologies.softSkills.problemSolving") },
    { id: "communication", icon: "lucide:message-circle", label: t("technologies.softSkills.communication") },
    { id: "aiEnthusiast", icon: "lucide:sparkles", label: t("technologies.softSkills.aiEnthusiast") },
    { id: "detailOriented", icon: "lucide:list-checks", label: t("technologies.softSkills.detailOriented") },
    { id: "technicalWriting", icon: "lucide:file-text", label: t("technologies.softSkills.technicalWriting") },
    { id: "iterativeDelivery", icon: "lucide:refresh-cw", label: t("technologies.softSkills.iterativeDelivery") },
    { id: "knowledgeSharing", icon: "lucide:share-2", label: t("technologies.softSkills.knowledgeSharing") },
  ];

  return (
    <section
      id="technologies"
      data-color="blue"
      className="section technologies"
    >
      <div className="glass-panel technologies__glass">
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
          <div className="tech__column tech__column--hard">
            <h2 className="tech__section-title">
              {t("technologies.hardSkillsTitle")}
            </h2>
            {HARD_SKILL_GROUPS.map(({ group, items }) => (
              <div className="tech-hard-group" key={group}>
                <h3 className="tech-group__label">
                  {t(`technologies.groups.${group}`)}
                </h3>
                <div className="tech-hard-grid">
                  {items.map(({ icon, label }) => (
                    <div key={label}>
                      <Icon icon={icon} aria-hidden />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="tech__column tech__column--soft">
            <h2 className="tech__section-title">
              {t("technologies.softSkillsTitle")}
            </h2>
            <div className="tech-soft-pills">
              {softSkills.map(({ id, icon, label }) => (
                <div className="tech-soft-pill" key={id}>
                  <Icon icon={icon} aria-hidden />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
