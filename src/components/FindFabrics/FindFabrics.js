import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import "./FindFabrics.css";
import OutlineImage from "../OutlineImage/OutlineImage";
import { BiCheckCircle } from "react-icons/bi";

const FindFabrics = () => {
  return (
    <div className="w-full my-32">
      <div className="width container customFlexLg gap-24">
        {/* left section girls with cloth */}
        <OutlineImage></OutlineImage>
        <div className="description" style={{ flex: 1 }}>
          <span className="customText tracking-widest">ABOUT GARMEN</span>
          <h1 className="my-8">You Can Find All Kinds of Fabric Here</h1>
          <p>
            Phasellus ultricies ex vitae neque placerat porta. Aenean libero
            eros ultrices vel tristique non, porta eget dolor. Donec vel ipsum
            imperdiet neque, sit amet porta facilisis elit. Nunc neque enim
            finibus at nisi non, auctor venenatis leo.
          </p>
          <div className="flex rowToCol">
            <div>
              <h3 className="font-semibold text-2xl mt-16 mb-4">Our Vision</h3>
              {/* points  */}
              <div className="flex mb-4">
                <BiCheckCircle className="text-2xl customText"></BiCheckCircle>
                <p className="ms-4">Integer consectetur tincidunt.</p>
              </div>
              <div className="flex mb-4">
                <BiCheckCircle className="text-2xl customText"></BiCheckCircle>
                <p className="ms-4">Fusce lacinia nulla eu nunc sed.</p>
              </div>
              <div className="flex mb-4">
                <BiCheckCircle className="text-2xl customText"></BiCheckCircle>
                <p className="ms-4">Proin tempus lorem nibh.</p>
              </div>
              <div className="flex mb-4">
                <BiCheckCircle className="text-2xl customText"></BiCheckCircle>
                <p className="ms-4">Pellentesque id lectus tempor.</p>
              </div>
              <div className="flex mb-4">
                <BiCheckCircle className="text-2xl customText"></BiCheckCircle>
                <p className="ms-4">Morbi sed volutpat neque et.</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-2xl mt-16 mb-4">Our Mission</h3>
              {/* points  */}
              <div className="flex mb-4">
                <BiCheckCircle className="text-2xl customText"></BiCheckCircle>
                <p className="ms-4">Pellentesque lectus tempor.</p>
              </div>
              <div className="flex mb-4">
                <BiCheckCircle className="text-2xl customText"></BiCheckCircle>
                <p className="ms-4">Fusce lacinia nulla eu sed.</p>
              </div>
              <div className="flex mb-4">
                <BiCheckCircle className="text-2xl customText"></BiCheckCircle>
                <p className="ms-4">Morbi sed volutpat neque et.</p>
              </div>
              <div className="flex mb-4">
                <BiCheckCircle className="text-2xl customText"></BiCheckCircle>
                <p className="ms-4">Integer consectetur tincidunt.</p>
              </div>
              <div className="flex mb-4">
                <BiCheckCircle className="text-2xl customText"></BiCheckCircle>
                <p className="ms-4">Proin tempus lorem nibh.</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Button>MORE ABOUT US</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindFabrics;
