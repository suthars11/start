import Image from "next/image"; // Import the Image component

const Listcard = () => {
  return (
    <div className="bg-gray-100 relative">

      <div className=" w-[1038px] mx-auto ">
        <div className="flex flex-col lg:flex-row bg-[#FFF5E4] rounded-lg shadow-md p-6 items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10">
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-[#166088] mb-2">
              Sell Your Property
            </h2>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Register to post your <br /> property for{" "}
              <span className="text-white bg-[#4E0F9E] text-lg rounded">
                Free
              </span>
            </h1>
            <p className="text-[#166088] mb-6">
              Post your residential / commercial property
            </p>
            <div className="flex space-x-6 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800">10L+</h3>
                <p className="text-sm text-gray-600">Property Listings</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">45L+</h3>
                <p className="text-sm text-gray-600">Visitors Every Month</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">2L+</h3>
                <p className="text-sm text-gray-600">Owners Advertising</p>
              </div>
            </div>
            <div className="flex justify-center items-center sm:justify-start">
              <button className="bg-[rgba(78,15,158,1)] text-white py-2 px-6 rounded-lg hover:bg-purple-800 transition">
                Post your property for FREE
              </button>
            </div>
          </div>
          {/* Right Section */}
          <div className="flex-1 sm:flex-4">
            {/* Using Next.js Image component */}
            <Image
              src="/images/men.png" // Path relative to the public directory
              alt="Property"
              className="rounded-lg object-cover sm:flex-2"
              width={800} // Set the width directly
              height={300} // Set the height directly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listcard;
