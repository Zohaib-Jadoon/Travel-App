"use client";

import Navbar from '../../components/navigation/navbar';
import Image from 'next/image'; // Importing Image component
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Holidays() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-12 bg-gradient-to-b from-blue-500 to-blue-400">
        <div className="px-4 mx-auto max-w-7xl">
          <h1 className="mb-8 text-4xl font-bold text-center text-white">
            Holiday Packages
          </h1>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Destination</label>
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">When</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date | null) => setStartDate(date)}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration</label>
                <select className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>1 week</option>
                  <option>2 weeks</option>
                  <option>3 weeks</option>
                </select>
              </div>
            </div>
            <button className="w-full px-4 py-2 mt-6 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Search Holiday Packages
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <h2 className="mb-6 text-2xl font-bold">Popular Holiday Destinations</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            'Bali Paradise Package',
            'Greek Islands Explorer',
            'Caribbean Cruise'
          ].map((holiday) => (
            <div key={holiday} className="overflow-hidden bg-white rounded-lg shadow-md">
              <Image
                src="/placeholder.svg"
                alt={holiday}
                width={640}
                height={256}
                className="object-cover w-full h-48"
              />
              <div className="p-6">
                <h3 className="mb-2 font-semibold">{holiday}</h3>
                <p className="mb-4 text-gray-600">7 nights from £899 per person</p>
                <button className="text-blue-500 hover:text-blue-600">View Package →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
