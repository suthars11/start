import React from 'react'
import Image from 'next/image'

type Props = {
  city: {
    id: number;
    image: string;
    cityName: string;
    numberOfProperties: string;
  };
};

const CityCard = ({ city }: Props) => {
  return (
    <div className='relative rounded-lg overflow-hidden m-2 bg-sky-200 '>
      <Image
        src={city.image}
        alt='Image'
        width={100}
        height={276}
        className='opacity-100 rounded-lg w-full h-[276px] object-cover'
      />
      <div className='absolute inset-0'></div>
      <div className='absolute p-4 top-4'>
        <h1 className='text-lg font-semibold text
        
        -[#5A5B5C]'>{city.cityName}</h1>
        <p className='text-[#858585]'>{city.numberOfProperties}</p>
      </div>
    </div>
  );
};

export default CityCard;
