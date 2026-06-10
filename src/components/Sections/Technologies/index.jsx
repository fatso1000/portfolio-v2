import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../../SectionHeader";
import { capabilityIcons } from "../../../data/portfolio";

const SKILL_ICONS = {
  frontend: [
    "simple-icons:typescript",
    "simple-icons:javascript",
    "simple-icons:vuedotjs",
    "simple-icons:react",
    "simple-icons:angular",
    "tabler:brand-react-native",
    "simple-icons:html5",
    "simple-icons:sass",
  ],
  product: [
    "lucide:monitor-smartphone",
    "lucide:component",
    "lucide:chart-no-axes-combined",
    "simple-icons:apexcharts",
    "simple-icons:tailwindcss",
    "simple-icons:primevue",
    "simple-icons:figma",
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
    "simple-icons:nodedotjs",
    "lucide:plug-zap",
    "simple-icons:postgresql",
    "simple-icons:mysql",
    "simple-icons:sap",
    "simple-icons:prisma",
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
  frontend: "capability-card--hero",
  product: "capability-card--tall",
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
        <div className="capability-masonry">
          {groups.map((group, groupIndex) => (
            <article
              className={`capability-card glass-panel ${CARD_VARIANTS[group.id]}`}
              key={group.id}
              style={{ "--float-delay": `${groupIndex * -1.35}s` }}
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
