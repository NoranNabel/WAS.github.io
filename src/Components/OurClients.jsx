import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Clients() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <>
            <Carousel className="mx-auto w-[80%]"

                swipeable={true}
                draggable={true}
                // showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlay={true}
                autoPlaySpeed={1000}
                // keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            // // deviceType={this.props.deviceType}                                                                                                                                       
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            >

                <div>
                    <img src="/ourClients/Client1.png" className=" rounded-none w-40 h-14 mt-14 mb-10 hover:grayscale grayscale-0 cursor-pointer   " />
                </div>
                <div>
                    <img src="/ourClients/Client2.png" className=" rounded-none w-40 h-14 mt-14 mb-10 hover:grayscale grayscale-0 cursor-pointer   " />
                </div>
                <div>
                    <img src="/ourClients/Client3.png" className=" rounded-none w-40 h-14 mt-14 mb-10 hover:grayscale grayscale-0 cursor-pointer   " />
                </div>
                <div>
                    <img src="/ourClients/Client4.png" className=" rounded-none w-40 h-14 mt-14 mb-10 hover:grayscale grayscale-0 cursor-pointer   " />
                </div>
                <div>
                    <img src="/ourClients/Client5.png" className=" rounded-none w-40 h-14 mt-14 mb-10 hover:grayscale grayscale-0 cursor-pointer   " />
                </div>
                <div>
                    <img src="/ourClients/Client6.png" className=" rounded-none w-40 h-14 mt-14 mb-10 hover:grayscale grayscale-0 cursor-pointer   " />
                </div>
                <div>
                    <img src="/ourClients/Client7.png" className=" rounded-none w-40 h-14 mt-14 mb-10 hover:grayscale grayscale-0 cursor-pointer   " />
                </div>
                <div>
                    <img src="/ourClients/Client8.png" className=" rounded-none w-32 h-24 mt-9 mb-10 hover:grayscale grayscale-0 cursor-pointer   " />
                </div>
                <div>
                    <img src="/ourClients/Client9.png" className=" rounded-none w-40 h-14 mt-14 mb-10 hover:grayscale grayscale-0 cursor-pointer   " />
                </div>
            </Carousel>
        </>
    )
}