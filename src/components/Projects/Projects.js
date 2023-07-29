"use client";
import React from "react";
import img from "../../img/background2.png";
import "./Projects.css";
import SingleProject from "../SingleProject/SingleProject";
import {
  fadeIn,
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
    <div className="projects w-full ">
      <div style={properties} className="projectBg flex flex-col gap-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="width flex flex-col flex-wrap items-center"
        >
          <span className="customText text-center mb-6">OUR PROJECTS</span>
          <motion.h1
            variants={fadeIn("left", "tween", 0.1, 0.5)}
            className="text-center"
          >
            Some of Our Project
          </motion.h1>
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 0.5)}
            className="w-[70%]"
          >
            <p
              className="
            my-12 mb-16 "
            >
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
