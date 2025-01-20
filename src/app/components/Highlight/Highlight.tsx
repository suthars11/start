import React from 'react'
import SectionHeading from '../SectionHeading'

import Highlightslider from './Highlightslider'

const  Highlight = () => {
  return (
    <div className='pt-8  bg-gray-100 -z-50'>
        <div className='lg:w-[1038px]  mx-auto '>
            <SectionHeading heading='Top highlighted projects'/>

            <div className='mt-10 md:mt-6'>
                {/* {slider} */}
                <Highlightslider/>
            </div>
        </div>
    </div>
  )
}

export default Highlight;