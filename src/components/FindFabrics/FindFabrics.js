import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

const FindFabrics = () => {
  return (
    <div className="w-full my-32">
      <div className="width container rowToCol">
        <div>
            <Image width={900} height={900} alt="person is swinging" src="/images/sexy-girl.jpg"></Image>
            <Image width={500} height={500} alt="person is swinging" src="/images/swing-old.jpg"></Image>
        </div>
        <div className="description">
            <span className="customText tracking-widest">ABOUT GARMEN</span>
            <h1>You Can Find All Kinds of Fabric Here</h1>
            <p>Phasellus ultricies ex vitae neque placerat porta. Aenean libero eros ultrices vel tristique non, porta eget dolor. Donec vel ipsum imperdiet neque, sit amet porta facilisis elit. Nunc neque enim finibus at nisi non, auctor venenatis leo.</p>
            <div>
                <div>
                    <h3>Our Vision</h3>
                    {/* points  */}
                </div>
                <div>
                    <h3>Our Mission</h3>
                    {/* points  */}
                </div>
            </div>
            <Button>MORE ABOUT US</Button>
        </div>
      </div>
    </div>
  );
};

export default FindFabrics;
