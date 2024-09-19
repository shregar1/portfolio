import React from "react";
import "./About.css";
import TechStack from "../TechStack/TechStack.jsx";

const About = (props) => {

  return (
    <div className="grid max-w-screen-xl grid-cols-1 flex-col justify-start align-middle">
      <div className="h-60px text-gray-200 flex justify-center align-text-center transition-all">
        <p className=" text-2xl font-mono px-40 py-5">TECH STACK</p>
      </div>
      <div className="grid grid-cols-1 justify-center p-auto m-auto w-full bg-[#252529] transition-all rounded-t-2xl mt-1">
        <div className="p-2 flex fle-wrap justify-center">
          <p className="text-l text-gray-400 font-mono">---</p>
        </div>
      </div>
      <div>
        {props.tech_stacks.map((tech_stack) => {
          return (
            <>
              <div className="grid grid-cols-1 justify-center p-auto w-full bg-[#252529] transition-all mt-1">
                <div className="p-2 flex fle-wrap justify-center">
                  <p className="text-l text-gray-400 font-mono">
                    {tech_stack.title}
                  </p>
                </div>
              </div>
              <TechStack technologies={tech_stack.technologies} />
            </>
          );
        })}
      </div>
      <div className="grid grid-cols-1 justify-center p-auto m-auto w-full bg-[#252529] transition-all rounded-b-2xl mt-1">
        <div className="p-2 flex fle-wrap justify-center">
          <p className="text-l text-gray-400 font-mono">---</p>
        </div>
      </div>
    </div>
  );
};

export default About;
