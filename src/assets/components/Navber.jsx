import React, { useState } from 'react';
import { FaBookOpen } from 'react-icons/fa';
import { HiMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
   
    const handleCloseMenu = () =>{
        setIsOpen(false)
    }
   
  
  const handleToggle = () => {
    setIsOpen(!isOpen)
}
const handleScroll = () =>{
    const sections = ['home', 'services', 'about_us', 'pricing','testimonial'];
    const scrollPosition = window.scrollY + 100;
}
  const handleClick = (e, section) => {
    e.preventDefault();
    setActiveSection(section);
    handleCloseMenu();
    const target = document.getElementById(section);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };
    const navLinks =(
        <ul className='font-medium flex flex-col  md:flex-row space-y-2 sm:space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8 p-4 md:p-0'>

            <li>
            <a href="#home" onClick={(e) => {
                e.preventDefault();
                handleCloseMenu();
            }} className={`text-primary ${activeSection === 'home' ? 'isActive' : ''}`}>Home</a>
            </li>
           
            <li>    
            <a href="#about_us" className={`text-primary ${activeSection === 'about_us' ? 'isActive' : ''}`}>About Us</a>
            </li>
            <li>
                <a href="#courses" className={`text-primary ${activeSection === 'courses' ? 'isActive' : ''}`}>Courses</a>
            </li>
            <li>
                <a href="#service" className={`text-primary ${activeSection === 'service' ? 'isActive' : ''}`}>Our Service</a>
            </li>
            <li>
                <a href="#Contact" className={`text-primary ${activeSection === 'Contact' ? 'isActive' : ''}`}>Contact</a>
            </li>
        </ul>
    )
  return (
    <header className='bg-heroBg text-primary py-6 px-4 fixed top-0 left-0 right-0 z-10'>
      <div className="container mx-auto flex justify-start items-start h-full">
        <div className='flex space-x-2'>
          <FaBookOpen className='size-6' />
          <p>Book Store</p>
        </div>
        <div className='hidden md:flex flex-grow justify-end items-end '>
          <nav className=''>
            {navLinks}
          </nav>
        </div>
        <div className='hidden md:block  md:pl-4'>
                <a href="/sign" className='text-white bg-primary hover:bg-primary/90 py-2 px-4 rounded'>Sign in</a>
            </div>
            <div className=" md:hidden flex justify-end">
  <button
    onClick={handleToggle}
    className={`text-white focus:outline-none ${isOpen ? "hover:text-pan" : ""}`}
  >
    
    <div className="absolute top-5 right-4">
  <HiMenuAlt3 className="size-6 text-primary hover:text-pan" />
</div>
  </button>
</div>
      </div>
      {
                isOpen && (
                    <nav className='absolute top-full left-0 w-full bg-heroBg z-20 md:hidden'>
                        <ul className='flex flex-col p-4 space-y-3'>
                            {navLinks.props.children}
                            <li className='py-2 '>
                        <a href="contact" 
                        onClick={(e) => {e.preventDefault(); handleCloseMenu()}} 
                        className='text-white bg-primary hover:bg-primary/90 py-2 px-4 rounded'>Sign in</a>
           
                        </li>
                        </ul>
                        
                    </nav>
                )
            }
    </header>
  );
};

export default Navbar;
