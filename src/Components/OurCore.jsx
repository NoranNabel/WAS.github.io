import { motion } from "framer-motion";

function OurCore(props) {
    const { title, content, TagName } = props
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="card-body w-80  bg-white text-black p-5 my-5 border-2 border-r-transparent border-l-[--secondary] border-y-[--secondary] hover:bg-[--secondary] hover:text-white cursor-pointer hover:border-l-black hover:border-y-black transition-all hover:duration-[0.5s]  ">
                <div className="flex items-start gap-2 ">
                    {TagName}
                    <h2 className="card-title font-bold text-2xl">{title}</h2>
                </div>
                <hr className="w-20 mt-1 border-[2px] border-[--secondary] mb-2 " />
                <p>{content}</p>
            </motion.div>
        </>
    );
}

export default OurCore;