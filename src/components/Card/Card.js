import Image from 'next/image';
import React from 'react';

const Card = ({img,title,desc}) => {
    return (
        <div className='border bg-[#f2f2f2] p-16 min-w-[300px]'>
            <Image alt={title} src={img} width={100} height={100}></Image>
            <h3>{title}</h3>
            <p>{desc}</p>
            <span className='customText mt-4'>READ MORE</span>
        </div>
    );
};

export default Card;