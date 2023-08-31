import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";


export default function Header() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 1,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <>
            <Carousel className=""

                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlay={false}
                autoPlaySpeed={3000}
                // keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            // // deviceType={this.props.deviceType}                                                                                                                                       
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            >
                {/* <div className="h-full w-full lg:h-full lg:w-full"
                    style={{ background: "url(/Slider/Slider-11.jpg)" }}>
                    <div className="">
                        <p>We build our equipment starting from chassis up going through the finest details</p>
                    </div>
                </div> */}

                {/* <div className="hero h-screen lg:h-screen lg:w-full " style={{ backgroundImage: 'url(/Slider/Slider-111.jpg)' }}>
                    <div className="hero-content text-left text-neutral-content lg:mr-96">
                        <div className="mt-96 border-t-4 border-l-4 border-b-4 ">
                            <h1 className="mb-5 mt-5 lg:text-3xl font-bold px-8">We build our equipment starting from </h1>
                            <h1 className="mb-10 lg:text-3xl font-bold px-8">chassis up going through the finest details</h1>

                        </div>
                    </div>
                </div>


                <div className="hero h-screen lg:h-screen lg:w-full " style={{ backgroundImage: 'url(/Slider/Slider-111.jpg)' }}>
                    <div className="hero-content text-left text-neutral-content lg:mr-96">
                        <div className="mt-96 border-t-4 border-l-4 border-b-4 ">
                            <h1 className="mb-5 mt-5 lg:text-3xl font-bold px-8">We build our equipment starting from </h1>
                            <h1 className="mb-10 lg:text-3xl font-bold px-8">chassis up going through the finest details</h1>

                        </div>
                    </div>
                </div>


                <div className="hero h-screen lg:h-screen lg:w-full " style={{ backgroundImage: 'url(/Slider/Slider2.jpg)' }}>
                    <div className="hero-content text-left text-neutral-content lg:mr-96">
                        <div className="mt-96 border-t-4 border-l-4 border-b-4 ">
                            <h1 className="mb-5 mt-5 lg:text-3xl font-bold px-8">We build our equipment starting from </h1>
                            <h1 className="mb-5 lg:text-3xl font-bold px-8">chassis up going through the finest details</h1>

                        </div>
                    </div>
                </div>


                <div className="hero h-screen lg:h-screen lg:w-full " style={{ backgroundImage: 'url(/Slider/Slider-3.jpg)' }}>
                    <div className="hero-content text-left text-neutral-content lg:mr-96">
                        <div className="mt-96 border-t-4 border-l-4 border-b-4 ">
                            <h1 className="mb-5 mt-5 lg:text-3xl font-bold px-8">We build our equipment starting from </h1>
                            <h1 className="mb-5 lg:text-3xl font-bold px-8">chassis up going through the finest details</h1>

                        </div>
                    </div>
                </div> */}

                <figure>
                    <img className="relative h-screen w-screen " src="/Slider/sliderbgdark1.jpg" />
                    <motion.figcaption
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute bottom-16 font-bold text-white border-y-4 border-l-4 border-separate  ml-5 p-5 w-[80%] text-lg lg:text-2xl lg:px-10 lg:w-[45%] lg:ml-40 ">We build our equipment starting from
                        chassis up going through the finest details</motion.figcaption>
                </figure>
                
                <figure>
                    <img className="relative h-screen w-screen " src="/Slider/Night_truck.jpg" />
                    <motion.figcaption
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute bottom-16 font-bold text-white border-y-4 border-l-4 border-separate  ml-5 p-5 w-[80%] text-lg lg:text-2xl lg:px-10 lg:w-[70%] lg:ml-40 ">
                        Step into the realm of limitless power of cutting-edge wireline logging technology luminating the night with unparalleled precision and efficiency</motion.figcaption>
                </figure>

                <figure>
                    <img className="relative h-screen w-screen " src="/Slider/sliderbggray3.jpg" />
                    <motion.figcaption
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute bottom-16 font-bold text-white border-y-4 border-l-4 border-separate  ml-5 p-5 w-[80%] text-lg lg:text-2xl lg:px-10 lg:w-[50%] lg:ml-40 ">
                        Experience the power of reliability through the use of cutting edge technology in our designs </motion.figcaption>
                </figure>

                <figure>
                    <img className="relative h-screen w-screen " src="/Slider/Slider_Grid_2.jpg" />
                    <motion.figcaption
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute bottom-16 font-bold text-white border-y-4 border-l-4 border-separate  ml-5 p-5 w-[80%] text-lg lg:text-2xl lg:px-10 lg:w-[45%] lg:ml-40 ">
                        Versatile Range of Wireline and Slickline custom made trucks and units</motion.figcaption>
                </figure>

                <figure>
                    <img className="relative h-screen w-screen " src="/Slider/Slider-4.jpg" />
                    <motion.figcaption
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute bottom-16 font-bold text-white border-y-4 border-l-4 border-separate  ml-5 p-5 w-[80%] text-lg lg:text-2xl lg:px-10 lg:w-[45%] lg:ml-40 ">
                        Experience the future of wireline logging with our innovated panel, seamlessly integrating advanced technology and intuitive user interfaces.</motion.figcaption>
                </figure>

            </Carousel>

            {/* <div className="hero h-fit " style={{ backgroundImage: 'url(/Slider/Slider-111.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div> */}

        </>
    )
}