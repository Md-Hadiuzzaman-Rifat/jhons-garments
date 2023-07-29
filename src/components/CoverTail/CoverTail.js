"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";

const CoverTail = () => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.2, 0.3)}
      initial="hidden"
      whileInView='show'
      viewport={{ once: true, amount: 0.5 }}
      className="w-full mt-[-50px] z-20 px-6"
    >
      <div className="width">
        <div className="customGrid">
          {/* // first section  */}
          <div className="customBlue p-10 rounded-lg">
            <div className="customFlex">
              <Image
                src="/images/tissue-icon.png"
                className="w-[80px] h-fit"
                height={80}
                width={80}
                alt="Tissue Image"
              ></Image>
              <div>
                <h3 className="text-white text-[22px] font-semibold">
                  Excellent Material
                </h3>
                <p className="text-white text-[16px] font-light">
                  Luctus nec ullamcorper ipsum mattis pulvinar dolor.
                </p>
              </div>
            </div>
          </div>
          {/* // second section  */}
          <div className="customBlue p-10 rounded-lg">
            <div className="customFlex">
              <Image
                src="/images/shirt-icon.png"
                className="w-[80px] h-fit"
                height={80}
                width={80}
                alt="Tissue Image"
              ></Image>
              <div>
                <h3 className="text-white text-[22px] font-semibold">
                  Excellent Material
                </h3>
                <p className="text-white text-[16px] font-light">
                  Luctus nec ullamcorper ipsum mattis pulvinar dolor.
                </p>
              </div>
            </div>
          </div>
          {/* third section  */}
          <div className="customBlue p-10 rounded-lg">
            <div className="customFlex">
              <Image
                src="/images/shop-icon.png"
                className="w-[80px] h-fit"
                height={80}
                width={80}
                alt="Tissue Image"
              ></Image>
              <div>
                <h3 className="text-white text-[22px] font-semibold">
                  Excellent Material
                </h3>
                <p className="text-white text-[16px] font-light">
                  Luctus nec ullamcorper ipsum mattis pulvinar dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CoverTail;
