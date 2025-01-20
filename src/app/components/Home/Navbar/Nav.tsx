// "use client";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { HiBars3BottomRight } from "react-icons/hi2";
// import { navLinks } from "@/app/constant/Constant";
// import { AiOutlineMenu } from "react-icons/ai";
// import { FaUserCircle } from "react-icons/fa";
// import Image from "next/image";

// type Props = {
//   openNav: () => void;
// };

// const Nav = ({ openNav }: Props) => {
//   const [navBg, setNavBg] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY >= 90) {
//         setNavBg(true);
//       } else {
//         setNavBg(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full z-[100] h-[10vh] transition-all duration-300 ${
//         navBg
//           ? "bg-gradient-to-r from-[rgba(0,0,0,0.3)] to-[rgba(54,54,54,0.02)]"
//           : "bg-gradient-to-r from-[rgba(0,0,0,0.3)] to-[rgba(54,54,54,0.02)]"
//       }`}
//     >
//       <div className="flex items-center justify-between w-[95%] sm:w-[80%] mx-auto h-full">
//         {/* Logo Section */}
//         <div className="flex items-center space-x-2">
//           <div className="md:w-10 md:h-10 w-7 h-7 rounded-full flex items-center justify-center">
//             <Image src="/images/logo.png" alt="Logo" width={60} height={40} />
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden lg:flex items-center space-x-14 text-white">
//           {navLinks.map((navlink) => (
//             <Link key={navlink.id} href={navlink.url}>
//               <p className="font-medium hover:text-yellow-300">{navlink.label}</p>
//             </Link>
//           ))}
//         </div>

//         {/* Login and Burger Menu */}
//         <div className="flex items-center space-x-4">
//           {/* Login Button */}
//           <div className="w-40 h-8 bg-white rounded-lg flex justify-center items-center cursor-pointer">
//             <h3 className="text-black font-medium">Post Property</h3>
//           </div>
//           <div className="text-2xl cursor-pointer text-blue-500">
//             <AiOutlineMenu />
//           </div>
//           <div className="text-2xl cursor-pointer text-blue-500">
//             <FaUserCircle />
//           </div>

//           {/* Burger Menu for Mobile */}
//           <HiBars3BottomRight
//             onClick={openNav}
//             className="sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white lg:hidden"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/app/constant/Constant";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="fixed top-0 h-[72px]  z-50 gradient-background w-full transition-all duration-200">
      <div className="flex items-center h-full justify-between  sm:w-[567pxpx] md:w-[767ppx] lg:w-[1038px] xl:w-[1038px]  mx-auto">
        {/* logo */}
        {/* <div className="absolute inset-0 bg-black h-[10vh] bg-opacity-55"></div> */}
        <div className="flex items-center  space-x-2 h-[72px]">
          <div className="w-[60px] h-[56px] flex justify-center items-center  flex-col ">
            <Image src="/images/logo.png" alt="Logo" width={70} height={60} />
          </div>
        </div>

        {/* login icon */}
        <div className="flex items-center space-x-4">
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-14 text-white">
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p className="font-medium">{navlink.label}</p>
              </Link>
            ))}
          </div>
          {/* post property button */}

          <Link href="/Pages/seller">
            <div className="flex items-center justify-between rounded-lg bg-white px-4 py-2  w-44 h-6  ">
              <span className="text-custom-purple font-bold text-xs cursor-pointer ">
                Post Property
              </span>
              <span className="text-white bg-custom-purple text-xs font-medium px-2 h-4 flex justify-center items-center relative left-4 rounded-l-lg">
                Free
              </span>
            </div>
          </Link>

          {/* three lines*/}
          <div className="flex items-center cursor-pointer rounded-full space-x-2 text-custom-purple w-5 h-5">
            <AiOutlineMenu className="text-3xl" />
          </div>
          {/* login button */}
          <div className="flex items-center cursor-pointer relative space-x-2 text-custom-purple w-5 h-5">
            <FaUserCircle className="text-3xl" />
            {/* Green Dot */}
            <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-white"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
