import React from "react";
import "./Counter.css";
import CounterFunction from "../CountUp/CounterFunction";

const tasks = [
  {
    count: "5,000",
    title: "Completed Project",
  },
  {
    count: "120",
    title: "Export Country",
  },
  {
    count: "7,500",
    title: "Satisfied Customer",
  },
];

const Counter = () => {
  return (
    <div className="w-full">
      <div className="aboutContain">
        <div className="h-[350px] w-full counterFunction flex flex-col md:flex-row md:justify-between justify-center gap-6 items-center">
          <div className=" md:w-[30%] w-full">
            <h1 className="text-white">Our Industry In Number</h1>
          </div>
          <div className="flex flex-row gap-6">
            {tasks.map((task) => (
              <CounterFunction
                key={task.count}
                title={task.title}
              ></CounterFunction>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Counter;
