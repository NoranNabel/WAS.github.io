import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const Error = () => {

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 0.85 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                        type: 'spring',
                        stiffness: 100,
                        restDelta: 0.001,
                    },
                }}
                className="flex flex-col justify-center text-center font-Jakarta mt-8 "
            >
                <div className="text-[--primary] mb-2 mt-14 text-[140px] leading-[160px] font-extrabold ">404</div>
                <div>
                    <h2 className="text-neutral700 mb-2 m-auto text-2xl font-bold leading-10 ">Page Not Found </h2>
                </div>
                <p className="mb-2 text-xl opacity-100 leading-10 m-auto max-w-md text-black/80">
                    Oops! We can't seem to find the page you're looking for.
                </p>
                <Link to='/'><button className="btn btn-warning h-16 text-2xl mx-auto font-bold font-Jakarta text-white">Go To Home </button></Link>
            </motion.div>

        </>
    );
};

export default Error;
