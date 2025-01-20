import React from "react";
import Image from "next/image";

type Props = {
  review: {
    id: number;
    name: string;
    profession: string;
    userImage: string;
    review: string;
    rating: string;
  };
};

const LocalitiesCard = ({ review }: Props) => {
  return (
    <div className="bg-white rounded-lg m-3 p-2 relative border border-blue-200 shadow-md">
      {/* User Info */}
      <div className="flex items-center space-x-8">
        {/* User Image */}
        <div className="relative w-9 h-9 flex-shrink-0 ml-4 ">
          <Image
            src={review.userImage}
            alt={review.name}
            width={48} // Set a fixed width (you can adjust it)
            height={48} // Set a fixed height (you can adjust it)
            className="rounded-sm object-cover"
          />
        </div>

        {/* User Name and Rating */}
        <div>
          <div className="flex items-center space-x-4 flex-shrin">
            <h1 className="font-semibold text-[#000000]">{review.name}</h1>
            <span className="text-black text-xs  font-semibold bg-green-300  px-2 rounded-md">
              {review.rating}
            </span>
          </div>
          <h4 className="text-xs text-gray-500 mt-1">{review.review}</h4>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gray-300 opacity-75 mt-4 "></div>

      {/* Profession */}
      <p className="font-medium text-xs text-[rgba(22,96,136,1)] text-center">
        {review.profession}
      </p>
    </div>
  );
};

export default LocalitiesCard;
