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

const MoveinCard = ({ city }: Props) => {
    return (
        <div className='relative rounded-lg overflow-hidden m-2 bg-sky-200 '>
            <Image
                src={city.image}
                alt='Image'
                width={100}
                height={276}
                className='rounded-lg w-[206px] h-[276px] object-cover opacity-100 flex-shrink-1'
            />
            <div className='absolute inset-0'></div>
            <div className='absolute p-4 top-4'>
                <h1 className='text-lg font-bold text-[#5A5B5C] z-50 opacity-100'>{city.cityName}</h1>
                <p className='text-[#858585] font-base text-xs'>{city.numberOfProperties}</p>
            </div>
        </div>
    );
};

export default MoveinCard;
