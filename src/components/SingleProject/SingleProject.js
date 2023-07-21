import Image from 'next/image';
import React from 'react';

const SingleProject = ({project}) => {
    const {title,desc,img}=project
    return (
        <div>
            <Image src={img} height={500} width={400} alt="Project ShowCase"></Image>
            <div className='customBlue w-[390px]'>
                <h3 className='text-white font-bold'>Lorem Ipsum</h3>
                <p className='text-gray-300 mt-[-40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
};

export default SingleProject;