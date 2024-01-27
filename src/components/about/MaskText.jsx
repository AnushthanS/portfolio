import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function MaskText() {
    const UseMousePosition = (elementRef) => {
        const [mousePosition, setMousePosition] = useState({ x: null, y: null });

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        useEffect(() => {
            const element = elementRef.current;
            element.addEventListener('mousemove', updateMousePosition);
            return () => element.removeEventListener('mousemove', updateMousePosition);
        }, [elementRef]);

        return { ...mousePosition, elementRef };
    };

    let [isHovered, setIsHovered] = useState(false);
    let elementRef = useRef(null);
    let { x, y, elementRef: sectionRef } = UseMousePosition(elementRef);
    let size = isHovered ? 400 : 0;

    return (
        <section
            ref={sectionRef}
            className='w-full h-[60vh] relative'
            onMouseLeave={() => size=0}
        >
            <motion.div
                className='absolute text-color3 w-full h-[60vh] text-3xl  md:text-5xl lg:text-6xl bg-color5 flex justify-center items-center'
                style={{
                    maskImage: "url('/mask.svg')",
                    maskRepeat: "no-repeat",
                    maskSize: `${size}px`,
                }}
                animate={{
                    WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2 + 180)}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
            >
                <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='px-[30px]'>
                    I love animations, prefered frontend stack is React, Next.js, TailwindCSS, and Framer Motion. Other than animations, most of my time is dedicated to my guitar.
                </p>
            </motion.div>

            <div className='text-white w-full h-[60vh] py-10 text-3xl md:text-5xl lg:text-6xl flex justify-center items-center'>
                <p className='px-[30px]'>
                    I&apos;m a third-year student at IIIT Sri City, passionate about creative development and design. I love to create things that live on the internet, building products that fulfill my artistic endeavors along the way.
                </p>
            </div>
        </section>
    );
}

export default MaskText;
