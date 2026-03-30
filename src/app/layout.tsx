import type { Metadata } from 'next'
import { Cormorant_Garamond, Caveat, Inter } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/typography.css'
import ConvexClientProvider from '@/components/providers/ConvexClientProvider'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-serif-loaded',
})
const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-hand-loaded',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-loaded',
})

export const metadata: Metadata = {
  title: 'Studio — Creative Portfolio',
  description: 'Editorial, artsy, and playful creative studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${caveat.variable} ${inter.variable}`}>
      <body>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  )
}
