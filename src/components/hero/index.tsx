'use client';
import Nav from "../navbar";
import { AuroraBackground } from "../ui/aurora-background";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
    const sequence = [
        'DevOps Engineer', 1500,
        'Full Stack Developer', 1500,
        'Systems Engineer', 1500,
        'Guitarist', 1500,
        'Movie Nerd', 1500
    ]

    return (
        <div className="relative">
            <div className="p-0 m-0 top absolute text-white z-50">
                <Nav />
            </div>
            <main>
                <AuroraBackground className="relative">
                    <div className="top-0 absolute pt-[8px] z-50 text-white">
                    </div>
                    <motion.div
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut"
                        }}
                        className="relative flex flex-col gap-4 items-center justify-center px-4"
                    >

                        <div className="text-3xl md:text-9xl font-bold dark:text-white text-center">
                            Anushthan Saxena
                        </div>

                        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                            <TypeAnimation sequence={sequence} repeat={Infinity} />
                        </div>

                        <div className='w-[35px] h-[64px] mt-[80px] z-30 rounded-3xl border-4 border-white flex justify-center items-start p-2 hover:cursor-pointer'
                            onClick={() => {
                                const aboutElement = document.querySelector('#about');
                                if (aboutElement) {
                                    aboutElement.scrollIntoView();
                                }
                            }}
                        >
                            <motion.div
                                animate={{
                                    y: [0, 24, 0]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: 'loop'
                                }}
                                className='w-3 h-3 rounded-full bg-white mb-1'
                            />
                        </div>
                    </motion.div>

                </AuroraBackground>
            </main>
        </div>
    );
}