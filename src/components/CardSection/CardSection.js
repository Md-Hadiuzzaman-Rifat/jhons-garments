"use client";
import React from "react";
import Card from "../Card/Card";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { cardDetails } from "./data";

const CardSection = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="customGrid"
    >
      {
        cardDetails.map((card,count)=><Card
        key={card.id} count={count} img={card.img} title={card.title} desc={card.desc}/>)
      }
    </motion.div>
  );
};

export default CardSection;
