'use client'

import { useState } from 'react'

interface SearchFormProps {
  type: 'flights' | 'hotels' | 'cars'
}

export default function SearchForm({ type }: SearchFormProps) {
  const [searchType, setSearchType] = useState(type)
  const [passengers, setPassengers] = useState(1)
  const [isRoundTrip, setIsRoundTrip] = useState(true)

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSearchType('flights')}
          className={`px-4 py-2 rounded-md ${
            searchType === 'flights' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          Flights
        </button>
        <button
          onClick={() => setSearchType('hotels')}
          className={`px-4 py-2 rounded-md ${
            searchType === 'hotels' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          Hotels
        </button>
        <button
          onClick={() => setSearchType('cars')}
          className={`px-4 py-2 rounded-md ${
            searchType === 'cars' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
        >
          Cars
        </button>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {searchType === 'flights' && (
          <>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">From</label>
                <input
                  type="text"
                  placeholder="City or airport"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">To</label>
                <input
                  type="text"
                  placeholder="City or airport"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Departure</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              {isRoundTrip && (
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700">Return</label>
                  <input
                    type="date"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>
          </>
        )}

        {searchType === 'hotels' && (
          <>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Destination</label>
              <input
                type="text"
                placeholder="City or hotel name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Check-in</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Check-out</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </>
        )}

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Passengers</label>
            <select
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'passenger' : 'passengers'}
                </option>
              ))}
            </select>
          </div>
          {searchType === 'flights' && (
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Trip Type</label>
              <select
                value={isRoundTrip ? 'round' : 'one'}
                onChange={(e) => setIsRoundTrip(e.target.value === 'round')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="round">Round trip</option>
                <option value="one">One way</option>
              </select>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  )
}

