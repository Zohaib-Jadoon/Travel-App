'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/navigation/navbar'

const STANDARD_RATES = {
  flight: 299,
  hotel: 150,
  carRental: 50,
  busTicket: 20,
  tourGuide: 100,
  insurance: 30,
}

interface CustomPlanItem {
  service: keyof typeof STANDARD_RATES
  quantity: number
}

export default function CustomPlan() {
  const [items, setItems] = useState<CustomPlanItem[]>([])
  const router = useRouter()

  const addItem = (service: keyof typeof STANDARD_RATES) => {
    setItems([...items, { service, quantity: 1 }])
  }

  const updateQuantity = (index: number, quantity: number) => {
    const newItems = [...items]
    newItems[index].quantity = Math.max(1, quantity)
    setItems(newItems)
  }

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      return total + STANDARD_RATES[item.service] * item.quantity
    }, 0)
  }

  const handleCheckout = () => {
    router.push(`/payment?plan=custom&price=${calculateTotal()}`)
  }

  return (
    <main>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Create Your Custom Travel Plan</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Available Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(STANDARD_RATES).map(([service, rate]) => (
              <button
                key={service}
                onClick={() => addItem(service as keyof typeof STANDARD_RATES)}
                className="p-4 border rounded-lg hover:border-blue-500 transition-all duration-200"
              >
                <div className="font-semibold capitalize">{service.replace(/([A-Z])/g, ' $1')}</div>
                <div className="text-gray-600">£{rate} per unit</div>
              </button>
            ))}
          </div>
        </div>

        {items.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Your Custom Plan</h2>
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-4">
                  <div className="flex-1">
                    <div className="font-semibold capitalize">
                      {item.service.replace(/([A-Z])/g, ' $1')}
                    </div>
                    <div className="text-gray-600">
                      £{STANDARD_RATES[item.service]} × {item.quantity} = 
                      £{(STANDARD_RATES[item.service] * item.quantity).toFixed(2)}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="px-2 py-1 border rounded hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="w-12 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="px-2 py-1 border rounded hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(index)}
                      className="text-red-500 hover:text-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="flex items-center justify-between pt-4">
                <div className="text-xl font-bold">Total</div>
                <div className="text-xl font-bold">£{calculateTotal().toFixed(2)}</div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-200"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        )}

        {items.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            Select services above to create your custom plan
          </div>
        )}
      </div>
    </main>
  )
}
