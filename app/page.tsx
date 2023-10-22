import Hero from '@/components/Hero'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-10">
      <Hero />
    </main>
  )
}
