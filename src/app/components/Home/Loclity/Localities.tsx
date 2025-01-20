import React from "react";
import SectionHeading from "../../SectionHeading";

import LocalitiesSlide from "./LocalitiesSlide";
// import ReviewSlide from "./ReviewSlide";

const Localities= () => {
  return (
    <div className="pt-8  bg-gray-100 ">
      <div className="lg:w-[1038px] mx-auto">
        <SectionHeading heading="Localities you might like" />
        <LocalitiesSlide/>
      </div>
    </div>
  );
};

export default Localities;
