import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import GradientComponent from './GradientComponent'

function Hero() {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);

    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.5,
                start: 0,
                end: window.innerHeight,
                onUpdate: e => direction *= -1
            },
            x: '-500px'
        });
        requestAnimationFrame(animate);
    });


    const animate = () => {
        if (xPercent < -100) {
            xPercent = 0;
        }
        else if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.05 * direction;
    }

    return (
        <>
            <section className='overflow-hidden max-w-[100vw] h-[100vh] flex flex-col justify-center items-center relative'>
                <GradientComponent />

                <div ref={slider} className='absolute top-[50vh] sm:top-[35vh] z-30 w-[110vw] whitespace-nowrap flex'>
                    <p ref={firstText} className='text-white text-5xl md:text-6xl lg:text-[170px]'>Anushthan Saxena</p>
                    <p ref={secondText} className='text-white text-5xl md:text-6xl lg:text-[170px] absolute left-[100%]'>Anushthan Saxena</p>
                </div>

                <div className='w-[35px] h-[64px] absolute bottom-[100px] z-30 rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
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

            </section>
        </>
    )
}

export default Hero