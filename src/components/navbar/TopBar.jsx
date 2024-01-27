import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import LinkItem from "./LinkItem";
import Link from "next/link";

const TopBar = () => {

    const navItems = [
        {
            title: "Home",
            href: '/'
        },
        {
            title: "About",
            href: '/about'
        },
        {
            title: "Projects",
            href: '#projects'
        },
        {
            title: "Contact",
            href: '#contact'
        },
    ];

    const menuSlide = {
        initial: { y: "-100vh" },
        enter: {
            y: "0",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            y: "-100vh",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        }
    }

    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    const initialPath = `M0 0 L${window.innerWidth} 0 Q${window.innerWidth / 2} -100 0 0`;
    const targetPath = `M0 0 L${window.innerWidth} 0 Q${window.innerWidth / 2} 75 0 0`;

    const curve = {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: initialPath,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
        }
    }

    return (
        <>
            <motion.div
                variants={menuSlide}
                initial="initial"
                animate="enter"
                exit="exit"
                className="bg-color3 w-full fixed min-h-[300px] sm:min-h-[200px] z-10 top-0"
            >

                <h2 className="absolute top-5 left-10 font-thin text-white border-b">MENU</h2>

                <div className="absolute top-[60px] w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center p-4 min-h-fit text-white text-xl lg:text-4xl font-light">

                    <div className="w-2/5 sm:w-3/5 p-2 px-4 flex flex-col justify-center items-center sm:flex-row sm:flex-wrap sm:justify-between m-4 border-b sm:border-r sm:border-b-0">
                        {
                            navItems.map((item, i) => (
                                <LinkItem
                                    className="w-1/2"
                                    key={i}
                                    data={{ ...item, i }}
                                    isActive={selectedIndicator === item.href}
                                    setSelectedIndicator={setSelectedIndicator} />
                            ))
                        }
                    </div>

                    <div className="w-3/5 sm:w-2/5 h-full p-2 font-extralight flex flex-row justify-evenly text-xl m-4 ">
                        <Link href='https://linkedin.com/in/anushthan-saxena'><p className="brightness-75 hover:brightness-100">LinkedIn</p></Link>
                        <Link href='https://github.com/AnushthanS'><p className="brightness-75 hover:brightness-100">Github</p></Link>
                    </div>
                </div>

                {/* Curve SVG animation */}
                <svg className="absolute z-[100] top-[300px] sm:top-[200px] h-[75px] w-full stroke-none fill-color3">
                    <motion.path
                        variants={curve}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                    ></motion.path>
                </svg>
            </motion.div>
        </>
    );
}


export default TopBar;