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
    router.push('/payment-method')
  }

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="max-w-2xl p-8 mx-auto rounded-lg shadow-md bg-card">
        <h1 className="mb-6 text-3xl font-bold text-center font-heading">Car Reservation</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="pickupLocation" className="block text-sm font-medium text-foreground">Pickup Location</label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <span className="absolute transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground">&#128205;</span>
              <input
                type="text"
                id="pickupLocation"
                name="pickupLocation"
                className="block w-full px-3 py-2 pl-10 text-sm rounded-md border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={formData.pickupLocation}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="dropoffLocation" className="block text-sm font-medium text-foreground">Drop-off Location</label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <span className="absolute transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground">&#128205;</span>
              <input
                type="text"
                id="dropoffLocation"
                name="dropoffLocation"
                className="block w-full px-3 py-2 pl-10 text-sm rounded-md border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={formData.dropoffLocation}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="pickupDate" className="block text-sm font-medium text-foreground">Pickup Date</label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <span className="absolute transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground">&#128197;</span>
                <input
                  type="date"
                  id="pickupDate"
                  name="pickupDate"
                  className="block w-full px-3 py-2 pl-10 text-sm rounded-md border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="dropoffDate" className="block text-sm font-medium text-foreground">Drop-off Date</label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <span className="absolute transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground">&#128197;</span>
                <input
                  type="date"
                  id="dropoffDate"
                  name="dropoffDate"
                  className="block w-full px-3 py-2 pl-10 text-sm rounded-md border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={formData.dropoffDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="carType" className="block text-sm font-medium text-foreground">Car Type</label>
            <select
              id="carType"
              name="carType"
              className="block w-full px-3 py-2 mt-1 text-sm rounded-md border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
            className={`w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition duration-300 ${theme.animations.buttonHover}`}
          >
            Reserve Now
          </button>
        </form>
      </div>
    </div>
  )
}

