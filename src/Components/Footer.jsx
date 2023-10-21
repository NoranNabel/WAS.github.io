import { Link } from "react-router-dom";

import { BsArrowRight, BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";


export default function Footer() {

    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content ">
                <div>
                    <img className="w-48 mt-[-20px] cursor-pointer" src="/WasLogo.png" />
                    <p className="p-2  w-72">© 2023 - All right reserved by WAS - Wireline Advanced Solution </p>
                </div>
                <div>
                    <span className="footer-title text-black opacity-80" >Quick Links</span>
                    <hr className="w-20 opacity-80 border-[1.5px] border-[--secondary]  " />
                    <div className="flex flex-row gap-2">
                        <BsArrowRight className="mt-1 fill-[--secondary]" />
                        <Link to="/" className="link link-hover">Home</Link>
                    </div>
                    <div className="flex flex-row gap-2">
                        <BsArrowRight className="mt-1 fill-[--secondary]" />
                        <Link to="/about" className="link link-hover">ِAbout</Link>
                    </div>
                    <div className="flex flex-row gap-2">
                        <BsArrowRight className="mt-1 fill-[--secondary]" />
                        <Link to="/contact" className="link link-hover">Contact Us</Link>
                    </div>
                </div>


                <div>
                    <span className="footer-title text-black opacity-80">Our Services </span>
                    <hr className="w-20 opacity-80 border-[1.5px] border-[--secondary]  " />
                    <div className="flex flex-row gap-2">
                        <BsArrowRight className="mt-1 fill-[--secondary]" />
                        <Link to="/ComingSoon" className="link link-hover">Products & Service </Link>
                    </div>
                    <div className="flex flex-row gap-2">
                        <BsArrowRight className="mt-1 fill-[--secondary]" />
                        <Link to="/ComingSoon" className="link link-hover">Track Record </Link>
                    </div>
                </div>
                <div className=" ">
                    <div className="flex flex-row gap-2 mb-3">
                        <BsFillTelephoneFill className="mt-1 " />
                        <a className="link link-hover">+1-813-817-7737 </a>
                    </div>
                    <div className="flex flex-row gap-2 mb-3">
                        <GrMail className="mt-1 w-5 h-4" />
                        <a href="https://mail.google.com/mail/u/0/#search/Sales%40WasUs.Us?compose=new" className="link link-hover"> Sales@WasUs.Us </a>
                    </div>
                    <div className="flex flex-row gap-2">
                        <HiLocationMarker className="mt-1 w-5 h-5" />
                        <a className="link link-hover">27440 Sky lake Cir Wesley-chapel,
                            <p>Florida , USA , 33544</p>
                        </a>
                    </div>
                </div>
            </footer>

        </>
    )
}