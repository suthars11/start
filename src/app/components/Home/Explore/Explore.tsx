

import React from 'react';
// import SectionHeading from '../../SectionHeading';
import { properties } from '@/app/data/data';

import ExploreCard from './ExploreCard';

const Explore = () => {
    return (
        <div className="pt-2 pb-10 bg-gray-100">
            <div className="lg:w-[1038px] mx-auto ">
                {/* <SectionHeading heading="High-demand projects to invest now" /> */}
                <div className="mt-10 md:mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-center ">
                    {properties.map((property) => (
                        <ExploreCard key={property.id} property={property} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Explore;
