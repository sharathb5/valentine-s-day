import type { Metadata } from 'next'
import { Playfair_Display, Lora, Dancing_Script } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Valentine's Tasting Menu — Table for Two",
  description: 'A romantic tasting menu celebrating love, one course at a time.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lora.variable} ${dancing.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
