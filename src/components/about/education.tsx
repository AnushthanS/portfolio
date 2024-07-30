import { LampContainer } from "../ui/lamp";
import { motion } from "framer-motion";

export default function Education() {
    return (
        <LampContainer className="relative">
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-6 bg-gradient-to-br from-slate-300 to-slate-500 pt-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                My Education Summarized
                <br />
                <span className="font-extralight text-sm tracking-wide">hover over the cards</span>
            </motion.h1>
        </LampContainer>
    );
}