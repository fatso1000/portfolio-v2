import React from "react";
import { Accordion } from "../../Accordion";
import SoyHenryLogo from "../../../assets/soyhenry_logo.jfif";
import Tec4Logo from "../../../assets/tec4.png";
import AccentureLogo from "../../../assets/accenture_logo.png";
import { useTranslation } from "react-i18next";

export const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="section experience">
      <div className="experience__container">
        <h2>{t("header.education")}</h2>
      </div>
      <div className="accordion--container">
        <Accordion
          position={t("education.eestn4.position")}
          enterprise={t("education.eestn4.enterprise")}
          date={t("education.eestn4.date")}
          location={t("education.eestn4.location")}
          experiences={t("education.eestn4.experiences", {
            returnObjects: true,
          })}
          logo={Tec4Logo}
        />
        <Accordion
          position={t("education.soyHenry.position")}
          enterprise={t("education.soyHenry.enterprise")}
          date={t("education.soyHenry.date")}
          location={t("education.soyHenry.location")}
          experiences={t("education.soyHenry.experiences", {
            returnObjects: true,
          })}
          logo={SoyHenryLogo}
        />
        <Accordion
          position={t("education.accenture.position")}
          enterprise={t("education.accenture.enterprise")}
          date={t("education.accenture.date")}
          location={t("education.accenture.location")}
          experiences={t("education.accenture.experiences", {
            returnObjects: true,
          })}
          logo={AccentureLogo}
        />
      </div>
    </section>
  );
};
