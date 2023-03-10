import React from "react";
import { Accordion } from "../../Accordion";
import SoyHenryLogo from "../../../assets/soyhenry_logo.jfif";
import Tec4Logo from "../../../assets/tec4.png";
import { useTranslation } from "react-i18next";

export const Education = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="education" className="section experience">
      <div className="experience__container">
        <h2>{t("header.education")}</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
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
      </div>
    </section>
  );
};
