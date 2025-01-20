// "use client"
import { citiess } from "@/app/data/data"; // Make sure this path is correct
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import HighlightCard from "./HighlightCard";

// Responsive configuration
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 }, // Desktop screens
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 }, // Tablet screens (md)
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 }, // Mobile screens (sm)
    items: 1,
    slidesToSlide: 1,
  },
};

// Custom Left Arrow
const CustomLeftArrow = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="absolute left-2 w-8 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full z-50 shadow-md"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      ←
    </button>
  );
};

// Custom Right Arrow
const CustomRightArrow = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="absolute right-2 w-8 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full z-50 shadow-md"
      onClick={onClick}
      aria-label="Next Slide"
    >
      →
    </button>
  );
};

// Highlight Slider Component
const Highlightslider = () => {
  return (
    <Carousel
      arrows
      autoPlay
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
      showDots={false}
      customLeftArrow={<CustomLeftArrow onClick={() => {}} />}
      customRightArrow={<CustomRightArrow onClick={() => {}} />}
      dotListClass="custom-dot-list-style"
      containerClass="space-x-16" // Add spacing between cards
      itemClass="px-4" // Add padding around individual cards
    >
      {citiess.map((city) => (
        <div key={city.id}>
          <HighlightCard city={city} />
        </div>
      ))}
    </Carousel>
  );
};

export default Highlightslider;
