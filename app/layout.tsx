import Navbar from '@/components/Navbar'
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/react'
import { GeistSans } from 'geist/font'
import type { Metadata } from 'next'
import Head from 'next/head'
import './globals.css'

export const metadata: Metadata = {
  keywords: ['Michael Shimeles'],
  openGraph: {
    title: 'Michael Shimeles',
    description: 'Michael Shimeles is a Full Stack Engineer, with experience building production web applications',
    images: ['/cover.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Michael Shimeles</title>
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Michael Shimeles is a Full Stack Engineer, with experience building production web applications."
        />
        <meta property="og:url" content="https://www.michaelshimeles.com/" />
        <meta name="twitter:creator" content="@rasmickyy" />
        <link rel="canonical" href="https://www.michaelshimeles.com/" />
      </Head>
      <div
        className="max-w-2xl w-full h-1/2 absolute top-0 right-0 -z-10 rounded-full bg-gradient-to-bl from-pink-800 via-blue-700/20 to-green-500/20 blur-3xl"
      >
        <body
          className={GeistSans.className}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Analytics />
          </ThemeProvider>
        </body>
      </div>
    </html>
  )
}
