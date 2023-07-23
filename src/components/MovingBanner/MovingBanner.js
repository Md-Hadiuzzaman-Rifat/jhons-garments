import React from "react";
import "./MovingBanner.css";
import img from "../../image/corporate.jpg";
import Button from "../Button/Button";

const MovingBanner = () => {
  const properties = {
    backgroundImage: `url("${img.src}") `
  };
  return (
    <div className="w-full my-32">

        <div style={properties} className="movingBg w-full">
          <div className=" banner-show min-h-[500px] flex flex-wrap flex-col justify-evenly gap-1 w-full items-center md:items-start py-12">
            
            <h1 className="text-white w-[70%]">
              Consult With Us The Suitable Material for Your Project
            </h1>
            <p className="text-gray-200 w-[75%]">
              Nulla in nibh at leo faucibus molestie eget nec velit. Phasellus
              vel felis vel orci iaculis tempor tristique sagittis urna.
              Phasellus ac ante in lacus tempor egestas.
            </p>
            <div>
              <Button>CONTACT US</Button>
            </div>
            
          </div>
        </div>
    </div>
  );
};

export default MovingBanner;
