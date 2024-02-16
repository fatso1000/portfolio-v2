import React from "react";
import SoyHenryLogo from "../../../assets/soyhenry_logo.jfif";
import Tec4Logo from "../../../assets/tec4.png";
import AccentureLogo from "../../../assets/accenture_logo.png";
import { useTranslation } from "react-i18next";

const EducationComponent = (props) => {
  const { position, enterprise, date, experiences, logo } = props;

  return (
    <div className="education--card">
      <div>
        <img src={logo} alt="" width={20} height={20} />
      </div>
      <div>
        <div className="education--card__description">
          <h3>{position}</h3>
          <span>{enterprise}</span> <br />
          <span className="muted">{date}</span>
        </div>
        <div className="experiences">
          {experiences.map((value, i) => (
            <span key={i}>{value.description}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="section experience">
      <div className="education__container">
        <div className="">
          <h2>{t("header.education")}</h2>
        </div>
        <div className="experience-educations">
          <EducationComponent
            position={t("education.eestn4.position")}
            enterprise={t("education.eestn4.enterprise")}
            date={t("education.eestn4.date")}
            location={t("education.eestn4.location")}
            experiences={t("education.eestn4.experiences", {
              returnObjects: true,
            })}
            logo={Tec4Logo}
          />
          <EducationComponent
            position={t("education.soyHenry.position")}
            enterprise={t("education.soyHenry.enterprise")}
            date={t("education.soyHenry.date")}
            location={t("education.soyHenry.location")}
            experiences={t("education.soyHenry.experiences", {
              returnObjects: true,
            })}
            logo={SoyHenryLogo}
          />
          <EducationComponent
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
      </div>
    </section>
  );
};
