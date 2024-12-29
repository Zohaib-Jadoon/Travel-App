'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { theme } from '../../lib/theme'

export default function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card')
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  })
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically process the payment
    // For now, we'll just redirect to a success page
    router.push('/payment/success')
  }

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-md mx-auto bg-card p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center font-heading">Payment Method</h1>
        <div className="flex justify-center space-x-4 mb-6">
          <button
            className={`${theme.animations.buttonHover} px-4 py-2 rounded-full ${
              paymentMethod === 'card' ? 'bg-primary text-white' : 'bg-gray-200'
            }`}
            onClick={() => setPaymentMethod('card')}
          >
            &#128179; Credit Card
          </button>
          <button
            className={`${theme.animations.buttonHover} px-4 py-2 rounded-full ${
              paymentMethod === 'paypal' ? 'bg-primary text-white' : 'bg-gray-200'
            }`}
            onClick={() => setPaymentMethod('paypal')}
          >
            &#36; PayPal
          </button>
        </div>
        {paymentMethod === 'card' ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                value={cardDetails.number}
                onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Name on Card</label>
              <input
                type="text"
                id="cardName"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                value={cardDetails.name}
                onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                required
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <input
                  type="text"
                  id="cardExpiry"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="cardCVV" className="block text-sm font-medium text-gray-700">CVV</label>
                <input
                  type="text"
                  id="cardCVV"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className={`${theme.animations.buttonHover} w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300`}
            >
              Pay Now
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="mb-4">You will be redirected to PayPal to complete your payment.</p>
            <button
              onClick={handleSubmit}
              className={`${theme.animations.buttonHover} bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300`}
            >
              Proceed to PayPal
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

