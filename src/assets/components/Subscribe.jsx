import React from 'react';
import { IoSearch } from "react-icons/io5";
const Subscribe = () => {
  return (
    <div>
    <header className="flex justify-center items-center px-4 py-4">
  <div className="bg-primary rounded-md py-10 px-4 sm:px-6 md:px-8 text-center w-full max-w-4xl bg-run ">
    <h1 className="text-2xl font-semibold text-white">Subscribe to our newsletter</h1>
    <p className="text-white mt-2">Lorem Ipsum is simply dummy text of the printing.</p>

    <div className="relative pt-8 flex justify-center">
      {/* Input Container */}
      <div className="relative w-full max-w-xl">
        {/* Search Icon */}
        <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />

        {/* Input Field */}
        <input
          type="text"
          placeholder="Search for a location..."
          className="pl-12 pr-32 py-4 w-full rounded-full bg-white text-sm"
        />

        {/* Button */}
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-pan text-white px-4 py-2 rounded-full hover:bg-primary text-sm"
        >
          Continue
        </button>
      </div>
    </div>

    {/* Decorative Images */}
    <div className="flex justify-between items-center mt-8 px-4">
      <img
        className="w-12 sm:w-16 md:w-20"
        src="/arrow2.png"
        alt="Left Arrow"
      />
      <img
        className="w-12 sm:w-16 md:w-20"
        src="/bulb.png"
        alt="Right Arrow"
      />
    </div>
  </div>
</header>


      
    </div>
  );
}

export default Subscribe;
