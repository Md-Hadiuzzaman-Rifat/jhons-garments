import React from "react";
import "./MovingBanner.css";
// import img from "../../img/corporate.jpg";
import img from "../../image/corporate.jpg"
import Button from "../Button/Button";
import Corporate from "../Corporate/Corporate";

const MovingBanner = () => {
  const properties = {
    backgroundImage: `url("${img.src}") `
  };
  return (
    <div className="w-full">
        <div style={properties} className="movingBg w-full">
          <div className=" banner-show ">
            <Corporate></Corporate>
          </div>
        </div>
    </div>
  );
};

export default MovingBanner;
