"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";  // Import the cross icon from react-icons

const Contact = () => {
  const [isVisible, setIsVisible] = useState(true);  // State to control the visibility of the form

  const handleClose = () => {
    // Redirect to the homepage when the close icon is clicked
    window.location.href = "/";  // This will redirect to the homepage ("/")
  };

  return (
    <div className="">
      {/* Conditional rendering based on visibility */}
      {isVisible ? (
        <div className="w-[60%] bg-[#E6F0F8] p-6 relative mx-auto mt-20">
          {/* Close Icon */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-[#0066A1] text-sm"
          >
            <FaTimes />
          </button>

          {/* Header Section */}
          <h2 className="text-lg font-semibold text-[#0066A1] mb-4 underline text-left">
            You are requesting to view advertiser details.
          </h2>

          {/* Advertiser Details Section */}
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-start mb-6">
            <div>
              <h3 className="text-sm font-medium text-left">POSTED BY Owner:</h3>
              <p className="text-gray-600 text-sm">+91 86***543* **@**.com</p>
              <p className="text-gray-600 text-sm">S P PRAJAPAT</p>
            </div>
            <div className="">
              <h3 className="text-sm font-medium text-left">POSTED ON 27th Jan, 2025:</h3>
              <p className="text-gray-600 text-sm text-left">₹ 1.4 Cr | AREA</p>
              <p className="text-gray-600 text-sm">2400 sq.ft. | 3 BHK Independent/Builder Floor</p>
            </div>
          </div>

          {/* Instruction Section */}
          <h2 className="text-lg text-left font-semibold text-[#0066A1] underline mb-4">
            Please fill in your details to be shared with this advertiser only.
          </h2>

          {/* Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-2 gap-6">
              {/* Basic Information */}
              <div>
                <h3 className="text-sm font-semibold text-left text-[#0066A1] mb-4">
                  BASIC INFORMATION
                </h3>
                <div className="mb-4">
                  <h3 className="text-left text-sm">Your reason to buy is</h3>
                  <div className="flex gap-4 mt-2">
                    <span className="text-gray-600">Investment</span>
                    <span className="text-gray-600 ml-24">Self Use</span>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm text-left">Are you a property dealer</h4>
                  <div className="flex gap-4 mt-2">
                    <span className="text-gray-600">Yes</span>
                    <span className="text-gray-600 ml-44">No</span>
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-[#0066A1] text-sm p-2"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-[#0066A1] text-sm p-2"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Email id"
                    className="w-full border-b border-gray-300 focus:outline-none focus:border-[#0066A1] text-sm p-2"
                  />
                </div>
              </div>

              {/* Optional Information */}
              <div className="mx-auto max-w-md p-1">
                <h3 className="text-sm font-semibold text-[#0066A1] mb-4 text-left">
                  OPTIONAL INFORMATION
                </h3>
                <div className="mb-4">
                  <label className="text-sm text-left block">
                    By when are you planning to buy the property?
                  </label>
                  <div className="flex justify-center gap-4 mt-2 -ml-8">
                    <span className="text-gray-600">3 months</span>
                    <span className="text-gray-600">6 months</span>
                    <span className="text-gray-600">More than 6 months</span>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="text-sm flex items-center justify-center">
                    <input type="checkbox" className="mr-2 -ml-36" />I am interested in site visits.
                  </label>
                </div>
                <div className="mb-4">
                  <label className="text-sm flex items-center justify-center">
                    <input type="checkbox" className="mr-2 ml-2" />I agree to the Terms & Conditions and Privacy Policy.
                  </label>
                </div>
                <div className="text-sm text-[#0066A1] underline cursor-pointer text-center">
                  Back to Home Page
                </div>
                <div className="mt-6">
                  <button className="w-full bg-[#4E0F9E] text-white text-lg font-semibold py-3 rounded-lg shadow-md">
                    Download documents
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Contact;



