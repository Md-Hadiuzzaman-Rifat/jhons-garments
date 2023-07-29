"use client";
import React from "react";
import SingleArticle from "../SingleArticle/SingleArticle";
import { motion } from "framer-motion";
import { articles } from "./articleData";
import { fadeIn } from "@/utils/motion";

const Articles = () => {
  return (
    <motion.div
      className="customFlexLg
         gap-4"
    >
      {articles.map((singleArticle, count) => (
        <motion.div
          key={singleArticle.id}
          variants={fadeIn("up", "tween", (count + 0.1) * 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <SingleArticle
            count={count}
            img={singleArticle.image}
            title={singleArticle.title}
            date={singleArticle.date}
            msg={singleArticle.msg}
          ></SingleArticle>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Articles;
