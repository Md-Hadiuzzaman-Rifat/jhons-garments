import Image from "next/image";
import "./SingleArticle.css";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { BiMessageMinus } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";


const SingleArticle = ({ img, title, date, msg }) => {
  return (
    <div className="customBlue rounded-lg single-article">
      <Image
        className="single-article-image"
        src={img}
        height={1000}
        width={1000}
        alt={title}
      ></Image>
      <div className="p-8 flex flex-col gap-6">
        <h3 className="text-white font-semibold text-2xl">{title}</h3>
        <div className="text-white flex gap-8">
          <div className="flex text-[22px] font-light items-center">
            <CiCalendarDate className="text-[26px] me-4"></CiCalendarDate>{" "}
            <h3>{date}</h3>
          </div>
          <div className="flex text-[22px] font-light items-center">
            <BiMessageMinus className="text-[26px] me-4"></BiMessageMinus>{" "}
            <h3>{msg}</h3>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum
          blandit urna non ultricies. Fusce lacinia nulla eu nunc…
        </p>
        <div className="customFlex">
          <span className="customText cursor-pointer">READ MORE </span>
          <AiOutlineArrowRight className="customText text-[20px]"></AiOutlineArrowRight>
        </div>
      </div>
    </div>
  );
};
export default SingleArticle;
