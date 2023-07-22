import Image from "next/image";
import React from "react";

const items = [
  {
    id: 1,
    img: "/images/dontKnow-icon.png",
    title: "Consultation",
  },
  {
    id: 2,
    img: "/images/note-icon.png",
    title: "Choose Your Material",
  },
  {
    id: 3,
    img: "/images/worker.png",
    title: "Production",
  },
  {
    id: 4,
    img: "/images/pillow-icon.png",
    title: "The Final Result",
  },
];

const Material = () => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="flex h-auto w-full flex-col gap-4 md:flex-row  md:justify-start items-center"
          >
            {/* image container  */}
            <div className="border-2 mt-12 w-fit rounded-lg p-4 md:p-2 border-[#a6587c]">
              <Image
                className="material-image w-[150px] md:w-[80px] h-auto"
                src={item.img}
                width={150}
                height={150}
                alt={item.title}
              ></Image>
            </div>
            <div className="flex flex-col md:mt-12 items-center md:items-start">
              <h4 className="font-bold">Consultation</h4>
              <p className="w-[75%]">
                Lorem ipsum dolor sit amet elit. Itaque corrupti impedit conse.
              </p>
            </div>
          </div>
        );
      })}
    </div>
    // </div>
  );
};

export default Material;
