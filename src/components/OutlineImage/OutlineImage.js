import React from 'react';
import img from "/public/images/sexy-girl.jpg"
import Image from 'next/image';
import "./OutlineImage.css"

const OutlineImage = () => {
    return (
        <div className='Outline max-w-[500px]'>
            <div className="online-box flex flex-col items-center">
                <h3 className='text-4xl text-white md:font-bold'>5,000<sup className="customText">  *</sup></h3> 
                <p className='text-white sm:font-bold'>Completed Project</p>
            </div>
            <div className="ms-8 outline-container">
            <Image className="outline-container-image rounded-xl" src={img} width={500} height={500} alt="Women"></Image>
            </div>
        </div>
    );
};

export default OutlineImage;