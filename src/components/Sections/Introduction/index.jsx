import React from "react";
import ProfilePic from "../../../assets/perfil-copia.png";
import { IoArrowDownOutline } from "react-icons/io5";
import { GrLocationPin } from "react-icons/gr";
import ArgentinaFlag from "../../../assets/flag-argentina.png";

export const Introduction = () => {
  return (
    <div className="section introduction-container" id="home">
      <div className="introduction-pic-container">
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
        <div className="introduction-title">
          <h1>Matias Benitez</h1>
          <h3>Front-End Developer</h3>
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
      <a
        style={{
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        href="#about-me"
        className="introduction-explore"
      >
        <IoArrowDownOutline />
      </a>
    </div>
  );
};
