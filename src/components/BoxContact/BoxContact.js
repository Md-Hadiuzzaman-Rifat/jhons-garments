import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import {TbWorldSearch} from "react-icons/tb"
import {AiOutlineMail} from "react-icons/ai"
import {HiOutlineLocationMarker} from "react-icons/hi"


const BoxContact = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
        {/* // first container */}
        <div className="customFlex my-4">
          <BiPhoneCall className="text-7xl customText"></BiPhoneCall>
          <div>
            <h3 className="font-semibold text-3xl mb-2">Phone</h3>
            <div className="text-xl font-light">+880-1910803372</div>
          </div>
        </div>
         {/* // second container  */}
        <div className="customFlex my-4">
          <TbWorldSearch className="text-7xl customText"></TbWorldSearch>
          <div>
            <h3 className="font-semibold text-3xl mb-2">Website</h3>
            <div className="text-xl font-light">www.abc.com</div>
          </div>
        </div>
        <div className="customFlex my-4">
          <AiOutlineMail className="text-7xl customText"></AiOutlineMail>
          <div>
            <h3 className="font-semibold text-3xl mb-2">Email</h3>
            <div className="text-xl font-light">abc@hadi.com</div>
          </div>
        </div>

        <div className="customFlex my-4">
          <HiOutlineLocationMarker className="text-7xl customText"></HiOutlineLocationMarker>
          <div>
            <h3 className="font-semibold text-3xl mb-2">Address</h3>
            <div className="text-xl font-light">Mirpur-12, Dhaka-1216</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default BoxContact;
