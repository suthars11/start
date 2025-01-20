"use client";
import React from "react";
// import Sliderpro from "./Sliderpro";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full mx-auto ">
      {/* Header */}
      <div className="bg-[#C0D6DF80] w-full">
        <div className="w-full mx-auto">
          <div className="flex flex-col items-center py-2 w-full">
            <div className="flex flex-col sm:flex-row justify-between w-full sm:w-[1000px] mx-auto mt-20">
              <div className="text-left">
                <h1 className="text-sm font-bold text-[#4E0F9E]">
                  Jaipur Property Deals
                </h1>
                <h1 className="text-[#5A5B5C] font-normal text-xs mt-2">
                  Mansarovar Extension, NH - 8 Jaipur, Barhmohanpura
                </h1>
                <div className="flex gap-4 mt-4">
                  <button
                    className="bg-[#4E0F9E] text-white px-4 font-semibold"
                    aria-label="Rating Button"
                  >
                    ★ 4.3
                  </button>
                  <button
                    className="bg-[#4E0F9E] text-white px-4 font-black"
                    aria-label="Write a Review"
                  >
                    Write a Review
                  </button>
                </div>
              </div>

              <div className="text-right mt-4">
                <h1 className="text-sm font-bold text-[#4E0F9E]">
                  ₹55.0 L - 96.25 L / ₹55 K/sq.yd
                </h1>
                <h6 className="font-normal text-[9px]">
                  EMI starts at ₹29.13 K
                </h6>
                <div className="flex justify-end mt-2 space-x-2">
                  <h6 className="font-normal text-[8px]">
                    Price excludes maintenance, floor rise cost, etc.....
                  </h6>
                  <span className="font-semibold text-[8px] text-[#5A5B5C]">
                    Read More
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="w-full sm:w-[1038px] mx-auto ">
            <div className="rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <Image
                  src="/images/luxiry.png"
                  alt="Main Property View"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md object-cover w-full h-[380px]"
                />
                <div className="grid gap-2">
                  <Image
                    src="/images/luxiry.png"
                    alt="Small Property View 1"
                    width={600}
                    height={100}
                    className="rounded-lg w-full h-[186px]"
                  />
                  <Image
                    src="/images/luxiry.png"
                    alt="Small Property View 2"
                    width={600}
                    height={100}
                    className="rounded-lg w-full h-[186px]"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-0 text-center text-sm bg-white shadow rounded">
              <div className="space-y-3">
                <p className="font-bold text-lg text-[#5A5B5C]">
                  Configurations
                </p>
                <p className="text-[#858585]">2, 2.5, 3, 4 BHK Apartments</p>
              </div>
              <div className="space-y-5">
                <p className="font-bold text-lg text-[#5A5B5C]">Avg. Price</p>
                <p className="text-[#858585]">₹5.5 K/sq.ft</p>
              </div>
              <div className="space-y-5">
                <p className="font-bold text-lg text-[#5A5B5C]">
                  Super Built-up Area
                </p>
                <p className="text-[#858585]">940 - 2400 sq.ft</p>
              </div>
              <div className="space-y-5">
                <p className="font-bold text-lg text-[#5A5B5C]">Possession</p>
                <p className="text-[#858585]">Ready to Move</p>
              </div>
            </div>
          </div>

          <div className=" mt-6 w-full py-4 flex justify-around  bg-[#C0D6DF]">
            <ul className="flex flex-wrap space-x-10 text-[#166088]">
              <li className="border-r-2 border-[#166088] pr-4">
                Overview/Home
              </li>
              <li className="border-r-2 border-[#166088] pr-4">
                Around This Project
              </li>
              <li className="border-r-2 border-[#166088] pr-4">
                More About Project
              </li>
              <li className="border-r-2 border-[#166088] pr-4">
                About Project
              </li>
              <li className="border-r-2 border-[#166088] pr-4">Floor Plan</li>
              <li className="border-r-2 border-[#166088] pr-4">Tour This</li>
              <li className="pr-4">Price Trends</li>{" "}
              {/* No border on the last item */}
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:w-[1038px] mx-auto relative ">
        <div className="  flex    ml-[73%] absolute ">
          <div className="bg-[#C3E7F5]  rounded-lg shadow-lg w-[277px]  lg:ml-[20px] lg:w-[260px]    p-4">
            <div className="bg-[#FFE752] text-center text-[9px] rounded-lg mb-4 text-[#000000]">
              ⚡ Nice Choice. Lets Connect With The Seller
            </div>
            <div className="bg-[#FFFFFF] rounded-lg p-4 shadow-sm">
              <p className="font-bold text-left  text-[#166088]">
                Contact Seller
              </p>
              <div className="flex items-center mb-4">
                <Image
                  src="/images/seller/user.png"
                  alt="Seller"
                  width={100}
                  height={60}
                  className="rounded-lg w-12 h-12"
                />
                <p className="text-gray-500 text-xs ml-2">Synergy Realty</p>
                <h4 className=" text-gray-500 text-xs  -ml-[75px] mt-7 ">
                  Saller
                </h4>
              </div>

              <input
                type="text"
                placeholder="Name"
                className="w-full border-b-2 rounded-md px-3 py-2 mb-3 text-sm placeholder-gray-400"
              />
              <div className="flex mb-3">
                <span className="  p-2 rounded-l-md  border-b-2 text-sm">
                  +91
                </span>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border-b-2 rounded-r-md px-3 py-2 text-sm"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b-2 rounded-md px-3 py-2 mb-3 text-sm placeholder-gray-400"
              />

              <div className="flex flex-col   space-y-5">
                <div className="flex flex-col  space-y-5">
                  <h1 className="text-left ">Are you a Real state Agent?</h1>
                  <div className="flex space-x-3">
                    <button className="rounded-md w-[60px] h-[30px] border-2 border-[#166088]">
                      Yes
                    </button>
                    <button className="rounded-md w-[60px] h-[30px] border-2 border-[#166088]">
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* this is a check box */}
            <div className="space-y-5 ">
              <div className="flex items-center ">
                <input
                  type="checkbox"
                  id="option1"
                  className="h-4 w-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="option1" className="ml-2 text-sm text-gray-600">
                  I Agree To Be Contacted Via , SMS, Phone, Email Etc
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="option2"
                  className="h-4 w-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="option2" className="ml-2 text-sm text-gray-600">
                  I Agr Housing And SMS, Phone, Email Etc
                </label>
              </div>
            </div>
            <button className="w-full bg-[#166088] text-white py-2 mt-4 rounded-lg text-sm">
              Get Contact Details
            </button>
          </div>
        </div>
        <div className=" bg-[#E0EBEF] mt-4 p-4  rounded-lg   lg:w-[748px] w-[748px] absloute ">
          {/* this is a slider  */}
          {/* <Sliderpro /> */}

          <h3 className="font-bold text-lg mb-2 text-left  text-[#4E0F9E] p-2 mt-2 ">
            {" "}
            ★ Jaipur Property Deals
          </h3>

          <div className="mt-8 bg-white shadow-lg rounded-lg mx-4   ">
            <div className="grid grid-cols-3 gap-6 text-sm p-5  ">
              <div className="">
                <p className="font-semibold text-[#000000]">Apr, 2012</p>
                <p className="text-[#6F6E6E]">Launch Date</p>
                <h5 className="font-semibold mt-10 text-[#000000]">
                  940 - 2400 sq.ft.
                </h5>
                <h6 className="text-[#6F6E6E]">(Super Builtup Area)</h6>
              </div>
              <div>
                <p className="font-semibold text-[#000000]">Project Area</p>
                <p className="text-[#6F6E6E]">42 Acres (75% Open)</p>
                <h5 className="font-semibold mt-10 text-[#000000]">
                  ₹5.5 K/sq.ft
                </h5>
                <h6 className="text-[#6F6E6E]">Avg. Price</h6>
              </div>
              <div>
                <p className="font-semibold text-[#000000]">Project Size</p>
                <p className="text-[#6F6E6E]">650 Units</p>
                <h5 className="font-semibold mt-10 text-[#000000]">
                  2, 2.5, 3, 4 BHK Apartment
                </h5>
                <h6 className="text-[#6F6E6E]">Configurations</h6>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white shadow-xl rounded-lg p-6 mx-4  ">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <button className="bg-[#4E0F9E] text-white px-4 py-2 rounded-lg">
                  Share
                </button>
                <button className="bg-[#4E0F9E] text-white px-4 py-2 rounded-lg">
                  ★ Rate
                </button>
              </div>
              <div>
                <button className="bg-[#4E0F9E] text-white px-4 py-2 rounded-lg">
                  Ask For Details
                </button>
              </div>
            </div>
          </div>
          {/* this is a 4 img section */}
          <h1 className=" text-[#4E0F9E]  font-bold text-left ml-2  text-lg  p-3">
            🎞 Photos & Videos: Tour this project virtually
          </h1>
          <div className="flex mx-4">
            {/* Left Side - Small Images */}
            <div className="grid grid-cols-2 gap-2">
              <Image
                src="/images/luxries.png"
                alt="Small Image 1"
                className="rounded-lg object-cover h-[150px]"
                width={150}
                height={300} // Specify desired height
              />
              <Image
                src="/images/luxries.png"
                alt="Small Image 2"
                className="rounded-lg object-cover h-[150px]"
                width={150}
                height={300}
              />
              <Image
                src="/images/luxries.png"
                alt="Small Image 3"
                className="rounded-lg object-cover h-[150px] "
                width={150}
                height={300}
              />
              <Image
                src="/images/luxries.png"
                alt="Small Image 4"
                className="rounded-lg object-cover h-[150px]"
                width={150}
                height={300}
              />
            </div>

            {/* Right Side - Large Image */}
            <div className="w-3/4 pl-4">
              <Image
                src="/images/large.png" // Correct path for static assets in Next.js
                alt="Large Image"
                className="rounded-lg"
                width={1200} // Replace with the actual width of your image in pixels
                height={800} // Replace with the actual height of your image in pixels
                layout="responsive" // Makes the image responsive
                priority // Ensures this image loads quickly
              />
            </div>
          </div>
          {/* this is a last section */}
          <div className=" w-[700px] bg-[#F5F5F4] shadow-xl mt-5 rounded-lg p-6  mx-auto ">
            {/* Top Cards */}
            <div className="grid grid-cols-4 gap-4 mb-5">
              <div className="p-4 border rounded-md text-center shadow-md">
                <h3 className="font-semibold">Residential Plot sq .ft</h3>
                <p>(55 L - 96.25 L)</p>
              </div>

              <div className="p-4 border rounded-md text-center shadow-md">
                <h3 className="font-semibold">940 - 2400 Sq.Ft.</h3>

                <p>(55 L - 96.25 L)</p>
              </div>
              <div className="p-4 border rounded-md text-center shadow-md">
                <h3 className="font-semibold">940 - 2400 Sq.Ft.</h3>

                <p>(55 L - 96.25 L)</p>
              </div>
              <div className="p-4 border rounded-md text-center shadow-md">
                <h3 className="font-semibold">940 - 2400 Sq.Ft.</h3>

                <p>(55 L - 96.25 L)</p>
              </div>
            </div>

            {/* Image Section */}
            <div className="border rounded-md shadow-md overflow-hidden">
              <Image
                src="/images/map.png" // Ensure this path points to the `public` folder
                alt="Floor Plan"
                className="rounded-md" // Add rounded styling if necessary
                width={800} // Replace with the actual width of the image
                height={600} // Replace with the actual height of the image
                layout="responsive" // Makes the image responsive
                priority // Ensures this image loads quickly
              />
            </div>

            {/* Bottom Section */}
            <div
              className="flex  gap-5
             mt-5"
            >
              <p>
                {" "}
                ➡Saleable Area <br />
                (100 Sq.Yd.)
              </p>
              <p>
                {" "}
                ➡Saleable Area <br />
                (100 Sq.Yd.)
              </p>
              <p>
                {" "}
                ➡Saleable Area <br />
                (100 Sq.Yd.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

// import Image from "next/image";
// import React from "react";

// const Page: React.FC = () => {
//   return (
//     <div className="w-full mx-auto ">
//       {/* Header */}
//       <div className="bg-[#C0D6DF80] w-full">
//         <div className="w-full mx-auto">
//           <div className="flex flex-col items-center py-2 w-full">
//             <div className="flex flex-col sm:flex-row justify-between w-full sm:w-[1000px] mx-auto mt-20">
//               <div className="text-left">
//                 <h1 className="text-sm font-bold text-[#4E0F9E]">
//                   Jaipur Property Deals
//                 </h1>
//                 <h1 className="text-[#5A5B5C] font-normal text-xs mt-2">
//                   Mansarovar Extension, NH - 8 Jaipur, Barhmohanpura
//                 </h1>
//                 <div className="flex gap-4 mt-4">
//                   <button
//                     className="bg-[#4E0F9E] text-white px-4 font-semibold"
//                     aria-label="Rating Button"
//                   >
//                     ★ 4.3
//                   </button>
//                   <button
//                     className="bg-[#4E0F9E] text-white px-4 font-black"
//                     aria-label="Write a Review"
//                   >
//                     Write a Review
//                   </button>
//                 </div>
//               </div>

//               <div className="text-right mt-4">
//                 <h1 className="text-sm font-bold text-[#4E0F9E]">
//                   ₹55.0 L - 96.25 L / ₹55 K/sq.yd
//                 </h1>
//                 <h6 className="font-normal text-[9px]">
//                   EMI starts at ₹29.13 K
//                 </h6>
//                 <div className="flex justify-end mt-2 space-x-2">
//                   <h6 className="font-normal text-[8px]">
//                     Price excludes maintenance, floor rise cost, etc.....
//                   </h6>
//                   <span className="font-semibold text-[8px] text-[#5A5B5C]">
//                     Read More
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Property Details */}
//           <div className="w-full sm:w-[1038px] mx-auto p-4">
//             <div className="rounded-lg overflow-hidden">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
//                 <Image
//                   src="/images/luxiry.png"
//                   alt="Main Property View"
//                   width={600}
//                   height={400}
//                   className="rounded-lg shadow-md object-cover w-full h-[380px]"
//                 />
//                 <div className="grid gap-2">
//                   <Image
//                     src="/images/luxiry.png"
//                     alt="Small Property View 1"
//                     width={600}
//                     height={100}
//                     className="rounded-lg w-full h-[186px]"
//                   />
//                   <Image
//                     src="/images/luxiry.png"
//                     alt="Small Property View 2"
//                     width={600}
//                     height={100}
//                     className="rounded-lg w-full h-[186px]"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-0 text-center text-sm bg-white shadow rounded">
//               <div className="space-y-3">
//                 <p className="font-bold text-lg text-[#5A5B5C]">
//                   Configurations
//                 </p>
//                 <p className="text-[#858585]">2, 2.5, 3, 4 BHK Apartments</p>
//               </div>
//               <div className="space-y-5">
//                 <p className="font-bold text-lg text-[#5A5B5C]">Avg. Price</p>
//                 <p className="text-[#858585]">₹5.5 K/sq.ft</p>
//               </div>
//               <div className="space-y-5">
//                 <p className="font-bold text-lg text-[#5A5B5C]">
//                   Super Built-up Area
//                 </p>
//                 <p className="text-[#858585]">940 - 2400 sq.ft</p>
//               </div>
//               <div className="space-y-5">
//                 <p className="font-bold text-lg text-[#5A5B5C]">Possession</p>
//                 <p className="text-[#858585]">Ready to Move</p>
//               </div>
//             </div>
//           </div>

//           <div className="w-full py-4 flex justify-around px-6 bg-[#C0D6DF]">
//             <ul className="flex flex-wrap space-x-10 text-[#166088]">
//               <li className="border-r-2 border-[#166088] pr-4">
//                 Overview/Home
//               </li>
//               <li className="border-r-2 border-[#166088] pr-4">
//                 Around This Project
//               </li>
//               <li className="border-r-2 border-[#166088] pr-4">
//                 More About Project
//               </li>
//               <li className="border-r-2 border-[#166088] pr-4">
//                 About Project
//               </li>
//               <li className="border-r-2 border-[#166088] pr-4">Floor Plan</li>
//               <li className="border-r-2 border-[#166088] pr-4">Tour This</li>
//               <li className="pr-4">Price Trends</li>{" "}
//               {/* No border on the last item */}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Seller Card */}
//       <div className="relative flex justify-end">
//         <div className="bg-[#E6F7FF] rounded-lg shadow-lg w-full sm:w-72 mt-10 p-4">
//           <div className="bg-[#FFE752] text-center py-2 rounded-lg mb-4">
//             ⚡ Nice Choice. Let's Connect With The Seller
//           </div>
//           <div className="bg-[#C3E7F5] rounded-lg p-4 shadow-sm">
//             <p className="font-bold text-[#166088]">Contact Seller</p>
//             <div className="flex items-center mb-4">
//               <img
//                 src="/images/luxiry.png"
//                 alt="Seller"
//                 className="rounded-lg w-12 h-12"
//               />
//               <p className="text-gray-500 text-xs ml-2">
//                 Synergy Realty <br /> Seller
//               </p>
//             </div>

//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full border rounded-md px-3 py-2 mb-3 text-sm"
//             />
//             <div className="flex mb-3">
//               <span className="bg-gray-100 px-3 rounded-l-md border text-sm">
//                 +91
//               </span>
//               <input
//                 type="tel"
//                 placeholder="Phone"
//                 className="w-full border rounded-r-md px-3 py-2 text-sm"
//               />
//             </div>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full border rounded-md px-3 py-2 mb-3 text-sm"
//             />
//             <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
//               Get Contact Details
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
