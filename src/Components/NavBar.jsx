import { Link } from "react-router-dom";
import { AiTwotonePhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";


export default function NavBar() {

    const [navbar, setNavbar] = useState(false);

    const ChangeBackground = () => {
        if (window.scrollY >= 500) {
            console.log(" true navbar")
            setNavbar(true);
        } else {
            // console.log(" false navbar")

            setNavbar(false);
        }
    };

    window.addEventListener('scroll', ChangeBackground);
    return (

        <>
            <nav className="  ">

                <div className={navbar ? "fixed z-50 bg-black text-white w-full"  : "fixed z-50 bg-white w-full"}>
                    <div className="navbar   max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                        <img className="w-32 cursor-pointer" src="../../public/WasLogo.png" />

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost md:hidden lg:hidden">
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 font-medium">
                                <li className="hover:text-[#153cf5] cursor-pointer p-1" > Home</li>
                                <li className="hover:text-[#153cf5] cursor-pointer p-1" > Products & Services </li>
                                <li className="hover:text-[#153cf5] cursor-pointer p-1" > Online Shop</li>
                                <li className="hover:text-[#153cf5] cursor-pointer p-1" > About</li>
                                <li className="hover:text-[#153cf5] cursor-pointer p-1" > Contact</li>
                            </ul>
                        </div>

                        <div className="hidden w-full md:block md:p-4 md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



                {/* <div className=" bg-transparent mt-[-10px] hidden lg:flex max-w-screen-xl items-center justify-between mx-auto " >
                    <div className="navbar-start ">
                        <ul className="menu menu-horizontal md:flex-col lg:flex-row ">
                            <li className="cursor-pointer " >
                                <div className="flex gap-2">
                                    <p>+1-813-817-7737 </p>
                                    <AiTwotonePhone className="h-5 w-5 " />
                                </div>
                            </li>
                            <li className="cursor-pointer " >
                                <div className="flex gap-2 ">
                                    <p> Sales@WasUs.Us </p>
                                    <GrMail className="h-5 w-5" />
                                </div>
                            </li>
                            <li className="cursor-pointer" >
                                <div className="flex gap-2 ">
                                    <p>Florida , USA , 33544 </p>
                                    <HiLocationMarker className="h-5 w-5" />
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-end  ">
                        <ul className="menu menu-horizontal flex flex-col lg:flex-row">
                            <li className="cursor-pointer" >
                                <div>
                                    <FaFacebookF className="h-5 w-5" />
                                </div>
                            </li>
                            <li className="cursor-pointer  " >
                                <div>
                                    <BsInstagram className="h-5 w-5" />
                                </div>
                            </li>
                            <li className="cursor-pointer " >
                                <div>
                                    <FaLinkedinIn className="h-5 w-5" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> */}



                {/* <nav>
                <div className="navbar lg:mt-[-25px]">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                                <li className="hover:text-[#153cf5] cursor-pointer" > Home</li>
                                <li className="hover:text-[#153cf5] cursor-pointer" > Products & Services </li>
                                <li className="hover:text-[#153cf5] cursor-pointer" > Online Shop</li>
                                <li className="hover:text-[#153cf5] cursor-pointer" > About</li>
                                <li className="hover:text-[#153cf5] cursor-pointer" > Contact</li>
                            </ul>
                        </div>
                        <img className="w-32 ml-8 cursor-pointer" src="../../public/logo-removebg-preview (1).png " />

                    </div>

                    <div className="hidden lg:flex" id="navbar-default">
                        <ul className="menu menu-horizontal font-medium">
                            <li className="hover:text-[#153cf5] mr-8 cursor-pointer  " > Home</li>
                            <li className="hover:text-[#153cf5] mr-8 cursor-pointer  " > Products & Services </li>
                            <li className="hover:text-[#153cf5] mr-8 cursor-pointer  " > Online Shop</li>
                            <li className="hover:text-[#153cf5] mr-8 cursor-pointer  " > About</li>
                            <li className="hover:text-[#153cf5] mr-8 cursor-pointer  " > Contact</li>
                        </ul>
                    </div>
                </div>

            </nav> */}



            </nav>

        </>
    )
}