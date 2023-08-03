import Image from "next/image";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import SocialLinks from "../SocialLinks/SocialLinks";
import { BiPhoneCall } from "react-icons/bi";
import { TbWorldSearch } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="w-full customBlue text-white pt-16">
      <div className="width">
        {/* // grid layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* // first section  */}
          <div className="md:col-span-3 lg:col-span-1">
            <Image
              src="/images/Logo.png"
              className="min-w-[250px]"
              width={600}
              height={400}
              alt="logon Icon"
            ></Image>
            <div className="text-base md:text-xl text-gray-300">
              Vivamus pharetra neque a lacus ullamcorper suscipit. Aenean
              blandit euismod dignissim. Praesent suscipit fermentum mi.
            </div>
            <div className="md:my-16 my-12">
              <SocialLinks></SocialLinks>
            </div>
          </div>
          {/* //second section  */}
          <div>
            <h2 className="text-2xl">Quick Links</h2>
            <ul>
              <li className="flex">
                <p className="arrow">
                  <BsArrowRightShort />
                </p>
                Home
              </li>
              <li className="flex">
                <p className="arrow">
                  <BsArrowRightShort />
                </p>
                About Us
              </li>
              <li className="flex">
                <p className="arrow">
                  <BsArrowRightShort />
                </p>
                Services
              </li>
              <li className="flex">
                <p className="arrow">
                  <BsArrowRightShort />
                </p>
                Project
              </li>
              <li className="flex">
                <p className="arrow">
                  <BsArrowRightShort />
                </p>
                Pricing
              </li>
              <li className="flex">
                <p className="arrow">
                  <BsArrowRightShort />
                </p>
                Contact Us
              </li>
            </ul>
          </div>
          {/* third section  */}
          <div>
            <h2 className="text-2xl">Services</h2>
            <ul>
              <li className="flex">
                <p className="arrow">
                  <BsArrowRightShort />
                </p>
                Fabric Dyeing
              </li>
              <li className="flex">
                <p className="arrow">
                  <BsArrowRightShort />
                </p>
                Satin Weaving
              </li>
              <li className="flex">
                <p className="arrow">
                  <BsArrowRightShort />
                </p>
                Fabric Printing
              </li>
              <li className="flex">
                <p className="arrow">
                  <BsArrowRightShort />
                </p>
                Garment Stitching
              </li>
              <li className="flex">
                <p className="arrow">
                  <BsArrowRightShort />
                </p>
                Linen Weaving
              </li>
              <li className="flex">
                <p className="arrow">
                  <BsArrowRightShort />
                </p>
                Custom Apparel
              </li>
            </ul>
          </div>
          {/* forth section  */}
          <div>
            <h2 className="text-2xl">Information</h2>
            <ul>
              <div className="flex my-2 text-[20px]">
                <p className="arrow">
                  <BiPhoneCall className="me-4 text-[22px]" />
                </p>
                +880-1910803372
              </div>
              <div className="flex my-2 text-[20px]">
                <p className="arrow">
                  <AiOutlineMail className="me-4 text-[22px]" />
                </p>
                hadirifat100@gmail.com
              </div>
              <div className="flex my-2 text-[20px]">
                <p className="arrow">
                  <TbWorldSearch className="me-4 text-[22px]" />
                </p>
                www.xyz.com
              </div>
              <div className="flex my-2 text-[20px]">
                <p className="arrow">
                  <HiOutlineLocationMarker className="me-4 text-[22px]" />
                </p>
                99 Roving St., Big City, PKU 23456
              </div>
            </ul>
          </div>
        </div>

      </div>
      <div className="border-2 border-[#a6587c]"></div>
        <p className="text-center p-8 text-gray-300">Copyright 2023 © All Right Reserved Design by Rometheme</p>
    </div>
  );
};

export default Footer;
