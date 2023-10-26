import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { AiTwotonePhone } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { HiLocationMarker } from 'react-icons/hi';

const NavBar = (props) => {

    const { navbar } = props;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropDowen, setDropDowen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        
    };


    return (
        <>
            <nav className={`hidden md:flex lg:flex fixed transition-all duration-[0.5s] border-b border-white ease-in-out z-10 w-full bg-transparent text-white`}>
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-5">
                    <div className="flex items-center justify-between h-11">
                        <div className="flex items-center">
                            <div className="flex ">

                                <div className="px-3 py-2 cursor-pointer flex gap-2 text-white hover:bg-transparent hover:text-[--secondary] hover:ease-out duration-[0.5s] ">
                                    <p>+1-813-817-7737 </p>
                                    <AiTwotonePhone className="h-5 w-5  " />
                                </div>

                                <div className="px-3 py-2 cursor-pointer flex gap-2  text-white hover:bg-transparent hover:text-[--secondary] hover:ease-out duration-[0.5s] ">
                                    <a href="https://mail.google.com/mail/u/0/#search/Sales%40WasUs.Us?compose=new" > Sales@WasUs.Us </a>
                                    <GrMail className="h-5 w-5 " />
                                </div>

                                <div className="px-3 py-2 cursor-pointer flex gap-2  text-white  hover:bg-transparent hover:text-[--secondary] hover:ease-out duration-[0.5s]">
                                    <p>Florida , USA , 33544 </p>
                                    <HiLocationMarker className="h-5 w-5 " />
                                </div>

                            </div>
                        </div>

                        <div className="">
                            <div className="ml-4 flex items-center">

                                <div className='px-3 py-2 cursor-pointer hover:bg-transparent hover:text-[--secondary] border-transparent hover:ease-out duration-[0.5s] rounded-none'>
                                    <Link to="https://www.facebook.com/wasus.us" target="_blank" > <FaFacebookF className="h-5 w-5" /> </Link>
                                </div>

                                <div className='px-3 py-2 cursor-pointer hover:bg-transparent hover:text-[--secondary] border-transparent hover:ease-out duration-[0.5s] rounded-none'>
                                    <Link to="https://www.linkedin.com/company/was-us/" target="_blank" > <FaLinkedinIn className="h-5 w-5" /> </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <nav className={`fixed transition-all duration-[0.5s] ease-in-out mt-[-4px]   
                      ${navbar ? " z-50 w-full bg-white text-black shadow-md"
                    : " z-10 w-full bg-transparent md:mt-10 lg:mt-10 text-white "}`}>

                <div className="w-full mx-auto sm:px-6 lg:px-5">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link to=""><div className="flex-shrink-0">
                                {navbar ? <img className="w-32 cursor-pointer" src="/WasLogo.png" /> : <img className="w-32 cursor-pointer" src="/WasLogoW.png" />}
                            </div></Link>
                        </div>
                        <div className="hidden sm:block ">
                            <div className="ml-4 flex flex-wrap items-center">
                                <div className="flex-grow"></div>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => (`md:px-1.5 lg:px-3 py-2 rounded-md text-lg hover:ease-out duration-[0.5s] ${isActive ? "text-[--secondary] font-bold" : " hover:text-[--secondary] font-medium"}`)}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/ComingSoon"
                                    className={`md:px-1.5 lg:px-3 py-2 rounded-md text-lg hover:ease-out duration-[0.5s] hover:text-[--secondary] font-medium`}
                                // className={({ isActive }) => (`md:px-1.5 lg:px-3 py-2 rounded-md text-lg hover:ease-out duration-[0.5s] ${isActive ? "text-[--secondary] font-bold" : " hover:text-[--secondary] font-medium"}`)}
                                >
                                    Products & Services
                                </NavLink>
                                <NavLink
                                    to="/ComingSoon"
                                    className={`md:px-1.5 lg:px-3 py-2 rounded-md text-lg hover:ease-out duration-[0.5s] hover:text-[--secondary] font-medium`}
                                // className={({ isActive }) => (`md:px-1.5 lg:px-3 py-2 rounded-md text-lg hover:ease-out duration-[0.5s] ${isActive ? "text-[--secondary] font-bold" : " hover:text-[--secondary] font-medium"}`)}
                                >
                                    Track Record
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => (`md:px-1.5 lg:px-3 py-2 rounded-md text-lg hover:ease-out duration-[0.5s] ${isActive ? "text-[--secondary] font-bold" : " hover:text-[--secondary] font-medium"}`)}
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => (`md:px-1.5 lg:px-3 py-2 rounded-md text-lg hover:ease-out duration-[0.5s] ${isActive ? "text-[--secondary] font-bold" : " hover:text-[--secondary] font-medium"}`)}
                                >
                                    Contact
                                </NavLink>
                            </div>
                        </div>

                        <div className=" sm:ml-6 sm:block md:hidden lg:hidden ">
                            <div className="flex items-end">
                                <div className="dropdown dropdown-end text-black">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                                        <button
                                            className={`p-1 hover:ease-out duration-[0.5s] ${navbar ? "text-[--primary] hover:text-[--secondary]" : "text-white hover:text-[--secondary]"}`}
                                        >
                                            <span className="sr-only">Open main menu</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                            </svg>
                                        </button>
                                    </label>
                                        <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 shadow bg-base-100 w-screen px-5">
                                            <li><Link to="/" className='hover:bg-transparent hover:text-[--secondary]'>Home</Link></li>
                                            <li><Link to="/ComingSoon" className='hover:bg-transparent hover:text-[--secondary]'>Products & Services</Link></li>
                                            <li><Link to="/ComingSoon" className='hover:bg-transparent hover:text-[--secondary]'>Track Record</Link></li>
                                            <li><Link to="/about" className='hover:bg-transparent hover:text-[--secondary]'>About</Link></li>
                                            <li><Link to="/contact" className='hover:bg-transparent hover:text-[--secondary]'>Contact</Link></li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
           


        </>
    );
};

export default NavBar;