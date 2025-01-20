"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { MdOutlineLocationOn } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Link from "next/link";

interface PropertyDetails {
  title: string;
  location: string;
  priceRange: string;
  data: string;
  images: string[];
}

const Villas: React.FC = () => {
  const property: PropertyDetails = {
    title: "Jaipur Property Deals",
    location: "Kanir Vihar, NH-8, Jaipur, Jaipur",
    priceRange: "₹18.0L - ₹35.0L",
    data: "1,2,3 BHK Apartments",
    images: [
      "/images/banner1.webp",
      "/images/banner2.webp",
      "/images/banner3.webp",
      "/images/banner4.webp",
    ],
  };

  const configurations = [
    { title: "Configurations", value: "2,3,4 BHK Apartment" },
    { title: "Avg. Price", value: "5.5K / sq.ft" },
    { title: "Super Buildup Area", value: "1000-2000 sq.ft" },
    { title: "Super Buildup Area", value: "1000-2000 sq.ft" },
    { title: "Super Buildup Area", value: "1000-2000 sq.ft" },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const sideImages = [
    property.images[activeSlideIndex % property.images.length],
    property.images[(activeSlideIndex + 1) % property.images.length],
    property.images[(activeSlideIndex + 2) % property.images.length],
  ];

  return (
    <div className="lg:w-[1038px] w-full py-6   mx-auto  ">
      <div className="w-[785px] h-[290px] bg-gray-200  rounded-lg shadow-lg p-4 ml-56 xl:ml-72">
        <div className="grid grid-cols-4 gap-4 h-full">
          <div className="col-span-2 w-[180px] h-[223px]">
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev", // Custom class for previous button
              }}
              pagination={false}
              loop
              modules={[Navigation, Pagination]}
              className="w-full h-full"
              onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
            >
              {property.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-[261px] h-[191px] overflow-hidden rounded-lg">
                    <Image
                      src={image}
                      alt={`Property Image ${index + 1}`}
                      width={400}
                      height={280}
                      className="w-full h-full object-cover"
                    />
                    <div className="swiper-button-next text-xs text-[#FFFFFF]"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex flex-col ml-[-196px]">
            {sideImages.map((image, index) => (
              <div
                key={index}
                className="w-[60px] h-[64px] overflow-hidden rounded-lg border border-gray-200"
              >
                <Image
                  src={image}
                  alt={`Side Image ${index + 1}`}
                  width={60}
                  height={65}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="p-2 flex flex-col -ml-80 relative">
            <div className="flex flex-col items-end space-y-1">
              <div className="space-x-4 underline flex">
                <p className="text-[#4E0F9E] text-xs">
                  EMI Starts: ₹ 18.0L-35.0L
                </p>
                <span className="text-[#4E0F9E] text-md">
                  <IoShareSocialOutline size={16} /> {/* Smaller Icon */}
                </span>
                <span className="text-[#4E0F9E] text-md">
                  <FaRegHeart size={16} /> {/* Smaller Icon */}
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold">{property.priceRange}</h2>
              <h3 className="text-sm font-bold text-[#000000]">
                {property.title}
              </h3>
              <p className="text-xs py-1 text-gray-500">{property.location}</p>
              <h2 className="text-xs mb-4 font-black text-[#000000]">
                {property.data}
              </h2>
            </div>

            <div className="bg-gray-300 relative rounded-lg shadow-md flex items-center justify-start  overflow-hidden w-[490px] h-[30px]">
              {configurations.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col px-4 border-r-2  border-[#4E0F9E] last:border-none space-y-2"
                >
                  <span className="text-[8px] text-[#5A5B5C] font- leading-none">
                    {item.title}
                  </span>
                  <span className="text-[8px] text-gray-900 font-semibold leading-none">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full h-[2px] bg-[#4E0F9E80] mt-2"></div>

            <div className="mt-2">
              <button className="bg-white rounded-lg shadow-md px-2 py-1 text-[#4E0F9E]  text-[7px] font-normal">
                Located in:
              </button>
              <span className="text-[7px] font-normal text-[#858585] ml-10">
                Trimurty Crimson society now offers elegantly built 3 BHK
                apartments in Vaishali.
              </span>
            </div>

            <div className="mt-2 flex  space-x-1">
              <button className="flex items-center bg-white rounded-md shadow-md px-1 font-normal text-[6px] text-[#4E0F9E]">
                <MdOutlineLocationOn className="mr-1" size={10} />
                Nearby places:
              </button>
              <div className="flex justify-center items-center space-x-2 left-5 relative">
                <div className="bg-white rounded-md shadow-lg text-[8px] px-2 py-1 font-bold text-[#858585]">
                  S.S.G School:{" "}
                  <span className="text-[6px] font-normal text-[#858585]">
                    is 5.0km away
                  </span>
                </div>
                <div className="bg-white rounded-md shadow-lg text-[8px] px-2 py-1 font-bold text-[#858585]">
                  Govt. Hospital:{" "}
                  <span className="text-[8px]">is 5.0km away</span>
                </div>
                <div className="bg-white rounded-md shadow-lg text-[8px] px-2 py-1 font-bold text-[#858585]">
                  Shopping Mall:{" "}
                  <span className="text-[8px]">is 5.0km away</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 py-2 flex justify-between w-[786px] -ml-4 rounded-bl-2xl rounded-br-2xl items-center bg-[#C0D6DF]">
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Builder Logo"
                width={24}
                height={24}
                className="rounded-full"
              />
              <div className="flex flex-col items-start">
                <h1 className="text-xs font-medium text-gray-700">Builder:</h1>
                <h6>Jaipur Property Deals</h6>
              </div>
            </div>
            <div className="flex gap-2">
              <Link href="/Pages/details">
                <button className="px-4 py-1 text-black rounded bg-white text-xs ">
                  View
                </button>
              </Link>
              <button className="px-4 py-1 border mr-4 bg-white text-black-500 rounded hover:bg-blue-100 text-xs">
                Contact Number
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Villas;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// interface PropertyDetails {
//   title: string;
//   location: string;
//   priceRange: string;
//   data: string;

//   images: string[];
// }

// const Villas: React.FC = () => {
//   const property: PropertyDetails = {
//     title: "Jaipur Property Deals",
//     location: "Kanir Vihar, NH-8, Jaipur, Jaipur",
//     priceRange: "₹18.0L - ₹35.0L",
//     data: "1,2,3 BHK Apartments",
//     // avgPrice: "₹3.5K/sqft",
//     // superBuiltupArea: "980-2000 sqft",
//     // description:
//     //   "Trimurty Crimson society row offers elegantly built 3 BHK apartment in Vaishali.",
//     images: [
//       "/images/banner1.webp",
//       "/images/banner2.webp",
//       "/images/banner3.webp",
//       "/images/banner4.webp",
//     ],
//   };

//   const configurations = [
//     {
//       title: "Configurations",
//       value: "2,3,4 BHK Apartment",
//     },
//     {
//       title: "Avg. Price",
//       value: "5.5K / sq.ft",
//     },
//     {
//       title: "Super Buildup Area",
//       value: "1000-2000 sq.ft",
//     },
//     {
//       title: "Avg. Price",
//       value: "5.5K / sq.ft",
//     },
//     {
//       title: "Super Buildup Area",
//       value: "1000-2000 sq.ft",
//     },
//   ];
//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);

//   const sideImages = [
//     property.images[activeSlideIndex % property.images.length],
//     property.images[(activeSlideIndex + 1) % property.images.length],
//     property.images[(activeSlideIndex + 2) % property.images.length],
//   ];

//   return (
//     <div className="max-w-6xl w-[80%] py-16 mx-auto bg-white rounded-lg shadow-lg">
//       <div className="w-[785px] h-[290px] bg-gray-200 rounded-lg shadow-lg p-4 ml-56">
//         <div className="grid grid-cols-4 gap-4 h-full">
//           {/* Image Slider Section */}
//           <div className="col-span-2 w-[180px] h-[191px]">
//             <Swiper
//               navigation
//               pagination={{ clickable: true }}
//               loop
//               modules={[Navigation, Pagination]}
//               className="w-full h-full"
//               onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
//             >
//               {property.images.map((image, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="w-full h-[216px] overflow-hidden rounded-lg">
//                     <Image
//                       src={image}
//                       alt={`Property Image ${index + 1}`}
//                       width={400}
//                       height={240}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>

//           {/* Side Images Section */}
//           <div className="flex flex-col ml-[-196px]">
//             {sideImages.map((image, index) => (
//               <div
//                 key={index}
//                 className="w-[60px] h-[64px] overflow-hidden rounded-lg border border-gray-200"
//               >
//                 <Image
//                   src={image}
//                   alt={`Side Image ${index + 1}`}
//                   width={60}
//                   height={65}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Details Section */}
//           <div className=" p-2 flex flex-col -ml-80 ">
//             <div className="">
//               <div className="flex ">
//                 <h2 className="text-sm font-bold">{property.priceRange}</h2>
//               </div>
//               <h3 className="text-sm font-bold">{property.title}</h3>
//               <p className="text-xs py-1 text-gray-500">{property.location}</p>
//               <h2 className="text-sm font-bold">{property.data}</h2>
//             </div>

//             <div className="">
//               <div className="bg-gray-300 rounded-lg  shadow-md flex items-center overflow-hidden w-[490px] h-[30px]">
//                 {configurations.map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex flex-col items-center px-4 border-r-2 last:border-none space-y-2"
//                   >
//                     <span className="text-[8px] text-gray-500 font-semibold leading-none">
//                       {item.title}
//                     </span>
//                     <span className="text-[8px] text-gray-900 font-semibold leading-none">
//                       {item.value}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//               <div className="w-full h-[2px] bg-purple-400 mt-4"></div>
//             </div>
//             <div className=" mt-2">
//               <button className="bg-white rounded-lg shadow-md px-2 text-purple-500">
//                 located in:
//               </button>
//               <span className="text-[10px] text-gray-500">
//                 {" "}
//                 Trimurty Crimson society now offers elegantly built 3 BHK
//                 appatment in Vashali
//               </span>
//             </div>

//             <div className=" mt-2 flex space-x-2">
//               <button className="bg-white rounded-lg shadow-md px-1 text-sm text-purple-500">
//                 Near by places:
//               </button>

//               <div className="bg-white rounded-lg shadow-lg text-[10px] px-1">
//                 S.S.G School:
//                 <span className="text-[8px]">is 5.0km away</span>
//               </div>

//               <div className="bg-white rounded-lg shadow-lg text-[10px] px-1">
//                 Govt. Hosptital:
//                 <span className="text-[8px]">is 5.0km away</span>
//               </div>

//               <div className="bg-white rounded-lg shadow-lg text-[10px] px-1 ">
//                 shoping Mall:
//                 <span className="text-[8px]">is 5.0km away</span>
//               </div>
//             </div>

//           </div>

//           {/* Footer Section */}
//           <div className="col-span-4 py-2 flex justify-between w-[786px] -ml-4 rounded-bl-2xl rounded-br-2xl items-center bg-[#C0D6DF]">
//             <div className="flex items-center ">
//               <Image
//                 src="/images/logo.png"
//                 alt="Builder Logo"
//                 width={24}
//                 height={24}
//                 className="rounded-full"
//               />
//              <div className="flex flex-col items-start">
//     <h1 className="text-xs font-medium text-gray-700">
//     Builder:
//     </h1>
//     <h6>Jaipur property deals</h6>
//   </div>
//             </div>
//             <div className="flex gap-2">
//               <button className="px-4 py-1  text-black rounded bg-white text-xs">
//                 View
//               </button>
//               <button className="px-4 py-1 border mr-4 bg-white text-black-500 rounded hover:bg-blue-100 text-xs">
//                 Contact Number
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Villas;
