import React from 'react';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { FaPersonCircleCheck } from "react-icons/fa6";
const Track = () => {
  return (
    <div>
      <header>
        <div className="container mx-auto py-10 ">
                    <div className="flex flex-col items-center text-center">
                    <h2 className="font-semibold text-2xl">Our Tracks</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-center py-10'>
                        <div>
                        <div className='bg-white shadow-xl rounded-md px-6 py-10' >
                        <img className='w-full h-60  px-2 py-2 rounded' src="/1.png" alt="Logo" />
                        
                        <div className="flex justify-between items-center w-full pt-4">
                            {/* Text on the left */}
                            <p className="text-sm font-medium text-gray-800">UI/UX Design</p>

                            {/* Icons on the right */}
                            <div className="flex space-x-1">
                                <FaStar className="size-5 text-pan" />
                                <FaStar className="size-5 text-pan" />
                                <FaStar className="size-5 text-pan" />
                                <FaStar className="size-5 text-pan" />
                                <CiStar className="size-5 text-pan" />
                            </div>
                            </div>

                         <p className='font-medium'>UI/UX Design for Beginners</p>
                         <span className='text-pan font-medium '>$98</span>
                         <hr className='py-2' />
                         <div className="flex justify-between items-center w-full pt-4">
                         <div className='flex space-x-2'>
                         <CiClock2 className='size-5 '/>
                         <span>22hr 30min</span>
                         </div>
                         <div className='flex space-x-2'>
                         <IoVideocamOutline className='size-5 '/>
                         <span>34 Courses</span>
                         </div>
                         <div className='flex space-x-2'>
                         <FaPersonCircleCheck className='size-5 '/>
                         <span>250 Sales</span>
                         </div>

                         </div>
                         
                        </div>
                        <div className="flex justify-center">
                        <button className="bg-pan py-4 px-12 text-white rounded-full -mt-6">
                            Join Course
                        </button>
                        </div>
                    </div>
                        

                    <div>
                        <div className='bg-white shadow-xl rounded-md px-6 py-10' >
                        <img className='w-full h-60  px-2 py-2 rounded' src="/2.png" alt="Logo" />
                        
                        <div className="flex justify-between items-center w-full pt-4">
                            {/* Text on the left */}
                            <p className="text-sm font-medium text-gray-800">UI/UX Design</p>

                            {/* Icons on the right */}
                            <div className="flex space-x-1">
                                <FaStar className="size-5 text-pan" />
                                <FaStar className="size-5 text-pan" />
                                <FaStar className="size-5 text-pan" />
                                <FaStar className="size-5 text-pan" />
                                <CiStar className="size-5 text-pan" />
                            </div>
                            </div>

                         <p className='font-medium'>UI/UX Design for Beginners</p>
                         <span className='text-pan font-medium '>$98</span>
                         <hr className='py-2' />
                         <div className="flex justify-between items-center w-full pt-4">
                         <div className='flex space-x-2'>
                         <CiClock2 className='size-5 '/>
                         <span>22hr 30min</span>
                         </div>
                         <div className='flex space-x-2'>
                         <IoVideocamOutline className='size-5 '/>
                         <span>34 Courses</span>
                         </div>
                         <div className='flex space-x-2'>
                         <FaPersonCircleCheck className='size-5 '/>
                         <span>250 Sales</span>
                         </div>

                         </div>
                         
                        </div>
                        <div className="flex justify-center">
                        <button className="bg-pan py-4 px-12 text-white rounded-full -mt-6">
                            Join Course
                        </button>
                        </div>
                    </div>


                    <div>
                        <div className='bg-white shadow-xl rounded-md px-6 py-10' >
                        <img className='w-full h-60  px-2 py-2 rounded' src="/3.png" alt="Logo" />
                        
                        <div className="flex justify-between items-center w-full pt-4">
                            {/* Text on the left */}
                            <p className="text-sm font-medium text-gray-800">UI/UX Design</p>

                            {/* Icons on the right */}
                            <div className="flex space-x-1">
                                <FaStar className="size-5 text-pan" />
                                <FaStar className="size-5 text-pan" />
                                <FaStar className="size-5 text-pan" />
                                <FaStar className="size-5 text-pan" />
                                <CiStar className="size-5 text-pan" />
                            </div>
                            </div>

                         <p className='font-medium'>UI/UX Design for Beginners</p>
                         <span className='text-pan font-medium '>$98</span>
                         <hr className='py-2' />
                         <div className="flex justify-between items-center w-full pt-4">
                         <div className='flex space-x-2'>
                         <CiClock2 className='size-5 '/>
                         <span>22hr 30min</span>
                         </div>
                         <div className='flex space-x-2'>
                         <IoVideocamOutline className='size-5 '/>
                         <span>34 Courses</span>
                         </div>
                         <div className='flex space-x-2'>
                         <FaPersonCircleCheck className='size-5 '/>
                         <span>250 Sales</span>
                         </div>

                         </div>
                         
                        </div>
                        <div className="flex justify-center">
                        <button className="bg-pan py-4 px-12 text-white rounded-full -mt-6">
                            Join Course
                        </button>
                        </div>
                    </div>  
                        
              </div>
        </div>
      </header>
    </div>
  );
}

export default Track;
