import React from "react";
import "./TopLinks.css";

import { BsTelephone, BsTwitter, BsInstagram, BsYoutube, BsFacebook } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

const TopLinks = () => {
  return (
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
      <div className="customFlex">
        <div className="hoverLinks">
          <Link href="https://www.facebook.com/mdhadiuzzamanrifat/">
            <BsFacebook></BsFacebook>
          </Link>
        </div>
        <div className="hoverLinks">
          <BsTwitter></BsTwitter>
        </div>

        <div className="customBackground text-white h-8 w-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-[#884766]">
          <BsInstagram></BsInstagram>
        </div>

        <div className="customBackground text-white h-8 w-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-[#884766]">
          <BsYoutube></BsYoutube>
        </div>
      </div>
    </div>
  );
};

export default TopLinks;
