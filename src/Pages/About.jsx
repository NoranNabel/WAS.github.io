import Header from "../Components/Header";
import { motion } from "framer-motion";

function About() {
    return (
        <>
            <Header title={"About Us"}
                description={"Wireline Advanced Solutions is a growing manufacturer of wireline and slickline equipment with remarkable track record in MENA region with big players in the market."} />


            <motion.div
                initial={{ opacity: 0, x: 75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="card lg:card-side bg-base-100 rounded-none px-5 mt-20">
                <figure className="mx-8"><img src="/BG/IMG_5421.jpg" alt="Album" /></figure>
                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="card-body">
                    <span className="text-[--secondary] font-bold text-sm ">ABOUT US</span>
                    <h2 className="card-title font-semibold text-3xl lg:text-4xl text-[--primary] italic">WAS</h2>
                    <p className="text-[#6E6E6E]">Starting in 2018 ( Formerly AMS and MASS ) based in Florida we managed to expand in Gulf Region specifically Kuwait and in north Africa with remarkable track records not limited to new built equipment , refurbishment , completely innovated equipment and up to outstanding maintenance services.</p>
                    <p className="text-[#6E6E6E]">With extensive combined experience exceeding 70 Years , we offer a comprehensive range of products and services to meet our clients' diverse needs.</p>
                    <p className="text-[#6E6E6E]">We understand that downtime can be expensive; that's why we ensure fast turnaround times, cost-effective solutions, and reliable services to keep your operations running smoothly. </p>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -75 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="card lg:card-side bg-base-100 rounded-none lg:mt-5 px-5 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="card-body">
                    <span className="text-[--secondary] font-bold text-sm lg:mt-10">ABOUT US</span>
                    <h2 className="card-title font-semibold text-3xl lg:text-4xl text-[--primary] ">Wireline Advanced Solutions</h2>
                    <p className="text-[#6E6E6E]">Our specialized team of professionals offers maintenance  and full design services for wireline units, slickline units,  spooling units , custom made surface panels  in addition to maintenance services for downhole tools , coil tubing units, cementing units, and nitrogen pumping units. </p>
                    <p className="text-[#6E6E6E]">At Wireline Advanced Solutions, we take pride in being at the forefront of innovation and technology advancements in the industry. </p>
                    <p className="text-[#6E6E6E]">We're committed to delivering best-world-class products and services to our clients to help them achieve maximum results with out standing performance.</p>
                </motion.div>
                <figure className="mx-8"><img src="/BG/IMG_5686.jpg" alt="Album" /></figure>
            </motion.div>
        </>
    )
}
export default About;