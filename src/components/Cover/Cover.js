"use client"
import React from "react";
import Button from "../Button/Button";
import "./Cover.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/utils/motion";

const Cover = () => {
  return (
    <div className="w-full">
      <div className="backgroundImage">
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="width h-[90vh] flex flex-col justify-center gap-8"
        >
          <div className="p-light  text-blue-200">GARMEN TEXTILE INDUSTRY</div>
          <div className="w-[70%] max-w-[95%]">
            <h1 className="text-white">
              You Can Never Go Wrong With Our Quality
            </h1>
          </div>
          <p className="text-white w-[70%]">
            Integer id ipsum eu massa pretium pulvinar non vitae massa donec ut
            dignissim. Metus aenean vulputate ex sed sem aliquet dapibus. Mauris
            imperdiet.
          </p>
          <section>
            <Button>DISCOVER MORE</Button>
            <div className="video-player"></div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Cover;
