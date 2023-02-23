import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const [currentScreen, setCurrentScreen] = React.useState(0);
  const [showNav, setShowNav] = useState(false);
  const [isAlert, setIsAlert] = useState(true);

  const getScreen = () => {
    const sectionScreens = [...document.querySelectorAll(".section")];
    const findScreen = sectionScreens.find((val) =>
      val ? isInViewport(val) : false
    );
    if (findScreen) {
      const current = navbarScreens.findIndex(
        (val) => val.href === findScreen.id
      );
      if (current > -1) setCurrentScreen(current);
    }
  };

  const isInViewport = (el) => {
    if (typeof window !== "undefined") {
      const rect = el.getBoundingClientRect();
      const scroll =
        document.body.scrollTop + document.body.innerHeight ||
        document.documentElement.clientHeight / 5;
      if (
        rect.top <= scroll &&
        rect.top +
          (document.body.innerHeight || document.documentElement.clientHeight) >
          scroll
      ) {
        return true;
      }
      return false;
    }
  };

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

  const calculateScrollDistance = () => {
    getScreen();
  };

  useEffect(() => {
    window.addEventListener("scroll", () =>
      requestAnimationFrame(() => calculateScrollDistance())
    );

    return () => {
      window.removeEventListener("scroll", () =>
        requestAnimationFrame(() => calculateScrollDistance())
      );
    };
  }, []);

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
