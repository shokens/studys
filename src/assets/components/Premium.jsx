import React from 'react';

const Premium = () => {
  return (
    <div>
      <header className=' bg-heroBg bg-cover bg-center bg-no-repeat mb-5 w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-center pt-10 h-auto container mx-auto'>
                <div className=' bg-back '>
                <img
                className="px-2 py-2 rounded w-96 block mx-auto"
                src="/obj.png"
                alt="Logo"
                />
                </div>
                <div className='pt-10 px-10'>
                   <p className='text-6xl font-bold'>Premium <span className='text-pan'>Learning</span><br /> 
                   Experience</p>

                   <div className='flex pt-5 space-x-4 mx-auto'>
                   <img className='bg-primary p-2 rounded' src="/hearts 1.png " alt="Logo" />
                        <div>
                        <h1 className='font-medium text-xl'>Easily Accessible</h1>
                        <p>Learning Will fell Very Comfortable With Courslab.</p>
                        </div>
                   </div>
                   <div className='flex py-5 space-x-4'>
                   <img className='bg-primary p-2 rounded' src="/jigsaw 1.png " alt="Logo" />
                        <div>
                        <h1 className='font-medium text-xl'>Fun learning expe</h1>
                        <p>Learning Will fell Very Comfortable With Courslab.</p>
                        </div>
                   </div>
                </div>
      </div>
      </header>
    </div>
  );
}

export default Premium;
