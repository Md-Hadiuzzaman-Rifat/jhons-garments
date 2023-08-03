"use client"
import React from "react";
import Button from "../Button/Button";
import {motion} from "framer-motion"
import { staggerContainer, fadeIn, textVariant } from "@/utils/motion";

const FabricQuality = () => {
  return (
    <motion.div 
     id="work"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount: 0.25}}
    className="flex flex-col flex-wrap gap-4 my-16">
      <span className="customText">HOW WE WORK</span>
      <motion.h1 
        variants={textVariant(0)}
      className="my-8">Find The Fabric, Enjoy The Process and The Results</motion.h1>
      <motion.p
        variants={fadeIn("left","tween", 0, 0.4)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        necessitatibus quae neque ad sequi omnis maxime minus asperiores
        molestias tempora, eaque quasi magnam, odio at repellat praesentium
        nobis animi explicabo aut harum. Distinctio minima esse rem nostrum,
        totam aliquid recusandae.
      </motion.p>
      <motion.p
      variants={fadeIn("left","tween", 0.08, 0.4)}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
        laudantium ipsam porro sint animi ullam, similique illo odio placeat
        nisi, pariatur, modi adipisci accusantium? Error.
      </motion.p>
      <motion.div
        variants={fadeIn("left", "tween", 0.14, 0.4)}
      >
        <Button>NEED HELP</Button>
      </motion.div>
    </motion.div>
  );
};

export default FabricQuality;
