import type { Metadata } from 'next'
import { NextAuthProvider } from '../../app/providers'
import { globalStyles, theme } from '../../lib/theme'
import Navbar from '../../components/navigation/navbar'
import Script from 'next/script'
import '../app/globals.css' // Updated import for Tailwind CSS

export const metadata: Metadata = {
  title: 'TravelUp - Your Trusted Travel Companion',
  description: 'Book flights, hotels, and holiday packages with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      </head>
      <body className={`m-0 p-0 ${theme.animations.fadeIn} font-body`}> {/* Updated body className */}
        <NextAuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className={`flex-grow ${theme.animations.slideIn}`}>
              {children}
            </main>
            <footer className={`bg-${theme.colors.primary} text-${theme.colors.textLight} py-6`}>
              <div className="container mx-auto text-center">
                <p className={theme.animations.fadeIn}>&copy; 2023 TravelUp. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </NextAuthProvider>
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" />
      </body>
    </html>
  )
}

