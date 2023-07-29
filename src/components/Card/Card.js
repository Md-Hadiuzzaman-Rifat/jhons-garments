import Image from "next/image";
import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai"
import {motion} from "framer-motion"
import { fadeIn } from "@/utils/motion";

const expression=(value)=>{
  if((value+2)%3 !== 0){
    if((value+3)%3 !==0 ){
      return "left"
    }else{
      return "right"
    }
  }else{
    return ""
  }
}

const Card = ({ img, title, desc, count }) => {
  return (
    <motion.div 
    variants={fadeIn(expression(count), "tween", 0.2, 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{once:false, amount: 0.25}}
    // variants={((count+1)/2)}
    className="border border-[#a6587c] rounded-lg bg-[#f1f5f8] p-12 min-w-[300px]">
      <Image alt={title} src={img} width={80} height={80}></Image>
      <h3 className="font-semibold text-xl my-6">{title}</h3>
      <p>{desc}</p>
      <p>{count}</p>
      <div className="customText mt-8">
        <div className="customFlex cursor-pointer">
          <span className="me-4">READ MORE</span>
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
