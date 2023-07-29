"use client"
import React from "react";
import "./Services.css";
import CardSection from "../CardSection/CardSection";
import {motion} from "framer-motion"
import { textContainer, textVariant2 } from "@/utils/motion";

const Services = () => {
  return (
    <div className="w-full">
      <div className="servicesBackground">
        <div className="width">
          <motion.div 
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once:false, amount:0.25}}
          className="service-content">
            <motion.div 
              variants={textVariant2}
            className="flex justify-center mt-16 customText">
              <span>OUR SERVICE</span>
            </motion.div>
            <motion.h1
              variants={textVariant2}
            className="text-center my-6">Textile is What We Do</motion.h1>
            <motion.div variants={textVariant2} className="flex justify-center">
              <div className="w-[80%] mb-16">
                <p>
                  Nulla in nibh at leo faucibus molestie eget nec velit.
                  Phasellus vel felis vel orci iaculis tempor tristique sagittis
                  urna. Phasellus ac ante in lacus tempor egestas.
                </p>
              </div>
            </motion.div>
          </motion.div>
          <CardSection></CardSection>
        </div>
      </div>
    </div>
  );
};

export default Services;
