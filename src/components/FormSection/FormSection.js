import React from 'react';
import Button from '../Button/Button';

const FormSection = () => {
    return (
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
    );
};

export default FormSection;