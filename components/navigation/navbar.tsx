'use client'

import Link from 'next/link'
import { useState } from 'react'
import { routes, navigationLinks } from '../../lib/routes';
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import PaymentPlansPopup from '../../components/payment-plans-popup';
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false)
  const { data: session } = useSession()

  const togglePaymentPopup = () => setIsPaymentPopupOpen(!isPaymentPopupOpen)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={routes.overview} className="flex-shrink-0">
              <Image src="/logo.png" alt="TravelUp" width={120} height={40} className="h-8 w-auto" />
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              {navigationLinks.map((link: { name: string; path: string }) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button
              onClick={togglePaymentPopup}
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
            >
              Payment Plans
            </button>
            {session ? (
              <>
                <Link
                  href={routes.profile}
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  Profile
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href={routes.login}
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  Login
                </Link>
                <Link
                  href={routes.register}
                  className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationLinks.map((link: { name: string; path: string }) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={togglePaymentPopup}
              className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
            >
              Payment Plans
            </button>
            {session ? (
              <>
                <Link
                  href={routes.profile}
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Profile
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-blue-500 text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href={routes.login}
                  className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>
                <Link
                  href={routes.register}
                  className="bg-blue-500 text-white hover:bg-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      <PaymentPlansPopup
        isOpen={isPaymentPopupOpen}
        onClose={() => setIsPaymentPopupOpen(false)}
        plans={[
          { type: 'Flight', price: 299, description: 'London - New York' },
          { type: 'Hotel', price: 150, description: 'Per night' },
          { type: 'Car Rental', price: 50, description: 'Per day' },
          { type: 'Bus Ticket', price: 20, description: 'One-way' },
        ]}
      />
    </nav>
  )
}
