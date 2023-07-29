import Image from "next/image";
import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai"

const Card = ({ img, title, desc }) => {
  return (
    <div className="border border-[#a6587c] rounded-lg bg-[#f1f5f8] p-12 min-w-[300px]">
      <Image alt={title} src={img} width={80} height={80}></Image>
      <h3 className="font-semibold text-xl my-6">{title}</h3>
      <p>{desc}</p>
      <div className="customText mt-8">
        <div className="customFlex cursor-pointer">
          <span className="me-4 cursor-pointer">READ MORE</span>
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </div>
      </div>
    </div>
  );
};

export default Card;
