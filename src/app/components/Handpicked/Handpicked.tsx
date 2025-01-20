import Image from "next/image";

const Handpicked = () => {
  return (
    <div className="pt-16  bg-gray-100 relative  -z-50">
      <div className="lg:w-[1038px] mx-auto h-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-6 pt-16">
          {/* Left Section with Heading */}
          <div className="text-center md:text-left  md:mb-0 pt-16">
            <h1 className="text-2xl font-bold text-black">
              Handpicked Projects
            </h1>
            <h6 className="text-gray-500 text-sm">
              Explore top living options with us
            </h6>
          </div>

          {/* Right Section with Images in a Row */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 text-black ml-14">
            {/* First Card */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/image.png"
                alt="Handpicked Project"
                width={160}
                height={90}
                layout="intrinsic"
                className="rounded-lg object-cover h-10 w-24"
              />
              <h6 className="text-sm mt-2 text-center">Vardhaman Express</h6>
            </div>

            {/* Second Card */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/image.png"
                alt="Handpicked Project"
                width={160}
                height={90}
                layout="intrinsic"
                className="rounded-lg object-cover h-10 w-24"
              />
              <h6 className="text-sm mt-2 text-center">Vardhaman Express</h6>
            </div>

            {/* Third Card */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/image.png"
                alt="Handpicked Project"
                width={160}
                height={90}
                layout="intrinsic"
                className="rounded-lg object-cover h-10 w-24"
              />
              <h6 className="text-sm mt-2 text-center">Vardhaman Express</h6>
            </div>
          </div>
        </div>

        {/* Flex Container for Both Cards */}
        <div className="flex flex-col lg:flex-row gap-6 items-start xl:">
          {/* Big Card Section */}
          <div className="flex flex-wrap lg:flex-nowrap w-full lg:w-[70%] items-center gradient p-6 rounded-xl shadow-lg text-white space-y-6 lg:space-y-0 h-[270px]">
            {/* Left Card (60% Width) */}
            <div className="flex-1 lg:w-[50%] space-y-4 text-center lg:text-left min-h-[50px]">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <Image
                  src="/images/bigcardimg.png"
                  alt="Vardhaman Logo"
                  width={64} // Specify width
                  height={64} // Specify height
                  className="flex-shrink-0 object-contain" // Add "object-contain" for aspect ratio
                />
                <div>
                  <h1 className="text-xl font-bold text-[#3E3D3D]">
                    Vardhaman Group
                  </h1>
                  <a
                    href="#"
                    className="text-xs py-2 underline font-light text-[#166088]"
                  >
                    View Projects
                  </a>
                </div>
              </div>
              <div className="">
                <h2 className="text-xl 
                font-semibold text-[#3E3D3D]">Vardhaman Express</h2>

                <p className="text-sm font-light text-[#3E3D3D]">Mansarovar, Jaipur</p>
                <p className="text-base font-semibold text-[#3E3D3D]">₹ 1.15 Cr - 3.34 Cr</p>
                <p className="text-xs font-light text-[#3E3D3D]">3, 4, 5 BHK Apartments</p>
                <button className=" w-52 h-7 mt-4 px-6   bg-[#4E0F9E] text-white rounded-lg max-w-full justify-center place-content-betweenitems-center">
                  Contact
                </button>
              </div>
            </div>

            {/* Middle Image Section (20% Width) */}
            <div className="flex-2 sm:flex-4 ">
                     {/* Using Next.js Image component */}
                     <Image
                       src="/images/imag2.png" // Path relative to the public directory
                       alt="Property"
                       className="rounded-lg object-cover lg:flex-2 "
                       width={400} // Set the width directly
                       height={300} // Set the height directly
                     />
                   </div>

          </div>




          {/* right section */}
          <div className="linear-gradient-class flex-1 lg:w-[50%] space-y-4 text-center lg:text-left min-h-[270px] "> {/* Add background and set min-height */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 ml-6 mt-8">
              <Image
                src="/images/bigcardimg.png"
                alt="Vardhaman Logo"
                width={64} // Specify width
                height={64} // Specify height
                className="flex-shrink-0 object-contain" // Add "object-contain" for aspect ratio
              />

              <div className="mt-2">
                <h1 className="text-xl font-bold text-[#3E3D3D]">
                  Vardhaman Group
                </h1>
                <a
                  href="#"
                  className="text-xs py-2 underline font-light text-[#166088]"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="ml-6">
              <h2 className="text-xl font-semibold text-[#3E3D3D]">Vardhaman Express</h2>

              <p className="text-sm font-light text-[#3E3D3D]">Mansarovar, Jaipur</p>
              <p className="text-base font-semibold text-[#3E3D3D]">₹ 1.15 Cr - 3.34 Cr</p>
              <p className="text-xs font-light text-[#3E3D3D]">3, 4, 5 BHK Apartments</p>
              <button className="w-52 h-7 mt-4 px-6 bg-[#4E0F9E] text-white rounded-lg max-w-full justify-center flex  self-center"> {/* Fixed typo in button class */}
                Contact
              </button>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Handpicked;
