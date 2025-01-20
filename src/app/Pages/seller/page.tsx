// "use client";
// import React, { useState } from "react";
// import Image from "next/image"; // For optimized images

// const Sellar = () => {
//   const [formType, setFormType] = useState("owner"); // State to manage form type

//   const handleFormSwitch = (type: any) => {
//     setFormType(type);
//   };

//   return (
//     <div className="bg-white shadow-2xl min-h-screen">
//       {/* Top Section */}
//       <div className="bg-[#4A6FA5] text-white py-10 rounded-bl-3xl rounded-br-3xl">
//         <div className="container mx-auto flex flex-col md:flex-row items-center">
//           {/* Left Side Content */}
//           <div className="w-full md:w-1/2 text-center md:text-left rounded-lg -mt-28 ml-10 flex flex-col">
//             <h1 className="font-bold underline text-lg mb-4">
//               Upload your property in 3 simple steps
//             </h1>
//             <ul className="list-disc list-inside space-y-10 text-lg">
//               <li>Add Basic Details</li>
//               <li>Add Property Details</li>
//               <li>Add Photos</li>
//             </ul>
//           </div>

//           {/* Right Side Image */}
//           <div className="hidden md:block -ml-52 lg:-ml-[500px]">
//             <Image
//               src="/images/seller/phone.png" // Adjust path for Next.js
//               alt="Upload Property Illustration"
//               width={300}
//               height={300}
//               className="w-3/4 h-[300px] object-cover mx-auto md:w-full"
//             />
//           </div>

//           {/* Right Side Form */}
//           <div className="">
//             <div className="mt-10 w-[310px] h-[448px] lg:ml-[200px] bg-white p-6 rounded-lg shadow-lg">
//               <div className="flex relative -top-6 justify-start -ml-6">
//                 <button
//                   type="button"
//                   onClick={() => handleFormSwitch("owner")}
//                   className={`px-1 custom-class w-28 h-8 py-2  text-white font-semibold rounded-md ${
//                     formType === "owner"
//                       ? "bg-custom-purple"
//                       : "my-custom-class"
//                   }`}
//                 >
//                   Owner
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => handleFormSwitch("builder")}
//                   className={`px-4 custom-class py-2 w-28 h-8  border text-white rounded-md ${
//                     formType === "builder"
//                       ? "bg-custom-purple"
//                       : "my-custom-class"
//                   }`}
//                 >
//                   Broker/Builder
//                 </button>
//               </div>
//               {formType === "owner" ? <OwnerForm /> : <BuilderForm />}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* How It Works Section */}
//       <div className="container mx-auto mt-16 px-4">
//         <h2 className="text-center text-2xl font-bold text-purple-700 underline mb-8">
//           How it works
//         </h2>
//         <div className="space-y-6">
//           <div>
//             <h3 className="text-xl font-semibold">
//               Upload your property in 3 quick steps
//             </h3>
//             <p className="text-gray-700 text-sm">
//               Tell us a few basic details about your property, add pricing, &
//               upload photos.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold">
//               Property reaches to 10 lacs+ tenants & buyers
//             </h3>
//             <p className="text-gray-700 text-sm">
//               As the largest property search website of India, your property
//               will reach maximum
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold">Start getting enquiries</h3>
//             <p className="text-gray-700 text-sm">
//               You will start getting enquiries from interested buyers/tenants as
//               soon as your
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* FAQ Section */}
//       <div className="container mx-auto mt-16 px-4">
//         <h2 className="text-center text-2xl font-bold underline text-[#4E0F9E] mb-8">
//           Frequently Asked Questions
//         </h2>
//         <div className="space-y-4">
//           {Array(6)
//             .fill("")
//             .map((_, index) => (
//               <div key={index} className="p-4 rounded-md cursor-pointer">
//                 <p className="font-semibold mt-2">
//                   How to post a property on Jaipur property.com?
//                 </p>

//                 <div className=" mt-6 w-96 h-px bg-black"></div>
//               </div>
//             ))}
//         </div>
//       </div>
//       {/* Testimonials Section */}
//       <div className="container mx-auto mt-16 px-4">
//         <h2 className="text-center text-2xl font-bold text-[#4E0F9E] mb-8 underline">
//           Testimonials
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {Array(3)
//             .fill("")
//             .map((_, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 rounded-lg shadow-lg text-center border"
//               >
//                 <div className="space-y-5">
//                   <h2 className="text-left">December 3, 2025</h2>
//                   <h3 className="text-left">🌟🌟🌟🌟🌟</h3>
//                 </div>
//                 <p className="text-sm text-[#4E0F9E] mt-5">
//                   "I had a great experience using this platform. Highly
//                   recommended!"
//                 </p>
//                 <div className="flex items-center space-x-4">
//                   {/* Image */}
//                   <Image
//                     src="/images/seller/user.png" // Adjust path for Next.js
//                     alt="User"
//                     width={40}
//                     height={40}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <div className="text-left">
//                     <h3 className="mt-5 font-bold flex underline">
//                       Nitesh Sharma
//                     </h3>
//                     <span className="text-sm text-gray-500">Jaipur User</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Form for Owner
// const OwnerForm = () => {
//   return (
//     <>
//       <h2 className="text-lg font-bold text-left text-black mb-4">
//         Let's get you started with us
//       </h2>
//       <form className="space-y-4">
//         {/* Property Type */}
//         <div>
//           <label className="block text-left text-black mb-2">
//             Property Type
//           </label>
//           <div className="flex space-x-4">
//             <button
//               type="button"
//               className="px-4 py-2 my-custom-class text-black font-semibold rounded-md"
//             >
//               Residential
//             </button>
//             <button
//               type="button"
//               className="px-4 py-2 my-custom-class border text-black rounded-md"
//             >
//               Commercial
//             </button>
//           </div>
//         </div>

//         <div>
//           <h3 className="block text-left text-sm font-medium mb-2 text-black">
//             Looking to
//           </h3>
//           <div className="flex space-x-4">
//             <button
//               type="button"
//               className="px-4 py-2 border text-black rounded-md"
//             >
//               Rent
//             </button>
//             <button
//               type="button"
//               className="px-4 py-2 border text-black rounded-md"
//             >
//               Sell
//             </button>
//             <button
//               type="button"
//               className="px-4 py-2 border text-black rounded-md"
//             >
//               Other
//             </button>
//           </div>
//         </div>

//         {/* Phone Number */}
//         <div className="flex items-center">
//           {/* Prefix +91 */}
//           <span className="text-[#4E0F9E] font-semibold">+91</span>
//           {/* Input Field */}
//           <input
//             type="text"
//             placeholder="Enter Phone Number"
//             className="ml-2 w-full border-b-2 border-[#4E0F9E] focus:outline-none focus:border-[#4E0F9E] py-2 text-black"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-[#E1CEFA] text-[#4E0F9E] py-2 rounded-md underline font-semibold"
//         >
//           Proceed
//         </button>
//       </form>
//     </>
//   );
// };

// // Form for Builder
// const BuilderForm = () => {
//   return (
//     <>
//       <h2 className="text-lg font-bold text-black text-left mb-4">
//         Let's get you started with us
//       </h2>
//       <form className="space-y-4">
//         {/* Phone Number */}
//         <div className="flex items-center">
//           {/* Prefix +91 */}
//           <span className="text-[#4E0F9E] font-semibold">+91</span>
//           {/* Input Field */}
//           <input
//             type="text"
//             placeholder="Enter Phone Number"
//             className="ml-2 w-full border-b-2 border-[#4E0F9E] focus:outline-none focus:border-[#4E0F9E] py-2 text-black"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-[#E1CEFA] text-[#4E0F9E] py-2 rounded-md underline font-semibold"
//         >
//           Continue
//         </button>
//       </form>
//     </>
//   );
// };

// export default Sellar;

"use client";
import React, { useState } from "react";
import Image from "next/image"; // For optimized images

const Sellar = () => {
  const [formType, setFormType] = useState("owner"); // State to manage form type

  const handleFormSwitch = (type: any) => {
    setFormType(type);
  };

  return (
    <div className="bg-white shadow-2xl min-h-screen">
      {/* Top Section */}
      <div className="bg-[#4A6FA5] text-white py-10 rounded-bl-3xl rounded-br-3xl">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left rounded-lg -mt-28 lg:ml-10 flex flex-col">
            <h1 className="font-bold underline text-lg mt-8">
              Upload your property in 3 simple steps
            </h1>
            <ul className="list-disc mt-28 list-inside md:space-y-6 text-lg">
              <li>Add Basic Details</li>
              <li>Add Property Details</li>
              <li>Add Photos</li>
            </ul>
          </div>

          {/* Right Side Image */}
          <div className=" sm:block lg:block sm:-ml-52 lg:-ml-[500px]">
            <Image
              src="/images/seller/phone.png" // Adjust path for Next.js
              alt="Upload Property Illustration"
              width={300}
              height={300}
              className="w-3/4 h-[300px] object-cover mx-auto lg:w-full"
            />
          </div>

          {/* Right Side Form */}
          <div className="lg:ml-60 mt-10 w-full lg:w-[310px] bg-white p-6 rounded-lg shadow-lg">
            <div className="flex relative -ml-6 -mt-6">
              <button
                type="button"
                onClick={() => handleFormSwitch("owner")}
                className={`px-1 w-28 h-8 py-2 text-white font-semibold rounded-md ${
                  formType === "owner" ? "bg-custom-purple" : "my-custom-class"
                }`}
              >
                Owner
              </button>
              <button
                type="button"
                onClick={() => handleFormSwitch("builder")}
                className={`px-4 py-2 w-28 h-8 border text-white rounded-md ${
                  formType === "builder"
                    ? "bg-custom-purple"
                    : "my-custom-class"
                }`}
              >
                Broker/Builder
              </button>
            </div>
            {formType === "owner" ? <OwnerForm /> : <BuilderForm />}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto mt-16 px-4">
        <h2 className="text-center text-2xl font-bold text-purple-700 underline mb-8">
          How it works
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">
              Upload your property in 3 quick steps
            </h3>
            <p className="text-gray-700 text-sm">
              Tell us a few basic details about your property, add pricing, &
              upload photos.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Property reaches to 10 lacs+ tenants & buyers
            </h3>
            <p className="text-gray-700 text-sm">
              As the largest property search website of India, your property
              will reach maximum
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Start getting enquiries</h3>
            <p className="text-gray-700 text-sm">
              You will start getting enquiries from interested buyers/tenants as
              soon as your
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto mt-16 px-4">
        <h2 className="text-center text-2xl font-bold underline text-[#4E0F9E] mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <div key={index} className="p-4 rounded-md cursor-pointer">
                <p className="font-semibold mt-2">
                  How to post a property on Jaipur property.com?
                </p>

                <div className=" mt-6 w-full lg:w-96 h-px bg-black"></div>
              </div>
            ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto mt-16 px-4">
        <h2 className="text-center text-2xl font-bold text-[#4E0F9E] mb-8 underline">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array(3)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center border"
              >
                <div className="space-y-5">
                  <h2 className="text-left">December 3, 2025</h2>
                  <h3 className="text-left">🌟🌟🌟🌟🌟</h3>
                </div>
                <p className="text-sm text-[#4E0F9E] mt-5">
                  "I had a great experience using this platform. Highly
                  recommended!"
                </p>
                <div className="flex items-center space-x-4">
                  {/* Image */}
                  <Image
                    src="/images/seller/user.png" // Adjust path for Next.js
                    alt="User"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h3 className="mt-5 font-bold flex underline">
                      Nitesh Sharma
                    </h3>
                    <span className="text-sm text-gray-500">Jaipur User</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

// Form for Owner
const OwnerForm = () => {
  return (
    <>
      <h2 className="text-lg font-bold text-left text-black mb-4">
        Let's get you started with us
      </h2>
      <form className="space-y-4">
        {/* Property Type */}
        <div>
          <label className="block text-left text-black mb-2">
            Property Type
          </label>
          <div className="flex space-x-4">
            <button
              type="button"
              className="px-4 py-2 my-custom-class text-black font-semibold rounded-md"
            >
              Residential
            </button>
            <button
              type="button"
              className="px-4 py-2 my-custom-class border text-black rounded-md"
            >
              Commercial
            </button>
          </div>
        </div>

        <div>
          <h3 className="block text-left text-sm font-medium mb-2 text-black">
            Looking to
          </h3>
          <div className="flex space-x-4">
            <button
              type="button"
              className="px-4 py-2 border text-black rounded-md"
            >
              Rent
            </button>
            <button
              type="button"
              className="px-4 py-2 border text-black rounded-md"
            >
              Sell
            </button>
            <button
              type="button"
              className="px-4 py-2 border text-black rounded-md"
            >
              Other
            </button>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center">
          {/* Prefix +91 */}
          <span className="text-[#4E0F9E] font-semibold">+91</span>
          {/* Input Field */}
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="ml-2 w-full border-b-2 border-[#4E0F9E] focus:outline-none focus:border-[#4E0F9E] py-2 text-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#E1CEFA] text-[#4E0F9E] py-2 rounded-md underline font-semibold"
        >
          Proceed
        </button>
      </form>
    </>
  );
};

// Form for Builder
const BuilderForm = () => {
  return (
    <>
      <h2 className="text-lg font-bold text-black text-left mb-4">
        Let's get you started with us
      </h2>
      <form className="space-y-4">
        {/* Phone Number */}
        <div className="flex items-center">
          {/* Prefix +91 */}
          <span className="text-[#4E0F9E] font-semibold">+91</span>
          {/* Input Field */}
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="ml-2 w-full border-b-2 border-[#4E0F9E] focus:outline-none focus:border-[#4E0F9E] py-2 text-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#E1CEFA] text-[#4E0F9E] py-2 rounded-md underline font-semibold"
        >
          Continue
        </button>
      </form>
    </>
  );
};

export default Sellar;
