import React from 'react'
import SectionHeading from '../../SectionHeading'

import MoveinSlide from './MoveinSlide'

const Movein = () => {
    return (
        <div className='pt-8    bg-gray-100'>
            <div className='lg:w-[1038px]  mx-auto   '>
                <SectionHeading heading='Move in now, next year or later' />

                <div className='mt-10 md:mt-6 '>
                    {/* {slider} */}
                    <MoveinSlide />
                </div>
            </div>
        </div>
    )
}

export default Movein