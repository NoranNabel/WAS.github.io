import { motion } from "framer-motion";

function Header(props) {

    const { title, description } = props

    return (
        <>
            <section

                className="bg-cover "
                style={{
                    backgroundImage: 'url(/BG/headerPhoto.jpg)',
                    background: 'cover',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, x: 75 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="py-20 md:py-20 px-8 text-white lg:px-12">
                    <h3 className="text-3xl mt-16 font-semibold lg:text-5xl sm:text-4xl ">{title}</h3>
                    <p className="pt-3 text-lg font-light">{description}</p>

                </motion.div>
            </section>
        </>
    )
}
export default Header;