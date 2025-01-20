import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  property: {
    id: number;
    propertyName: string;
    data: string;
    description: string;
    location: string;
    price: string;
    imageUrl: string[]; // Array of image URLs
  };
};

const PropertyCard = ({ property }: Props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 1, // Show one image at a time
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
    },
  };
  const CustomLeftArrow = ({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
      <button
        className="absolute custom-blur:hover left-1 w-8 top-1/2 transform -translate-y-1/2 custom-blur text-black-100 text-md p-2 rounded-full"
        onClick={onClick}
        aria-label="Previous Slide"
      >
        <MdKeyboardArrowLeft />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
      <button
        className="absolute custom-blur:hover right-1 w-8 top-1/2 transform -translate-y-1/2 custom-blur text-black text-md p-2 rounded-full shadow-lg"
        onClick={onClick}
        aria-label="Next Slide"
      >
        <MdKeyboardArrowRight />
      </button>
    );
  };

  return (
    <div className="bg-white overflow-hidden group rounded-lg cursor-pointer shadow-lg flex">
      {/* Image Section with Carousel */}
      <div className="w-[275px]">
        <Carousel
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite
          responsive={responsive}
          showDots={true}
          customLeftArrow={<CustomLeftArrow onClick={() => { }} />}
          customRightArrow={<CustomRightArrow onClick={() => { }} />}
          dotListClass="custom-dot-list-style"
          itemClass="px-0" // Add padding between items
          containerClass="pb-0" // Optional: Add padding for the whole carousel container
        >
          {property.imageUrl.map((image, index) => (
            <div key={index}>
              <div className="relative w-[276px] h-[186px]">
                <Image
                  src={image}
                  alt={`Property Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-all  duration-300 w-[276px] h-[186px]"

                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Property Details */}

      <div className="w-[224px] h-[186px]">

        <div className=" h-[165px] w-[186px] flex flex-col mx-auto ">
          <div>
            <h1 className="text-md font-semibold text-[#3A3A3A]">
              {property.propertyName}
            </h1>
            <p className="mt-1 text-[#3A3A3A] font-light text-xs ">
              {property.description}
            </p>
            {/* </hr className=" text-black"> */}
            {/* <hr/> */}
            <div className="h-[2px] bg-[#4F6D7A] w-[80%] mt-2"></div>

            <p className=" text-[#166088] text-xs mt-2 font-md">{property.data}</p>
            <p className="text-xs text-[#166088] font-semibold mt-1">{property.location}</p>
          </div>
          <div>
            <p className="text-base font-bold text-[#3A3A3A]">  {property.price} </p>
            <button className="mt-4 px-4 py-1 w-full  bg-[#4E0F9E] text-white font-medium rounded-lg text-xs ">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
