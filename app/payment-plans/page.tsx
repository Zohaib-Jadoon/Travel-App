'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { theme } from '../../lib/theme'

export default function PaymentPlans() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const router = useRouter()

  const plans = [
    { id: 'monthly', name: 'Monthly Plan', price: 49.99, description: 'Perfect for short trips' },
    { id: 'quarterly', name: 'Quarterly Plan', price: 129.99, description: 'Great for frequent travelers' },
    { id: 'annual', name: 'Annual Plan', price: 399.99, description: 'Best value for regular globetrotters' },
  ]

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId)
  }

  const handleProceed = () => {
    if (selectedPlan) {
      router.push(`/payment?plan=${selectedPlan}`)
    }
  }

  return (
    <div className={`bg-background min-h-screen py-12 ${theme.animations.fadeIn}`}>
      <div className="max-w-4xl mx-auto px-4">
        <h1 className={`text-3xl font-bold mb-8 text-center ${theme.animations.slideIn}`}>
          Choose Your Payment Plan
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white p-6 rounded-lg shadow-md ${theme.animations.slideIn}`}
            >
              <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>
              <p className="text-3xl font-bold mb-4">£{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <button
                onClick={() => handleSelectPlan(plan.id)}
                className={`w-full py-2 px-4 rounded-md ${
                  selectedPlan === plan.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                } transition duration-300 ${theme.animations.buttonHover}`}
              >
                {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
              </button>
            </div>
          ))}
        </div>
        {selectedPlan && (
          <div className={`mt-8 text-center ${theme.animations.fadeIn}`}>
            <button
              onClick={handleProceed}
              className={`bg-primary text-white py-3 px-6 rounded-md text-lg font-semibold ${theme.animations.buttonHover}`}
            >
              Proceed to Payment
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

