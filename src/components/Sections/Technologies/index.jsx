import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../../SectionHeader";
import { capabilityIcons } from "../../../data/portfolio";

const SKILL_ICONS = {
  fullstack: [
    "simple-icons:vuedotjs",
    "simple-icons:react",
    "simple-icons:angular",
    "tabler:brand-react-native",
    "simple-icons:nodedotjs",
    "simple-icons:typescript",
    "simple-icons:javascript",
    "simple-icons:html5",
    "simple-icons:sass",
  ],
  quality: [
    "simple-icons:jest",
    "lucide:flask-conical",
    "lucide:workflow",
    "simple-icons:git",
    "simple-icons:github",
    "simple-icons:gitlab",
    "lucide:refresh-cw",
  ],
  platform: [
    "lucide:plug-zap",
    "lucide:network",
    "simple-icons:sap",
  ],
  ai: [
    "simple-icons:openai",
    "simple-icons:anthropic",
    "lucide:terminal-square",
    "simple-icons:ollama",
    "lucide:brain-circuit",
  ],
};

const CARD_VARIANTS = {
  fullstack: "capability-card--hero",
  quality: "capability-card--compact",
  platform: "capability-card--wide",
  ai: "capability-card--compact",
};

export const Technologies = () => {
  const { t } = useTranslation();
  const groups = t("capabilities.groups", { returnObjects: true });

  return (
    <section id="capabilities" className="section capabilities">
      <div className="capabilities__orb capabilities__orb--one" aria-hidden />
      <div className="capabilities__orb capabilities__orb--two" aria-hidden />
      <div className="capabilities__inner">
        <SectionHeader
          eyebrow={t("capabilities.eyebrow")}
          title={t("capabilities.title")}
          intro={t("capabilities.intro")}
        />
        <div className="capability-layout">
          {groups.map((group) => (
            <article
              className={`capability-card capability-card--${group.id} glass-panel ${CARD_VARIANTS[group.id]}`}
              key={group.id}
            >
              <header className="capability-card__header">
                <span className="capability-card__icon">
                  <Icon icon={capabilityIcons[group.id]} aria-hidden />
                </span>
              </header>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul className="capability-skills" aria-label={group.title}>
                {group.skills.map((skill, skillIndex) => (
                  <li key={skill}>
                    <Icon
                      icon={SKILL_ICONS[group.id][skillIndex]}
                      aria-hidden
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <aside className="collaboration-note glass-panel">
            <Icon icon="lucide:messages-square" aria-hidden />
            <span>{t("capabilities.collaborationEyebrow")}</span>
            <p>{t("capabilities.collaboration")}</p>
          </aside>
        </div>
      </div>
    </section>
  );
};
