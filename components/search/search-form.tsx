'use client'

import { useState } from 'react';

interface SearchFormProps {
  type: 'flights' | 'hotels' | 'cars';
}

export default function SearchForm({ type }: SearchFormProps) {
  const [searchType, setSearchType] = useState(type);
  const [passengers, setPassengers] = useState(1);
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 space-y-6">
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setSearchType('flights')}
          className={`flex items-center px-4 py-2 rounded-full ${
            searchType === 'flights' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-700'
          } transition-colors duration-200`}
        >
          ✈️
          <span className="ml-2">Flights</span>
        </button>
        <button
          onClick={() => setSearchType('hotels')}
          className={`flex items-center px-4 py-2 rounded-full ${
            searchType === 'hotels' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-700'
          } transition-colors duration-200`}
        >
          🏨
          <span className="ml-2">Hotels</span>
        </button>
        <button
          onClick={() => setSearchType('cars')}
          className={`flex items-center px-4 py-2 rounded-full ${
            searchType === 'cars' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-700'
          } transition-colors duration-200`}
        >
          🚗
          <span className="ml-2">Cars</span>
        </button>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        {searchType === 'flights' && (
          <>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                <input
                  type="text"
                  placeholder="City or airport"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <input
                  type="text"
                  placeholder="City or airport"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              {isRoundTrip && (
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              )}
            </div>
          </>
        )}

        {searchType === 'hotels' && (
          <>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
              <input
                type="text"
                placeholder="City or hotel name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>
          </>
        )}

        {searchType === 'cars' && (
          <>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Location</label>
              <input
                type="text"
                placeholder="City or airport"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Drop-off Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>
          </>
        )}

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Passengers</label>
            <select
              value={passengers}
              onChange={(e) => setPassengers(Number(e.target.value))}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Trip Type</label>
              <select
                value={isRoundTrip ? 'round' : 'one'}
                onChange={(e) => setIsRoundTrip(e.target.value === 'round')}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="round">Round trip</option>
                <option value="one">One way</option>
              </select>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors duration-200 flex items-center justify-center"
        >
          🔍
          <span className="ml-2">Search</span>
        </button>
      </form>
    </div>
  );
}