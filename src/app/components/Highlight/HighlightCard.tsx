import React from "react";
import Image from "next/image";

type Props = {
  city: {
    id: number;
    image: string;
    cityName: string;
    location: string;
    price: string;
    size: string;
  };
};

const HighlightCard = ({ city }: Props) => {
  return (
    <div className="relative max-h-full rounded-lg overflow-hidden m-2">
      {/* Full width image */}
      <div className="relative h-[256px] ">
        <Image
          src={city.image}
          alt="Image"
          // fill 
          width={1200}
          height={800}
          className="rounded-lg object-cover" // Maintains aspect ratio while covering the container
        />
      </div>
      {/* Gradient overlay with content at the bottom */}
      <div className="absolute flex inset-0 mt-44 w-full h-[152px] custom-gradient clip-banner">
        <div className="relative bottom-0 w-full p-4">
          {/* Content inside the bottom section */}
          <h1 className=" relative -mt-2 text-[9px]   font-semibold text-[#E0EEF4]">{city.cityName}</h1>
          <h3 className="text-[7px]  text-[#FFFFFF] font-light">{city.location}</h3>
          <h1 className="text-sm font-semibold pt-1 text-[#FFFFFF]">{city.price}</h1>
          <p className="text-[] font-semibold text-xs text-[#E0EEF4]">{city.size}</p>

          <div className="flex flex-col items-center -mt-12 px-10 ml-20">
            <button className="bg-[#4E0F9E] shadow-lg  rounded-md px-14 py-1 font-extrabold text-white text-[10px]">
              View More
            </button>
            <p className="text-[#FFFFFF] text-xs font-light mt-2">
              by one reality developer
            </p>
          </div>





        </div>
        {/* <div className="bg-[#4E0F9E] shadow-lg rounded-md"> 
          <button className="font-extrabold text-white text-[10px] "> View More</button>
        
        </div> */}
        {/* <p className="text-[#FFFFFF] text-xs font-light"> by one reality developer</p> */}
      </div>
    </div>
  );
};

export default HighlightCard;
