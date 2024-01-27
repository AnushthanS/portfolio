import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function MaskText() {
    const UseMousePosition = (elementRef) => {
        const [mousePosition, setMousePosition] = useState({ x: null, y: null });

        const updateMousePosition = e => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        useEffect(() => {
            const element = elementRef.current;
            element.addEventListener("mousemove", updateMousePosition);
            return () => element.removeEventListener("mousemove", updateMousePosition);
        }, [elementRef]);

        return { ...mousePosition, elementRef };
    };
    const [isHovered, setIsHovered] = useState(false);
    const elementRef = useRef(null);
    const { x, y } = UseMousePosition(elementRef);
    const size = isHovered ? 400 : 40;


    return (

        <section ref={elementRef} className='w-full'>
            <motion.div
                className='text-color3 w-full h-[60vh] py-4 text-3xl md:text-5xl absolute bg-color5'
                style={{
                    maskImage: "url('/mask.svg')",
                    maskRepeat: "no-repeat",
                    maskSize: "40px",
                }}
                animate={{
                    WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2 + 285)}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
            >
                <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    I love animations, prefered frontend stack is React, Next.js, TailwindCSS, and Framer Motion. Other than animations, most of my time is dedicated to my guitar.

                </p>
            </motion.div>


            <div className='text-white w-full h-[60vh] py-4 px-2 text-3xl md:text-5xl'>
                <p>
                    I&apos;m a third-year student at IIIT Sri City, passionate about creative development and design. I love to create things that live on the internet, building products that fulfil my artistic endeavours along the way.
                </p>
            </div>
        </section>
    )
}

export default MaskText