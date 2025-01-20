import React from "react";
import SectionHeading from "../../SectionHeading";
import ReviewSlide from "./ReviewSlide";
// import ReviewSlide from "./ReviewSlide";

const Review = () => {
  return (
    <div className=" pt-8 bg-gray-100">
      <div className="lg:w-[1038px] mx-auto">
        <SectionHeading heading="Emerging localities" />
        <ReviewSlide />
      </div>
    </div>
  );
};

export default Review;
