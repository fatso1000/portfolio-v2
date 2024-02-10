import React from "react";
import ProfilePic from "../../../assets/perfil-copia.webp";
import { IoArrowDownOutline } from "react-icons/io5";
import { GrLocationPin } from "react-icons/gr";
import ArgentinaFlag from "../../../assets/flag-argentina.png";

export const Introduction = () => {
  return (
    <section className="section introduction__container" id="home">
      <div className="introduction__pic__container">
        <img src={ProfilePic} alt="img" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className="introduction-text-container"
      >
        <div className="introduction__title">
          <h2>Matias Benitez</h2>
          <h1>Front-End Developer</h1>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <GrLocationPin />
            <span>Buenos Aires, Argentina </span>
            <img
              src={ArgentinaFlag}
              height={20}
              width={20}
              alt="argentina-flag"
            />
          </div>
        </div>
      </div>
      <a href="#technologies" className="introduction__explore">
        <IoArrowDownOutline />
      </a>
    </section>
  );
};
