import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { resumeUrl } from "../../../data/portfolio";

export const ContactMe = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section contact">
      <div className="contact__panel glass-panel">
        <span className="section-heading__eyebrow">{t("contact.eyebrow")}</span>
        <h2>{t("contact.title")}</h2>
        <p>{t("contact.intro")}</p>
        <div className="contact__actions">
          <a
            className="button button--primary"
            href="mailto:agustinbenitez81@gmail.com"
          >
            <Icon icon="lucide:mail" aria-hidden />
            {t("contact.email")}
          </a>
          <a
            className="button button--glass"
            href="https://www.linkedin.com/in/matias-benitez81/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="simple-icons:linkedin" aria-hidden />
            LinkedIn
          </a>
          <a
            className="button button--glass"
            href="https://github.com/fatso1000"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="simple-icons:github" aria-hidden />
            GitHub
          </a>
          <a
            className="button button--text"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t("header.navbar.download")}
          </a>
        </div>
      </div>
      <footer className="contact__footer">
        <span>{t("contact.designed")}</span>
        <span>{new Date().getFullYear()}</span>
      </footer>
    </section>
  );
};
