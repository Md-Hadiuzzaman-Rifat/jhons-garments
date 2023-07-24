import Image from "next/image";
import React from "react";

const RecentBlog = () => {
  return (
    <div className="customBlue p-8 rounded-xl">
      <h3 className="text-white mb-6 font-semibold text-2xl">Recent Blog</h3>
      <div className="border-b-2 mb-12 border-[#a6587c]"></div>
      <div className="flex flex-col gap-8">
        <div className="customFlex cursor-pointer">
          <Image
            className="w-[300px] rounded-xl min-w-[80px] h-fit"
            width={300}
            height={300}
            alt="Swing"
            src="/images/swing.jpg"
          ></Image>
          <div className="  flex flex-col gap-4 text-white">
            <h3 className="text-base font-semibold">
              Startup Idea For Distinctive Art
            </h3>
            <p className="text-[18px]">February 05, 2023</p>
          </div>
        </div>
        <div className="customFlex cursor-pointer">
          <Image
            className="w-[300px] rounded-xl min-w-[80px] h-fit"
            width={300}
            height={300}
            alt="Swing"
            src="/images/cutting.jpg"
          ></Image>
          <div className="  flex flex-col gap-4 text-white">
            <h3 className="text-base font-semibold">
              Startup Idea For Distinctive Art
            </h3>
            <p className="text-[18px]">February 05, 2023</p>
          </div>
        </div>
        <div className="customFlex cursor-pointer">
          <Image
            className="w-[300px] rounded-xl min-w-[80px] h-fit"
            width={300}
            height={300}
            alt="Swing"
            src="/images/swing.jpg"
          ></Image>
          <div className="  flex flex-col gap-4 text-white">
            <h3 className="text-base font-semibold">
              Startup Idea For Distinctive Art
            </h3>
            <p className="text-[18px]">February 05, 2023</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default RecentBlog;
