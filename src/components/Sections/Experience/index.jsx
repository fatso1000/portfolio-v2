import React from "react";
import { Icon } from "@iconify/react";
import MobeatsLogo from "../../../assets/mobeats_logo.jfif";
import SoyHenryLogo from "../../../assets/soyhenry_logo.jfif";
import DreamVentureLogo from "../../../assets/dream_venture_logo.jpg";
import GrowlatLogo from "../../../assets/growlat_logo.jpeg";
import { useTranslation } from "react-i18next";

const ExperienceComponent = (props) => {
  const { position, enterprise, date, experiences, logo } = props;
  const defaultOpen = experiences.length <= 2;

  return (
    <div className="experience-job">
      <div className="experience-job__panel">
        <details className="experience-job__details" open={defaultOpen}>
          <summary className="experience-job__summary">
            <img
              className="experience-job__logo"
              src={logo}
              alt=""
              width={40}
              height={40}
            />
            <div className="experience-job__heading">
              <h3>{position}</h3>
              <span className="experience-job__enterprise">{enterprise}</span>
              <span className="muted experience-job__date">{date}</span>
            </div>
            <span className="experience-job__summary-chevron" aria-hidden>
              <Icon icon="ion:chevron-forward-outline" />
            </span>
          </summary>
          <div className="experiences experiences--work">
            <ul>
              {experiences.map((value, i) => (
                <li key={i}>
                  {value.link ? (
                    <div>
                      <a
                        className="experience-project-link"
                        target="_blank"
                        rel="noreferrer"
                        href={value.link}
                      >
                        {value.title}
                        <Icon
                          icon="ion:open"
                          className="experience-project-link__icon"
                          aria-hidden
                        />
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
        </details>
      </div>
    </div>
  );
};

const LOGO_BY_ENTERPRISE = {
  MOBEATS: MobeatsLogo,
  "SOY HENRY": SoyHenryLogo,
  "Dream Venture Studio": DreamVentureLogo,
  Growlat: GrowlatLogo,
};

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="section experience"
      data-color="experience"
    >
      <div className="experience__container glass-panel">
        <h2>{t("header.experience")}</h2>
        <div className="experience-jobs">
          {t("experiences", { returnObjects: true }).map((val, i) => (
            <ExperienceComponent
              position={val.position}
              enterprise={val.enterprise}
              date={val.date}
              location={val.location}
              experiences={val.experiences}
              logo={LOGO_BY_ENTERPRISE[val.enterprise] ?? MobeatsLogo}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
