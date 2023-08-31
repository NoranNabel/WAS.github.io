import { Link, NavLink } from 'react-router-dom';
import { TfiUser } from 'react-icons/tfi';
import { FaRegBell } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';

import { AiTwotonePhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from 'react';

const NavBar = props => {

    const [navbar, setNavbar] = useState(false);

    const HoverLine = () => {
        const [isHovered, setIsHovered] = useState(false);

        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
        };

        const lineStyles = {
            transition: 'width 0.3s',
            width: isHovered ? '100%' : '0%',
            height: '2px',
            backgroundColor: 'blue',
        };
    }


    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const ChangeBackground = () => {
        if (window.scrollY >= 350 || window.location.pathname !== '/') {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', ChangeBackground);

    return (
        <>
            {/* <nav
                className={ 
                    props.navbar
                        ? 'navbar bg-white text-white z-50 font-bold fixed top-0 h-[50px] transition-all duration-[0.5s] ease-in-out shadow-md '
                        : `navbar bg-transparent text-white font-bold fixed top-0 h-[50px] transition-all duration-[0.5s] ease-in-out z-10`
                }
            >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="p-0 btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="p-2 mt-3 text-white shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? 'text-primary' : 'hover:text-primary focus:bg-transparent focus:text-secondary'
                                    }
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/about" className="hover:text-primary focus:bg-transparent focus:text-secondary">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contactUs" className="hover:text-primary focus:bg-transparent focus:text-secondary">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="text-xl mt-5 ml-[-30px] lg:ml-8 normal-case btn btn-ghost">
                        <div className="flex flex-row">
                            <img className="w-20 h-16 mt-[-10px]" src="../../public/images/logo6-preview.png" />
                            <p className="ml-[-15px]">Jobify</p>
                        </div>
                    </Link>
                </div>

                <div className="hidden navbar-center lg:flex ">
                    <ul className="px-1 menu menu-horizontal">
                        <li>
                            <Link
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? 'text-primary' : 'hover:text-primary focus:bg-transparent focus:text-secondary'
                                }
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? 'text-primary' : 'hover:text-primary focus:bg-transparent focus:text-secondary'
                                }
                            >
                                About
                            </NavLink>
                        </li>

                        <li>
                            <Link
                                to="/contactUs"
                                className={({ isActive }) =>
                                    isActive ? 'text-primary' : 'hover:text-primary focus:bg-transparent focus:text-secondary'
                                }
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mr-2 lg:mr-10 navbar-end ">
                    <div className="flex">
                        <Link to="/login">
                            <button className="mr-4 mt-3 transition-all duration-[0.5s] ease-in-out flex hover:text-primary">
                                <TfiUser className="hidden w-5 h-5 mr-2 md:block" />
                                <span className="font-bold ">Login</span>
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="bg-primary btn rounded-[0.3rem] border-none hover:bg-secondary text-gray-100">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="hidden w-6 h-6 mr-2 md:block"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                                    />
                                </svg>
                                <span className="">signup</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </nav> */}


            {/* <nav className="bg-transparent z-50 border-gray-200 justify-between dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-4">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>


                    <div className="hidden w-full  md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
            </nav> */}

            {/* <div className="navbar fixed z-50 bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white hover:bg-transparent hover:text-blue ">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Item 333333</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div> */}

            {/* <nav className="flex w-full bg-transparent fixed z-50 ">

                <div className="navbar-start px-4 mx-auto lg:max-w-7xl md:items-start  md:flex md:px-8">
                    <img className="w-32  cursor-pointer" src="../../public/WasLogo.png" />
                </div>

                <div className="navbar-end px-4 mx-auto lg:max-w-7xl md:items-end md:flex md:px-8">

                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
    
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>


                        <div
                            className={`w-full content-end pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="space-y-8 md:flex md:space-x-6 md:space-y-0 mt-5 text-xl    ">

                                <li className="text-white font-medium border-b-4 border-transparent transition-all hover:text-[--secondary] hover:border-[--secondary] hover:border-b-4 hover:font-bold hover:ease-in-out duration-300">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="text-white w-48  font-medium border-b-4 border-transparent hover:text-[--secondary] hover:border-[--secondary] hover:border-b-4 hover:font-bold hover:ease-in-out duration-300 ">
                                    <Link to="/">Products & Services</Link>
                                </li>
                                <li className="text-white w-32 font-medium border-b-4 border-transparent hover:text-[--secondary] hover:border-[--secondary] hover:border-b-4 hover:font-bold hover:ease-in-out duration-300 ">
                                    <Link to="/">Track Record</Link>
                                </li>
                                <li className="text-black w-28 font-medium border-b-4 border-transparent hover:text-[--secondary] hover:border-[--secondary] hover:border-b-4 hover:font-bold hover:ease-in-out duration-300 ">
                                    <Link to="/">Online Shop</Link>
                                </li>
                                <li className="text-black font-medium border-b-4 border-transparent hover:text-[--secondary] hover:border-[--secondary] hover:border-b-4 hover:font-bold hover:ease-in-out duration-300 ">
                                    <Link to="/">About</Link>
                                </li>
                                <li className="text-black font-medium border-b-4 border-transparent hover:text-[--secondary] hover:border-[--secondary] hover:border-b-4 hover:font-bold hover:ease-in-out duration-300 ">
                                    <Link to="/">ContactUs</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav> */}

            {/* <div className="hidden bg-transparent mt-[-10px] w-full lg:flex max-w-screen-xl items-center justify-between mx-auto " > */}

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
                            <div className="flex gap-2  text-white hover:bg-[--secondary] rounded-xl hover:text-black hover:ease-out duration-[0.5s] ">
                                <p> Sales@WasUs.Us </p>
                                <GrMail className="h-5 w-5 " />
                            </div>
                        </li>
                        <li className="cursor-pointer" >
                            <div className="flex gap-2  text-white hover:bg-white rounded-xl hover:text-black hover:ease-out duration-[0.5s] ">
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
                              {navbar ? <img className="w-32 cursor-pointer" src="../../public/WasLogo.png" /> :  <img className="w-32 cursor-pointer" src="../../public/logoW.png" />}
                            </div>
                        </div>

                        <div className="hidden md:block navbar-end w-full border border-transparent ">
                            <div className="flex items-baseline flex-wrap">
                                <div className="flex-grow"></div>
                                <Link to="/" className="  hover:text-[--secondary] border-transparent hover:border-b-2 hover:border-b-[--secondary] hover:ease-out duration-[0.5s] px-3 py-2 text-lg font-medium ">
                                    Home
                                </Link>
                                <Link to="/" className=" hover:text-[--secondary] border-transparent hover:border-b-2 hover:border-b-[--secondary] hover:ease-out duration-[0.5s] px-3 py-2 text-lg font-medium ">
                                    Products & Services
                                </Link>
                                <Link to="/" className=" hover:text-[--secondary] border-transparent hover:border-b-2 hover:border-b-[--secondary] hover:ease-out duration-[0.5s] px-3 py-2 text-lg font-medium ">
                                    Track Record
                                </Link>
                                <Link to="/" className=" hover:text-[--secondary] border-transparent hover:border-b-2 hover:border-b-[--secondary] hover:ease-out duration-[0.5s] px-3 py-2 text-lg font-medium ">
                                    Online Shop
                                </Link>
                                <Link to="/" className=" hover:text-[--secondary] border-transparent hover:border-b-2 hover:border-b-[--secondary] hover:ease-out duration-[0.5s] px-3 py-2 text-lg font-medium ">
                                    About
                                </Link>
                                <Link to="/" className=" hover:text-[--secondary] border-transparent hover:border-b-2 hover:border-b-[--secondary] hover:ease-out duration-[0.5s] px-3 py-2 text-lg font-medium ">
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                type="button"
                                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white"
                                onClick={toggleNavbar}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg
                                    className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <div className="px-2 pt-2 pb-3 bg-gray-400 space-y-1 sm:px-3 first-letter:">
                        <a href="#" className="text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </a>
                        <a href="#" className="text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Abooout
                        </a>
                        <a href="#" className="text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Services
                        </a>
                        <a href="#" className="text-gray-300 hover:bg-gray-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>




        </>
    );

};
export default NavBar;
