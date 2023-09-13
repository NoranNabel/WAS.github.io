import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';


const ComingSoon = () => {

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
                className="flex flex-col justify-center text-center font-Jakarta mt-10 "
            >
                <div className="text-[--primary] mb-5  mt-16 text-[110px] leading-[160px] font-extrabold ">Coming Soon</div>

                <p className="mb-2 text-xl opacity-100 leading-10 m-auto max-w-2xl text-black/80">
                We are currently working on something amazing and can't wait to share it with you. Stay tuned for our upcoming launch and be part of an exciting journey.
                </p>
                <Link to="/"><button className="btn btn-neutral w-44 h-16 text-white border-none text-2xl" style={{ backgroundColor: '#F0AB3B' }}>Go home</button> </Link>
                <div className="flex justify-center  lg:m-auto">
                </div>
            </motion.div>

        </>
    );
};

export default ComingSoon;
