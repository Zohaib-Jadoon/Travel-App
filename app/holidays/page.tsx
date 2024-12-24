"use client";

import Navbar from '../../components/navigation/navbar';
import Image from 'next/image'; // Importing Image component
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function Holidays() {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <main>
      <Navbar />
      <div className="bg-gradient-to-b from-blue-500 to-blue-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Holiday Packages
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Destination</label>
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">When</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date | null) => setStartDate(date)}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>1 week</option>
                  <option>2 weeks</option>
                  <option>3 weeks</option>
                </select>
              </div>
            </div>
            <button className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Search Holiday Packages
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Popular Holiday Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            'Bali Paradise Package',
            'Greek Islands Explorer',
            'Caribbean Cruise'
          ].map((holiday) => (
            <div key={holiday} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/placeholder.svg"
                alt={holiday}
                width={640}
                height={256}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold mb-2">{holiday}</h3>
                <p className="text-gray-600 mb-4">7 nights from £899 per person</p>
                <button className="text-blue-500 hover:text-blue-600">View Package →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
