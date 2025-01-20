import React from 'react'
// import { FaQuoteRight, FaStar } from 'react-icons/fa';
type Props={
    review: {
        id: number;
        name: string;
        profession: string;
        userImage: string;
        review: string;
    }
}

const ReviewCard = ({review}:Props) => {
  return (
    <div className='bg-white rounded-lg m-3 relative border border-blue-200'>
          <div className='flex items-center space-x-4 p-2'>
            <img src={review.userImage} alt={review.name} width={50} height={50} className='rounded-sm'/>
            <div>

            <h1 className='font-bold text-[rgba(0,0,0,1)]'>{review.name}</h1>
            <h4 className='text-sm'>{review.review}</h4>
            </div>
           
        </div>

<div className='w-full h-[1.2px] bg-gray-600 opacity-600  mb-2'></div>
<p className='font-medium text-sm text-[rgba(22,96,136,1)] flex justify-center items-center'>{review.profession}</p>
      
    </div>
  )
}

export default ReviewCard