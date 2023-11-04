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
    images: ['/pfp2.png']
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
      <body className={GeistSans.className}>
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
    </html>
  )
}
