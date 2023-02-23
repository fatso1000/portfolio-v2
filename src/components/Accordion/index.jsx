import React from "react";

export const Accordion = (props) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const { position, enterprise, date, location, experiences, logo } = props;
  return (
    <div className={isOpen ? "accordion active" : "accordion"}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <img src={logo} alt="lol" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "0.8rem",
          }}
        >
          <h2 style={{ fontSize: "1.8em" }}>{position}</h2>
          <span style={{ fontSize: "1.17em" }}>{enterprise}</span>
          <span className="muted">{date}</span>
          <span className="muted">{location}</span>
        </div>
      </button>
      <div className="button-list">
        <ul>
          {experiences.map((value) => (
            <li>
              <h3>{value.title}</h3>
              <span>{value.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
