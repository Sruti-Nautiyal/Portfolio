import React from "react";
import Section from "./common/Section";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.jpg";
import mern from "../assets/mern.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.jpg";
import sql from "../assets/sql.png";
import python from "../assets/python.jpg";
import ds from "../assets/ds.png";

function Skills() {
  const SKILLS = [
    {
      id: 1,
      image: html,
      title: "HTML",
    },
    {
      id: 2,
      image: css,
      title: "CSS",
    },
    {
      id: 3,
      image: js,
      title: "Javascript",
    },
    {
      id: 4,
      image: react,
      title: "React",
    },
    {
      id: 5,
      image: nodejs,
      title: "NodeJS",
    },
    {
      id: 6,
      image: python,
      title: "Python",
    },
    {
      id: 7,
      image: mern,
      title: "MERN stack",
    },
    {
      id: 8,
      image: ds,
      title: "Data Structures",
    },
    {
      id: 9,
      image: sql,
      title: "SQL",
    },
  ];
  return (
    <Section
      title="Skills "
      subtitle="Following is the skills that I possess and have my own experience with.If you find my skills relevent to the job positon looking for then please send me an email"
    >
      <div className=" grid gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
        {SKILLS.map(({ id, image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-105"
          >
            <img
              src={image}
              alt={title}
              className="w-36 h-36 md:w-44 md:h-44 object-contain "
            />
            <h3 className="mt-2 text-base">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
