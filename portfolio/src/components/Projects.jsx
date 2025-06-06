import React from "react";
import { BiLink } from "react-icons/bi";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={350}
                height={200}
                alt={project.title}
                className="mb-8 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}  
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full mr-3 max-w-xl lg:w-3/4"
            >
              <div className="flex flex-wrap gap-5">
                <span className="mb-1 font-semibold  text-purple-500 underline">
                  <a href={project.link}>{project.title}</a>
                </span>
                <div className="relative group">
                  <a href={project.link} className="mb-2">
                    <BiLink className="hover:text-blue-500" />
                  </a>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden px-2 py-1 text-sm text-white bg-black rounded group-hover:block">
                    Project Link
                  </span>
                </div>
                <span className="mb-2">{project.duration}</span>
              </div>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="w-fit mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium  text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;



