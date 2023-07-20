"use client";
import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { useState } from "react";

const CounterFunction = ({title}) => {
  const [counter, setCounter] = useState(false);
  return (
    <div>
      <ScrollTrigger
        onEnter={() => setCounter(true)}
        onExit={() => {
          setCounter(false);
        }}
      >
        <div style={{
          color:"white",
        }}>
          <h1>
            {counter && <CountUp className="text-2xl md:text-4xl" start={0} end={100} duration={2} delay={0} />}
          </h1>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default CounterFunction;
