import React from 'react'
import Image from 'next/image';

const Hero= ({ }) => {
    return (
        <div className='flex items-center gap-5 sm:w-[80%] md:w-[60%] lg:w-[50%] p-2'>
            <Image src="/pfp.png" width={150} height={150} alt='profile picture' className='rounded-full border-4' />
            <div>
                <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
                    Hi, I&apos;m Michael Shimeles
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-3">
                    A Full Stack Engineer, with experience building and developing various products.
                </p>
            </div>
        </div>
    );
}

export default Hero;