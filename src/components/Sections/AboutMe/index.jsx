import React from "react";
import ProfilePic from "../../../assets/yo.jpg";
import { Trans, useTranslation } from "react-i18next";

export const AboutMe = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="about-me" data-color="about-me" className="section about-me">
      <div className="about-me__section">
        <div className="description">
          <div className="about-me__profile-pic">
            <img src={ProfilePic} alt="profile-pic" />
          </div>

          <span>
            <Trans
              components={{
                span: <span style={{ color: "var(--secondary)" }} />,
              }}
            >
              aboutMe.text
            </Trans>
          </span>
        </div>
        <div className="label muted">
          <i>{t("aboutMe.sub")}</i>
        </div>
      </div>
    </section>
  );
};
