import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NIKARU TERMINAL',
  description: 'A cyberpunk-inspired terminal interface',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#ff6b00',
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'NIKARU TERMINAL',
    description: 'A cyberpunk-inspired terminal interface',
    url: 'https://nikaru.xyz',
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
    creator: '@TerminalNikaru',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#ff6b00' }
    ]
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

