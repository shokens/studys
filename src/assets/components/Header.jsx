import React from 'react';
import { IoSearch } from "react-icons/io5";
const Header = () => {
  return (
    <div>
      <header className='pb-28   pt-40 bg-heroBg bg-cover bg-center bg-no-repeat  w-full'>
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4 items-center bg-working-img ">
            <div className=''>
                <p className='font-bold text-6xl text-primary '>The <span className='text-pan'>Smart</span>  <br />
                    Choice For  <span className='text-pan'>Future</span></p>
                    <p className='my-4'>Elearn is a global training provider based across the UK that <br />
                     specialises in accredited and bespoke training courses. We crush the...</p>
                     <div className='relative my-8 md:justify-center'>
                      {/* Search Icon */}
                           <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                     
                           {/* Input Field */}
                           <input
                             type="text"
                             placeholder="Search for a location..."
                             className="pl-12 pr-32 py-4 lg:w-3/4 sm:w-1/2 md:w-1/2 rounded-full bg-white"
                           />
                     
                     <button className='bg-primary text-white px-4 py-2 rounded-full -ml-28 hover:bg-pan  md:-ml-32' type='sumbit'>Continue</button>

                     </div>
            </div>
        
            <div className='w-full'>
            <img className='' src="/object.png" alt="Logo" />
            </div>
          
            </div>
      </header>
    </div>
  );
}

export default Header;
