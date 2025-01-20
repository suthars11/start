import React from 'react'
import SectionHeading from '../../SectionHeading'
import { appartmentTypeData } from '@/app/data/data'
import AppartmentTypeCard from './AppartmentTypeCard'

const Apparment = () => {
    return (
        <div className='pt-8  bg-gray-100'>
            <div className="lg:w-[1038px] mx-auto">
                <SectionHeading heading='Explore Popular Properties in Jaipur' />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-10 md:mt-6      items-center'>

                    {appartmentTypeData.map((type) => {
                        return <div key={type.id}

                        >

                            <AppartmentTypeCard type={type} />
                        </div>

                    })}

                </div>

            </div>
        </div>
    )
}

export default Apparment