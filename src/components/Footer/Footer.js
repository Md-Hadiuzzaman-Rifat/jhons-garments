import Image from 'next/image';
import React from 'react';
import {BsArrowRightShort} from "react-icons/bs"
const Footer = () => {
    return (
        <div className='w-full customBlue text-white'>
            <div className="width">
                {/* // first section  */}
                <div>
                    <Image src="/images/Logo.png" width={600} height={400} alt="logon "></Image>
                    <p>Vivamus pharetra neque a lacus ullamcorper suscipit. Aenean blandit euismod dignissim. Praesent suscipit fermentum mi.</p>
                    <h2 className='text-red-400'>Social Links</h2>
                </div>
                {/* //second section  */}
                <div>
                    <h2 className='text-2xl'>Quick Links</h2>
                    <ul>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>Home</li>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>About Us</li>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>Services</li>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>Project</li>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>Pricing</li>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>Contact Us</li>
                    </ul>
                </div>
                {/* third section  */}
                <div>
                <h2 className='text-2xl'>Services</h2>
                    <ul>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>Fabric Dyeing</li>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>Satin Weaving</li>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>Fabric Printing</li>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>Garment Stitching</li>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>Linen Weaving</li>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>Custom Apparel</li>
                    </ul>
                </div>
                {/* forth section  */}
                <div>
                <h2 className='text-2xl'>Information</h2>
                    <ul>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>+880-1910803372</li>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>hadirifat100@gmail.com</li>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>www.hadiuzzamanrifat.com</li>
                        <li className='flex'><p className='customText text-2xl font-bold'><BsArrowRightShort/></p>99 Roving St., Big City, PKU 23456</li>
                    </ul>
                </div>
            </div>
            {/* underline  */}
            <div>

            </div>
        </div>
    );
};

export default Footer;