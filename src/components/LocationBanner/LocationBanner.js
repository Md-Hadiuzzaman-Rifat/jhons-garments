import React from "react";
import "./LocationBanner.css";
const LocationBanner = ({title,breadCumb}) => {
  return (
    <div className="w-full mb-24">
      <div className="LocationBanner">
        <div className="width text-white flex flex-col justify-center h-[350px]">
            <h1>{title}</h1>
            <p className="text-white my-4">{breadCumb}</p>
        </div>
      </div>
    </div>
  );
};

export default LocationBanner;
