import React from 'react'
import SectionHeading from '../../SectionHeading'
import CitySlider from './CitySlider'

const CityProperty = () => {
  return (
    <div className='pt-8 bg-gray-100'>
        <div className='lg:w-[1038px]  mx-auto   '>
            <SectionHeading heading='Apartments,Villas and more'/>

            <div className='mt-10 md:mt-6 '>
                {/* {slider} */}
                <CitySlider/>
            </div>
        </div>
    </div>
  )
}

export default CityProperty