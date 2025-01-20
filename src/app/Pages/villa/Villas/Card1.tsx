import React from 'react';
import Image from 'next/image';  // Ensure that you import the Image component from Next.js

const Card1: React.FC = () => {
  return (
    <div className="w-[785px] h-[228px] bg-gray-200 rounded-lg shadow-lg p-4 ml-96 xl:ml-96 mt-8">
      <div>
        {/* Title Section */}
        <h1 className="text-[11px] font-bold text-left text-[#4E0F9E]">
          Projects in Mansarovar Extension, Jaipur
        </h1>
        <h5 className="text-[7px] text-[#5A5B5C] text-left font-normal">
          Who are popular amongst Residential Buyers
        </h5>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5  mt-6">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="h-[134px] w-[110px] rounded-lg shadow-xl bg-white mx-auto flex flex-col items-center justify-center p-4"
              >
                {/* Centered Profile Icon */}
                <div className="text-[#1D1B20] mb-2 w-[33px] h-[33px]">
                  <Image
                    src="/images/circle.png"  // Correct image path in the public folder
                    alt="Profile Icon"
                    width={33}  // Add width and height for Next.js Image optimization
                    height={33}
                  />
                  {/* <div  className="h-[134px] w-[110px] rounded-lg shadow-xl bg-gray-400 bg-white flex flex-col items-center justify-center -z-50" >

                  </div> */}
                </div>

                {/* Text Below Icon */}
                <div className="text-center">
                  <h4 className="font-bold text-[7px] text-[#5A5B5C] flex align-center">
                    SAGAR PRAJAPAT
                  </h4>
                  <p className="text-[6px] text-[#858585] font-normal">Member Since Aug, 2025</p>
                </div>

                {/* Line Divider */}
                <div className="w-full h-[1px] bg-gray-300 my-3"></div>

                {/* Star Ratings */}
                <div className="flex justify-center space-x-1">
                  {Array(5)
                    .fill("")
                    .map((_, starIndex) => (
                      <span key={starIndex} className="text-[#C76BBC] text-xl">
                        ★
                      </span>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card1;
