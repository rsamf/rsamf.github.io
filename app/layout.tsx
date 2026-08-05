import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

const title = 'Richard Franklin - AI/ML Engineer'
const description = 'Richard Franklin is an AI Engineer at Apron Health and a Machine Learning Researcher at University of Washington. He\'s been coding since he was 12 and is now an ML for robotics enthusiast focusing on perception and control.'
const ogImage = '/policy-videos/dance.gif'

export const metadata: Metadata = {
  metadataBase: new URL('https://rsamf.github.io/'),
  alternates: {
    canonical: '/'
  },
  title: {
    default: title,
    template: '%s | Richard Franklin'
  },
  description,
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title,
    description,
    url: 'https://rsamf.github.io/',
    siteName: 'Richard Franklin',
    images: [
      {
        url: ogImage,
        alt: 'Robot dancing',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="dark"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
