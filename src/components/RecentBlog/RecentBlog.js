import Image from 'next/image';
import React from 'react';

const RecentBlog = () => {
    return (
        <div className='customBlue p-6 rounded-xl'>
            <h3 className='text-white mb-6 font-semibold text-2xl'>Recent Blog</h3>
            <div className='border-b-2 border-[#a6587c]'></div>
            <div className='customFlex'>
                <Image src=""></Image>
            </div>
        </div>
    );
};

export default RecentBlog;