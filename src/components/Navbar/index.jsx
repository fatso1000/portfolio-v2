import React, { useState, useEffect } from "react";
import { IoMenu, IoLanguage } from "react-icons/io5";
import { RiFileDownloadFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [currentScreen, setCurrentScreen] = React.useState(0);
  const [showNav, setShowNav] = useState(false);

  const { t, i18n } = useTranslation();

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
      name: t("header.home"),
      href: "home",
    },
    // {
    //   name: t("header.aboutMe"),
    //   href: "about-me",
    // },
    { name: t("header.technologies"), href: "technologies" },
    { name: t("header.education"), href: "education" },
    {
      name: t("header.experience"),
      href: "experience",
    },
    { name: t("header.projects"), href: "projects" },
    {
      name: t("header.contact"),
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
      <div className="navbar__container">
        <div>
          <h5>MB</h5>
        </div>
        <nav className="navbar-progress">
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
          <a
            href={`#${navbarScreens[currentScreen].href}`}
            className="individual-nav active"
          >
            {navbarScreens[currentScreen].name}
          </a>
        </nav>
        <button
          className="header-button"
          onClick={() => {
            setShowNav(!showNav);
          }}
        >
          <IoMenu />
        </button>
      </div>
      {showNav && (
        <nav
          className="introduction__alert"
          onClick={() => {
            setShowNav(true);
          }}
        >
          <ul>
            <li>
              <a
                href="https://drive.google.com/file/d/14r_HzEoU-iIMlepfS4Ze8HdNDlCBziE_/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                style={{ width: "calc(100% - 1rem)" }}
              >
                <RiFileDownloadFill />
                {t("header.navbar.download")}
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
                }}
              >
                <IoLanguage />
                {i18n.language === "es" ? "English" : "Español"}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
