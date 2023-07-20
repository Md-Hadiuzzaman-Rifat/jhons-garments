import React from "react";
import img from "../../img/background2.png";
import "./Projects.css";

const projects=[
    {
        id:1,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quas!",
        img:"/images/cloth.jpg"
    },
    {
        id:2,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quas!",
        img:"/images/sweater.jpg"
    },
    {
        id:3,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quas!",
        img:"/images/bit-cloth.jpg"
    },
    {
        id:4,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quas!",
        img:"/images/vertical-clothe.jpg"
    },
    {
        id:5,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quas!",
        img:"/images/jeans.jpg"
    },
    {
        id:6,
        title: "Lorem Ipsum",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quas!",
        img:"/images/leather.jpg"
    },
]

const Projects = () => {
  const properties = {
    backgroundImage: `url("${img.src}") `,
  };
  return (
    <div className="projects w-full mt-12">
      <div style={properties} className="projectBg">
        <div className="width flex flex-col flex-wrap justify-center">
          <span className="customText text-center">OUR PROJECTS</span>
          <h1 className="text-center">Some of Our Project</h1>
   
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
              quidem. A, vel? Sunt sapiente aspernatur sit quod repellendus
              dignissimos eos?
            </p>
            {/* project gallery  */}
        <div className="project-gallery">

        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
