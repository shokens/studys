import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Track2 = () => {
  return (
    <div>
      <header>
        <div className="container mx-auto py-28 ">
                    <div className="flex flex-col items-center text-center">
                    <h2 className="font-semibold text-2xl">Our Tracks</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing.</p>
                    </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-center py-10'>
                   
                    <div>
                        <div className='bg-white shadow-xl rounded-md px-6 py-10' >
                        <img className='w-full h-60  px-2 py-2 rounded' src="/Group 337 (1).png" alt="Logo" />
                        <p className="text-sm font-medium text-gray-800">Matthew E. McNatt</p>
                        <p className="text-sm ">Professor @George Brown College</p>
                        <p className="text-sm py-2">Ut enim ad minim veniam, quis nost exercitation
                        ullamco laboris nisi ut allquip ex commodo.</p>
                        <div className="flex justify-between items-center w-full pt-4">
                            {/* Text on the left */}
                            <span className='text-pan font-medium '>Engineering physics</span>
                            {/* Icons on the right */}
                            <div className="flex space-x-1">
                                
                            <AiFillInstagram className="size-8 text-pink-500"/>
                            
                            <FaFacebookSquare className="size-8 text-blue-800"/>
                            </div>
                            </div>
                         
                        </div>
                        
                    </div>  


                    <div>
                        <div className='bg-white shadow-xl rounded-md px-6 py-10' >
                        <img className='w-full h-60  px-2 py-2 rounded' src="/Group 338 (1).png" alt="Logo" />
                        <p className="text-sm font-medium text-gray-800">Tracy D. Wright</p>
                        <p className="text-sm ">Professor @George Brown College</p>
                        <p className="text-sm py-2">Ut enim ad minim veniam, quis nost exercitation
                        ullamco laboris nisi ut allquip ex commodo.</p>
                        <div className="flex justify-between items-center w-full pt-4">
                            {/* Text on the left */}
                            <span className='text-pan font-medium '>Engineering physics</span>
                            {/* Icons on the right */}
                            <div className="flex space-x-1">
                                
                            <AiFillInstagram className="size-8 text-pink-500"/>
                            
                            <FaFacebookSquare className="size-8 text-blue-800"/>
                            </div>
                            </div>
                         
                        </div>
                        
                    </div>  


                    <div>
                        <div className='bg-white shadow-xl rounded-md px-6 py-10' >
                        <img className='w-full h-60  px-2 py-2 rounded' src="/Group 339 (1).png" alt="Logo" />
                        <p className="text-sm font-medium text-gray-800">Cynthia A. Nelson</p>
                        <p className="text-sm ">Professor @George Brown College</p>
                        <p className="text-sm py-2">Ut enim ad minim veniam, quis nost exercitation
                        ullamco laboris nisi ut allquip ex commodo.</p>
                        <div className="flex justify-between items-center w-full pt-4">
                            {/* Text on the left */}
                            <span className='text-pan font-medium '>Engineering physics</span>
                            {/* Icons on the right */}
                            <div className="flex space-x-1">
                                
                            <AiFillInstagram className="size-8 text-pink-500"/>
                            
                            <FaFacebookSquare className="size-8 text-blue-800"/>
                            </div>
                            </div>
                         
                        </div>
                        
                    </div>  
                        
              </div>
        </div>
      </header>
    </div>
  );
}

export default Track2;
