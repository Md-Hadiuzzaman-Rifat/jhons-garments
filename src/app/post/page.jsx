import Blog from '@/components/Blog/Blog';
import BoxContact from '@/components/BoxContact/BoxContact';
import LocationBanner from '@/components/LocationBanner/LocationBanner';
import Projects from '@/components/Projects/Projects';
import Services from '@/components/Services/Services';
import React from 'react';

const page = () => {
    return (
        <div>
            <LocationBanner title="Single Post" breadCumb="Home / Blog / Single Post"></LocationBanner>
            {/* <Services></Services>
            <BoxContact></BoxContact> */}
            {/* <Projects></Projects> */}
            <Blog></Blog>
        </div>
    );
};

export default page;