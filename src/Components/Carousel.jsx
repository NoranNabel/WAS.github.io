import { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) {
    const [curr, setCurr] = useState(0);

    const Prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

    const Next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (autoSlide) return
        const slideInterval = setInterval(Next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])

    return (
        <div className="overflow-hidden relative w-full ">

            <div className="flex transition-transform ease-out duration-500 mr-"
                style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides}
            </div>


            <div className=" absolute flex justify-between items-center p-4 inset-0 ">
                <button onClick={Prev} className="p-1 text-gray-800 bg-white/80 rounded-full shadow hover:bg-white">
                    <FaArrowLeft />
                </button>

                <button onClick={Next} className="p-1 text-gray-800 bg-white/80 rounded-full shadow hover:bg-white">
                    <FaArrowRight />
                </button>
            </div>

            <div className=" ">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div className={`transition-all w-3 h-3 bg-black rounded-full 
                                       ${curr === i ? "p-2" : "bg-opacity-50"}`}>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}