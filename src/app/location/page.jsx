import Footer from "@/components/Footer/Footer";
import FormSection from "@/components/FormSection/FormSection";
import Map from "@/components/Map/Map";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <div className="width">
        <div>
          <FormSection></FormSection>
        </div>
        <div>
          <Map text="Bangladesh"></Map>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
