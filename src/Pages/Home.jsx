import Header from "../Components/header";
import NavBar from "../Components/NVB";
import Clients from "../Components/OurClients";

import { motion } from "framer-motion";



import { FaHelmetSafety, FaMedal } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { TbBulbFilled } from "react-icons/tb";
import { GrCertificate } from "react-icons/gr";
import { PiCertificateFill } from "react-icons/pi";

const Slides = [


    "/Slider/Slider1.png",
    "/Slider/Slider2.png",
    "/Slider/Slider3.png",
    // "/Slider/Unrecognizable2.jpg",
    // "/Slider/Unrecognizable2.jpg",
    // "/Slider/Unrecognizable2.jpg",
    // "/Slider/Unrecognizable2.jpg",
    // "/Slider/woman-570883_1920.jpg",

]

export default function Home() {
    return (
        <>
            {/* <NavBar /> */}
            {/* <div className=''>
                <div className="carousel ">
                    <Carousel autoSlide={true} >
                        {Slides.map((s) => (<img src={s} />))}
                    </Carousel>
                </div>

            </div>
            <hr />

            <Header /> */}
            <div className="h-full w-full">
                <Header />
            </div>

            {/* 
            <figure>
                <img className="relative mt-40 " src="/Slider/Slider-111.jpg" />
                <figcaption className="absolute bottom-6"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ipsum itaque aspernatur sint aliquid pariatur esse quos,\
                 nisi molestiae! Minus nam fugiat, ea voluptatum quisquam dolores similique sed sequi nisi!</figcaption>
            </figure>


            <figure className="relative w-[100%] h-[100%] mt-20 max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                <a href="#">
                    <img className="" src="/Slider/Slider-111.jpg" alt="image description" />
                </a>
                <figcaption className="absolute px-4 text-lg text-white bottom-6">
                    <p>Do you want to get notified when a new component is added to Flowbite?</p>
                </figcaption>
            </figure> */}
            {/* ----------------------------- Section 2 About -------------------------- */}

            <motion.div
                //     variants={{
                //         hidden :{opacity: 0, y: 70},
                //         visible : {opacity: 1, y: 0}
                // }}
                // initial = "hidden"
                // animate = "visible"
                // transition={{ duration: 0.5 , delay: 0.25 }}

                initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}

                // whileInView={{
                //     y: 0, opacity: 1,
                //     scale: [1, 2, 2, 1, 1],
                //     rotate: [0, 0, 360, 360, 0],

                // }}
                transition={{ type: "tween", duration: 0.5, delay: 0.25 }}

                // animate={{ x: 100 }}
                // transition={{
                //     ease: "linear",
                //     duration: 2,
                //     x: { duration: 1 }
                //   }}

                // whileHover={{ scale: 1.2 }}
                // whileTap={{ scale: 1.1 }}
                // drag="x"
                // dragConstraints={{ left: -100, right: 100 }}

                // animate={{
                //     scale: [1, 2, 2, 1, 1],
                //     rotate: [0, 0, 270, 270, 0],
                //     // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                // }}

                className="flex flex-col lg:flex-row md:flex-col lg:w-[50%] lg:mx-[14%] mb-20 mt-20"
                style={{ background: "url(/BG/AboutSecbgLightOne.jpg)" }}>
                <div className="">
                    <div className="w-auto lg:w-[500px] p-8 ">

                        <span className="text-[--secondary] font-bold text-sm p-2">WHO WE ARE</span>
                        <h2 className="card-title font-bold text-[--primary] text-4xl p-2">About WAS</h2>
                        <hr className="w-20 ml-2 mt-3 border-[1.5px] border-[--secondary]  " />
                        <p className="text-lg p-2 mt-3"> <span className="font-bold italic">Wireline Advanced Solution </span> is a leading oil and gas equipment manufacturer based in Florida,USA. We specialize in providing advanced solutions to the  most complex challenges and the industry. </p>
                        <p className="text-lg p-2 mt-2">Over a decade of experience, we have established ourselves as a trusted partner for our clients. We work closely with them to understand their unique needs and provide customized solutions that help them achieve their goals.</p>
                    </div>
                </div>
                <motion.img
                    initial={{ y: 70, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "tween", duration: 0.5, delay: 0.25 }}
                    src="/Night_truck.JPEG" className=" rounded-none shadow-2xl h-[405px] mt-14 " />
            </motion.div>


            {/* ----------------------------- Section 3 Core  -------------------------- */}

            <div className="card flex flex-col rounded-none mb- w-full "
                style={{ background: "url(/BG/HugeDomains_com2.jpg)" }}>

                <div className="card flex flex-col  lg:flex-row w-full " >

                    <div className="card flex flex-col lg:flex-row md:flex-row md:gap-5 md:w-auto">

                        <div className="card lg:mx-10 my-20 mx-auto">

                            <motion.div
                                initial={{ opacity: 0, y: 75 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                whileHover={{ scale: 1.1 }}
                                className="card-body w-80  h-52 bg-white text-black p-5 my-5 border-2 border-r-transparent border-l-[--secondary] border-y-[--secondary] hover:bg-[--secondary] hover:text-white cursor-pointer hover:border-l-black hover:border-y-black transition-all hover:duration-[0.5s]  ">
                                <div className="flex items-start gap-2 ">
                                    <FaHelmetSafety className="w-10 h-10 " />
                                    <h2 className="card-title font-bold text-2xl">Safety</h2>
                                </div>
                                <hr className="w-20 mt-1 border-[2px] border-[--secondary] mb-2 " />
                                <p>Oil and gas operations can be hazardous, so prioritizing safety measures and training is essential to protect employees and customers.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 75 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                whileHover={{ scale: 1.1 }}
                                className="card-body w-80  h-52 bg-white text-black p-5 my-5 border-2 border-r-transparent border-l-[--secondary] border-y-[--secondary] hover:bg-[--secondary] hover:text-white cursor-pointer hover:border-l-black hover:border-y-black transition-all hover:duration-[0.5s] ">
                                <div className="flex items-start gap-2">
                                    <FaMedal className="w-10 h-10" />
                                    <h2 className="card-title font-bold text-2xl ">Quality</h2>
                                </div>
                                <hr className="w-20 mt-1 border-[2px] border-[--secondary] mb-2 " />
                                <p>Manufacturing or renovating reliable, high-quality equipment is crucial for building trust with customers and ensuring long-term success.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 75 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                whileHover={{ scale: 1.1 }}
                                className="card-body w-80  h- bg-white text-black p-5 my-5 border-2 border-r-transparent border-l-[--secondary] border-y-[--secondary] hover:bg-[--secondary] hover:text-white cursor-pointer hover:border-l-black hover:border-y-black transition-all hover:duration-[0.5s] ">
                                <div className="flex items-start gap-2">
                                    <HiUserGroup className="w-12 h-10" />
                                    <h2 className="card-title font-bold text-2xl mt-2">Teamwork</h2>
                                </div>
                                <hr className="w-20 mt-1 border-[2px] border-[--secondary] mb-1 " />
                                <p>Oil and gas operations often require collaboration between different departments and teams, so fostering a culture of teamwork and communication can help ensure success.</p>
                            </motion.div>
                        </div>

                        {/* ------------------------------- */}

                        <div className="card h-96 mx-auto mt-[-60px] lg:my-44 md:mt-60">

                            <motion.div
                                initial={{ opacity: 0, y: 75 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                whileHover={{ scale: 1.1 }}
                                className="card-body w-80  h-52 bg-white text-black  p-5 lg:my-5 lg:mx-10 border-2 border-r-transparent border-l-[--secondary] border-y-[--secondary] hover:bg-[--secondary] hover:text-white cursor-pointer hover:border-l-black hover:border-y-black transition-all hover:duration-[0.5s] ">
                                <div className="flex items-start gap-2">
                                    <TbBulbFilled className="w-12 h-12 " />
                                    <h2 className="card-title font-bold text-2xl mt-2">Innovation</h2>
                                </div>
                                <hr className="w-20 mt-1 border-[2px] border-[--secondary]  " />
                                <p>Developing new technologies and techniques can help improve the effectiveness and efficiency of wireline and slickline operations.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 75 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                whileHover={{ scale: 1.1 }}
                                className="card-body w-80  h-60 bg-white text-black  p-5 my-10 lg:mx-10 border-2 border-r-transparent border-l-[--secondary] border-y-[--secondary] hover:bg-[--secondary] hover:text-white cursor-pointer hover:border-l-black hover:border-y-black transition-all hover:duration-[0.5s] ">
                                <div className="flex items-start gap-2">
                                    <PiCertificateFill className="w-14 h-14 mt- " />
                                    <h2 className="card-title font-bold text-2xl mt-3">Customer Satisfaction </h2>
                                </div>
                                <hr className="w-20 mt-1 border-[2px] border-[--secondary]  " />
                                <p>Manufacturing or renovating reliable, high-quality equipment is crucial for building trust with customers and ensuring long-term success.</p>
                            </motion.div>
                        </div>
                    </div>

                    <div className="card flex flex-col mx-auto mt-32 md:mt-[-60px] lg:mt-60 ">
                        <div className="card-body  ">
                            <span className="text-[--secondary] font-bold text-sm ">WHY CHOOSE US</span>
                            <motion.h2
                                initial={{ opacity: 0, x: 18 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="card-title font-bold text-[--primary] text-3xl mb-3">
                                Our Core Values for Industry Leadership.</motion.h2>
                            <hr className="w-20 border-[1.5px] border-[--secondary]  " />
                            <motion.img
                                initial={{ opacity: 0, x: 18 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                src="/Slider/Slider1.png" className="w-96 h-96 mt-[-40px] mx-auto" />
                        </div>
                    </div>

                </div>

            </div>

            {/* ----------------------------- Section 3 Our Recent Works -------------------------- */}
            <div className="card flex flex-col rounded-none "
                style={{ background: "url(/BG/PolarWhiteMarbleSlab.jpg)" }}>

                <div className="card rounded-none">
                    <div className="card-body">
                        <motion.h2
                            initial={{ opacity: 0, y: 75 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}

                            className="card-title font-bold text-[--primary] text-3xl mx-auto text-center mb-3 mt-14">
                            Unleashing power of rebuilt equipment</motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 75 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-lg w-[90%] mx-auto text-center mb-8">
                            At our company, we unleash the power of rebuilt equipment by revitalizing your old machinery, restoring it to its former glory with exceptional operational performance and a visually stunning appearance.Trust us to bring your old equipment back to life, unlocking its true potential and exceeding your expectations.</motion.p>
                        <div className="flex flex-col mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: 75 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}

                                className="flex ">
                                <figure><img className="w-96 " src="public/before_After/Enos6_before.jpeg" /></figure>
                                <div className="ml-5 lg:ml-16 mt-28 h-16 border-l-4 border-[--secondary]">
                                    <h2 className="card-title text-3xl font-bold text-[--primary] text-center mt-3 ml-2">Before</h2>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -75 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="flex lg:ml-48">
                                <div className="ml-5 lg:ml-16 mt-28 h-16 border-l-4 border-[--secondary]">
                                    <h2 className="card-title text-3xl font-bold text-[--primary] text-center mr-5 lg:mr-16 mt-3 ml-2">After</h2>
                                </div>
                                <figure><img className="w-96 mt-5" src="public/before_After/Enos_6_After.JPEG" /></figure>

                            </motion.div>

                        </div>
                    </div>
                </div>
                {/* -------------------------------- Section 4  ---------------------------- */}
                <div className="card  rounded-none mt-14">
                    <div className="card-body">
                        <motion.h2
                            initial={{ opacity: 0, y: 75 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="card-title font-bold text-[--primary] text-3xl text-center mx-auto mb-3">
                            We Design , We don't Assemble
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 75 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-lg text-center lg:px-10 mx-auto lg:w-[90%] ">
                            we pride ourselves on our design-driven approach. We don't simply assemble equipment we meticulously design every unit from the ground up. Each piece is crafted based on our genuine,
                            innovative designs, ensuring that every component seamlessly integrates to deliver exceptional  performance quality and innovation.</motion.p>

                        <div className="grid grid-flow-row-dense grid-cols-3 gap-1 lg:gap-5 lg:w-[80%] mx-auto mt-8 ">
                            <div className="hover:scale-105 lg:hover:scale-110 transform-gpu transition-transform duration-300 cursor-pointer">
                                <motion.img
                                    initial={{ opacity: 0, x: -90 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.50 }}
                                    src="/Grid/grid5.jpeg" />
                            </div>
                            <div className="hover:scale-105 lg:hover:scale-110 transform-gpu transition-transform duration-300 cursor-pointer">
                                <motion.img
                                    initial={{ opacity: 0, y: 90 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.50 }}
                                    className="h-full"
                                    src="/Grid/grid3.png" />
                            </div>
                            <div className="hover:scale-105 lg:hover:scale-110 transform-gpu transition-transform duration-300 cursor-pointer">
                                <motion.img
                                    initial={{ opacity: 0, x: 90 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.50 }}
                                    className="h-full "
                                    src="/Grid/grid4.jpeg" />
                            </div>
                            <div className="col-span-2 hover:scale-105 transform-gpu transition-transform duration-300 cursor-pointer">
                                <motion.img
                                    initial={{ opacity: 0, x: -90 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.50 }}
                                    src="/Grid/grid22.png" />
                            </div>
                            <div className="hover:scale-105 lg:hover:scale-110 transform-gpu transition-transform duration-300 cursor-pointer">
                                <motion.img
                                    initial={{ opacity: 0, x: 90 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.50 }}
                                    className="h-full"
                                    src="/Grid/grid1.jpg" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* -------------------------------- Section 5  ---------------------------- */}
                <div className="card mx-auto mt-14">
                    {/* <h2 className="card-title font-bold text-[--primary] text-4xl mx-auto mt-10 ">Innovative products and solutions</h2> */}
                    <div className="card lg:card-side rounded-none mb-40">
                        <div className="card-body mx-auto" >
                            <motion.h2
                                initial={{ opacity: 0, y: 75 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="card-title font-bold text-3xl text-[--primary] text-center mx-auto mb-5 ">
                                Innovative products and solutions</motion.h2>

                            <div className="flex flex-col lg:flex-row mx-auto lg:px-40">
                                <div className="h-44 mt-10">
                                    <motion.h2
                                        initial={{ opacity: 0, x: 0 }}
                                        whileInView={{ opacity: 1, x: -90 }}
                                        transition={{ duration: 0.50 }}
                                        className="text-lg font-medium ml-20 lg:ml-0 lg:mt-10 lg:px-8 ">
                                        We pride ourselves on our ability to provide innovative solutions and develop new products that are
                                        tailored to meet our clients' specific needs. </motion.h2>
                                </div>
                                <motion.img
                                    initial={{ opacity: 0, x: 0 }}
                                    whileInView={{ opacity: 1, x: 90 }}
                                    transition={{ duration: 0.50 }}
                                    className="w-80 mx-auto mt-[-50px] mr-20 lg:mr-0 lg:mt-0 lg:w-96 lg:h-80" src="public/Panel/panel1.png" />
                            </div>


                            <div className="flex flex-col lg:flex-row mx-auto lg:gap- lg:px-40 ">
                                <motion.img
                                    initial={{ opacity: 0, x: 0 }}
                                    whileInView={{ opacity: 1, x: -90 }}
                                    transition={{ duration: 0.50 }}
                                    className="h-60 mx-auto lg:w-96 lg:h-80 " src="public/Panel/panel2.png" />
                                <div className="h-44 mr-20 lg:mr-0 lg:mt-16">
                                    <motion.h2
                                        initial={{ opacity: 0, x: 0 }}
                                        whileInView={{ opacity: 1, x: 90 }}
                                        transition={{ duration: 0.50 }}
                                        className=" text-lg font-medium  mt-7 lg:px-8">
                                        We understand that every client is unique, and we believe in going above and beyond to deliver 
                                        creative and cutting-edge solutions that address their challenges</motion.h2>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>



                {/* --------------------------------------------------
<div className="card lg:card-side rounded-none mb-40">
                        <div className="card-body mx-auto" >
                            <h2 className="card-title font-bold text-4xl text-[--primary] text-center mx-auto mb-5 ">Innovative products and solutions</h2>

                            <div className="flex flex-row mx-auto gap-40 px-20">
                                <div className="bg-white rounded-2xl shadow-xl h-44 mt-10">
                                    <h2 className="card-title mt-10 px-8 text-center ">We pride ourselves on our ability to provide innovative solutions and develop new products that are tailored to meet our clients' specific needs. </h2>
                                </div>
                                <img className="w-96 h-80" src="public/Panel/panel1.png" />
                            </div>


                            <div className="flex flex-row mx-auto gap-40 px-20 ">
                                <img className="w-96 h-80 " src="public/Panel/panel2.png" />
                                <div className="bg-white rounded-2xl shadow-xl h-44 mt-16">
                                    <h2 className=" card-title text-center mt-7 px-8">We understand that every client is unique, and we believe in going above and beyond to deliver creative and cutting-edge solutions that address their challenges</h2>
                                </div>

                            </div>
                        </div>
                    </div>

------------------------------------------
                    <div className="flex flex-col md:flex-row md:gap-5 lg:flex-row lg:gap-32 mb-10 ">

                        <div className="card w-96 glass mt-10 shadow-lg hover:scale-110 transform-gpu transition-transform duration-300 cursor-pointer">
                            <figure className="bg-[--grayBg] h-72"><img className="w-80 h-80 px-3" src="public/Panel/panel1.png" /></figure>
                            <div className="card-body bg-white ">
                                <h2 className="text-lg py-3 text-center">We pride ourselves on our ability to provide innovative solutions and develop new products that are tailored to meet our clients' specific needs. </h2>
                            </div>
                        </div>

                        <div className="card w-96 glass mt-10 shadow-lg hover:scale-110 transform-gpu transition-transform duration-300 cursor-pointer">
                            <figure className="bg-[--grayBg] h-72"><img className="w-80 px-3" src="public/Panel/panel2.png" /></figure>
                            <div className="card-body lg:h-20 bg-white ">
                                <h2 className="text-lg py-3 text-center lg:mt-[-10px]">We understand that every client is unique, and we believe in going above and beyond to deliver creative and cutting-edge solutions that address their challenges</h2>
                            </div>
                        </div>
                    </div>
------------------------------ 
                <h2 className="card-title font-bold text-4xl text-center mx-auto mb-5 ">Innovative products and solutions</h2>

                <div className="w-[75%]  mx-auto ">
                    <div className="card lg:card-side bg-[--grayBg] shadow-xl  ">
                        <figure className="w-full"><img className="w-96 h-80" src="public/Panel/panel1.png" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title mt-20 ">We pride ourselves on our ability to provide innovative solutions and develop new products that are tailored to meet our clients' specific needs. </h2>
                        </div>
                    </div>
                </div>

                <div className="w-[75%]  mx-auto mt-14">
                    <div className="card lg:card-side bg-[--grayBg] shadow-xl  ">
                        <div className="card-body ">
                            <h2 className="card-title mt-16 w-[95%] ">We understand that every client is unique, and we believe in going above and beyond to deliver creative and cutting-edge solutions that address their challenges</h2>
                        </div>
                        <figure className="w-full mr-10"><img className="w-96" src="public/Panel/panel2.png" /></figure>
                    </div>
                </div> */}

            </div>

            {/* ----------------------------------------------؟ */}



            {/* ----------------------------- Section  Clients -------------------------- */}

            <div className="flex flex-col mt-10 mb-10 h-[450px] mx-auto"
                style={{ background: "url(/BG/clienetsbg.png)" }}>
                <h2 className="card-title font-bold text-[--primary] text-4xl mx-auto mt-32 mb-14">Our Success Partners</h2>
                <Clients />

            </div>

        </>
    )


}
