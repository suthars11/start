import Image from "next/image";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="relative  w-full sm:h-[960px] md:h-[200px] lg:h-[480px]">
        <Image
          src="/images/aboutimg.png" // Updated image path
          alt="About Us Header"
          className="w-full h-full object-cover"
          width={1200} // Specify the width
          height={960} // Specify the height
          layout="responsive" // Ensures the image is responsive
        />
      </div>

      {/* Welcome Section */}
      <section className="py-12 max-w-6xl  px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#166088] mb-6">
              Welcome to
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8">
              Welcome to [Your Company Name], where we specialize in helping you
              find youjsd hjjh jhjh hsajhr dream property. With years of experience in the real
              estate journey
            </p>
          </div>
          <div className=" ml-28  ">
            <div className="-z-10 mx-auto">
              <Image
                src="/images/handseck.png"
                alt="Handshake"
                width={200} // Specify width
                height={200} // Specify height
                className="rounded-lg shadow-md  h-[200px] ml-20 "
              />
            </div>
            <div className="-mt-12 px-2">
              <Image
                src="/images/handseek1.png"
                alt="Property"
                width={200} // Specify width
                height={200} // Specify height
                className="rounded-lg shadow-md h-[200px] -ml-20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Post Your Property Section1 */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center">
          {/* Image Section */}
          <div className="w-full sm:w-1/2">
            <Image
              src="/images/home.png" // Updated image path
              alt="Key with House"
              width={600} // Specify width
              height={400} // Specify height
              className="rounded-lg shadow-md mb-8 sm:mb-0 sm:mr-8 w-full"
            />
          </div>

          {/* Text Section */}
          <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left mx-6">
            <h2 className="text-4xl font-bold text-[#166088] mb-4 sm:mb-8">
              Post your property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 sm:mb-8">
              To be the go-to real estate partner for individuals, families, and
              businesses, delivering unparalleled service and valuable property
              opportunities that create lasting impact.
            </p>
          </div>
        </div>
      </section>



      {/* Testimonials Section 1 */}
      <section className="max-w-6xl mx-auto bg-[rgba(217,217,217,1)] w-full sm:w-[90%] md:w-[1040px] h-auto sm:h-auto">
        <div className="flex flex-col sm:flex-row items-stretch">
          {/* Image Section */}
          <div className="w-full sm:w-[50%]">
            <Image
              src="/images/office.png" // Updated image path
              alt="Nitin Sharma"
              width={526} // Specify width
              height={351} // Specify height
              layout="responsive"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text Section */}
          <div className="w-full sm:w-[50%] bg-[#D9D9D9] flex items-center justify-center px-6 py-4">
            <div className="px-4 py-2">
              <p className="text-white italic mb-4">
                <span className="text-7xl text-blue-400">❝</span>
                Welcome to [Your Company Name], where we specialize in helping you
                find your dream property. With years of experience in the real
                estate industry, we have built a reputation for providing
                exceptional service, expert advice, and a comprehensive range of
                properties to suit every need. Our mission is simple: to make your
                property journey seamless.
              </p>
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/profileicon.png"
                  alt="Nitin Sharma"
                  width={38} // Set the width in pixels
                  height={28} // Set the height in pixels
                  className="object-cover" // Remove unnecessary inline height/width classes
                  layout="intrinsic" // Use 'intrinsic' for natural aspect ratio
                />
                <span className="font-bold">Nitin Sharma</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section 2 */}
      <section className="max-w-6xl mx-auto mt-6 mb-10 bg-[rgba(217,217,217,1)] w-full sm:w-[90%] md:w-[1040px] h-auto sm:h-auto">
        <div className="flex flex-col sm:flex-row items-stretch">
          {/* Text Section First */}
          <div className="w-full sm:w-[50%] bg-[#D9D9D9] flex items-center justify-center px-6 py-4">
            <div className="px-4 py-2">
              <p className="text-white italic mb-4">
                <span className="text-7xl text-blue-400">❝</span>
                Welcome to [Your Company Name], where we specialize in helping you
                find your dream property. With years of experience in the real
                estate industry, we have built a reputation for providing
                exceptional service, expert advice, and a comprehensive range of
                properties to suit every need. Our mission is simple: to make your
                property journey seamless.
              </p>
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/profileicon.png"
                  alt="Nitin Sharma"
                  width={38} // Set the width in pixels
                  height={28} // Set the height in pixels
                  className="object-cover" // Remove unnecessary inline height/width classes
                  layout="intrinsic" // Use 'intrinsic' for natural aspect ratio
                />
                <span className="font-bold">Nitin Sharma</span>
              </div>
            </div>
          </div>

          {/* Image Section Second */}
          <div className="w-full sm:w-[50%]">
            <Image
              src="/images/office.png" // Updated image path
              alt="Nitin Sharma"
              width={526} // Specify width
              height={351} // Specify height
              className="object-cover w-full h-full"
              layout="responsive"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
