import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "../../SectionHeader";
import { workAssets } from "../../../data/portfolio";

export const SelectedWork = () => {
  const { t } = useTranslation();
  const items = t("selectedWork.items", { returnObjects: true });

  return (
    <section id="selected-work" className="section selected-work">
      <SectionHeader
        eyebrow={t("selectedWork.eyebrow")}
        title={t("selectedWork.title")}
        intro={t("selectedWork.intro")}
      />
      <div className="case-study-list">
        {items.map((item, index) => {
          const asset = workAssets[item.id];
          return (
            <article className="case-study glass-panel" key={item.id}>
              <header className="case-study__header">
                <img src={asset.logo} alt="" width="56" height="56" />
                <div>
                  <span>{item.company}</span>
                  <h3>{item.title}</h3>
                </div>
                {asset.url ? (
                  <a
                    href={asset.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.company} ${t("common.website")}`}
                    className="icon-link"
                  >
                    <Icon icon="lucide:arrow-up-right" aria-hidden />
                  </a>
                ) : null}
              </header>
              <div className="case-study__story">
                <div>
                  <h4>{t("selectedWork.context")}</h4>
                  <p>{item.context}</p>
                </div>
                <div>
                  <h4>{t("selectedWork.contribution")}</h4>
                  <p>{item.contribution}</p>
                </div>
                <div>
                  <h4>{t("selectedWork.outcome")}</h4>
                  <p>{item.outcome}</p>
                </div>
              </div>
              <ul className="tag-list" aria-label={t("common.technologies")}>
                {item.stack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};
