import React from "react";
import Image from "next/image";

type Props = {
  type: {
    id: number;
    icon: string;
    type: string;
    number: string;
  };
};

const AppartmentTypeCard = ({ type }: Props) => {
  return (
    <div className="flex items-center  hover:scale-110 transition-all duration-300  ">
      {/* Image Section */}
      <div className="relative w-24 h-28 mr-4 ">
        <Image
          src={type.icon}
          alt={type.type}
          width={500} // Set width explicitly
          height={300} // Set height explicitly
          className="rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div>
        <h1 className="text-sm font-bold">{type.type}</h1>
        <p className="mt-1 text-xs text-gray-700">{type.number}</p>
      </div>
    </div>
  );
};

export default AppartmentTypeCard;
