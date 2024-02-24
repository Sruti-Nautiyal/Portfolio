import React from "react";
import { FaLinkedin, FaArrowCircleDown, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import avatar from "../assets/avatar.png";

function Hero() {
  const SOCIAL = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/sruti-nautiyal-1586611b1/",
      icon: <FaLinkedin />,
    },
    {
      id: 2,
      link: "https://github.com/Sruti-Nautiyal",
      icon: <FaGithub />,
    },
    {
      id: 3,
      link: "mailto:shrutinautiyal6@gmail,com",
      icon: <MdEmail />,
    },
  ];
  return (
    <section className=" min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-violet-600 font-semibold uppercase ">
        Sruti Nautiyal
      </h2>
      <h3 className="py-3 text-2xl">Software Developer</h3>
      <p className=" max-w-xl font-light text-gray-500">
        Hii , Welcome to my site, I am a fresher currently looking for a job to
        enhance my experience in web development technology.
      </p>

      <div className=" flex justify-evenly py-8 lg:py-16 text-4xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="nooperner noreferrer"
            className=" cursor-pointer duration-300 hover:text-violet-400"
          >
            {icon}
          </a>
        ))}
      </div>

      <div>
        <img
          src={avatar}
          alt="avatar"
          className="w-80 h-80 md:w-90 md:h-90 object-cover "
        />
        <a
          href="/Sruti_Nautiyal__resume.pdf"
          download={true}
          className="flex items-center justify-center mt-4 bg-gradient-to-r from-violet-300 to-violet-500 py-3 rounded-lg"
        >
          Download Resume <FaArrowCircleDown className="px-1 text-2xl" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
