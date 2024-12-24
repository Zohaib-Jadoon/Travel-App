'use client'

import { useRouter } from 'next/navigation'

interface PaymentPlan {
  type: string
  price: number
  description: string
}

interface PaymentPlansPopupProps {
  isOpen: boolean
  onClose: () => void
  plans: PaymentPlan[]
}

export default function PaymentPlansPopup({ isOpen, onClose, plans }: PaymentPlansPopupProps) {
  const router = useRouter()

  if (!isOpen) return null

  const handlePlanSelect = (plan: PaymentPlan) => {
    router.push(`/payment?plan=${plan.type}&price=${plan.price}`)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Payment Plans</h2>
        <div className="space-y-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => handlePlanSelect(plan)}
              className="border rounded-lg p-6 hover:border-blue-500 cursor-pointer transition-all duration-200 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">{plan.type}</h3>
              <p className="text-gray-600 mb-2">{plan.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold">£{plan.price.toFixed(2)}</p>
                <button className="text-blue-500 hover:text-blue-600">Select Plan →</button>
              </div>
            </div>
          ))}
          <div
            onClick={() => router.push('/custom-plan')}
            className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 cursor-pointer transition-all duration-200 text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Create Custom Plan</h3>
            <p className="text-gray-600">Build your own travel package</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
        >
          Close
        </button>
      </div>
    </div>
  )
}

