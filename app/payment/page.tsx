'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import Navbar from '../../components/navigation/navbar'
import PaymentForm from '../../components/payment/payment-form'
import PaymentMethodPopup from '../../components/payment/payment-method-popup'
import { theme } from '../../lib/theme'

function PaymentContent() {
  const searchParams = useSearchParams()
  const [planDetails, setPlanDetails] = useState({
    type: '',
    price: 0,
  })
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'card' | 'paypal' | null>(null)

  useEffect(() => {
    const plan = searchParams.get('plan')
    const price = searchParams.get('price')
    
    if (plan && price) {
      setPlanDetails({
        type: plan,
        price: parseFloat(price),
      })
    }
  }, [searchParams])

  const handleSelectPaymentMethod = (method: 'card' | 'paypal') => {
    setSelectedPaymentMethod(method)
    setIsPopupOpen(false)
  }

  return (
    <>
      <div className={`bg-white rounded-lg shadow-lg p-6 mb-8 ${theme.animations.slideIn}`}>
        <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Plan Type:</span>
            <span className="font-semibold capitalize">
              {planDetails.type.replace(/([A-Z])/g, ' $1')}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Amount to Pay:</span>
            <span className="font-semibold">£{planDetails.price.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      {!selectedPaymentMethod ? (
        <button
          onClick={() => setIsPopupOpen(true)}
          className={`${theme.animations.buttonHover} w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition duration-300`}
        >
          Select Payment Method
        </button>
      ) : (
        <PaymentForm amount={planDetails.price} paymentMethod={selectedPaymentMethod} />
      )}

      <PaymentMethodPopup
        isOpen={isPopupOpen}
        onCloseAction={() => setIsPopupOpen(false)}
        onSelectMethodAction={handleSelectPaymentMethod}
      />
    </>
  )
}

export default function Payment() {
  return (
    <div className={`bg-background min-h-screen ${theme.animations.fadeIn}`}>
      <Navbar />
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <h1 className={`text-3xl font-bold mb-8 ${theme.animations.slideIn}`}>Complete Your Payment</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <PaymentContent />
        </Suspense>
      </div>
    </div>
  )
}

