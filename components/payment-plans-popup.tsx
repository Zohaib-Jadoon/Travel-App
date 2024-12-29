'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { theme } from '../lib/theme'

interface PaymentPlan {
  id: string
  type: string
  price: number
  description: string
  interval: string
}

interface PaymentPlansPopupProps {
  isOpen: boolean
  onCloseAction: () => void
  plans: PaymentPlan[]
}

export default function PaymentPlansPopup({ isOpen, onCloseAction, plans }: PaymentPlansPopupProps) {
  const router = useRouter()

  if (!isOpen) return null

  const handlePlanSelect = (plan: PaymentPlan) => {
    router.push(`/payment?plan=${plan.type}&price=${plan.price}`)
    onCloseAction()
  }

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${theme.animations.fadeIn}`}>
      <div className={`bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative ${theme.animations.slideIn}`}>
        <button
          onClick={onCloseAction}
          className={`absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-200`}
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className={`text-3xl font-bold mb-6 ${theme.colors.primary} ${theme.fonts.heading}`}>Payment Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => handlePlanSelect(plan)}
              className={`border rounded-lg p-6 hover:border-${theme.colors.primary} cursor-pointer transition-all duration-200 hover:shadow-lg bg-white`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${theme.colors.primary}`}>{plan.type}</h3>
              <p className={`${theme.colors.text} mb-4 h-20`}>{plan.description}</p>
              <div className="flex justify-between items-center">
                <p className={`text-2xl font-bold ${theme.colors.primary}`}>
                  £{plan.price.toFixed(2)}
                  <span className="text-sm font-normal text-gray-500">/{plan.interval}</span>
                </p>
                <button 
                  className={`${theme.buttons.primary} px-4 py-2 rounded-md ${theme.animations.buttonHover}`}
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePlanSelect(plan)
                  }}
                >
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={() => router.push('/custom-plan')}
          className={`mt-6 border-2 border-dashed border-${theme.colors.primary} rounded-lg p-6 hover:border-opacity-80 cursor-pointer transition-all duration-200 text-center bg-white`}
        >
          <h3 className={`text-xl font-semibold mb-2 ${theme.colors.primary}`}>Create Custom Plan</h3>
          <p className={`${theme.colors.text} mb-4`}>Build your own travel package tailored to your needs</p>
          <button 
            className={`${theme.buttons.secondary} px-4 py-2 rounded-md ${theme.animations.buttonHover}`}
            onClick={(e) => {
              e.stopPropagation()
              router.push('/custom-plan')
            }}
          >
            Customize Plan
          </button>
        </div>
      </div>
    </div>
  )
}

