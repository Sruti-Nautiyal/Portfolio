import React, { useState } from "react";
import Section from "./common/Section";
import logo from '../assets/Logo.png'
import uit from '../assets/uit.png'

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
              <div className="w-fit flex flex-row gap-4 border-2 bg-slate-500 h-36 rounded-xl" >
               <div className="w-1/4 border-2 border-gray-500 rounded-lg">
                  <img src={logo} alt="logo" className="h-fit w-fit object-contain"/>
                  <h3  className="text-sm text-black">Jan 22 - Apr 22</h3>
               </div>
               <div className="w-3/4 flex flex-col items-start justify-center px-4 ">
                  <h2 className="max-w-xl text-black font-light"> Web Developement Intern </h2>
                  <p className="text-black "> Worked with html,css and Javascript</p>
                </div>
              </div>
            </>
          ) : (
            <>
             <div className="w-fit flex flex-row gap-4 border-2 bg-slate-500 h-fit rounded-xl" >
               <div className="w-1/4 border-2 border-gray-500 rounded-lg flex flex-col items-center justify-center">
                  <img src={uit} alt="logo" className="h-fit w-fit object-contain"/>
                  <h3  className="text-sm text-black">july 2019 - july 2023</h3>
               </div>
               <div className="w-3/4 flex flex-col items-start justify-center px-4 ">
                  <h2 className="max-w-xl text-black font-light"> United Institute of Technology</h2>
                  <p className="text-black "> Worked with html,css and Javascript</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}

export default Experiencec;
