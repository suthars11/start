import Image from "next/image";
import React from "react";
import Search from "../../Search";

const Hero = () => {
  return (
    <div className="bg-gray-200 mt-4">
      <div className=" w-full h-full -z-50 bg-gray-200">
        {/* Ensures the container spans the full width */}
        <div className="relative lg:w-[1038px] sm:h-[960px] md:h-[200px] lg:h-[480px] xl:w-[100%]">
          {/* <div className="absolute inset-0 bg-opacity-55"></div> */}
          {/* Next.js Image with proper layout for responsiveness */}
          <Image
            src="/images/property.png"
            alt="Property Background"
            width={700} // Specify the width
            height={900}
            layout="resposive"
            className="w-full h-full object-cover opacity-100"
          />
        </div>
        <div className="absolute ">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Hero;
