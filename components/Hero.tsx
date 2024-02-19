import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import { Separator } from "@/components/ui/separator"

const Hero = ({ }) => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 sm:w-[80%] md:w-[85%] lg:w-[60%] p-4'>
            <Image src="/pfp2.png" width={250} height={100} alt='profile picture' className='rounded-full border-4' />
            <div className='flex flex-col text-center md:text-left'>
                <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
                    Hi, I&apos;m Michael Shimeles
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-3">
                    A Full Stack Engineer & YouTuber, with experience building production web applications
                </p>
                <div className='flex justify-center md:justify-start space-x-4'>

                    <Link href="https://github.com/michaelshimeles" target='_blank' className='pt-3 cursor-pointer'>
                        <GithubIcon />
                    </Link>
                    <Link href="https://www.youtube.com/@rasmic" target='_blank' className='pt-3 cursor-pointer'>
                        <YoutubeIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/michaelshimeles/" target='_blank' className='pt-3 cursor-pointer'>
                        <LinkedinIcon />
                    </Link>
                    <Link href="https://www.twitter.com/rasmickyy/" target='_blank' className='pt-3 cursor-pointer'>
                        <TwitterIcon />
                    </Link>
                </div>
                <Separator className='my-4' />
                <p className="leading-7">
                    Looking to work with me? Feel free to contact me at <Link href="mailto:michaelwasihun96@gmail.com"><span className='font-bold underline'>michaelwasihun96@gmail.com</span></Link>
                </p>
            </div>
        </div>
    );
}

export default Hero;