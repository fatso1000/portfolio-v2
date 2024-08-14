import React from "react";
import MobeatsLogo from "../../../assets/mobeats_logo.jfif";
import SoyHenryLogo from "../../../assets/soyhenry_logo.jfif";
import DreamVentureLogo from "../../../assets/dream_venture_logo.jpg";
import { useTranslation } from "react-i18next";

const ExperienceComponent = (props) => {
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
          <ul>
            {experiences.map((value, i) => (
              <li key={i}>
                {value.link ? (
                  <div>
                    <a target="_blank" rel="noreferrer" href={value.link}>
                      {value.title}
                    </a>
                  </div>
                ) : (
                  <h3>{value.title}</h3>
                )}
                <span>{value.description}</span>
                <p className="muted">{value.technologies}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  const { t } = useTranslation();

  const logos = [MobeatsLogo, SoyHenryLogo, DreamVentureLogo];

  return (
    <section
      id="experience"
      className="section experience"
      data-color="experience"
    >
      <div className="experience__container">
        <div className="">
          <h2>{t("header.experience")}</h2>
        </div>
        <div className="accordion--container">
          {t("experiences", { returnObjects: true }).map((val, i) => (
            <ExperienceComponent
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
      </div>
    </section>
  );
};
