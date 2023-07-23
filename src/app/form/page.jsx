import React from "react";
import "./form.css";
import Button from "@/components/Button/Button";
import OutlineImage from "@/components/OutlineImage/OutlineImage";
import FormSection from "@/components/FormSection/FormSection";
const Form = () => {
  return (
    <div className="w-full min-h-screen mt-20">
      <div className="width customFlexLg">
        {/* // form section  */}
        <div className="projectForm xl:max-w-[700px] lg:max-w-[550px] flex-1 flex-wrap">
          <span className="customText">PROJECT FORM</span>
          <h1 className="my-4">Start The Project</h1>
          <p className="mb-8 w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quod esse unde vitae ipsum quae doloribus optio quasi quia
            molestias.
          </p>
          <FormSection></FormSection>
        </div>
        <div className="projectImage flex-1">
          <OutlineImage></OutlineImage>
        </div>
      </div>
    </div>
  );
};

export default Form;
