import React from 'react';

const What = () => {
  return (
    <div>
      <header className='container mx-auto py-10  px-20'>
        <div className='items-center text-center'>
        <h1 className='text-4xl font-semibold'>What student’s say</h1>
        <p className='text-xl py-2'>Lorem Ipsum is simply dummy text of the printing.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 justify-center pt-10 h-auto '>
            <div className='py-4 px-4 bg-white shadow-2xl'>
                <p className='text-xl '>“Teachings of the great explore of truth, 
                        the master-builder of human happiness. 
                        no one rejects,dislikes, or avoids pleasure 
                        itself, pleasure itself”</p>
                <div className='flex space-x-4 py-5'>
                <img
                className=" rounded-full w-12 block "
                src="/Ellipse 34.png"
                alt="Logo"
                />
                    <div className=''>
                    <h2 className='font-bold'>Finlay Kirk</h2>
                    <p>Web Developer</p>
                    </div>
                </div>
            </div>



            <div className='py-4 px-4 bg-white shadow-2xl'>
                <p className='text-xl '>“Teachings of the great explore of truth, 
                        the master-builder of human happiness. 
                        no one rejects,dislikes, or avoids pleasure 
                        itself, pleasure itself”</p>
                <div className='flex space-x-4 py-5'>
                <img
                className=" rounded-full w-12 block "
                src="/Ellipse 34 (1).png"
                alt="Logo"
                />
                    <div className=''>
                    <h2 className='font-bold'>Dannette P. Cervantes</h2>
                    <p>Web Design</p>
                    </div>
                </div>
            </div>



            <div className='py-4 px-4 bg-white shadow-2xl'>
                <p className='text-xl '>“Teachings of the great explore of truth, 
                        the master-builder of human happiness. 
                        no one rejects,dislikes, or avoids pleasure 
                        itself, pleasure itself”</p>
                <div className='flex space-x-4 py-5'>
                <img
                className=" rounded-full w-12 block "
                src="/Ellipse 34 (2).png"
                alt="Logo"
                />
                    <div className=''>
                    <h2 className='font-bold'>Clara R. Altman</h2>
                    <p>UI&UX Design</p>
                    </div>
                </div>
            </div>
        </div>
        
      </header>
      <div className="mx-16 flex justify-between items-center">
  <img
    className="w-20"
    src="/arrow (1).png"
    alt="Left Arrow"
  />
  <img
    className="w-20"
    src="/arrow (2).png"
    alt="Right Arrow"
  />
</div>

    </div>
  );
}

export default What;
