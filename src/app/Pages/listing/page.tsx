import Image from "next/image";
import { FC } from "react";

const Listing: FC = () => {
    return (
        <div className="mt-20 w-[1440px] mx-auto text-[#4E0F9E]">
            {/* Header */}
            <div className="bg-[#C0D6DF80] h-[670px] rounded">
                <div className="py-4 px-6 text-left items-center">
                    <h1 className="text-2xl font-bold">Jaipur Property Deals</h1>
                    <h1 className="text-[#5A5B5C]">
                        Mansarovar Extension, NH - 8 Jaipur, Barhmohanpura
                    </h1>
                    <div className="flex gap-2">
                        <button className="bg-[#4E0F9E] text-white px-4 font-semibold mt-2">
                            ★ 4.3
                        </button>
                        <button className="bg-[#4E0F9E] text-white px-4 font-semibold mt-2">
                            Write for Review
                        </button>
                    </div>
                </div>

                <div className="text-right flex flex-col gap-2 -mt-24 px-6">
                    <h1 className="text-xl font-bold">
                        ₹55.0 L - 96.25 L / ₹55 K/sq.yd
                    </h1>
                    <h6>EMI starts at ₹29.13 K</h6>
                    <h6>Price excludes maintenance, floor rise cost,...</h6>
                </div>

                {/* Property Details */}
                <div className="max-w-7xl mx-auto p-6">
                    {/* Main Section */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        {/* Images */}
                        <div className="grid grid-cols-2 gap-4 p-4">
                            <Image
                                src="/assets/images/propty2.png"
                                alt="Property"
                                width={500}
                                height={380}
                                className="rounded-lg shadow-md w-full h-[380px] object-cover"
                            />
                            <div className="grid gap-2">
                                <Image
                                    src="/assets/images/propty2.png"
                                    alt="Small Property 1"
                                    width={200}
                                    height={200}
                                    className="rounded-lg"
                                />
                                <Image
                                    src="/assets/images/propty2.png"
                                    alt="Small Property 2"
                                    width={200}
                                    height={200}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Information */}
                    <div className="grid grid-cols-4 gap-6 text-center text-sm bg-white shadow rounded mt-5">
                        <div className="space-y-5">
                            <p className="font-bold text-lg text-[#5A5B5C]">Configurations</p>
                            <p className="text-[#858585]">2, 2.5, 3, 4 BHK Apartments</p>
                        </div>
                        <div className="space-y-5">
                            <p className="font-bold text-lg text-[#5A5B5C]">Avg. Price</p>
                            <p className="text-[#858585]">5.5 K/sq.ft</p>
                        </div>
                        <div className="space-y-5">
                            <p className="font-bold text-lg text-[#5A5B5C]">
                                Super Built-up Area
                            </p>
                            <p className="text-[#858585]">940 - 2400 sq.ft</p>
                        </div>
                        <div className="space-y-5">
                            <p className="font-bold text-lg text-[#5A5B5C]">Possession</p>
                            <p className="text-[#858585]">Ready to Move</p>
                        </div>
                    </div>
                </div>

                <div className="md:w-full w-full py-10 px-6 sm:px-10 md:px-16 -mt-4 bg-[#C0D6DF]">
                    <div className="flex">
                        <ul className="flex flex-wrap space-x-4 md:space-x-8 text-[#166088]">
                            <li className="whitespace-nowrap">Overview/Home</li>
                            <li className="whitespace-nowrap">Around This Project</li>
                            <li className="whitespace-nowrap">More About Project</li>
                            <li className="whitespace-nowrap">About Project</li>
                            <li className="whitespace-nowrap">Floor Plan</li>
                            <li className="whitespace-nowrap">Tour This</li>
                            <li className="whitespace-nowrap">Price Trends</li>
                        </ul>
                    </div>
                </div>

                {/* Seller Card */}
                <div className="relative flex justify-end">
                    <div className="bg-[#E6F7FF] rounded-lg absolute shadow-lg ml-10 mt-10 w-72">
                        <div className="bg-[#FFE752] text-center text-sm font-medium text-black py-2 rounded-lg mb-4">
                            ⚡ Nice Choice. Lets Connect With The Seller
                        </div>
                        <div className="bg-[#C3E7F5] rounded-lg p-4 shadow-sm">
                            <p className="font-bold text-[#166088] text-sm text-left">
                                Contact Seller
                            </p>
                            <div className="flex items-center mb-4">
                                <Image
                                    src="/assets/images/sagar.png"
                                    alt="Seller"
                                    width={50}
                                    height={50}
                                    className="object-fill rounded-lg"
                                />
                                <div className="ml-2">
                                    <p className="text-gray-500 text-xs">
                                        Synergy Realty <br /> Seller
                                    </p>
                                </div>
                            </div>
                            {/* Form */}
                            <div>
                                <p className="text-sm font-medium text-[#166088] mb-2 text-left">
                                    Please Share Your Contact
                                </p>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full border rounded-md px-3 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <div className="flex mb-3">
                                    <span className="flex items-center justify-center bg-gray-100 px-3 rounded-l-md border text-sm">
                                        +91
                                    </span>
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="w-full border rounded-r-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full border rounded-md px-3 py-2 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <p className="text-sm font-medium text-gray-600 mb-2 text-left">
                                    Are You A Real Estate Agent?
                                </p>
                                <div className="flex space-x-4 mb-3">
                                    <button className="px-4 py-2 border rounded-lg text-sm text-blue-600 bg-white hover:bg-blue-100">
                                        Yes
                                    </button>
                                    <button className="px-4 py-2 border rounded-lg text-sm text-blue-600 bg-white hover:bg-blue-100">
                                        No
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="option1"
                                            className="h-4 w-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
                                        />
                                        <label
                                            htmlFor="option1"
                                            className="ml-2 text-sm text-gray-600"
                                        >
                                            I Agree To Be Contacted Via WhatsApp, SMS, Phone, Email
                                            Etc
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="option2"
                                            className="h-4 w-4 text-blue-500 rounded border-gray-300 focus:ring-blue-500"
                                        />
                                        <label
                                            htmlFor="option2"
                                            className="ml-2 text-sm text-gray-600"
                                        >
                                            I Agree To Be Contacted By Housing And SMS, Phone, Email
                                            Etc
                                        </label>
                                    </div>
                                </div>
                                <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg text-sm hover:bg-blue-700">
                                    Get Contact Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listing;
