'use client'

import { useState } from 'react'
import Navbar from '../../components/navigation/navbar'
import Image from 'next/image'

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 space-y-2">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <Image src="/avatar-placeholder.png" alt="User Avatar" width={100} height={100} className="mx-auto rounded-full" />
              <h2 className="mt-4 text-xl font-semibold">John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full text-left px-4 py-2 rounded-md ${
                activeTab === 'profile' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
              }`}
            >
              Profile Information
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`w-full text-left px-4 py-2 rounded-md ${
                activeTab === 'bookings' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
              }`}
            >
              My Bookings
            </button>
            <button
              onClick={() => setActiveTab('preferences')}
              className={`w-full text-left px-4 py-2 rounded-md ${
                activeTab === 'preferences' ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'
              }`}
            >
              Travel Preferences
            </button>
          </div>

          <div className="flex-1">
            {activeTab === 'profile' && (
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      defaultValue="+1 234 567 8900"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">London (LHR) → New York (JFK)</h3>
                        <p className="text-gray-600">Booking Reference: ABC123</p>
                        <p className="text-gray-600">Date: Dec 25, 2023</p>
                      </div>
                      <button className="text-blue-500 hover:text-blue-600">
                        View Details
                      </button>
                    </div>
                  </div>
                  {/* Add more booking items here */}
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-6">Travel Preferences</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Preferred Seat</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                      <option>Window</option>
                      <option>Aisle</option>
                      <option>No Preference</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Meal Preference</label>
                    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                      <option>Regular</option>
                      <option>Vegetarian</option>
                      <option>Vegan</option>
                      <option>Halal</option>
                      <option>Kosher</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Save Preferences
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

