// import React, { useEffect, useState } from "react";
// import { IoSearchSharp } from "react-icons/io5";
// import Link from "next/link";

// const Search = () => {
//   const [recentSearches, setRecentSearches] = useState<string[]>([]); // Explicitly typing as string[]
//   const [isClient, setIsClient] = useState(false); // Track if we're on the client side

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       // Set the flag to true once we're on the client side
//       setIsClient(true);

//       // Set the recent searches after the component mounts on the client side
//       setRecentSearches(["JLN Marg", "Jagatpura", "Jhotwada", "Mansrover"]);
//     }
//   }, []);

//   // Render null or a placeholder until the component is mounted on the client side
//   if (!isClient) {
//     return null;
//   }

//   const navigationItems = [
//     { label: "Commercial", path: "/commercial" },
//     { label: "Agriculture", path: "/agriculture" },
//     { label: "Residentials", path: "/residentials" },
//     { label: "Farm Land", path: "/farm-land" },
//     { label: "Independent Houses", path: "/independent-houses" },
//     { label: "Villas", path: "/Pages/villa" },
//     { label: "Flats", path: "/flats" },
//     { label: "Independent floors", path: "/independent-floors" },
//   ];

//   return (
//     <div className="relative w-full -mt-52 left-48">
//       {/* Gradient Navigation Section */}
//       <div className="relative h-24 max-w-780 w-[780px] custom-gradient p-2 lg:mt-2 sm:p-2 lg:p-6 rounded-tl-3xl shadow-lg max-w-7xl mx-auto -mt-16 md:-mt-24 clip-banners">
//         {/* Navigation Links */}
//         <div className="flex flex-wrap justify-between text-custom-purple text-xs sm:text-sm md:text-base lg:text-sm -space-x-2">
//           {navigationItems.map((item, index) => (
//             <Link key={index} href={item.path}>
//               <div className="px-2 sm:px-3 py-1 hover:underline whitespace-nowrap">
//                 {item.label}
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="relative -mt-6 w-[198px] h-12 bg-custom-purple rounded-lg shadow-lg">
//         {/* Input Field (Foreground Layer) */}
//         <input
//           type="text"
//           placeholder="Search here"
//           className="absolute z-30 w-full h-full bg-transparent outline-none px-4 pr-10 text-sm sm:text-base placeholder-white"
//         />
//         <span className="absolute inset-y-0 right-4 z-30 flex items-center text-white">
//           <IoSearchSharp size={20} />
//         </span>

//         {/* Location Text (Background Layer) */}
//         <div className="absolute left-[198px] top-0 w-[434px] h-12 bg-white clip-banners flex justify-center items-center z-20 underline">
//           <h4 className="text-black">Location, Landmark, Builders here</h4>
//         </div>
//       </div>

//       {/* Recent Searches */}
//       <div className="flex z-50 justify-start items-center h-8 space-x-14 mt-4">
//         <span className="text-custom-purple">Recent searches: </span>
//         {recentSearches.length > 0 &&
//           recentSearches.map((location, index) => (
//             <button
//               key={index}
//               className="bg-[rgba(246,245,245,1)] px-4 text-custom-purple"
//             >
//               {location}
//             </button>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Search;



"use client";

import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import Link from "next/link";

const Search = () => {
  const navigationItems = [
    { label: "Commercial", path: "/commercial" },
    { label: "Agriculture", path: "/agriculture" },
    { label: "Residentials", path: "/residentials" },
    { label: "Farm Land", path: "/farm-land" },
    { label: "Independent Houses", path: "/independent-houses" },
    { label: "Villas", path: "/Pages/villa" },
    { label: "Flats", path: "/flats" },
    // { label: "Independent floors", path: "/independent-floors" },
  ];

  return (
    <div className="relative w-full -mt-72 left-96 lg:left-12  ">
      {/* Gradient Navigation Section */}
      <div className="relative h-24 max-w-780 w-[780px] custom-gradient p-2 lg:mt-2 xl:mt-48 xl:ml-16 sm:p-2 lg:p-6 rounded-tl-3xl shadow-lg max-w-7xl mx-auto -mt-16 md:-mt-24 clip-banners">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-between text-[#4E0F9E] text-xs sm:text-sm md:text-base lg:text-sm -space-x-4 font-black">
          {navigationItems.map((item, index) => (
            <Link key={index} href={item.path}>
              <div className="px-2 sm:px-3 py-1 hover:underline whitespace-nowrap">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative -mt-6 w-[198px] h-12 xl:ml-16 bg-custom-purple rounded-lg shadow-lg">
        {/* Input Field (Foreground Layer) */}
        <input
          type="text"
          placeholder="Search here"
          className="absolute z-30 w-full h-full bg-transparent outline-none px-4 pr-10 text-sm sm:text-base placeholder-white"
        />
        <span className="absolute inset-y-0 right-4 z-30 flex items-center text-white">
          <IoSearchSharp size={20} />
        </span>

        {/* Location Text (Background Layer) */}
        <div className="absolute left-[198px] top-0 w-[434px] h-12 bg-white clip-banners flex justify-center items-center z-20 underline">
          <h4 className="text-black">Location, Landmark, Builders here</h4>
        </div>
      </div>

      <div className="flex z-50 xl:ml-16 justify-start items-center h-8 space-x-1 mt-4">
        <span className="text-custom-purple ml-10">Recent searches: </span>
        {["JLN Marg", "Jagatpura", "Jhotwada", "Mansrover"].map(
          (location, index) => (
            <button
              key={index}
              className="bg-[rgba(246,245,245,1)] px-4 text-custom-purple"
            >
              {location}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Search;
