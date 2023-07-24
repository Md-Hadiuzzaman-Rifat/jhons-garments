import Image from 'next/image';
import React from 'react';

const CoverTail = () => {
    return (
        <div className='w-full mt-[-50px] z-20'>
            <div className="width">
                <div className='customGrid'>
                    {/* // first section  */}
                    <div className='customBlue p-10 rounded-lg'>
                        <div className='customFlex'>
                            <Image src='/images/tissue-icon.png' className='w-[80px] h-auto' height={80} width={80} alt="Tissue Image"></Image>
                            <div>
                                <h3 className='text-white text-[22px] font-semibold'>Excellent Material</h3>
                                <p className='text-white text-[16px] font-light'>Luctus nec ullamcorper ipsum mattis pulvinar dolor.</p>
                            </div>
                        </div>
                    </div>
                    {/* // second section  */}
                    <div className='customBlue p-10 rounded-lg'>
                        <div className='customFlex'>
                            <Image src='/images/tissue-icon.png' height={80} width={80} alt="Tissue Image"></Image>
                            <div>
                                <h3 className='text-white text-[22px] font-semibold'>Excellent Material</h3>
                                <p className='text-white text-[16px] font-light'>Luctus nec ullamcorper ipsum mattis pulvinar dolor.</p>
                            </div>
                        </div>
                    </div>
                    {/* third section  */}
                    <div className='customBlue p-10 rounded-lg'>
                        <div className='customFlex'>
                            <Image src='/images/tissue-icon.png' height={80} width={80} alt="Tissue Image"></Image>
                            <div>
                                <h3 className='text-white text-[22px] font-semibold'>Excellent Material</h3>
                                <p className='text-white text-[16px] font-light'>Luctus nec ullamcorper ipsum mattis pulvinar dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoverTail;