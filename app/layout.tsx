import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  keywords: ['Michael Shimeles'],
  openGraph: {
    title: 'Michael Shimeles',
    description: 'Michael Shimeles is a Full Stack Engineer, with experience building production web applications',
    images: ['/lolpfp.jpg']
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
        <meta
          name="description"
          content="The NextJS boilerplate with all the stuff you need to get your product in front of customers. From idea to production in 5 minutes."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Michael Shimeles is a Full Stack Engineer, with experience building production web applications."
        />
        <meta
          property="og:image"
          content="https://shipfa.st/shareMain.png"
        />
        <meta property="og:url" content="https://www.michaelshimeles.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@rasmickyy" />
        <link rel="canonical" href="https://www.michaelshimeles.com/" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
