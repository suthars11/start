import React from "react";
import Image from "next/image"; // Import the Next.js Image component

// Define the type for the listing data
interface Listing {
  imgSrc: string;
  title: string;
  description: string;
}

const Card: React.FC = () => {
  // List of property listings
  const listings: Listing[] = [
    {
      imgSrc: "/images/listing1.png", // Ensure paths are correct in the public folder
      title: "Shubhashish Prak...",
      description: "3, 4, 5 BHK Apartment in Mansarovar, Jaipur",
    },
    {
      imgSrc: "/images/listing1.png",
      title: "Shubhashish Prak...",
      description: "3, 4, 5 BHK Apartment in Mansarovar, Jaipur",
    },
    {
      imgSrc: "/images/listing1.png",
      title: "Shubhashish Prak...",
      description: "3, 4, 5 BHK Apartment in Mansarovar, Jaipur",
    },
    {
      imgSrc: "/images/listing1.png",
      title: "Shubhashish Prak...",
      description: "3, 4, 5 BHK Apartment in Mansarovar, Jaipur",
    },
  ];

  return (
    <div className="w-[785px] h-[188px] bg-gray-200 rounded-lg shadow-lg p-2 ml-96 mt-10">
      <h2 className="text-xs font-bold text-[#4E0F9E] mb-2">
        Projects in Mansarovar Extension, Jaipur
      </h2>
      <div className="flex justify-center space-x-6">
        {listings.map((listing, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            {/* Use the Next.js Image component */}
            <Image
              src={listing.imgSrc}
              alt={listing.title}
              width={80} // Define width
              height={80} // Define height
              className="rounded-full object-cover mb-4"
            />
            <h3 className="text-[11px] font-bold text-[#5A5B5C]">
              {listing.title}
            </h3>
            <p className="text-[7px] text-[#858585] font-normal">
              {listing.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
