import Image from 'next/image';
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function Nav() {
    return (
        <main>
            <section className="h-[50px] text-white flex justify-between py-3 px-4 w-[98vw] mx-auto">
                <div className="text-2xl md:text-3xl font-thin brightness-90 hover:brightness-100 cursor-pointer flex justify-center text-center">
                    <a href='/resume.pdf' target="_blank">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-zinc-900 bg-white text-black dark:text-white flex items-center space-x-2"
                        >
                            <span>Resume</span>
                        </HoverBorderGradient>
                    </a>
                </div>

                <div className="flex justify-between gap-8">
                    <a href="https://linkedin.com/in/anushthan-saxena" target="_blank">
                        <Image src={'/linkedin.svg'} alt="linked-in" width={32} height={32} className="brightness-90 hover:brightness-100" />
                    </a>
                    <a href="https://github.com/AnushthanS" target="_blank">
                        <Image src={'/github.svg'} alt="github" width={32} height={32} className="brightness-90 hover:brightness-100" />
                    </a>
                </div>
            </section>

            {/* Toggle menu section */}
            {/* <Menu /> */}
        </main>
    );
}