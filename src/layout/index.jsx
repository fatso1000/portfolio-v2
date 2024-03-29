import React from "react";
import { Navbar } from "../components/Navbar";
import { AboutMe } from "../components/Sections/AboutMe";
import { ContactMe } from "../components/Sections/Contact";
import { Education } from "../components/Sections/Education";
import { Experience } from "../components/Sections/Experience";
import { Introduction } from "../components/Sections/Introduction";
import { Projects } from "../components/Sections/Projects";
import { Technologies } from "../components/Sections/Technologies";

export const Layout = () => {
  return (
    <main className="app-container">
      <Navbar />
      <Introduction />
      {/* <AboutMe /> */}
      <Technologies />
      <Education />
      <Experience />
      <Projects />
      <ContactMe />
    </main>
  );
};
