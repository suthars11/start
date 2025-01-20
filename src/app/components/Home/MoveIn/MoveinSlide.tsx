"use client";

import { user } from "@/app/data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import CityCard from "./CityCard";
import MoveinCard from "./MoveinCard";

// Define responsive breakpoints for the carousel
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 4,
        slidesToSlide: 1, // optional
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 4,
        slidesToSlide: 1, // optional
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional
    },
};

// Define type for custom arrow props
type CustomArrowProps = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
};

// Custom left arrow component
const CustomLeftArrow = ({ onClick }: CustomArrowProps) => {
    return (
        <button
            className="absolute -left-6 w-8 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full z-50"
            onClick={onClick}
            aria-label="Previous Slide"
        >
            ←
        </button>
    );
};

// Custom right arrow component
const CustomRightArrow = ({ onClick }: CustomArrowProps) => {
    return (
        <button
            className="absolute right-0 mr-1 w-8 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full z-50"
            onClick={onClick}
            aria-label="Next Slide"
        >
            →
        </button>
    );
};

// Main CitySlider component
const MoveinSlide = () => {
    return (
        <Carousel
            arrows={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            infinite
            responsive={responsive}
            showDots={false}
            customLeftArrow={<CustomLeftArrow onClick={() => { }} />}
            customRightArrow={<CustomRightArrow onClick={() => { }} />}
            dotListClass="custom-dot-list-style"
            containerClass="space-x-6" // Add spacing between cards
            itemClass="px-4" // Add padding around individual cards
        >
            {user.map((city) => (
                <div key={city.id}>
                    <MoveinCard city={city} />
                </div>
            ))}
        </Carousel>
    );
};

export default MoveinSlide;
