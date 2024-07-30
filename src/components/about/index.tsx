import Hero from "./hero";
import Education from "./education";
import { CanvasRevealEffectImplemented } from "./edu-reveal";

export default function About(){
  return(
    <section>
      <Hero />
      <div className="block w-full h-[1px] bg-zinc-600" />
      <Education />
      <CanvasRevealEffectImplemented />
      <div className="block w-full h-[1px] bg-zinc-600" />

    </section>
  );
}