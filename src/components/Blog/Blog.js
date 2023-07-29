"use client"
import React from "react";
import Articles from "../Articles/Articles";
import {motion} from "framer-motion"
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";

const Blog = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount: 0.25}}
    className="w-full mb-32">
      <div className="width flex flex-col items-center gap-6 mt-48">
        <motion.span
          variants={fadeIn("right", "tween", 0, 0.5)}
        className="customText">BLOG</motion.span>
        <motion.h1
          variants={fadeIn("right", "tween", 0.1, 0.5)} 

        >Blog & Articles</motion.h1>
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 0.5)}
        className="w-[70%]">
          <p className="text-center my-6">
            Nulla in nibh at leo faucibus molestie eget nec velit. Phasellus vel
            felis vel orci iaculis tempor tristique sagittis urna. Phasellus ac
            ante in lacus tempor egestas.
          </p>
        </motion.div>
        <Articles></Articles>
      </div>
    </motion.div>
  );
};

export default Blog;
