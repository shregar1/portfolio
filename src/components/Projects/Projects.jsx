import Project from "./Project.jsx";
import Container from "../UI/Container.jsx";
import Button from "../UI/Button.jsx";
import "./Projects.css";
import { useState } from "react";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "MONOULAR DEPTH ESTIMATION",
      description:
        "Monocular depth estimation is the process of predicting the distance or depth of each pixel in a 2D image relative to the camera, to infer the 3D structure of the scene from a single 2D image.",
      url: "/monocular_depth_estimation.jpeg",
      technologies: ["PYTHON", "PYTORCH"],
    },
    {
      title: "ANIME GAN",
      description:
        "The Anime-GAN is a generative adversarial network approach for generating high-quality anime-style images, achieving impressive results in mimicking the unique aesthetics of anime artwork.",
      url: "/anime_gan.png",
      technologies: ["PYTHON", "PYTORCH"],
    },
  ];

  console.log(currentProject);

  const nextProjectHandler = () => {
    console.log("current: ", currentProject);
    if (currentProject < projects.length - 1) {
      setCurrentProject(currentProject + 1);
    } else {
      setCurrentProject(0);
    }
  };

  const prevProjectHandler = () => {
    console.log("current: ", currentProject);
    if (currentProject > 0) {
      setCurrentProject(currentProject - 1);
    } else {
      setCurrentProject(projects.length - 1);
    }
  };

  const prepareProject = (index) => {
    let prev = false;
    let next = false;
    let hide = true;

    if (currentProject === projects.length) {
      index = currentProject - 1;
    }

    if (index < currentProject) {
      prev = true;
    } else if (index > currentProject) {
      next = true;
    } else {
      hide = false;
    }

    return (
      <Project
        details={projects[index]}
        hide={hide}
        prev={prev}
        next={next}
      ></Project>
    );
  };

  return (
    <div>
      <div className="h-60px text-gray-200 flex justify-center align-text-center transition-all">
        <p className=" text-2xl font-mono px-40 py-5">PROJECTS</p>
      </div>
      <div className="w-full flex flex-col flex-wrap justify-center items-center bg-[#252529] rounded-2xl relative">
        <div
          className="absolute prev left-0 flex justify-center text-gray-400 text-2xl h-full w[60px] items-center p-2 rounded-full hover:text-gray-200"
          onClick={prevProjectHandler}
        >
          <div className="h-full relative flex justify-center items-center w-[60px]">
            <span className="absolute bottom-[60px] text-center">{"<"}</span>
          </div>
        </div>
        <div
          className="absolute next right-0 flex justify-center text-gray-400 text-2xl h-full w[60px] items-center p-2 rounded-full hover:text-gray-200"
          onClick={nextProjectHandler}
        >
          <div className="h-full relative flex justify-center items-center w-[60px]">
            <span className="absolute bottom-[60px] text-center">{">"}</span>
          </div>
        </div>
        {projects.map((project, index) => {
          return prepareProject(index);
        })}
      </div>
    </div>
  );
};

export default Projects;
