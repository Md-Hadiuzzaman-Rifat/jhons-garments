import React from "react";
import Button from "../Button/Button";

const Corporate = () => {
  return (
    <div className=" flex flex-wrap flex-col justify-evenly items-center min-h-[500px]">
      <h1 className="text-white w-[70%]">
        Consult With Us The Suitable Material for Your Project
      </h1>
      <p className="text-gray-200 w-[75%]">
        Nulla in nibh at leo faucibus molestie eget nec velit. Phasellus vel
        felis vel orci iaculis tempor tristique sagittis urna. Phasellus ac ante
        in lacus tempor egestas.
      </p>
      <div>
        <Button>CONTACT US</Button>
      </div>
    </div>
  );
};

export default Corporate;
