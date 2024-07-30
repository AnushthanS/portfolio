import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

import {
    IconBrandTwitter,
    IconBrandGithub,
    IconBrandLinkedin
} from '@tabler/icons-react'
import { toast } from "sonner";

export default function Content() {

    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
            .sendForm('service_n7czawd', 'template_6jzg0x5', form.current, {
                publicKey: process.env.EMAIL_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast('Email sent successfully');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast('Failed to send email');
                },
            );
    };

    return (
        <section className="py-10 px-2">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-40">
                Reach out!
            </h1>

            <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-slate-600 bg-zinc-950">
                <h3 className="font-bold text-2xl text-neutral-200">Send me an email</h3>
                <p>Don&apos;t worry I check my mails</p>
            </div>


            <form ref={form} onSubmit={sendEmail} className="my-8">

            </form>
        </section>
    );
}


const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
  
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };
  