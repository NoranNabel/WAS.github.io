import { motion } from "framer-motion";
import Clients from "../Components/OurClients";
import Slider from "../Components/Slider";
import OurCore from "../Components/OurCore";

import { FaHelmetSafety, FaMedal } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";


export default function Home() {

    return (
        <>
            {/* ----------------------------- Section 1 Slider -------------------------- */}

            <div className="h-full w-full">
                <Slider />
            </div>

            {/* ----------------------------- Section 2 About -------------------------- */}

            <motion.div
                initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", duration: 0.5, delay: 0.25 }}
                viewport={{ once: true }}
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
                    viewport={{ once: true }}
                    src="/Night_truck.JPEG" className=" rounded-none shadow-2xl h-[405px] mt-14 " />
            </motion.div>



            {/* ----------------------------- Section 3 Core  -------------------------- */}

            <div className="card flex flex-col rounded-none mb- w-full "
                style={{ background: "url(/BG/HugeDomains_com2.jpg)" }}>



                <div className="card flex flex-col lg:flex-row w-full " >

                    <div className="card flex flex-col lg:flex-row md:flex-row md:gap-5 lg:mx-14 md:w-auto">

                        <div className="card lg:mx-10 my-20 mx-auto">

                            <OurCore title={"Safety"} content={"Oil and gas operations can be hazardous, so prioritizing safety measures and training is essential to protect employees and customers."} TagName={<FaHelmetSafety className="w-10 h-10 " />} />
                            <OurCore title={"Quality"} content={"Manufacturing or renovating reliable, high-quality equipment is crucial for building trust with customers and ensuring long-term success."} TagName={<FaMedal className="w-10 h-10" />} />
                            <OurCore title={"Teamwork"} content={"Oil and gas operations often require collaboration between different departments and teams, so fostering a culture of teamwork and communication can help ensure success."} TagName={<HiUserGroup className="w-12 h-10" />} />

                        </div>

                        {/* ------------------------------- */}

                        <div className="card h-96 mx-auto mt-[-60px] lg:my-44 md:mt-60">
                            <OurCore title={"Innovation"} content={"Developing new technologies and techniques can help improve the effectiveness and efficiency of wireline and slickline operations."} TagName={<HiUserGroup className="w-12 h-10" />} />
                            <OurCore title={"Customer Satisfaction"} content={"Providing excellent customer service and support can help build long-term relationships with clients and lead to repeat business."} TagName={<HiUserGroup className="w-12 h-10" />} />

                        </div>
                    </div>

                    {/* ------------------------------------------ */}

                    <div className="card flex flex-col mx-auto mt-36 md:mt-[-60px] lg:mt-60 ">
                        <div className="card-body  ">
                            <span className="text-[--secondary] font-bold text-sm ">WHY CHOOSE US</span>
                            <motion.h2
                                initial={{ opacity: 0, x: 18 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="card-title font-bold text-[--primary] text-3xl mb-3">
                                Our Core Values for Industry Leadership.</motion.h2>
                            <hr className="w-20 border-[1.5px] border-[--secondary]  " />
                            <motion.img
                                initial={{ opacity: 0, x: 18 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                src="/Slider/Slider1.png" className="w-96 h-96 mt-[-40px] mx-auto" />
                        </div>
                    </div>

                </div>

            </div>



            {/* ----------------------------- Section 3 Our Recent Works -------------------------- */}

            <div className="card flex flex-col rounded-none "
            >

                <div className="card rounded-none">
                    <div className="card-body">
                        <motion.h2
                            initial={{ opacity: 0, y: 75 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="card-title font-bold text-[--primary] text-3xl mx-auto text-center mb-3 mt-14">
                            Unleashing power of rebuilt equipment</motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 75 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="text-lg w-[90%] mx-auto text-center mb-8">
                            At our company, we unleash the power of rebuilt equipment by revitalizing your old machinery, restoring it to its former glory with exceptional operational performance and a visually stunning appearance.Trust us to bring your old equipment back to life, unlocking its true potential and exceeding your expectations.</motion.p>
                        <div className="flex flex-col mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="flex ">
                                <figure><img className="w-96 " src="/before_After/Enos6_before.jpeg" /></figure>
                                <div className="ml-5 lg:ml-16 mt-28 h-16 border-l-4 border-[--secondary]">
                                    <h2 className="card-title text-3xl font-bold text-[--primary] text-center mt-3 ml-2">Before</h2>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="flex lg:ml-48">
                                <div className="ml-5 lg:ml-16 mt-28 h-16 border-l-4 border-[--secondary]">
                                    <h2 className="card-title text-3xl font-bold text-[--primary] text-center mr-5 lg:mr-16 mt-3 ml-2">After</h2>
                                </div>
                                <figure><img className="w-96 mt-5" src="/before_After/Enos_6_After.JPEG" /></figure>

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
                            viewport={{ once: true }}
                            className="card-title font-bold text-[--primary] text-3xl text-center mx-auto mb-3">
                            We Design , We don't Assemble
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 75 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="text-lg text-center lg:px-10 mx-auto lg:w-[90%] ">
                            we pride ourselves on our design-driven approach. We don't simply assemble equipment we meticulously design every unit from the ground up. Each piece is crafted based on our genuine,
                            innovative designs, ensuring that every component seamlessly integrates to deliver exceptional  performance quality and innovation.</motion.p>

                        <div className="grid grid-flow-row-dense grid-cols-3 gap-1 lg:gap-5 lg:w-[80%] mx-auto mt-8 ">
                            <div className="hover:scale-105 lg:hover:scale-110 transform-gpu transition-transform duration-300 cursor-pointer">
                                <motion.img
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.50 }}
                                    viewport={{ once: true }}
                                    src="/Grid/grid5.jpeg" />
                            </div>
                            <div className="hover:scale-105 lg:hover:scale-110 transform-gpu transition-transform duration-300 cursor-pointer">
                                <motion.img
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.50 }}
                                    viewport={{ once: true }}
                                    src="/Grid/grid33.jpg" />
                            </div>
                            <div className="hover:scale-105 lg:hover:scale-110 transform-gpu transition-transform duration-300 cursor-pointer">
                                <motion.img
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.50 }}
                                    viewport={{ once: true }}
                                    src="/Grid/grid44.jpg" />
                            </div>
                            <div className="col-span-2 hover:scale-105 transform-gpu transition-transform duration-300 cursor-pointer">
                                <motion.img
                                    initial={{ opacity: 0, x: -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.50 }}
                                    viewport={{ once: true }}
                                    src="/Grid/grid22.png" />
                            </div>
                            <div className="hover:scale-105 lg:hover:scale-115 transform-gpu transition-transform duration-300 cursor-pointer">
                                <motion.img
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.50 }}
                                    viewport={{ once: true }}
                                    src="/Grid/grid11.jpg"
                                    />
                            </div>
                        </div>
                    </div>
                </div>

                {/* -------------------------------- Section 5  ---------------------------- */}
                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="card mx-auto mt-14 mb-8 rounded-none"
                    style={{ background: "url(/BG/PolarWhiteMarbleSlab.jpg)" }}>

                    <motion.h2
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="card-title font-bold text-[--primary] text-3xl mx-auto text-center mb-3 mt-14">
                        Innovative products  and solutions
                    </motion.h2>

                    <div className="card lg:card-side lg:w-[80%] mx-auto lg:gap-20">
                        <div className="card-body lg:w-1/2">
                            <motion.p
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.50 }}
                                viewport={{ once: true }}
                                className="text-lg lg:w-full font-medium lg:mt-20 ">
                                We pride ourselves on our ability to provide innovative solutions and develop new products that are
                                tailored to meet our clients' specific needs.</motion.p>
                        </div>
                        <figure>
                            <motion.img
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.50 }}
                                viewport={{ once: true }}
                                src="/Panel/panel1.png" className="w-72 h-60 lg:w-full mt-[-40px] md:mt-0  lg:mt-0 lg:h-80" alt="Album" />
                                </figure>
                    </div>

                    <div className="card lg:card-side lg:w-[80%] mx-auto lg:gap-20">
                        <figure>
                            <motion.img
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.50 }}
                                viewport={{ once: true }}
                                src="/Panel/panel2.png" className="w-72 h-60 lg:w-full lg:h-80" alt="Album" />
                        </figure>
                        <div className="card-body lg:w-1/2">
                            <motion.p
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.50 }}
                                viewport={{ once: true }}
                                className="text-lg lg:w-full font-medium lg:mt-20 mt-[-20px] ">
                                We understand that every client is unique, and we believe in going above and beyond to deliver
                                creative and cutting-edge solutions that address their challenges</motion.p>
                        </div>
                    </div>
                </motion.div>
            </div>


            {/* ----------------------------- Section  Clients -------------------------- */}

            <div className="flex flex-col mt-10 mb-24 h-[450px] mx-auto"
                style={{ background: "url(/BG/clienetsbg.png)" }}>
                <h2 className="card-title font-bold text-[--primary] text-4xl mx-auto mt-32 mb-14">Our Success Partners</h2>
                <Clients />
            </div>


        </>
    )


}
