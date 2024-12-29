'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'

const navigationLinks = [
  { name: 'Flights', path: '/flights' },
  { name: 'Hotels', path: '/hotels' },
  { name: 'Holidays', path: '/holidays' },
  { name: 'Escorted Tours', path: '/escorted-tours' },
  { name: 'Car Rentals', path: '/reservations/car' },
  { name: 'Bus Tickets', path: '/reservations/bus' },
  { name: 'Payment Plans', path: '/payment-plans' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const { data: session } = useSession()

  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [])

  const handleLinkClick = (path: string) => {
    setActiveLink(path)
    setIsOpen(false)
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">TravelUp</span>
            </Link>
          </div>
          <div className="flex items-center justify-center flex-1">
            <div className="hidden md:flex md:space-x-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`nav-link px-4 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out
                    ${activeLink === link.path 
                      ? 'bg-primary text-white transform scale-105 animate-swipe' 
                      : 'text-gray-800 hover:bg-primary/10 hover:text-primary'
                    }
                  `}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center">
            {session ? (
              <div className="relative group">
                <button className="flex items-center px-4 py-2 space-x-2 text-base font-medium text-gray-800 transition-all duration-300 rounded-md hover:bg-primary/10 hover:text-primary">
                  <span>👤</span>
                  <span>{session.user?.name || 'User'}</span>
                </button>
                <div className="absolute right-0 z-20 hidden w-48 py-2 mt-2 bg-white rounded-md shadow-xl group-hover:block animate-fadeIn">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-800 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="w-full px-4 py-2 text-sm text-left text-gray-800 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 text-base font-medium text-gray-800 transition-all duration-300 rounded-md hover:bg-primary/10 hover:text-primary"
              >
                Login
              </Link>
            )}
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-800 transition-all duration-300 rounded-md hover:bg-primary/10 hover:text-primary"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <span className="block w-6 h-6" aria-hidden="true">✕</span>
              ) : (
                <span className="block w-6 h-6" aria-hidden="true">☰</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`block px-4 py-2 rounded-md text-base font-medium transition-all duration-300
                  ${activeLink === link.path
                    ? 'bg-primary text-white'
                    : 'text-gray-800 hover:bg-primary/10 hover:text-primary'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
            {session ? (
              <>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-base font-medium text-gray-800 transition-all duration-300 rounded-md hover:bg-primary/10 hover:text-primary"
                >
                  Profile
                </Link>
                <button
                  onClick={() => signOut()}
                  className="w-full px-4 py-2 text-base font-medium text-left text-gray-800 transition-all duration-300 rounded-md hover:bg-primary/10 hover:text-primary"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="block px-4 py-2 text-base font-medium text-gray-800 transition-all duration-300 rounded-md hover:bg-primary/10 hover:text-primary"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

