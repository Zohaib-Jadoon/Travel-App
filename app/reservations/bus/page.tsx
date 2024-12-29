'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { theme } from '../../../lib/theme'

export default function BusTicketReservation() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    passengers: '1',
  })
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the reservation
    // For now, we'll just redirect to the payment method page
    router.push('/payment-method')
  }

  return (
    <div className={`bg-background min-h-screen py-12 ${theme.animations.fadeIn}`}>
      <div className={`max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-md ${theme.animations.slideIn}`}>
        <h1 className="text-3xl font-bold mb-6 text-center font-heading">Bus Ticket Reservation</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="from" className="block text-sm font-medium text-gray-700">From</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">&#128205;</span>
              <input
                type="text"
                id="from"
                name="from"
                className="pl-10 block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                value={formData.from}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="to" className="block text-sm font-medium text-gray-700">To</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">&#128205;</span>
              <input
                type="text"
                id="to"
                name="to"
                className="pl-10 block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                value={formData.to}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date of Travel</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">&#128197;</span>
              <input
                type="date"
                id="date"
                name="date"
                className="pl-10 block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="passengers" className="block text-sm font-medium text-gray-700">Number of Passengers</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">&#128100;</span>
              <select
                id="passengers"
                name="passengers"
                className="pl-10 block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                value={formData.passengers}
                onChange={handleInputChange}
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className={`w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 ${theme.animations.buttonHover}`}
          >
            Reserve Now
          </button>
        </form>
      </div>
    </div>
  )
}

