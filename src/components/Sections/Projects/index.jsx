import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../../SectionHeader";
import { projectAssets } from "../../../data/portfolio";

const ProjectLinks = ({ project, title, t }) => (
  <div className="project-links">
    {project.live ? (
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="button button--primary"
        aria-label={`${t("projects.live")}: ${title}`}
      >
        <Icon icon="lucide:globe" aria-hidden />
        {t("projects.live")}
      </a>
    ) : null}
    <a
      href={project.source}
      target="_blank"
      rel="noreferrer"
      className="button button--glass"
      aria-label={`${t("projects.source")}: ${title}`}
    >
      <Icon icon="simple-icons:github" aria-hidden />
      {t("projects.source")}
    </a>
  </div>
);

export const Projects = () => {
  const { t } = useTranslation();
  const featured = t("projects.featured", { returnObjects: true });
  const archive = t("projects.archive", { returnObjects: true });

  return (
    <section id="projects" className="section projects">
      <SectionHeader
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        intro={t("projects.intro")}
      />
      <div className="featured-projects">
        {featured.map((item, index) => {
          const project = projectAssets[item.id];
          return (
            <article className="featured-project glass-panel" key={item.id}>
              <div className="featured-project__media">
                <img
                  src={project.image}
                  alt={`${item.title} ${t("projects.preview")}`}
                />
              </div>
              <div className="featured-project__body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="tag-list" aria-label={t("common.technologies")}>
                  {item.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <ProjectLinks project={project} title={item.title} t={t} />
              </div>
            </article>
          );
        })}
      </div>
      <div className="project-archive glass-panel">
        <header>
          <span>{t("projects.archiveEyebrow")}</span>
          <h3>{t("projects.archiveTitle")}</h3>
        </header>
        <div className="project-archive__grid">
          {archive.map((item) => {
            const project = projectAssets[item.id];
            return (
              <article key={item.id}>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${t("projects.source")}: ${item.title}`}
                  className="icon-link"
                >
                  <Icon icon="lucide:arrow-up-right" aria-hidden />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
