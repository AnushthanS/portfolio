'use client';
import Hero from "@/components/hero";
import About from "@/components/about";
import Nav from "@/components/navbar";
import Reveal from "@/utils/Reveal";
import Divider from "@/utils/Divider";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const initLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    };

    initLocomotiveScroll();
  }, []);

  return (
    <section className="relative">
      {/* <div className='absolute z-40 w-[100vw]'>
        <Nav />
      </div>
      <Hero />
      <Reveal>
        <About />
      </Reveal> */}
      <Divider />
    </section>
  );
}
