import React from "react";

export const SectionHeader = ({ eyebrow, title, intro }) => (
  <header className="section-heading">
    <span className="section-heading__eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {intro ? <p>{intro}</p> : null}
  </header>
);
