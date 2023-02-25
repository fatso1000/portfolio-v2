import React from "react";
import { IoLogoLinkedin, IoMail, IoLogoGithub } from "react-icons/io5";

export const ContactMe = () => {
  return (
    <div data-color="violet" id="contact-me" className="section contact-me">
      <div className="card">
        <h1 style={{ fontSize: "2.3em", color: "var(--secondary)" }}>
          Contact Me
        </h1>
        <span>I hope we can get in touch soon! {"<3"}</span>
        <div style={{ margin: "1.2rem 0" }} className="contact-me__list">
          <div>
            <IoMail />
            <span>agustinbenitez81@gmail.com</span>
          </div>
          <div>
            <IoLogoLinkedin />
            <a
              href="https://www.linkedin.com/in/matias-benitez81/"
              target="_blank"
              rel="noreferrer"
            >
              Matias Benitez
            </a>
          </div>
          <div>
            <IoLogoGithub />
            <a
              href="https://github.com/fatso1000"
              target="_blank"
              rel="noreferrer"
            >
              fatso1000
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "2rem",
        }}
      >
        <h5>Designed and developed by Matias Benitez :P</h5>
        <h5 style={{ fontSize: "0.78em" }}>2023</h5>
      </div>
    </div>
  );
};
