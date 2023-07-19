import React from "react";
import Button from "../Button/Button";
import "./Cover.css";
import Image from "next/image";

const Cover = () => {
  return (
    <div className="con">
      <div className="backgroundImage">
        <Image
          className="img"
          src="/images/smiling-face.jpg"
          width={1000}
          height={1000}
          alt=""
        />
        <div className="overlay"></div>

        <div className="container content">
          <div className="p-light  text-blue-200">GARMEN TEXTILE INDUSTRY</div>
          <div className="w-[70%] max-w-[95%]">
            <h1 className="text-white">
              You Can Never Go Wrong With Our Quality
            </h1>
          </div>

          <p className="text-white">
            Integer id ipsum eu massa pretium pulvinar non vitae massa donec ut
            dignissim. Metus aenean vulputate ex sed sem aliquet dapibus. Mauris
            imperdiet.
          </p>
          <section>
            <Button>DISCOVER MORE</Button>
            <div className="video-player"></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cover;
