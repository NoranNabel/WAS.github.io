import { BsArrowRight , BsFillTelephoneFill ,BsFillEnvelopeFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";


export default function Footer() {

    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content ">
                <div>
                    <img className="w-48 mt-[-10px] cursor-pointer" src="../../public/WasLogo.png" />
                    <p className="p-2  w-72"> <span className="font-bold italic">Wireline Advanced Solution </span> is a leading oil and gas equipment manufacturer based in Florida,USA.</p>
                </div>
                <div>
                    <span className="footer-title text-black opacity-80" >Quick Links</span>
                    <hr className="w-20 opacity-80 border-[1.5px] border-[--secondary]  " />
                    <div className="flex flex-row gap-2">
                        <BsArrowRight className="mt-1 fill-[--secondary]" />
                        <a className="link link-hover">Home</a>
                    </div>
                    <div className="flex flex-row gap-2">
                        <BsArrowRight className="mt-1 fill-[--secondary]" />
                        <a className="link link-hover">ِAbout</a>
                    </div>
                    <div className="flex flex-row gap-2">
                        <BsArrowRight className="mt-1 fill-[--secondary]" />
                        <a className="link link-hover">Contact Us</a>
                    </div>
                </div>


                <div>
                    <span className="footer-title text-black opacity-80">Our Services </span>
                    <hr className="w-20 opacity-80 border-[1.5px] border-[--secondary]  " />
                    <div className="flex flex-row gap-2">
                        <BsArrowRight className="mt-1 fill-[--secondary]" />
                        <a className="link link-hover">Products & Service </a>
                    </div>
                    <div className="flex flex-row gap-2">
                        <BsArrowRight className="mt-1 fill-[--secondary]" />
                        <a className="link link-hover">Track Record </a>
                    </div>
                    <div className="flex flex-row gap-2">
                        <BsArrowRight className="mt-1 fill-[--secondary]" />
                        <a className="link link-hover">Online Shop</a>
                    </div>
                </div>
                <div className="mt-5 ">
                    <div className="flex flex-row gap-2 mb-3">
                        <BsFillTelephoneFill className="mt-1 " />
                        <a className="link link-hover">+1-813-817-7737 </a>
                    </div>
                    <div className="flex flex-row gap-2 mb-3">
                        <GrMail className="mt-1 w-5 h-4" />
                        <a className="link link-hover"> Sales@WasUs.Us </a>
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