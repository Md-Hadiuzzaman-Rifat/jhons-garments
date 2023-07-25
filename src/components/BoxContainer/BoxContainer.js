import React from 'react';
import {AiOutlineArrowRight} from "react-icons/ai"

const BoxContainer = ({theme,itemsArray, title, text, properties}) => {
    return (
        <div className={theme+" w-full p-12 rounded-lg mt-8 "+text+" "+properties}>
            <h3 className='font-semibold text-xl text'>{title}</h3>
            <div className='border-b-4 border-[#a6557c] my-8'></div>
            {
                itemsArray.map(item=><div key={Math.random}>
                    <div className='customFlex'>
                    <AiOutlineArrowRight className='ml-4 my-3 customText'></AiOutlineArrowRight><p className={text}>{item}</p>
                    </div>
                </div> )
            }
        </div>
    );
};

export default BoxContainer;