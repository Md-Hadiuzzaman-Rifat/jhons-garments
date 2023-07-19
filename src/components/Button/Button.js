import React from 'react';

const Button = ({children}) => {
    return (
        <button className='px-4 py-3 rounded-md text-white customBackground'>
            {children}
        </button>
    );
};

export default Button;