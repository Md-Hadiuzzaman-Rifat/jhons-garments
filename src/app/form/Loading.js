import React from 'react';
import { HalfMalf } from 'react-spinner-animated';

const loading = () => {
    return (
        <div className='w-full h-screen'>
            <HalfMalf text="Loading..." bgColor={"#a6587c"}/>
        </div>
    );
};

export default loading;