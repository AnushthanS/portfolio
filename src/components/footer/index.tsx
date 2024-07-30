import Content from "./content";

export default function Footer() {
    return (
        <section
            className="bg-zinc-500 text-black tracking-wider font-thin h-[700px] relative"
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }} >
            <div className='relative h-[calc(100vh+700px)] -top-[100vh]'>
                <div className='h-[700px] sticky top-[calc(100vh-700px)]'>
                   <Content />
                </div>
            </div>
        </section>
    );
}