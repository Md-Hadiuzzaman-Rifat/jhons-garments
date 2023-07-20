import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="relative service-width">
      <div className="servicesBackground absolute z-0">
        <div className="service-content">
          <div className="flex justify-center mt-16 customText">
            <span>OUR SERVICE</span>
          </div>
          <h1 className="text-center my-4">Textile is What We Do</h1>
          <div className="flex justify-center">
            <div className="w-[50%]">
            <p>Nulla in nibh at leo faucibus molestie eget nec velit. Phasellus vel felis vel orci iaculis tempor tristique sagittis urna. Phasellus ac ante in lacus tempor egestas.</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
