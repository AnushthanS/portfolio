import { useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import TopBar from './TopBar';

function Menu() {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <>
            <div className="fixed left-[49vw] top-2 w-[36px] h-[36px] rounded-full bg-white cursor-pointer flex justify-center items-center z-40" onClick={() => setIsActive(!isActive)}>

                <div className={`block h-[1px] w-[50%] m-auto bg-color2 absolute transition-transform ${isActive ? 'rotate-[-45deg]' : 'rotate-0'} duration-500 ease-in-out`} />
                <div className={`block h-[1px] w-[50%] m-auto bg-color2 absolute transition-transform ${isActive ? 'rotate-45' : 'rotate-0'} duration-500 ease-in-out`} />

            </div>
            <AnimatePresence mode='wait'>
                {isActive &&  <TopBar />}
            </AnimatePresence>
        </>
    )
}

export default Menu