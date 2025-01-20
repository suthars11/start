"use client";
import React, { useState } from "react";

const Drop = () => {
  const [dropdowns, setDropdowns] = useState({
    price: true,
    brand: false,
    ratings: false,
    offers: false,
    discount: false,
    user: false,
    Amenities: false,
    furnshing: false,
    RERA: false,
  });

  const [toggles, setToggles] = useState({
    hideSent: false,
    verifiedProperties: false,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [priceSelections, setPriceSelections] = useState({
    option1: false,
    option2: false,
  });

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handlePriceSelection = (key) => {
    setPriceSelections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const clearAll = () => {
    setDropdowns({
      price: false,
      brand: false,
      ratings: false,
      offers: false,
      discount: false,
    });
    setSearchTerm("");
    setToggles({
      hideSent: false,
      verifiedProperties: false,
    });
    setPriceSelections({
      option1: false,
      option2: false,
    });
  };

  const priceProgress =
    Object.values(priceSelections).filter(Boolean).length * 50;

  return (
    <div className="ml-28">
      <div className="w-[239px] h-auto bg-[#C0D6DF]  px-6 py-4 absolute mt-6">
        <div className="flex justify-between items-center border-b mt-12 pb-2">
          <h4 className="text-lg font-semibold">Applied Filters</h4>
          <button className="text-sm text-blue-500" onClick={clearAll}>
            Clear All
          </button>
        </div>

        <div className="space-y-4 my-4">
          <label className="flex items-center justify-between">
            <span className="text-sm">Hide already sent</span>
            <div
              className={`w-10 h-5 flex items-center ${
                toggles.hideSent ? "bg-black" : "bg-gray-300"
              } rounded-full p-1 cursor-pointer`}
              onClick={() => handleToggle("hideSent")}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  toggles.hideSent ? "translate-x-5" : ""
                }`}
              ></div>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <span className="text-sm">Verified properties</span>
            <div
              className={`w-10 h-5 flex items-center ${
                toggles.verifiedProperties ? "bg-black" : "bg-gray-300"
              } rounded-full p-1 cursor-pointer`}
              onClick={() => handleToggle("verifiedProperties")}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  toggles.verifiedProperties ? "translate-x-5" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>

        <div className="mb-6 bg-white p-2">
          <h5
            className="text-[#000000] font-medium text-base cursor-pointer flex justify-between items-center"
            onClick={() => toggleDropdown("price")}
          >
            PRICE
            <span className="transform transition-transform duration-200">
              {dropdowns.price ? "▲" : "▼"}
            </span>
          </h5>
          {dropdowns.price && (
            <div className="flex flex-col items-center space-y-4  h-40">
              <div className=" flex space-x-20  ">
                <button className=" bg-[#C0D6DF] rounded-md w-10">0</button>
                <button className=" bg-[#C0D6DF]  rounded-md w-10">100</button>
              </div>

              <div className="w-[80%]  border-t border-black mt-10"></div>

              <div className="flex space-x-4 p-4 ">
                <button className="px-6 py-2 bg-[#C0D6DF] text-white rounded-md ">
                  Max Budget
                </button>
                <button className="px-6 py-2 bg-[#C0D6DF] text-white rounded-md ">
                  Min Budget
                </button>
              </div>
            </div>
          )}
        </div>
        {/* type of property */}
        <div className="mb-6 bg-white p-2">
          <h5
            className="text-[#000000] font-medium text-base cursor-pointer flex justify-between items-center"
            onClick={() => toggleDropdown("brand")}
          >
            TYPE OF PROPERTY
            <span className="transform transition-transform duration-200">
              {dropdowns.brand ? "▲" : "▼"}
            </span>
          </h5>
          {dropdowns.brand && (
            <div className="mt-2 space-y-2">
              {Array(5)
                .fill("Resident Apartment")
                .map((item, index) => (
                  <div
                    key={index}
                    className=" bg-gray-200  h-10 w-[200px] items-center rounded-full"
                  >
                    <h1 className="p-2 shadow-2xl">+ {item}</h1>
                  </div>
                ))}
            </div>
          )}
        </div>
        {/* No. of properties */}
        <div className="mb-6 bg-white p-2">
          <h5
            className="text-[#000000] font-medium text-base cursor-pointer flex justify-between items-center"
            onClick={() => toggleDropdown("ratings")}
          >
            No. of properties
            <span className="transform transition-transform duration-200">
              {dropdowns.ratings ? "▲" : "▼"}
            </span>
          </h5>
          {dropdowns.ratings && (
            <div className=" flex mt-5 flex-wrap gap-5 ">
              <div className=" h-15 w-[100px]  text-[#4E0F9E]      bg-gray-200   rounded-lg">
                + 1RK/1 BHK
              </div>
              <div className=" h-15 w-[100px]  text-[#4E0F9E]     bg-gray-200   rounded-lg">
                + 1RK/1 BHK
              </div>
              <div className=" h-15 w-[100px]  text-[#4E0F9E]     bg-gray-200   rounded-lg">
                + 1RK/1 BHK
              </div>
              <div className=" h-15 w-[100px]  text-[#4E0F9E]     bg-gray-200   rounded-lg">
                + 1RK/1 BHK
              </div>
              <div className=" h-15 w-[100px]  text-[#4E0F9E]     bg-gray-200   rounded-lg">
                + 1RK/1 BHK
              </div>
            </div>
          )}
        </div>
        {/* Construction status */}
        <div className="mb-6 bg-white p-2">
          <h5
            className="text-[#000000] font-medium text-base cursor-pointer flex justify-between items-center"
            onClick={() => toggleDropdown("offers")}
          >
            Construction status
            <span className="transform transition-transform duration-200">
              {dropdowns.offers ? "▲" : "▼"}
            </span>
          </h5>
          {dropdowns.offers && (
            <div className=" mt-5 flex flex-wrap gap-5">
              <div className=" h-15 w-[100px]  text-[#4E0F9E]     bg-gray-200   rounded-lg">
                + 1RK/1 BHK
              </div>
              <div className=" h-15 w-[100px]  text-[#4E0F9E]     bg-gray-200   rounded-lg">
                + 1RK/1 BHK
              </div>
              <div className=" h-15 w-[100px]  text-[#4E0F9E]     bg-gray-200   rounded-lg">
                + 1RK/1 BHK
              </div>
              <div className=" h-15 w-[100px]  text-[#4E0F9E]     bg-gray-200   rounded-lg">
                + 1RK/1 BHK
              </div>
              <div className=" h-15 w-[100px]  text-[#4E0F9E]     bg-gray-200   rounded-lg">
                + 1RK/1 BHK
              </div>
            </div>
          )}
        </div>
        {/* posted by */}

        <div className="mb-6 bg-white p-2">
          <h5
            className="text-[#000000] font-medium text-base cursor-pointer flex justify-between items-center"
            onClick={() => toggleDropdown("discount")}
          >
            posted by
            <span className="transform transition-transform duration-200">
              {dropdowns.discount ? "▲" : "▼"}
            </span>
          </h5>
          {dropdowns.discount && (
            <div className=" flex mt-5 flex-wrap gap-5">
              <div className=" h-15 w-[100px]  text-[#4E0F9E]     bg-gray-200   rounded-lg">
                + 1RK/1 BHK
              </div>
              <div className=" h-15 w-[100px]  text-[#4E0F9E]     bg-gray-200   rounded-lg">
                + 1RK/1 BHK
              </div>
              <div className=" h-15 w-[100px]  text-[#4E0F9E]     bg-gray-200   rounded-lg">
                + 1RK/1 BHK
              </div>
              <div className=" h-15 w-[100px]  text-[#4E0F9E]     bg-gray-200   rounded-lg">
                + 1RK/1 BHK
              </div>
              <div className=" h-15 w-[100px]  text-[#4E0F9E]     bg-gray-200   rounded-lg">
                + 1RK/1 BHK
              </div>
            </div>
          )}
        </div>
        {/* new projects */}
        <div className="mb-6 bg-white p-2">
          <h5
            className="text-[#000000] font-medium text-base cursor-pointer flex justify-between items-center"
            onClick={() => toggleDropdown("user")}
          >
            New projects
            <span className="transform transition-transform duration-200">
              {dropdowns.discount ? "▲" : "▼"}
            </span>
          </h5>
          {dropdowns.user && (
            <>
              <div className="flex flex-wrap gap-3 text-[#4E0F9E]">
                <div className="flex items-center ">
                  <label className="flex items-center ">
                    <input type="checkbox" className=" p-1 w-10" />
                  </label>
                  <h4 className=" text-left ml-10 bg-gray-200   ">
                    Ajmer Road
                  </h4>
                </div>
                <div className="flex items-center">
                  <label className="flex items-center ">
                    <input type="checkbox" className=" p-1 w-10" />
                  </label>
                  <h4 className=" text-left ml-10 bg-gray-200 ">Ajmer Road</h4>
                </div>
                <div className="flex items-center">
                  <label className="flex items-center ">
                    <input type="checkbox" className=" p-1 w-10" />
                  </label>
                  <h4 className=" text-left ml-10 bg-gray-200">Ajmer Road</h4>
                </div>
                <div className="flex items-center">
                  <label className="flex items-center ">
                    <input type="checkbox" className=" p-1 w-10" />
                  </label>
                  <h4 className=" text-left ml-10 bg-gray-200">Ajmer Road</h4>
                </div>
                <div className="flex items-center">
                  <label className="flex items-center ">
                    <input type="checkbox" className=" p-1 w-10 bg-gray-200" />
                  </label>
                  <h4 className=" text-left ml-10 bg-gray-200">Ajmer Road</h4>
                </div>
              </div>
            </>
          )}
        </div>
        {/* hide vrified */}
        <div className="space-y-4 my-4">
          <label className="flex items-center justify-between">
            <span className="text-sm"> properties with photos</span>
            <div
              className={`w-10 h-5 flex items-center ${
                toggles.hideSent ? "bg-black" : "bg-gray-300"
              } rounded-full p-1 cursor-pointer`}
              onClick={() => handleToggle("hideSent")}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  toggles.hideSent ? "translate-x-5" : ""
                }`}
              ></div>
            </div>
          </label>
          <label className="flex items-center justify-between">
            <span className="text-sm">properties with vedio</span>
            <div
              className={`w-10 h-5 flex items-center ${
                toggles.verifiedProperties ? "bg-black" : "bg-gray-300"
              } rounded-full p-1 cursor-pointer`}
              onClick={() => handleToggle("verifiedProperties")}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  toggles.verifiedProperties ? "translate-x-5" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
        {/* Amenities */}
        <div className="mb-6 bg-white p-2">
          <h5
            className="text-[#000000] font-medium text-base cursor-pointer flex justify-between items-center"
            onClick={() => toggleDropdown("Amenities")}
          >
            Amenities
            <span className="transform transition-transform duration-200">
              {dropdowns.Amenities ? "▲" : "▼"}
            </span>
          </h5>
          {dropdowns.Amenities && (
            <div className="flex mt-5 flex-wrap gap-5">
              <div className="h-16 w-[100px] text-[#4E0F9E] bg-gray-200 rounded-lg flex items-center justify-center">
                + 1RK/1 BHK
              </div>
              <div className="h-16 w-[100px] text-[#4E0F9E] bg-gray-200 rounded-lg flex items-center justify-center">
                + 2RK/2 BHK
              </div>
              <div className="h-16 w-[100px] text-[#4E0F9E] bg-gray-200 rounded-lg flex items-center justify-center">
                + 3RK/3 BHK
              </div>
              <div className="h-16 w-[100px] text-[#4E0F9E] bg-gray-200 rounded-lg flex items-center justify-center">
                + 4RK/4 BHK
              </div>
              <div className="h-16 w-[100px] text-[#4E0F9E] bg-gray-200 rounded-lg flex items-center justify-center">
                + 5RK/5 BHK
              </div>
            </div>
          )}
        </div>
        {/* Furnishing */}
        <div className="mb-6 bg-white p-2">
          <h5
            className="text-[#000000] font-medium text-base cursor-pointer flex justify-between items-center"
            onClick={() => toggleDropdown("furnishing")}
          >
            Furnishing Status
            <span className="transform transition-transform duration-200">
              {dropdowns.furnishing ? "▲" : "▼"}
            </span>
          </h5>
          {dropdowns.furnishing && (
            <div className="flex mt-5 flex-wrap gap-5">
              <div className="h-16 w-[100px] text-[#4E0F9E] bg-gray-200 rounded-lg flex items-center justify-center">
                + 1RK/1 BHK
              </div>
              <div className="h-16 w-[100px] text-[#4E0F9E] bg-gray-200 rounded-lg flex items-center justify-center">
                + 2RK/2 BHK
              </div>
              <div className="h-16 w-[100px] text-[#4E0F9E] bg-gray-200 rounded-lg flex items-center justify-center">
                + 3RK/3 BHK
              </div>
              <div className="h-16 w-[100px] text-[#4E0F9E] bg-gray-200 rounded-lg flex items-center justify-center">
                + 4RK/4 BHK
              </div>
              <div className="h-16 w-[100px] text-[#4E0F9E] bg-gray-200 rounded-lg flex items-center justify-center">
                + 5RK/5 BHK
              </div>
            </div>
          )}
        </div>
        {/* RERA Apporoved */}
        <div className="mb-6 bg-white p-2">
          <h5
            className="text-[#000000] font-medium text-base cursor-pointer flex justify-between items-center"
            onClick={() => toggleDropdown("RERA")}
          >
            RERA Apporoved
            <span className="transform transition-transform duration-200">
              {dropdowns.RERA ? "▲" : "▼"}
            </span>
          </h5>
          {dropdowns.RERA && (
            <div className="flex mt-5 flex-wrap gap-5">
              <div className="h-16 w-[100px] text-[#4E0F9E] bg-gray-200 rounded-lg flex items-center justify-center">
                + 1RK/1 BHK
              </div>
              <div className="h-16 w-[100px] text-[#4E0F9E] bg-gray-200 rounded-lg flex items-center justify-center">
                + 2RK/2 BHK
              </div>
              <div className="h-16 w-[100px] text-[#4E0F9E] bg-gray-200 rounded-lg flex items-center justify-center">
                + 3RK/3 BHK
              </div>
              <div className="h-16 w-[100px] text-[#4E0F9E] bg-gray-200 rounded-lg flex items-center justify-center">
                + 4RK/4 BHK
              </div>
              <div className="h-16 w-[100px] text-[#4E0F9E] bg-gray-200 rounded-lg flex items-center justify-center">
                + 5RK/5 BHK
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drop;
