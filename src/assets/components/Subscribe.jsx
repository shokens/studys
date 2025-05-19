import React from 'react';
import { IoSearch } from "react-icons/io5";
const Subscribe = () => {
  return (
    <div>
       <header className=" flex justify-center items-center  ">
  <div className="bg-primary rounded-md py-14 px-8 text-center w-full max-w-4xl bg-run bg-no-repeat   ">
    <h1 className="text-2xl font-semibold text-white">Subscribe to our newsletter</h1>
    <p className="text-white">Lorem Ipsum is simply dummy text of the printing.</p>

    <div className="relative pt-8">
      {/* Search Icon */}
      <IoSearch className="absolute left-56 top-2/3 transform -translate-y-1/2 text-gray-500" />

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search for a location..."
        className="pl-12 pr-32 py-4 w-1/2 rounded-full bg-white"
      />

      {/* Button */}
      <button
        type="submit"
        className="absolute right-56 top-2/3 transform -translate-y-1/2 bg-pan text-white px-4 py-2 rounded-full hover:bg-primary"
      >
        Continue
      </button>
    </div>
    <div className="mx-16 -my-10 flex justify-between  items-center">
  <img
    className="w-20 "
    src="/arrow2.png"
    alt="Left Arrow"
  />
  <img
    className="w-20"
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
