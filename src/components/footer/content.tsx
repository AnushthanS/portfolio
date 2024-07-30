import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

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
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-20">
                Reach out!
            </h1>

            <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-slate-600 bg-zinc-950">
                <h3 className="font-bold text-2xl text-neutral-200">Send me an email</h3>
            


            <form ref={form} onSubmit={sendEmail} className="my-8">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer className='rounded-xl'>
                        <label htmlFor="firstname">First name</label>
                        <Input id="firstname" placeholder="Jane" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <label htmlFor="lastname">Last name</label>
                        <Input id="lastname" placeholder="Doe" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <label htmlFor="email">Email Address</label>
                    <Input id="email" placeholder="example@mail.com" type="email" />
                </LabelInputContainer>

                <div className='w-full flex justify-center items-center mt-10 mb-2'>
                    <Button type='submit'>Send</Button>
                </div>
            </form>
        </div>
        </section>
    );
}

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
  