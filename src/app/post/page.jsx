import BoxContact from '@/components/BoxContact/BoxContact';
import LocationBanner from '@/components/LocationBanner/LocationBanner';
import Projects from '@/components/Projects/Projects';
import Services from '@/components/Services/Services';
import React from 'react';

const page = () => {
    return (
        <div>
            <LocationBanner></LocationBanner>
            {/* <Services></Services>
            <BoxContact></BoxContact> */}
            <Projects></Projects>
        </div>
    );
};

export default page;