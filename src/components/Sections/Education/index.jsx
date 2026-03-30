import React from "react";
import SoyHenryLogo from "../../../assets/soyhenry_logo.jfif";
import Tec4Logo from "../../../assets/tec4.png";
import AccentureLogo from "../../../assets/accenture_logo.png";
import { useTranslation } from "react-i18next";

const EducationEntry = ({ title, description, technologies }) => (
  <div className="education-timeline__entry">
    {title ? <h4 className="education-timeline__entry-title">{title}</h4> : null}
    <p className="education-timeline__entry-desc">{description}</p>
    {technologies ? (
      <p className="muted education-timeline__entry-tech">{technologies}</p>
    ) : null}
  </div>
);

const EducationCard = ({
  position,
  enterprise,
  date,
  location,
  experiences,
  logo,
  enterpriseLabel,
}) => (
  <article className="education-timeline__item">
    <div className="education-timeline__node">
      <img src={logo} alt="" width={50} height={50} />
    </div>
    <div className="education-timeline__content">
      <header className="education-timeline__header">
        <h3>{position}</h3>
        <span className="education-timeline__enterprise">{enterprise}</span>
        <span className="muted education-timeline__meta">
          {date}
          {location ? ` · ${location}` : ""}
        </span>
      </header>
      <div className="education-timeline__entries">
        {experiences.map((value, i) => (
          <EducationEntry
            key={i}
            title={value.title}
            description={value.description}
            technologies={value.technologies}
          />
        ))}
      </div>
    </div>
  </article>
);

export const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="section education">
      <div className="education__container glass-panel">
        <h2>{t("header.education")}</h2>
        <div className="education-timeline">
          <EducationCard
            position={t("education.eestn4.position")}
            enterprise={t("education.eestn4.enterprise")}
            date={t("education.eestn4.date")}
            location={t("education.eestn4.location")}
            experiences={t("education.eestn4.experiences", {
              returnObjects: true,
            })}
            logo={Tec4Logo}
          />
          <EducationCard
            position={t("education.soyHenry.position")}
            enterprise={t("education.soyHenry.enterprise")}
            date={t("education.soyHenry.date")}
            location={t("education.soyHenry.location")}
            experiences={t("education.soyHenry.experiences", {
              returnObjects: true,
            })}
            logo={SoyHenryLogo}
          />
          <EducationCard
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
