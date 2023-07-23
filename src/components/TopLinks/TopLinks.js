import React from "react";
import "./TopLinks.css";

import {
  BsTelephone,

} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import SocialLinks from "../SocialLinks/SocialLinks";


const TopLinks = () => {
  return (
    <div className="py-4 bg-slate-100">
      <div className="rowToCol container">
        <div className="customFlex">
          <div className="customFlex">
            <BsTelephone></BsTelephone>
            <p>+880-1910803372</p>
          </div>
          <div className="customFlex">
            <AiOutlineMail></AiOutlineMail>
            <p>hadirifat100@gmail.com</p>
          </div>
          <div className="customFlex">
            <CiLocationOn></CiLocationOn>
            <p>Mirpur, Dhaka-1216</p>
          </div>
        </div>
        <SocialLinks></SocialLinks>
      </div>
    </div>
  );
};

export default TopLinks;
