import React from 'react';

const page = () => {
    return (
        <div className='w-full min-h-screen'>
            <div className="width flex flex-row flex-wrap">
                <div className="projectForm">
                    <span className='customText'>PROJECT FORM</span>
                    <h1>Start The Project</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod esse unde vitae ipsum quae doloribus optio quasi quia molestias.</p> 
                    <form action="#">
                        <input type="text" placeholder='Full Name'/>
                        <input type="text" placeholder='Email Address' />
                        <input type="text" placeholder='Phone Number' />
                        <input type="text" placeholder="Select Project"/>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                </div>
                <div className="projectImage">

                </div>
            </div>
        </div>
    );
};

export default page;