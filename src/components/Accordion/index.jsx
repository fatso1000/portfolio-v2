import React from "react";

export const Accordion = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { position, enterprise, date } = props;
  return (
    <div className={isOpen ? "accordion active" : "accordion"}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <h3>{position}</h3>
        <span>{enterprise}</span>
        <span>{date}</span>
      </button>
      <div>
        <ul>
          <li>
            <h3>ENFOKE</h3>
            <span>React</span>
          </li>
          <li>
            <h3>LAFKEN</h3>
            <span>React-Native</span>
          </li>
          <li>
            <h3>IOF</h3>
            <span>React & NodeJS</span>
          </li>
          <li>
            <h3>SEVENTEEN</h3>
            <span>Angular</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
