"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Doughnut.css"

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ num1, num2, task }) {
  const data = {
    datasets: [
      {
        data: [num1, num2],
        backgroundColor: ["#a6587c", "#1d2f40"],
        hoverOffset: 4,
        borderDashOffset: 0,
        borderWidth: 0,
        rotation: 90,
      },
    ],
  };
  const options = {
    cutout: 62,
  };

  return (
    <div className="flex flex-col  gap-4 justify-center items-center">
      <div className="w-[150px] relative">
        <div className="ratio">{num1}% </div>
          <Doughnut data={data} options={options} />
        
      </div>
      <h4 className="">{task}</h4>
    </div>
  );
}
export default DoughnutChart;
