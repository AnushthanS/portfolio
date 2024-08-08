import { WavyBackground } from "../ui/wavy-background";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = "Java, MERN stack, NextJS, TailwindCSS, Docker, Kubernetes, Jenkins, Git, GitHub, SQL/NoSQL databases, Shell Scripting, Spring Boot, Framer Motion, Flutter, Cloud (AWS, Google Cloud), Redux, Monitoring, Debugging, UI/UX Design, Python, Site Reliability Engineering, Instrumentation, Terraform, Incident Response, Automation, Metrics Collection, Logging, Performance Monitoring";

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <section className="px-0 relative">
            <WavyBackground className="max-w-4xl mx-auto pb-40">
                <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
                    I&apos;m skilled in
                </p>
                <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
                    DevOps, Cloud and Full Stack Web technologies.
                </p>
            </WavyBackground>
            <div
                ref={ref}
                className="w-[75%] mx-auto border-[1px] border-zinc-600 py-4 px-20 rounded-xl mb-20"
            >
                {isInView && <TextGenerateEffect words={skills} />}
            </div>
        </section>
    );
}