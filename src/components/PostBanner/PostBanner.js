import Image from "next/image";
import React from "react";
import "./PostBanner.css";
import Button from "../Button/Button";

const PostBanner = () => {
  return (
    <div className="rounded-sm h-[250px] w-full my-12">
      <div className="postBackground flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4">
          <h3 className="text-white">Consult Us The Suitable Material for Your Project</h3>
          <div>
            <Button>CONTACT US</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBanner;
