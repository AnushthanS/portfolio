import { useEffect, useRef } from "react"
function Divider() {
    const path = useRef(null);
    let progress = 0;
    let time = Math.PI/2;
    let reqId = null;

    useEffect(() => {
        setPath(progress);
    });

    const setPath = (progress) => {
        const { innerWidth } = window;
        path.current.setAttributeNS("", "d", `M0 50 Q${innerWidth/2} ${50 + progress}, ${innerWidth} 50`);
    }

    const handleMouseEnter = () => {
        if(reqId) window.cancelAnimationFrame(reqId);
        resetAnimation();
    };

    const handleMouseMove = (e) => {
        const { movementY } = e;
        progress += movementY;
        setPath(progress);
    };

    const handleMouseLeave = () => {
        animateOut();
    };

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const animateOut = () => {
        const newProgress = progress * Math.sin(time);
        time += 0.2;
        setPath(newProgress);
        progress = lerp(progress, 0, 0.025);

        if(Math.abs(progress) > 0.75) reqId = window.requestAnimationFrame(animateOut);
        else resetAnimation();
    };

    const resetAnimation = () => {
        time = Math.PI/2;
        progress = 0;
    };

  return (
        <div className="h-[1px] w-[100vw] mx-auto relative my-[20px] border border-red-300">
            <div onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="h-[40px] relative top-[-20px] z-10" />
            <svg className="absolute w-full h-[100px] top-[-50px]">
                <path ref={path} className="stroke-1" fill="transparent" style={{ stroke: 'white' }}></path>
            </svg>
        </div>
  )
}

export default Divider