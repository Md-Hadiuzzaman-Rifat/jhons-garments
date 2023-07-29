import Image from "next/image";
import React from "react";
import "./SingleProduct.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const SingleProject = ({ project }) => {
  const { title, desc, img } = project;
  return (
    <div className="relative mb-16 single-container singleProduct">
      <Image
        className="rounded-lg w-full h-auto single-container-image"
        src={img}
        height={500}
        width={400}
        alt="Project ShowCase"
      ></Image>
      <div className="singleProductContainer flex flex-col items-center customBlue w-[90%] p-6 rounded-lg z-20 absolute ">
        <h3 className="text-white mb-4 font-semibold text-2xl">{title}</h3>
        <small className="text-center text-[18px] mb-4 text-gray-300">
          {desc}
        </small>
        <div className="customFlex customText cursor-pointer">
          <span>READ MORE</span>
          <AiOutlineArrowRight className="text-2xl"></AiOutlineArrowRight>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
