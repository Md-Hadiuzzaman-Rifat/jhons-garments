import React from "react";
import img from "../../img/background2.png";
import "./Projects.css";
import SingleProject from "../SingleProject/SingleProject";

const projects = [
  {
    id: 1,
    title: "Cotton Fabric",
    desc: "Lorem ipsum dolor sit amet cctetur adipiscing elit.",
    img: "/images/cloth.jpg",
  },
  {
    id: 2,
    title: "Wool Fabric",
    desc: "Lorem ipsum dolor sit amet cctetur adipiscing elit.",
    img: "/images/sweater.jpg",
  },
  {
    id: 3,
    title: "Linen Fabric",
    desc: "Lorem ipsum dolor sit amet cctetur adipiscing elit.",
    img: "/images/bit-cloth.jpg",
  },
  {
    id: 4,
    title: "Georgette Fabric",
    desc: "Lorem ipsum dolor sit amet cctetur adipiscing elit.",
    img: "/images/vertical-clothe.jpg",
  },
  {
    id: 5,
    title: "Denim Fabric",
    desc: "Lorem ipsum dolor sit amet cctetur adipiscing elit.",
    img: "/images/jeans.jpg",
  },
  {
    id: 6,
    title: "Leather Material",
    desc: "Lorem ipsum dolor sit amet cctetur adipiscing elit.",
    img: "/images/leather.jpg",
  },
];

const Projects = () => {
  const properties = {
    backgroundImage: `url("${img.src}") `,
  };
  return (
    <div className="projects w-full mt-12">
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
    </div>
  );
};

export default Projects;
