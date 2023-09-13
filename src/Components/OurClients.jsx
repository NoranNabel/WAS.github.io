import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export default function Clients() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 2,
            slidesToSlide: 1
        }
    };


    return (
        <>
            <Carousel className="mx-auto w-[80%]"

                swipeable={true}
                draggable={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} >
        
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