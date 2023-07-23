import BoxContact from '@/components/BoxContact/BoxContact';
import LocationBanner from '@/components/LocationBanner/LocationBanner';
import React from 'react';

const page = () => {
    return (
        <div>
            <LocationBanner></LocationBanner>
            <BoxContact></BoxContact>
        </div>
    );
};

export default page;