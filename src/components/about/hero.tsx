import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Hero() {
    return (
        <main className="h-[40rem] rounded-md bg-zinc-900 flex flex-col items-center justify-center relative w-full">
            <h2 className="relative flex-col z-10 text-5xl md:text-7xl md:leading-tight max-w-5xl mx-auto text-center  font-medium bg-clip-text text-transparent bg-gradient-to-b from-zinc-800 via-white to-white flex items-center gap-2 md:gap-8">
                <span className="tracking-tight">Hey there!</span>
                <span className="text-white text-2xl font-thin">I&apos;m Anushthan, a Computer Science Engineer and a tech enthusiast. <br />
                If I&apos;m not on my pc, I&apos;m probably out playing guitar.</span>
            </h2>
            <ShootingStars />
            <StarsBackground />
        </main>
    );
}