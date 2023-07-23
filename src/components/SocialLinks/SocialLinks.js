import React from "react";
import {
  BsTelephone,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsFacebook,
} from "react-icons/bs";
import Link from "next/link";
const SocialLinks = () => {
  return (
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
  );
};

export default SocialLinks;
