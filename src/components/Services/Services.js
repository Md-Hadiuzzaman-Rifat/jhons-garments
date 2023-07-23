import React from "react";
import "./Services.css";
import CardSection from "../CardSection/CardSection";

const Services = () => {
  return (
    <div className="w-full">
      <div className="servicesBackground">
        <div className="width">
          <div className="service-content">
            <div className="flex justify-center mt-16 customText">
              <span>OUR SERVICE</span>
            </div>
            <h1 className="text-center my-6">Textile is What We Do</h1>
            <div className="flex justify-center">
              <div className="w-[80%] mb-16">
                <p>
                  Nulla in nibh at leo faucibus molestie eget nec velit.
                  Phasellus vel felis vel orci iaculis tempor tristique sagittis
                  urna. Phasellus ac ante in lacus tempor egestas.
                </p>
              </div>
            </div>
          </div>
          <CardSection></CardSection>
        </div>
      </div>
    </div>
  );
};

export default Services;
