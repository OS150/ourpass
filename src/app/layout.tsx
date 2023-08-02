import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextAuthSessionProvider from './providers/sessionProvider' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OurPass',
  description: 'An App to Pass the Sub',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  )
}
