import { motion } from "framer-motion";

function SiderContent(props) {
    const { srcPhoto, content } = props
    return (
        <>
            <div className=" duration-700 ease-in-out" data-carousel-item>
            <img src={`/Slider/${srcPhoto}.jpg`} className="block w-full h-80 md:h-full lg:h-screen" alt="..." />
                <motion.figcaption
                    initial={{ opacity: 0, y: 75 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="absolute font-bold text-white border-y-4 border-l-4 border-separate  bottom-9 md:bottom-14 lg:bottom-14 ml-5 w-[80%] p-1 md:p-5 lg:p-5 md:text- lg:text-2xl lg:px-10 lg:w-[69%] lg:ml-40 ">
                    {content}
                </motion.figcaption>
            </div>
        </>
    );
}

export default SiderContent;