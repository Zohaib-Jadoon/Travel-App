'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { theme } from '../../../lib/theme'

export default function CarReservation() {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
    carType: 'economy',
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
        <h1 className="text-3xl font-bold mb-6 text-center font-heading">Car Reservation</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700">Pickup Location</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">&#128205;</span>
              <input
                type="text"
                id="pickupLocation"
                name="pickupLocation"
                className="pl-10 block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                value={formData.pickupLocation}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="dropoffLocation" className="block text-sm font-medium text-gray-700">Drop-off Location</label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">&#128205;</span>
              <input
                type="text"
                id="dropoffLocation"
                name="dropoffLocation"
                className="pl-10 block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                value={formData.dropoffLocation}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700">Pickup Date</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">&#128197;</span>
                <input
                  type="date"
                  id="pickupDate"
                  name="pickupDate"
                  className="pl-10 block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="dropoffDate" className="block text-sm font-medium text-gray-700">Drop-off Date</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">&#128197;</span>
                <input
                  type="date"
                  id="dropoffDate"
                  name="dropoffDate"
                  className="pl-10 block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  value={formData.dropoffDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="carType" className="block text-sm font-medium text-gray-700">Car Type</label>
            <select
              id="carType"
              name="carType"
              className="mt-1 block w-full border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              value={formData.carType}
              onChange={handleInputChange}
            >
              <option value="economy">Economy</option>
              <option value="compact">Compact</option>
              <option value="midsize">Midsize</option>
              <option value="fullsize">Full Size</option>
              <option value="suv">SUV</option>
              <option value="luxury">Luxury</option>
            </select>
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

