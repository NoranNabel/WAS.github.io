import React from 'react';
import { motion } from 'framer-motion';

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
                className="flex flex-col justify-center text-center font-Jakarta mt-20 "
            >
                <div className="text-[--primary] mb-2 mt-14 text-6xl font-extrabold ">Coming Soon</div>
                <div>
                </div>
                <p className="mb-2 text-xl opacity-100 leading-10 m-auto max-w-md text-black/80">
                We are currently working on something amazing and can't wait to share it with you. Stay tuned for our upcoming launch and be part of an exciting journey.
                </p>
            </motion.div>

        </>
    );
};


export default ComingSoon;
