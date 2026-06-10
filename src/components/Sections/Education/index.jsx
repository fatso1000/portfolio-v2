import React from "react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../../SectionHeader";
import { educationLogos } from "../../../data/portfolio";

export const Education = () => {
  const { t } = useTranslation();
  const formal = t("education.formal", { returnObjects: true });
  const certifications = t("education.certifications", { returnObjects: true });

  const renderItem = (item) => (
    <article className="education-card glass-panel" key={item.id}>
      <img src={educationLogos[item.id]} alt="" width="54" height="54" />
      <div>
        <span>{item.date}</span>
        <h3>{item.title}</h3>
        <p className="education-card__institution">{item.institution}</p>
        <p>{item.description}</p>
      </div>
    </article>
  );

  return (
    <section id="education" className="section education">
      <SectionHeader
        eyebrow={t("education.eyebrow")}
        title={t("education.title")}
        intro={t("education.intro")}
      />
      <div className="education-columns">
        <div>
          <h3 className="education-columns__label">
            {t("education.formalTitle")}
          </h3>
          {formal.map(renderItem)}
        </div>
        <div>
          <h3 className="education-columns__label">
            {t("education.certificationsTitle")}
          </h3>
          {certifications.map(renderItem)}
        </div>
      </div>
    </section>
  );
};
