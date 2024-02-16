import React from "react";
import { IoLogoLinkedin, IoMail, IoLogoGithub } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export const ContactMe = () => {
  const { t } = useTranslation();

  return (
    <section data-color="violet" id="contact-me" className="section contact-me">
      <div className="card">
        <h2>{t("header.contact")}</h2>
        <span>
          {t("contactMe.text")} {"<3"}
        </span>
        <div style={{ margin: "1.2rem 0" }} className="contact-me__list">
          <div>
            <IoMail />
            <span>agustinbenitez81@gmail.com</span>
          </div>
          <div>
            <IoLogoLinkedin />
            <a
              href="https://www.linkedin.com/in/matias-benitez81/"
              target="_blank"
              rel="noreferrer"
            >
              Matias Benitez
            </a>
          </div>
          <div>
            <IoLogoGithub />
            <a
              href="https://github.com/fatso1000"
              target="_blank"
              rel="noreferrer"
            >
              fatso1000
            </a>
          </div>
        </div>
      </div>
      <footer
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "2rem",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        <h5>{t("contactMe.designed")}&#128140;</h5>
        <h5 style={{ fontSize: "0.78em" }}>2023</h5>
      </footer>
    </section>
  );
};
