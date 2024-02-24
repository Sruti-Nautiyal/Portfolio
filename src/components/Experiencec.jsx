import React, { useState } from "react";
import Section from "./common/Section";

function Experiencec() {
  const [experience, setExperience] = useState(true);
  return (
    <Section
      title="Experience and Education"
      subtitle="This section is about my work experience and education."
    >
      <div className="grid gap-10 lg:gap-14 grid-cols-1">
        <div className="flex items-center justify-between gap-8">
          <button
            className="py-2 px-4 border-2 border-gray-500 rounded-lg hover:bg-violet-500"
            onClick={() => setExperience(true)}
          >
            Experience
          </button>
          <button
            className="py-2 px-4 border-2 border-gray-500 rounded-lg hover:bg-violet-500"
            onClick={() => setExperience(false)}
          >
            Education
          </button>
        </div>
        <div className="py-12 flex items-center justify-center ">
          {experience ? (
            <>
              <div className="py-12 px-40 border-2 border-gray-500 rounded-lg h-30">
                <img src="" alt="" />
                <h2> Web Developement Intern </h2>
                <p> Worked with html,css and Javascript</p>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Section>
  );
}

export default Experiencec;
