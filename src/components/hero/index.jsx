'use client'
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

function Hero() {
    const shaderUrl = "https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%238d7dca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=60&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=sphere&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=1.5&uTime=8&wireframe=false";

    
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
        if(xPercent < -100){
            xPercent = 0;
        }
        else if(xPercent > 0){
            xPercent = -100;
        }
        gsap.set(firstText.current, {xPercent: xPercent});
        gsap.set(secondText.current, {xPercent: xPercent});
        requestAnimationFrame(animate);
        xPercent += 0.05*direction;
    }

    return (
        <>  
            <section className='overflow-hidden max-w-[100vw] h-[100vh] flex flex-col justify-center items-center relative'>

                <div className='w-full h-full absolute z-0'>
                    <ShaderGradientCanvas
                        importedFiber={{ ...fiber, ...drei, ...reactSpring }}

                        className='absolute z-0'
                    >
                        <ShaderGradient
                            control='query'
                            urlString={shaderUrl}
                        />
                    </ShaderGradientCanvas>
                </div>

                <div ref={slider} className='absolute top-[50vh] sm:top-[35vh] z-30 w-[110vw] whitespace-nowrap flex'>
                    <p ref={firstText} className='text-white text-5xl md:text-6xl lg:text-[170px]'>Anushthan Saxena</p>
                    <p ref={secondText} className='text-white text-5xl md:text-6xl lg:text-[170px] absolute left-[100%]'>Anushthan Saxena</p>
                </div>

                <div data-scroll data-scroll-speed={0.1} className='w-[35px] h-[64px] absolute bottom-[100px] z-30 rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.div
                animate = {{
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