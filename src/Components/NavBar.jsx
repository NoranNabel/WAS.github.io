import { Link, NavLink, useLocation } from 'react-router-dom';
import { TfiUser } from 'react-icons/tfi';
import { FaRegBell } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';

import { AiTwotonePhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from 'react';

const NavBar = props => {

    const [navbar, setNavbar] = useState(false);

    // const ChangeBackground = () => {
    //     if (window.scrollY >= 350 || window.location.pathname !== '/') {
    //         setNavbar(true);
    //     } else {
    //         setNavbar(false);
    //     }
    // };

    // window.addEventListener('scroll', ChangeBackground);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 350 || location.pathname !== '/') {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

    return (
        <>
            <div className='hidden navbar nvb fixed z-10 md:flex lg:flex bg-transparent w-full mx-auto sm:px-6'>
                <div className="navbar-start w-full ">
                    <ul className="menu menu-horizontal lg:flex-row ">
                        <li className="cursor-pointer " >
                            <div className="flex gap-2 text-white hover:bg-transparent hover:text-[--secondary] hover:ease-out duration-[0.5s] ">
                                <p>+1-813-817-7737 </p>
                                <AiTwotonePhone className="h-5 w-5  " />
                            </div>
                        </li>
                        <li className="cursor-pointer " >
                            <div className="flex gap-2  text-white hover:bg-transparent hover:text-[--secondary] hover:ease-out duration-[0.5s] ">
                                <p> Sales@WasUs.Us </p>
                                <GrMail className="h-5 w-5 " />
                            </div>
                        </li>
                        <li className="cursor-pointer" >
                            <div className="flex gap-2  text-white  hover:bg-transparent hover:text-[--secondary] hover:ease-out duration-[0.5s]">
                                <p>Florida , USA , 33544 </p>
                                <HiLocationMarker className="h-5 w-5 " />
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="navbar-end  ">
                    <ul className="menu menu-horizontal flex lg:flex-row ">
                        <li className="cursor-pointer text-white" >
                            <div className='hover:bg-transparent hover:text-[--secondary] border-transparent hover:ease-out duration-[0.5s] rounded-none'>
                                <FaFacebookF className="h-5 w-5" />
                            </div>
                        </li>
                        <li className="cursor-pointer text-white  " >
                            <div className='hover:bg-transparent hover:text-[--secondary] border-transparent hover:ease-out duration-[0.5s] rounded-none'>
                                <BsInstagram className="h-5 w-5" />
                            </div>
                        </li>
                        <li className="cursor-pointer text-white " >
                            <div className='hover:bg-transparent hover:text-[--secondary] border-transparent hover:ease-out duration-[0.5s] rounded-none'>
                                <FaLinkedinIn className="h-5 w-5" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>


            <nav className="w-full">
                <div className={navbar ? "fixed z-50 bg-white text-black w-full mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-[0.5s] ease-in-out shadow-md"
                    : "fixed z-50 top-0 md:top-10 lg:top-11 bg-transparent text-white border-t border-slate-300  w-full mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-[0.5s] ease-in-out"}>
                    <div className="flex items-center justify-between h-16">

                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                {navbar ? <img className="w-32 cursor-pointer" src="../../public/WasLogo.png" /> : <img className="w-32 cursor-pointer" src="../../public/logoW.png" />}
                            </div>
                        </div>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] text-black p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to="/" className="  hover:text-[--secondary] hover:bg-gray-100 hover:rounded-xl hover:ease-out duration-[0.5s] px-3 py-2 font-medium ">
                                    Home
                                </Link>
                                <Link to="/ComingSoon" className=" hover:text-[--secondary] hover:bg-gray-100 hover:rounded-xl hover:ease-out duration-[0.5s] px-3 py-2 font-medium ">
                                    Products & Services
                                </Link>
                                <Link to="/ComingSoon" className=" hover:text-[--secondary] hover:bg-gray-100 hover:rounded-xl hover:ease-out duration-[0.5s] px-3 py-2 font-medium ">
                                    Track Record
                                </Link>
                                <Link to="/ComingSoon" className=" hover:text-[--secondary] hover:bg-gray-100 hover:rounded-xl hover:ease-out duration-[0.5s] px-3 py-2 font-medium ">
                                    Online Shop
                                </Link>
                                <Link to="/ComingSoon" className=" hover:text-[--secondary] hover:bg-gray-100 hover:rounded-xl hover:ease-out duration-[0.5s] px-3 py-2 font-medium ">
                                    About
                                </Link>
                                <Link to="/ComingSoon" className=" hover:text-[--secondary] hover:bg-gray-100 hover:rounded-xl hover:ease-out duration-[0.5s] px-3 py-2 font-medium ">
                                    Contact
                                </Link>
                            </ul>
                        </div>

                        <div className="hidden md:block navbar-end w-full border border-transparent ">
                            <div className="flex items-baseline flex-wrap">
                                <div className="flex-grow"></div>
                                <Link to="/" className="  hover:text-[--secondary] hover:ease-out duration-[0.5s] px-3 py-2 text-lg font-medium ">
                                    Home
                                </Link>
                                <Link to="/ComingSoon" className=" hover:text-[--secondary] hover:ease-out duration-[0.5s] px-3 py-2 text-lg font-medium ">
                                    Products & Services
                                </Link>
                                <Link to="/ComingSoon" className=" hover:text-[--secondary] hover:ease-out duration-[0.5s] px-3 py-2 text-lg font-medium ">
                                    Track Record
                                </Link>
                                <Link to="/ComingSoon" className=" hover:text-[--secondary] hover:ease-out duration-[0.5s] px-3 py-2 text-lg font-medium ">
                                    Online Shop
                                </Link>
                                <Link to="/ComingSoon" className=" hover:text-[--secondary] hover:ease-out duration-[0.5s] px-3 py-2 text-lg font-medium ">
                                    About
                                </Link>
                                <Link to="/ComingSoon" className=" hover:text-[--secondary] hover:ease-out duration-[0.5s] px-3 py-2 text-lg font-medium ">
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>




        </>
    );

};
export default NavBar;
