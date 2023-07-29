"use client";
import React from "react";
import img from "../../img/background2.png";
import "./Projects.css";
import SingleProject from "../SingleProject/SingleProject";
import { staggerContainer } from "@/utils/motion";
import { projects } from "./data";
import { motion } from "framer-motion";

const Projects = () => {
  const properties = {
    backgroundImage: `url("${img.src}") `,
  };
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="projects w-full mt-12"
    >
      <div style={properties} className="projectBg">
        <div className="width flex flex-col flex-wrap items-center">
          <span className="customText text-center mb-6">OUR PROJECTS</span>
          <h1 className="text-center">Some of Our Project</h1>
          <div className="w-[70%]">
            <p className="py-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
              quidem. A, vel? Sunt sapiente aspernatur sit quod repellendus
              dignissimos eos?
            </p>
          </div>
          {/* project gallery  */}
          <div className="customGrid">
            {projects.map((project) => (
              <SingleProject key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
