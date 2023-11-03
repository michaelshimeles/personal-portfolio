import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface ProjectCardProps {
    image: string,
    title: string,
    description: string,
    urls: {
        github: string | null,
        website: string | null
    }
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, urls }) => {

    return (
        <div className='flex flex-col justify-center items-center lg:flex-row mt-[2rem] lg:justify-start lg:items-between gap-4'>
            <Image src={image} width={300} height={100} alt={title} className='rounded-md drop-shadow-xl' />
            <div className='flex flex-col sm:w-[350px] lg:w-full'>
                <h3 className="scroll-m-20 text-xl text-center lg:text-left font-semibold tracking-tight">
                    {title}
                </h3>
                <p className="leading-7 text-center lg:text-left [&:not(:first-child)]:mt-3">
                    {description}
                </p>
                <div className='flex mt-4 gap-3 justify-center lg:justify-start'>
                    {urls?.github &&
                        <Link href={urls?.github} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                        </Link>
                    }
                    {urls?.website &&
                        <Link href={urls?.website} target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><line x1="9" x2="9" y1="21" y2="9" /></svg>
                        </Link>
                    }
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default ProjectCard;