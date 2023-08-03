import BoxContact from "@/components/BoxContact/BoxContact";
import Footer from "@/components/Footer/Footer";
import FormSection from "@/components/FormSection/FormSection";
import LocationBanner from "@/components/LocationBanner/LocationBanner";

import SocialLinks from "@/components/SocialLinks/SocialLinks";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <LocationBanner title="Contact" breadCumb="Home / Contact"></LocationBanner>
      <div className="width customFlexLg">
        <div className="flex-1 projectForm xl:max-w-[700px] lg:max-w-[550px] flex-1 flex-wrap">
          <span className="customText">CONTACT US</span>
          <h1 className="my-8">Start The Project</h1>
          <p className="mb-8 w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quod esse unde vitae ipsum quae doloribus optio quasi quia
            molestias.
          </p>
          <FormSection></FormSection>
        </div>
        {/* // right side : map and social links */}
        <div className="flex-1 p-8">
          <div>
            <BoxContact></BoxContact>
            {/* <div className="mt-12 lg:mt-0">
            <MapLocation></MapLocation>
            </div> */}
            <div className="mt-8">
              <SocialLinks></SocialLinks>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
