import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../../SectionHeader";
import { experienceLogos } from "../../../data/portfolio";

export const Experience = () => {
  const { t } = useTranslation();
  const roles = t("experience.roles", { returnObjects: true });

  return (
    <section id="experience" className="section experience">
      <SectionHeader
        eyebrow={t("experience.eyebrow")}
        title={t("experience.title")}
        intro={t("experience.intro")}
      />
      <div className="career-timeline">
        {roles.map((role) => (
          <article className="career-role" key={role.id}>
            <div className="career-role__marker">
              <img
                src={experienceLogos[role.id]}
                alt=""
                width="52"
                height="52"
              />
            </div>
            <div className="career-role__content glass-panel">
              <header>
                <div>
                  <span>{role.date}</span>
                  <h3>{role.position}</h3>
                  <p>
                    {role.company} · {role.scope}
                  </p>
                </div>
              </header>
              <p className="career-role__summary">{role.summary}</p>
              <details>
                <summary>
                  {t("experience.details")}
                  <Icon icon="lucide:chevron-down" aria-hidden />
                </summary>
                <ul>
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
