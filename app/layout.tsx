import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NIKARU TERMINAL',
  description: 'A cyberpunk-inspired terminal interface',
  openGraph: {
    title: 'NIKARU TERMINAL',
    description: 'A cyberpunk-inspired terminal interface',
    url: 'https://harukiexe.xyz',
    siteName: 'NIKARU TERMINAL',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NIKARU TERMINAL Interface',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIKARU TERMINAL',
    description: 'A cyberpunk-inspired terminal interface',
    creator: '@exe_haruki',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

