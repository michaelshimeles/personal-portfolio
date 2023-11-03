import Hero from '@/components/Hero'
import ProjectCard from '@/components/ProjectCard'
import TechStack from '@/components/TechStack'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-10">
      <Hero />
      <TechStack />
      <div className='flex flex-col justify-start sm:w-[80%] md:w-[70%] lg:w-[60%] mt-[2rem] mb-[4rem] p-4'>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Projects I&apos;ve built:
        </h2>
        <div className='flex flex-col w-full'>
          <ProjectCard image={'/starter.png'} title={'My Nextjs 14 Stater Template'} description={'This starter template saves me time when starting a project.'} urls={{
            github: "https://github.com/michaelshimeles/nextjs14-starter",
            website: null
          }} />
          <ProjectCard image={'/ordkit.png'} title={'Ordinals Launchpad'} description={'A Bitcoin Ordinals (NFT) minting platform and launchpad. This website has done over $1.6M in transaction volume'} urls={{
            github: null,
            website: "https://ordkit.xyz/",
          }} />
          <ProjectCard image={'/tsega.png'} title={'Church Web Platform'} description={'A church website with a blog, allows members to donate and track their donations, register for events and get text message notifications.'} urls={{
            website: "https://www.tsegabiblechurch.com/",
            github: "https://github.com/michaelshimeles/church-platform/",
          }} />
          <ProjectCard image={'/npm.png'} title={'Ordconnect NPM Package'} description={'OrdConnect is a JavaScript library for interacting with wallet management and Bitcoin transactions.'} urls={{
            github: "https://github.com/michaelshimeles/ordconnect",
            website: "https://ordconnect.vercel.app/"
          }} />
        </div>
      </div>
    </main>
  )
}
