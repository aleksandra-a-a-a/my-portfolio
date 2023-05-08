import "/styles.css";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useState } from "react";

export default function App() {
  const [contact, showContact] = useState();
  function setShowContact() {
    showContact(true);
    showAbout(false);
    showProjects(false);
    showSkills(false);
  }

  const [about, showAbout] = useState(true);
  function setShowAbout() {
    showContact(false);
    showAbout(true);
    showProjects(false);
    showSkills(false);
  }

  const [projects, showProjects] = useState();
  function setShowProjects() {
    showContact(false);
    showAbout(false);
    showProjects(true);
    showSkills(false);
  }

  const [skills, showSkills] = useState();
  function setShowSkills() {
    showContact(false);
    showAbout(false);
    showProjects(false);
    showSkills(true);
  }

  return (
    <>
      <div className="navbar">
        <ul>
          <li onClick={setShowAbout}>About</li>
          <li onClick={setShowProjects}>Projects</li>
          <li onClick={setShowSkills}>Skills</li>
          <li onClick={setShowContact}>Contact</li>
        </ul>
      </div>

      {(() => {
        if (about) {
          return <About />;
        }

        if (projects) {
          return <Projects />;
        }

        if (skills) {
          return <Skills />;
        }

        if (contact) {
          return <Contact />;
        }
      })()}
    </>
  );
}
