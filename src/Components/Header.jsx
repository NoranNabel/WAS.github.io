import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";


export default function Header() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 1,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <>
            <Carousel className="h-auto"
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                containerClass="carousel-container">
            

                <div class=" duration-700 ease-in-out" data-carousel-item>
                    <img src="/Slider/wideSlider11.jpg" class=" block w-full h-96 md:h-full lg:h-screen" alt="..." />
                    <motion.figcaption
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute font-bold text-white border-y-4 border-l-4 border-separate  bottom-9 md:bottom-14 lg:bottom-14 ml-5 w-[80%] p-1 md:p-5 lg:p-5 md:text- lg:text-2xl lg:px-10 lg:w-[60%] lg:ml-40 ">
                        We build our equipment starting from chassis up going through the finest details</motion.figcaption>
                </div>

                <div class=" duration-700 ease-in-out" data-carousel-item>
                    <img src="/Slider/wideSlider2.jpg" class=" block w-full h-96 md:h-full lg:h-screen" alt="..." />
                    <motion.figcaption
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute font-bold text-white border-y-4 border-l-4 border-separate  bottom-9 md:bottom-14 lg:bottom-14 ml-5 w-[80%] p-1 md:p-5 lg:p-5 md:text- lg:text-2xl lg:px-10 lg:w-[60%] lg:ml-40 ">
                        Versatile Range of Wireline and Slickline custom made trucks and units</motion.figcaption>
                </div>

                <div class=" duration-700 ease-in-out" data-carousel-item>
                    <img src="/Slider/wideSlider3.jpg" class=" block w-full h-96 md:h-full lg:h-screen" alt="..." />
                    <motion.figcaption
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute font-bold text-white border-y-4 border-l-4 border-separate  bottom-9 md:bottom-14 lg:bottom-14 ml-5 w-[80%] p-1 md:p-5 lg:p-5 md:text- lg:text-2xl lg:px-10 lg:w-[60%] lg:ml-40 ">
                        Experience the power of reliability through the use of cutting edge technology in our designs</motion.figcaption>
                </div>

                <div class=" duration-700 ease-in-out" data-carousel-item>
                    <img src="/Slider/wideSlider44.jpg" class=" block w-full h-96 md:h-full lg:h-screen" alt="..." />
                    <motion.figcaption
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute font-bold text-white border-y-4 border-l-4 border-separate  bottom-9 md:bottom-14 lg:bottom-14 ml-5 w-[80%] p-1 md:p-5 lg:p-5 md:text- lg:text-2xl lg:px-10 lg:w-[70%] lg:ml-40 ">
                        Experience the future of wireline logging with our innovated panel, seamlessly integrating advanced technology and intuitive user interfaces.</motion.figcaption>
                </div>

            </Carousel>
        </>
    )
}