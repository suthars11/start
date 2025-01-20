"use client";
import { userReviewDatas } from "@/app/data/data";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LocalitiesCard from "./LocalitiesCard";

// Define responsive breakpoints for the carousel
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 4,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 4,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

// Custom arrow components
const CustomLeftArrow = ({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <button
            className="absolute left-1 w-8 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full"
            onClick={onClick}
            aria-label="Previous Slide"
        >
            ←
        </button>
    );
};

const CustomRightArrow = ({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <button
            className="absolute right-1 w-8 top-1/2 transform -translate-y-1/2 bg-white text-black p-1 rounded-full shadow-lg"
            onClick={onClick}
            aria-label="Next Slide"
        >
            →
        </button>
    );
};

const LocalitiesSlide = () => {
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
            itemClass="px-0" // Add padding between items
            containerClass="pb-0" // Optional: Add padding for the whole carousel container
        >
            {userReviewDatas.map((review) => {
                return (
                    <div key={review.id}>
                        <LocalitiesCard review={review} />
                    </div>
                );
            })}
        </Carousel>
    );
};

export default LocalitiesSlide;
