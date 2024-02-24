import React from "react";
import Section from "./common/Section";
import { FaLinkedin, FaArrowCircleDown, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import contact from "../assets/contact.png";

function Contact() {
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
    <Section title="Contact Me" subtitle="Get in touch me.">
      <div className=" flex flex-col items-center justify-center gap-8 text-center">
        <div>
          <img src={contact} alt="Contact Info" className="w-32 h-32" />
        </div>
        <div>
          <p className="max-w-xs md:max-w-lg font-extralight">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            eius architecto numquam repellendus rerum exercitationem porro
            nihil, cumque quo maiores placeat facilis cupiditate totam, aut ab
            rem natus neque quisquam.
          </p>
        </div>

        <div className="flex w-full items-center justify-evenly text-3xl">
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

        <div className=" text-left w-full">
          <form action="https://getform.io/f/1aKPWzbQ" method="POST">
            <div className="gap-4 w-full">
              <div className="flex flex-col">
                <label className="capitalise text-sm py-2 font-extralight">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className=" border-2 p-3 rounded-lg flex focus:outline-none border-gray-400 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-3">
                <label className="capitalise text-sm py-2 font-extralight">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  className="border-2 p-3 rounded-lg flex focus:outline-none border-gray-400 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-3">
                <label className="capitalise text-sm py-2 font-extralight">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="border-2 p-3 rounded-lg flex focus:outline-none border-gray-400 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-3">
                <label className="capitalise text-sm py-2 font-extralight">
                  Message
                </label>
                <textarea
                  rows="10"
                  name="message"
                  className="border-2 p-3 rounded-lg flex focus:outline-none border-gray-400 dark:text-white resize-none"
                />
              </div>
            </div>

            <div className="flex item-center justify-center">
              <button className="my-8 bg-gradient-to-r from-violet-300 to-violet-500 py-3 px-6 text-white rounded-lg uppercase tracking-wider cursor-pointer hover:scale-105 duration-200">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
