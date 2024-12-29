'use client'

import { useState } from 'react'
import Navbar from '../../components/navigation/navbar'
import Image from 'next/image'
import { theme } from '../../lib/theme'

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className={theme.colors.background}>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 space-y-2">
            <div className={`bg-white p-4 rounded-lg shadow text-center ${theme.animations.fadeIn}`}>
              <Image src="/avatar-placeholder.png" alt="User Avatar" width={100} height={100} className="mx-auto rounded-full" />
              <h2 className={`mt-4 text-xl font-semibold ${theme.colors.text}`}>John Doe</h2>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
            {['profile', 'bookings', 'preferences'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === tab ? theme.buttons.primary : `hover:bg-gray-100 ${theme.colors.text}`
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex-1">
            {activeTab === 'profile' && (
              <div className={`bg-white p-6 rounded-lg shadow ${theme.animations.fadeIn}`}>
                <h2 className={`text-2xl font-bold mb-6 ${theme.colors.text}`}>Profile Information</h2>
                <form className="space-y-4">
                  {['Full Name', 'Email', 'Phone'].map((field) => (
                    <div key={field}>
                      <label className={`block text-sm font-medium ${theme.colors.text}`}>{field}</label>
                      <input
                        type={field === 'Email' ? 'email' : 'text'}
                        defaultValue={field === 'Full Name' ? 'John Doe' : field === 'Email' ? 'john.doe@example.com' : '+1 234 567 8900'}
                        className={`mt-1 block w-full rounded-md ${theme.inputs.default}`}
                      />
                    </div>
                  ))}
                  <button
                    type="submit"
                    className={`${theme.buttons.primary} px-4 py-2 rounded-md ${theme.animations.buttonHover}`}
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            )}

            {activeTab === 'bookings' && (
              <div className={`bg-white p-6 rounded-lg shadow ${theme.animations.fadeIn}`}>
                <h2 className={`text-2xl font-bold mb-6 ${theme.colors.text}`}>My Bookings</h2>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className={`font-semibold ${theme.colors.text}`}>London (LHR) → New York (JFK)</h3>
                        <p className="text-gray-600">Booking Reference: ABC123</p>
                        <p className="text-gray-600">Date: Dec 25, 2023</p>
                      </div>
                      <button className={`${theme.colors.primary} hover:text-opacity-90`}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'preferences' && (
              <div className={`bg-white p-6 rounded-lg shadow ${theme.animations.fadeIn}`}>
                <h2 className={`text-2xl font-bold mb-6 ${theme.colors.text}`}>Travel Preferences</h2>
                <form className="space-y-4">
                  {[
                    { label: 'Preferred Seat', options: ['Window', 'Aisle', 'No Preference'] },
                    { label: 'Meal Preference', options: ['Regular', 'Vegetarian', 'Vegan', 'Halal', 'Kosher'] }
                  ].map((field) => (
                    <div key={field.label}>
                      <label className={`block text-sm font-medium ${theme.colors.text}`}>{field.label}</label>
                      <select className={`mt-1 block w-full rounded-md ${theme.inputs.default}`}>
                        {field.options.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                  <button
                    type="submit"
                    className={`${theme.buttons.primary} px-4 py-2 rounded-md ${theme.animations.buttonHover}`}
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

