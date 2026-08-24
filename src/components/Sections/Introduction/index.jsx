import React from "react";
import { Icon } from "@iconify/react";
import ProfilePic from "../../../assets/perfil.png";
import ProjectPreview from "../../../assets/projects/bsas_travel.png";
import NewZealandFlag from "../../../assets/flag-new-zealand.png";
import { useTranslation } from "react-i18next";
import { resumeUrl } from "../../../data/portfolio";

export const Introduction = () => {
  const { t } = useTranslation();

  return (
    <section className="section hero" id="home">
      <div className="hero__content">
        <span className="hero__eyebrow">{t("introduction.eyebrow")}</span>
        <h1>
          Matias Benitez
          <span>{t("introduction.role")}</span>
        </h1>
        <p className="hero__lead">{t("introduction.lead")}</p>
        <div className="hero__meta">
          <span>
            <Icon icon="lucide:briefcase-business" aria-hidden />
            {t("introduction.experience")}
          </span>
          <span>
            <Icon icon="lucide:map-pin" aria-hidden />
            {t("introduction.location")}
            <img src={NewZealandFlag} width="18" height="18" alt="" />
          </span>
        </div>
        <div className="hero__actions">
          <a href="#selected-work" className="button button--primary">
            {t("introduction.viewWork")}
            <Icon icon="lucide:arrow-down-right" aria-hidden />
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="button button--glass"
          >
            {t("header.navbar.download")}
          </a>
        </div>
      </div>
      <div className="hero__canvas" aria-label={t("introduction.canvasLabel")}>
        <div className="hero__browser-card glass-panel" aria-hidden>
          <div className="hero__browser-bar">
            <span />
            <span />
            <span />
            <strong>portfolio.dev</strong>
          </div>
          <img src={ProjectPreview} alt="" />
        </div>
        <div className="hero__portrait glass-panel">
          <img src={ProfilePic} alt={t("introduction.portraitAlt")} />
        </div>
        <div className="hero__code-card glass-panel" aria-hidden>
          <span>const</span> engineer = {"{"}
          <br />
          &nbsp;&nbsp;frontend: [<strong>"Vue 3"</strong>, <strong>"React"</strong>],
          <br />
          &nbsp;&nbsp;backend: <strong>"Node.js + REST"</strong>,
          <br />
          &nbsp;&nbsp;workflow: <strong>"AI-assisted"</strong>,
          <br />
          {"}"}
        </div>
        <div className="hero__component-card glass-panel" aria-hidden>
          <span>Full-stack toolkit</span>
          <div>
            <Icon icon="simple-icons:vuedotjs" />
            <Icon icon="simple-icons:react" />
            <Icon icon="simple-icons:typescript" />
            <Icon icon="simple-icons:nodedotjs" />
          </div>
        </div>
      </div>
    </section>
  );
};
