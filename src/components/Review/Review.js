"use client";
import React from "react";
import SliderComponent from "../Slider/SliderComponent";
import DoughnutChart from "../DoughnutChart/DoughnutChart";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerChildren,
  staggerContainer,
  textContainer,
  textVariant,
  textVariant2,
} from "@/utils/motion";
const Review = () => {
  return (
    <div className="w-full mt-32">
      <div className="width">
        <div className="flex flex-col w-full items-center justify-center flex-wrap gap-12 lg:flex-row">
          {/* left side  */}
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            style={{ flex: 6 }}
          >
            <motion.span
              variants={textVariant2}
            className="customText">WHY CHOOSE GARMEN</motion.span>
            <motion.h1 variants={textVariant2} className="my-8">
              Lowest Price Guaranteed, Quality Never Compromised
            </motion.h1>
            <motion.p
              variants={textVariant2}
            className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              maiores repudiandae voluptate eveniet saepe dignissimos totam
              atque porro magni ipsum blanditiis perferendis at accusamus ut ex,
              animi sed cupiditate ipsa, sequi a quae. Sequi nesciunt hic sunt
              sit, eaque doloribus dolore ipsa! Velit sint doloribus minus
              officia consequuntur.
            </motion.p>
            <motion.p 
              variants={textVariant2} 
            className="text-justify">
              {" "}
              Et fuga eveniet illo excepturi, nemo exercitationem soluta sint
              aliquam ab alias provident Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eligendi, repellendus? dolor quos sit optio,
              culpa architecto ex. Dicta, ex! Eum officia, esse nam asperiores
              at magnam expedita amet quia!
            </motion.p>
          </motion.div>
          {/* right side  */}
          <motion.div style={{ flex: 3 }}
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0.25}}
          >
            <div className="flex flex-col items-center justify-center md:flex-row gap-16">
              <div>
                <DoughnutChart
                  num1={95}
                  num2={5}
                  task="Factory Experience"
                ></DoughnutChart>
                <DoughnutChart
                  num1={93}
                  num2={7}
                  task="Machine & Equipment"
                ></DoughnutChart>
              </div>
              <div>
                <DoughnutChart
                  num1={97}
                  num2={3}
                  task="Textile Material"
                ></DoughnutChart>
                <DoughnutChart
                  num1={96}
                  num2={4}
                  task="Worker Skills"
                ></DoughnutChart>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once:false, amount: 0.25}}
      >
        <SliderComponent></SliderComponent>
      </motion.div>
    </div>
  );
};

export default Review;
