import React from "react";
import "./form.css";
import Button from "@/components/Button/Button";
import OutlineImage from "@/components/OutlineImage/OutlineImage";
const Form = () => {
  return (
    <div className="w-full min-h-screen mt-20">
      <div className="width flex flex-col lg:flex-row gap-12 w-full justify-between items-center">
        {/* // form section  */}
        <div className="projectForm xl:max-w-[700px] lg:max-w-[550px] flex-1 flex-wrap">
          <span className="customText">PROJECT FORM</span>
          <h1 className="my-4">Start The Project</h1>
          <p className="mb-8 w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quod esse unde vitae ipsum quae doloribus optio quasi quia
            molestias.
          </p>
          <form
            className="form-container flex-1 flex flex-col gap-6 overflow-x-hidden"
            action="#"
          >
            <input type="text" placeholder="Full Name" />
            <div className="flex flex-col md:flex-row gap-6 ">
              <input
                className="min-w-[250px] flex-1"
                type="text"
                placeholder="Email Address"
              />
              <input
                className="min-w-[250px] flex-1"
                type="text"
                placeholder="Phone Number"
              />
            </div>

            <input type="text" placeholder="Select Project" />
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="6"
            ></textarea>
            <div>
              <Button>Submit Form</Button>
            </div>
          </form>
        </div>
        <div className="projectImage flex-1">
          <OutlineImage></OutlineImage>
        </div>
      </div>
    </div>
  );
};

export default Form;
