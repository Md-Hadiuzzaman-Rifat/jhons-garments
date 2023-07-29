"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import "./FindFabrics.css";
import OutlineImage from "../OutlineImage/OutlineImage";
import { BiCheckCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerChildren,
  staggerContainer,
  textVariant,
  textVariant2,
} from "@/utils/motion";
import { missionPoints, visionPoints } from "./data";

const FindFabrics = () => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full my-48"
    >
      <div className="width container customFlexLg gap-24">
        {/* left section girls with cloth */}
        <motion.div 
          variants={fadeIn("right", "tween", 0.5, 1)}
        >
        <OutlineImage></OutlineImage>
        </motion.div>
        <div className="description" style={{ flex: 1 }}>
          <motion.span
            variants={textVariant(0)}
            className="customText tracking-widest"
          >
            ABOUT GARMEN
          </motion.span>
          <motion.h1 variants={textVariant2} className="my-8">
            You Can Find All Kinds of Fabric Here
          </motion.h1>
          <motion.p variants={textVariant2}>
            Phasellus ultricies ex vitae neque placerat porta. Aenean libero
            eros ultrices vel tristique non, porta eget dolor. Donec vel ipsum
            imperdiet neque, sit amet porta facilisis elit. Nunc neque enim
            finibus at nisi non, auctor venenatis leo.
          </motion.p>
          <div className="flex rowToCol">
            {/* // our vision  */}
            <div>
              <h3 className="font-semibold text-2xl mt-16 mb-4">Our Vision</h3>
              {visionPoints.map((point, count) => (
                <motion.div
                  variants={fadeIn("left","tween", count*0.2 + 0.2, 0.5)}
                key={point.id} className="flex mb-4">
                  <BiCheckCircle
                  className="text-2xl customText"></BiCheckCircle>
                  <p className="ms-4">{point.data}</p>
                </motion.div>
              ))}
            </div>

            {/* // our mission  */}
            <div>
              <h3 className="font-semibold text-2xl mt-16 mb-4">Our Mission</h3>

              {missionPoints.map((point, count) => (
                <motion.div
                variants={fadeIn("left","tween", count*0.2 + 0.2, 0.5)} key={point.id} className="flex mb-4">
                  <BiCheckCircle className="text-2xl customText"></BiCheckCircle>
                  <p className="ms-4">{point.data}</p>
                </motion.div>
              ))}
            </div>

          </div>
          <motion.div 
            variants={fadeIn("left", "tween", 1, 0.5)}
          className="mt-8">
            <Button>MORE ABOUT US</Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FindFabrics;
