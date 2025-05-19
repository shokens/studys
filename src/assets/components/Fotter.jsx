import React from 'react'
import { FaBookOpen } from 'react-icons/fa';

const Fotter = () => {
  return (
    <div>
        <footer className='bg-heroBg mt-20'>
            <div className='container mx-auto  py-10 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 space-x-10'>
                    <div >
                         <div className='flex space-x-2 py-5 '>
                                  <FaBookOpen className='size-6 text-primary' />
                                  <p>Book Store</p>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy a type specimen book.</p>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl py-5 space-y-10 '>Company</h1>
                        <p>About Us</p>
                        <p>How to work?</p>
                        <p>Populer Course</p>
                        <p>Service</p>
                    </div>

                    <div>
                        <h1 className='font-semibold text-xl py-5 space-y-10 '>Courses</h1>
                        <p>Categories</p>
                        <p>Ofline Course</p>
                        <p>Video Course</p>
                       
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl py-5 space-y-10 '>Support</h1>
                        <p>FAQ</p>
                        <p>Help Center</p>
                        <p>Career</p>
                        <p>Privacy</p>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl py-5 space-y-10 '>Contact Info</h1>
                        <p>+0913-705-3875</p>
                        <p>ElizabethJ@jourrapide.com</p>
                        <p>4808 Skinner Hollow Road
                        Days Creek, OR 97429</p>
                       
                    </div>
            </div>
            <hr />
                        <div className="flex justify-center">
                        <p className="py-4">BookStore All Rights Reserved, 2022</p>
                        </div>
        </footer>
    </div>
  )
}

export default Fotter