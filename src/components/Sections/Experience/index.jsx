import React from "react";
import { Accordion } from "../../Accordion";
import MobeatsLogo from "../../../assets/mobeats_logo.jfif";
import SoyHenryLogo from "../../../assets/soyhenry_logo.jfif";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation();

  const logos = [MobeatsLogo, SoyHenryLogo];

  return (
    <section
      id="experience"
      className="section experience"
      data-color="experience"
    >
      <div className="experience__container">
        <h2>{t("header.experience")}</h2>
      </div>
      <div className="accordion--container">
        {t("experiences", { returnObjects: true }).map((val, i) => (
          <Accordion
            position={val.position}
            enterprise={val.enterprise}
            date={val.date}
            location={val.location}
            experiences={val.experiences}
            logo={logos[i]}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};
