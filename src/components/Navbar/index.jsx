import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const [currentScreen, setCurrentScreen] = React.useState(0);
  const [showNav, setShowNav] = useState(false);
  const [isAlert, setIsAlert] = useState(true);

  const navbarScreens = [
    {
      name: "Home",
      href: "home",
    },
    {
      name: "About Me",
      href: "about-me",
    },
    { name: "Technologies", href: "technologies" },
    {
      name: "Experience",
      href: "experience",
    },
    {
      name: "Contact",
      href: "contact-me",
    },
  ];

  return (
    <header className={`navbar sticky`}>
      <div>
        <h5>MB</h5>
      </div>
      <div className="navbar-progress">
        {navbarScreens.map((val, i) => (
          <a
            href={`#${val.href}`}
            className={currentScreen === i ? "active" : ""}
            onClick={() => setCurrentScreen(i)}
            key={i}
          >
            {val.name}
          </a>
        ))}
      </div>
      <button
        className="header-button"
        onClick={() => {
          setShowNav(!showNav);
          if (isAlert) setIsAlert(false);
        }}
      >
        <IoMenu />
      </button>
      <nav className={`navbar_nav ${showNav && "active"}`}>
        <ul>
          <li>
            <button>Download CV</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
