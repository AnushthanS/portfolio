import Content from "./content";
import { BackgroundBeams } from "../ui/background-beams";

export default function Footer() {
    return (
        <section
            className="bg-zinc-900 text-white tracking-wider font-thin h-[800px] relative max-h-screen"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }} >
            <div className='fixed bottom-0 h-[800px] w-full'>
                <Content />
            </div>
            <div className='h-[20px] bg-zinc-900 w-full'></div>
            <BackgroundBeams className="-z-20" />
        </section>
    );
}