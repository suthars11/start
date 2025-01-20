// import Image from "next/image";
// import React from "react";
// import { IoSearchSharp } from "react-icons/io5";

// const Page = () => {
//   return (
//     <div className="w-full h-full">
//       {/* Container for the background image */}
//       <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[80vh]">
//         {/* Overlay on top of the image */}
//         <div className="absolute inset-0 bg-black bg-opacity-55"></div>

//         {/* Next.js Image */}
//         <Image
//           src="/listim/morden.png"
//           alt="Property Background"
//           width={1200}
//           height={900}
//           className="w-full h-full object-cover opacity-100"
//           priority
//           layout="responsive"
//         />

//         {/* Div to show on top of the image */}
//         <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-blue-500 p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-[80%] lg:max-w-[60%] z-10">
//           <p className="text-white text-center text-lg sm:text-xl lg:text-2xl">
//             This is displayed on top of the image.
//           </p>
//         </div>

//         {/* Search bar */}
//         <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[70%] lg:w-[50%] bg-white p-2 rounded-full shadow-lg flex items-center z-20">
//           {/* Input Field */}
//           <input
//             type="text"
//             placeholder="Search here"
//             className="flex-1 outline-none px-4 py-2 text-sm sm:text-base placeholder-gray-400"
//           />
//           {/* Search Icon */}
//           <button className="p-2 text-white bg-purple-600 rounded-full">
//             <IoSearchSharp size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

import Image from "next/image";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import Villas from "./Villas/Villas";
import Card from "./Villas/Card";
import Card1 from "./Villas/Card1";
import Detail from "./Villas/Detail";
// import Detail from "./Villas/Detail";

const Page = () => {
  return (
    <div className="w-full h-full -z-50">
      {/* Container for the background image */}
      <div className="relative h-[331px]">
        {/* Overlay on top of the image */}
        <div className="absolute inset-0 bg-black bg-opacity-55"></div>

        {/* Next.js Image */}
        <Image
          src="/images/morden.png"
          alt="Property Background"
          width={1200}
          height={400}
          className="w-full h-full object-cover opacity-100"
          priority
          layout="responsive"
        />

        {/* Div to show on top of the image */}

        {/* Search bar */}
      </div>
      <Detail />
      <Villas />
      <Villas />
      <Card />
      <Villas />
      <Villas />
      <Card1 />
    </div>
  );
};

export default Page;
