"use client";
import React from "react";
import img from "../../img/background2.png";
import "./Projects.css";
import SingleProject from "../SingleProject/SingleProject";
import {
  staggerChildren,
  staggerContainer,
  textVariant,
} from "@/utils/motion";
import { projects } from "./data";
import { motion } from "framer-motion";

const Projects = () => {
  const properties = {
    backgroundImage: `url("${img.src}") `,
  };
  return (
    <div className="projects w-full mt-12">
      <div style={properties} className="projectBg">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="width flex flex-col flex-wrap items-center"
        >
          <motion.span
            variants={textVariant(0)}
            className="customText text-center mb-6"
          >
            OUR PROJECTS
          </motion.span>
          <motion.h1 variants={textVariant(0.1)} className="text-center">
            Some of Our Project
          </motion.h1>
          <motion.div variants={textVariant(0.2)} className="w-[70%]">
            <p className="py-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
              quidem. A, vel? Sunt sapiente aspernatur sit quod repellendus
              dignissimos eos?
            </p>
          </motion.div>
          {/* project gallery  */}
          <div className="customGrid">
            {projects.map((project, count) => (
              <SingleProject count={count} key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
