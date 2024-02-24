import React from "react";
import Section from "./common/Section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import realestate from "../assets/real-estate.png";
// import travel from "../assets/travel";
import threeD from "../assets/3d-website.jpg";
import hms from "../assets/hms.jpg";
import chromeExt from "../assets/chromeExt.png";

function Project() {
  const PROJECTS = [
    {
      id: 1,
      image: realestate,
      title: "Real Estate Website",
      github: "https://github.com/Sruti-Nautiyal/mern",
      demo: "",
    },
    {
      id: 2,
      image: threeD,
      title: "3d Website",
      github: "https://github.com/Sruti-Nautiyal/3d-website",
      demo: "",
    },
    {
      id: 3,
      image: hms,
      title: "Hostel Management System",
      github: "",
      demo: "",
    },
    {
      id: 4,
      image: chromeExt,
      title: "Chrome Extension",
      github: "https://github.com/Sruti-Nautiyal/chrome-extension",
      demo: "",
    },
  ];
  return (
    <Section
      title="Projects"
      subtitle="These are some of the project that i have worked on and are a proof to my skills."
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2 ">
        {PROJECTS.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="max-w-lg shadow-lg-300 shadow-lg flex rounded-2xl overflow-hidden"
          >
            <img src={image} alt={title} className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
              <a
                className="text-2xl cursor-pointer duration-150 hover:scale-105"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="text-2xl cursor-pointer duration-150 hover:scale-105"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Project;
