import Blog from '@/components/Blog/Blog';
import BoxContact from '@/components/BoxContact/BoxContact';
import Footer from '@/components/Footer/Footer';
import LocationBanner from '@/components/LocationBanner/LocationBanner';
import Projects from '@/components/Projects/Projects';
import Services from '@/components/Services/Services';
import SinglePost from '@/components/SinglePost/SinglePost';
import React from 'react';

const page = () => {
    return (
        <div>
            <LocationBanner title="Single Post" breadCumb="Home / Blog / Single Post"></LocationBanner>
            <SinglePost></SinglePost>
            <Footer></Footer>
        </div>
    );
};

export default page;