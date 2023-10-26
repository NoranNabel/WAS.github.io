import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import SliderContent from "./SliderContent"

const Slider = () => {

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
            <Carousel
                className="h-auto relative z-5"
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                containerClass="carousel-container"
            >

                <SliderContent srcPhoto={"wideSlider11"} content={"We build our equipment starting from chassis up going through the finest details"} />
                <SliderContent srcPhoto={"wideSlider2"} content={"Versatile Range of Wireline and Slickline custom made trucks and units"} />
                <SliderContent srcPhoto={"wideSlider3"} content={"Experience the power of reliability through the use of cutting edge technology in our designs"} />
                <SliderContent srcPhoto={"wideSlider44"} content={"Experience the future of wireline logging with our innovated panel, seamlessly integrating advanced technology and intuitive user interfaces."} />

            </Carousel>
        </>
    )
}

export default Slider;