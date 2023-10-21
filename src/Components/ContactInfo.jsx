import { motion } from "framer-motion";

function ContactInfo(props) {
    const { title, TagName, content } = props
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="card flex flex-col gap-8 w-60 mx-auto shadow-xl p-5 rounded-none bg-base-200 hover:bg-[--primary] hover:text-white cursor-pointer transition-all hover:duration-[0.5s]">
                <div className="w-16 rounded-full bg-gray-300 p-3 ">
                    {TagName}
                </div>
                <div className="items-start flex flex-col gap-2">
                    <h2 className="card-title">{title}</h2>
                    <p className="">{content}</p>
                </div>
            </motion.div>
        </>
    );
}

export default ContactInfo;