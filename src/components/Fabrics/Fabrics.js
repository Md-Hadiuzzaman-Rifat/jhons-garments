import React from "react";
import "./Fabrics.css";
import Material from "../Material/Material";
import FabricQuality from "../FabricQuality/FabricQuality";

const Fabrics = () => {
  return (
    <div className="w-full">
      <div className="fabricsBg">
        <div className="width">
          
          <div className="customFlexLg">
            <div style={{flex:5}}>
              <Material></Material>
            </div>
            <div style={{flex:6}}>
              <FabricQuality></FabricQuality>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fabrics;
