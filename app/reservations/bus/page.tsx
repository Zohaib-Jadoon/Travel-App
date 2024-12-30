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
    router.push('/payment-method')
  }

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="max-w-2xl p-8 mx-auto rounded-lg shadow-md bg-card">
        <h1 className="mb-6 text-3xl font-bold text-center font-heading">Bus Ticket Reservation</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="from" className="block text-sm font-medium text-foreground">From</label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <span className="absolute transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground">&#128205;</span>
              <input
                type="text"
                id="from"
                name="from"
                className="block w-full px-3 py-2 pl-10 text-sm rounded-md border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={formData.from}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="to" className="block text-sm font-medium text-foreground">To</label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <span className="absolute transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground">&#128205;</span>
              <input
                type="text"
                id="to"
                name="to"
                className="block w-full px-3 py-2 pl-10 text-sm rounded-md border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={formData.to}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-foreground">Date of Travel</label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <span className="absolute transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground">&#128197;</span>
              <input
                type="date"
                id="date"
                name="date"
                className="block w-full px-3 py-2 pl-10 text-sm rounded-md border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="passengers" className="block text-sm font-medium text-foreground">Number of Passengers</label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <span className="absolute transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground">&#128100;</span>
              <select
                id="passengers"
                name="passengers"
                className="block w-full px-3 py-2 pl-10 text-sm rounded-md border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
            className={`w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition duration-300 ${theme.animations.buttonHover}`}
          >
            Reserve Now
          </button>
        </form>
      </div>
    </div>
  )
}

