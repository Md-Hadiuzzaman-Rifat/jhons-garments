"use client"
import Image from "next/image";
import React from "react";
import {items} from "./materialData"
import {motion} from "framer-motion"
import { fadeIn } from "@/utils/motion";

const Material = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{once:false, amount: 0.25}}
    >
      {items.map((item, count) => {
        return (
          <motion.div
            variants={fadeIn("right", "tween", (count+0.1)*0.3,1)}

            key={item.id}
            className="flex h-auto w-full flex-col gap-4 md:flex-row  md:justify-start items-center"
          >
            {/* image container  */}
            <div className="border-2 mt-12 w-fit rounded-lg p-4 md:p-2 border-[#a6587c]">
              <Image
                className="material-image w-[150px] md:w-[80px] h-auto"
                src={item.img}
                width={150}
                height={150}
                alt={item.title}
              ></Image>
            </div>
            <div className="flex flex-col md:mt-12 items-center md:items-start">
              <h4 className="font-bold">Consultation</h4>
              <p className="w-[75%]">
                Lorem ipsum dolor sit amet elit. Itaque corrupti impedit conse.
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Material;
