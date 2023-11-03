import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const Hero = ({ }) => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 sm:w-[80%] md:w-[65%] lg:w-[60%] p-4'>
            <Image src="/pfp2.png" width={150} height={150} alt='profile picture' className='rounded-full border-4' />
            <div className='flex flex-col text-center md:text-left'>
                <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
                    Hi, I&apos;m Michael Shimeles
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-3">
                    A Full Stack Engineer, with experience building production web applications
                </p>
                <div className='flex justify-center md:justify-start space-x-4'>
                    <Link href="https://github.com/michaelshimeles" target='_blank' className='pt-3 cursor-pointer'>
                        <GithubIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/michaelshimeles/" target='_blank' className='pt-3 cursor-pointer'>
                        <LinkedinIcon />
                    </Link>
                    <Link href="https://www.twitter.com/rasmickyy/" target='_blank' className='pt-3 cursor-pointer'>
                        <TwitterIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;