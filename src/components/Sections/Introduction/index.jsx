import React from "react";
import { Icon } from "@iconify/react";
import ProfilePic from "../../../assets/perfil.png";
import NewZealandFlag from "../../../assets/flag-new-zealand.png";
import { useTranslation } from "react-i18next";

export const Introduction = () => {
  const { t } = useTranslation();

  return (
    <section className="section introduction__container" id="home">
      <div className="introduction__pic__container">
        <img
          src={ProfilePic}
          alt="Matias Benitez, Front-End Developer"
        />
      </div>
      <div className="introduction-text-container">
        <div className="introduction__text-glass glass-panel">
          <div className="introduction__title">
            <h2>Matias Benitez</h2>
            <h1>Front-End Developer</h1>
            <div className="introduction__location-row">
              <Icon icon="mdi:map-marker-outline" aria-hidden />
              <span>Auckland, New Zealand</span>
              <img
                className="introduction__flag"
                src={NewZealandFlag}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <a
        href="#technologies"
        className="introduction__explore"
        aria-label={t("introduction.exploreAriaLabel")}
      >
        <Icon icon="ion:arrow-down-outline" aria-hidden />
      </a>
    </section>
  );
};
