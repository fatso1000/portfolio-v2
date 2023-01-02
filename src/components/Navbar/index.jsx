import React, { useState, useEffect, useRef } from "react";
import { IoMenu, IoAlertCircleOutline } from "react-icons/io5";

export const Navbar = () => {
  const [currentScreen, setCurrentScreen] = React.useState(0);
  const [showNav, setShowNav] = useState(false);
  const [isAlert, setIsAlert] = useState(true);
  const [screenPosition, setscreenPosition] = useState(0);
  const [background, setBackground] = useState(true);
  const [snapScrolling, setSnapScrolling] = useState(true);
  const [appTheme, setAppTheme] = useState("#fdf7e7");

  useEffect(() => {
    if (background) {
      document.body.className = "";
      document.body.classList.add(appTheme);
    } else {
      document.body.className = "";
    }
  }, [appTheme, background]);

  useEffect(() => {
    const html = document.querySelector("html");
    if (snapScrolling) {
      html.className = "";
      html.classList.add("scroll-snap");
    } else {
      html.className = "";
    }
  }, [snapScrolling]);

  const getScreen = () => {
    const sectionScreens = [...document.querySelectorAll(".section")];
    const findScreen = sectionScreens.find((val) =>
      val ? isInViewport(val) : false
    );
    if (findScreen) {
      const dataColor = findScreen.getAttribute("data-color");
      const current = navbarScreens.findIndex(
        (val) => val.href === findScreen.id
      );
      if (current > -1) setCurrentScreen(current);
      setAppTheme(dataColor);
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
    const scrollTop = window.pageYOffset; // how much the user has scrolled by
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();

    const totalDocScrollLength = docHeight - winHeight;
    const scrollPostion = Math.floor((scrollTop / totalDocScrollLength) * 100);
    getScreen();

    setscreenPosition(scrollPostion);
  };

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
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
    <header className={`navbar sticky`} >
      <div
        className="navbar-progress-bar"
        style={{
          width: `calc(${screenPosition}% - 4rem)`,
        }}
      ></div>
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
      {isAlert && (
        <div
          className="introduction-alert"
          onClick={() => {
            setIsAlert(false);
            setShowNav(true);
          }}
        >
          App Settings <IoAlertCircleOutline color={"red"} />
          <div className="tail"></div>
        </div>
      )}
      <nav className={`navbar_nav ${showNav && "active"}`}>
        <ul>
          <li>
            <input
              id="toggle-background"
              type="checkbox"
              onClick={() => setBackground(!background)}
              defaultChecked={true}
            ></input>
            <label htmlFor="toggle-background">
              Toggle background color change
            </label>
          </li>
          <li>
            <input
              id="toggle-snap"
              type="checkbox"
              onClick={() => setSnapScrolling(!snapScrolling)}
              defaultChecked={true}
            ></input>
            <label htmlFor="toggle-snap">Toggle snap-scrolling</label>
          </li>
          <li>
            <button>Download CV</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
