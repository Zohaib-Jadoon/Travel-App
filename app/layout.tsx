import type { Metadata } from 'next'
import { NextAuthProvider } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'TravelUp - Your Travel Companion',
  description: 'Book flights, hotels, and holiday packages worldwide',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
