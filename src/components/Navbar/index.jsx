import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { navItems, resumeUrl } from "../../data/portfolio";

export const Navbar = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [showNav, setShowNav] = useState(false);
  const menuRef = useRef(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setCurrentScreen(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!showNav) return;
    const closeOnOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowNav(false);
      }
    };
    document.addEventListener("mousedown", closeOnOutside);
    return () => document.removeEventListener("mousedown", closeOnOutside);
  }, [showNav]);

  const changeLanguage = () => {
    const language = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
    setShowNav(false);
  };

  const closeMenu = (id) => {
    setCurrentScreen(id);
    setShowNav(false);
  };

  return (
    <header className={`navbar sticky`}>
      <div className="navbar__container">
        <a
          className="navbar__brand"
          href="#home"
          onClick={() => closeMenu("home")}
        >
          MB
        </a>
        <nav className="navbar-progress" aria-label={t("header.primaryNav")}>
          {navItems.map((item) => (
            <a
              href={`#${item.id}`}
              className={currentScreen === item.id ? "active" : ""}
              onClick={() => closeMenu(item.id)}
              key={item.id}
            >
              {t(`header.${item.key}`)}
            </a>
          ))}
        </nav>
        <div className="navbar-menu" ref={menuRef}>
          <button
            type="button"
            className="header-button"
            aria-expanded={showNav}
            aria-controls="navbar-actions-menu"
            aria-haspopup="true"
            aria-label={t("header.navbar.openMenu")}
            onClick={() => setShowNav((open) => !open)}
          >
            <Icon icon={showNav ? "lucide:x" : "lucide:menu"} aria-hidden />
          </button>
          {showNav ? (
            <nav
              id="navbar-actions-menu"
              className="navbar-dropdown-menu glass-panel"
              aria-label={t("header.navbar.menuActions")}
            >
              <ul>
                {navItems.map((item) => (
                  <li className="navbar-dropdown-menu__nav-item" key={item.id}>
                    <a
                      className="navbar-dropdown-menu__item"
                      href={`#${item.id}`}
                      onClick={() => closeMenu(item.id)}
                    >
                      {t(`header.${item.key}`)}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    className="navbar-dropdown-menu__item"
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon icon="lucide:file-down" aria-hidden />
                    {t("header.navbar.download")}
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    className="navbar-dropdown-menu__item"
                    onClick={changeLanguage}
                  >
                    <Icon icon="lucide:languages" aria-hidden />
                    {i18n.language === "es" ? "English" : "Español"}
                  </button>
                </li>
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
};
