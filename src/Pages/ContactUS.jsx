import { motion } from "framer-motion";

import Header from '../Components/Header'
import ContactInfo from '../Components/ContactInfo';

import { BsFillTelephoneFill, BsArrowRight } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { HiLocationMarker } from 'react-icons/hi';


export default function ContactUs() {
   

    return (
        <>
            <Header title={"Contact Us"}
                description={"Thank you for your interest in Wireline Advanced Solutions (WAS). We value your feedback, inquiries, and collaboration opportunities."} />

            <section className="mb-20">
                <div className="w-full  ">
                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="card-body lg:ml-5 ml-1">
                        <span className="text-[--secondary] font-bold text-sm mt-20">CONTACT US</span>
                        <h2 className="font-semibold text-3xl lg:text-4xl text-[--primary]">Get in touch with us.</h2>
                        <div className="">
                            <p className="text-lg ">Please feel free to reach out to us using the contact information below or by filling out the contact form. <span className='font-semibold'>We look forward to hearing from you! </span></p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="card-body w-full">
                        <div className="flex flex-col lg:flex-row gap-20 lg:mx-auto">
                            <div className="flex flex-col mt-14 gap mx-auto">
                                <BsArrowRight className='w-20 h-10 mb-3 fill-[--primary]' />
                                <h1 className="text-4xl font-bold text-[--primary]">Headquarters</h1>
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-row mx-auto mt-5 gap-14">
                                <ContactInfo title={"Call Now"} content={'+1-813-817-7737'} TagName={<BsFillTelephoneFill className="w-8 h-10 mx-auto  fill-black" />} />
                                <ContactInfo title={"Email Us"} content={'Sales@WasUs.Us'} TagName={<GrMail className="w-8 h-10 mx-auto  fill-black" />} />
                                <ContactInfo title={"Visit Us"} content={'27440 Sky lake Cir Wesley-chapel,Florida , USA , 33544'} TagName={<HiLocationMarker className="w-8 h-10 mx-auto  fill-black" />} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 75 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="card-body w-full">
                        <div className="flex flex-col lg:flex-row gap-20  lg:mx-auto">
                            <div className="flex flex-col mt-14 gap mx-auto">
                                <BsArrowRight className='w-20 h-10 mb-3 fill-[--primary]' />
                                <h1 className="text-4xl font-bold text-[--primary]">Egypt Branch</h1>
                            </div>
                            <div className="flex flex-col md:flex-row lg:flex-row mx-auto mt-5 gap-14">
                                <ContactInfo title={"Call Now"} content={'+2010-00045853'} TagName={<BsFillTelephoneFill className="w-8 h-10 mx-auto  fill-black" />} />
                                <ContactInfo title={"Call Now"} content={'+2012-23793606'} TagName={<BsFillTelephoneFill className="w-8 h-10 mx-auto  fill-black" />} />
                                <ContactInfo title={"Visit Us"} content={'Area 17 P 3 Street No.18 Industrial Zone Kattamya, Cairo – Egypt.'} TagName={<HiLocationMarker className="w-8 h-10 mx-auto  fill-black" />} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}   
