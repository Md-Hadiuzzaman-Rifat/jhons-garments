"use client"
import React from "react";
import Button from "../Button/Button";
import "./Cover.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant2 } from "@/utils/motion";

const Cover = () => {
  return (
    <div className="w-full">
      <div className="backgroundImage">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{once:false, amount:0.25}}
          className="width h-[90vh] flex flex-col justify-center gap-8"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.1, 0.3)}
          className="p-light  text-blue-200">GARMEN TEXTILE INDUSTRY</motion.div>
          <div className="w-[70%] max-w-[95%]">
            <motion.h1
              variants={fadeIn('right', "tween", 0.2, 0.3)}
            className="text-white">
              You Can Never Go Wrong With Our Quality
            </motion.h1>
          </div>
          <motion.p
            variants={fadeIn('right', "tween", 0.3, 0.3)}
          className="text-white w-[70%]">
            Integer id ipsum eu massa pretium pulvinar non vitae massa donec ut
            dignissim. Metus aenean vulputate ex sed sem aliquet dapibus. Mauris
            imperdiet.
          </motion.p>
          <motion.section
            variants={fadeIn('right', "tween", 0.3, 0.4)}
          >
            <Button>DISCOVER MORE</Button>
            <div className="video-player"></div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default Cover;
