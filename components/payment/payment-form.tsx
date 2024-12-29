'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { processPayment } from '../../lib/api'
import { theme } from '../../lib/theme'

interface PaymentFormProps {
  amount: number
  paymentMethod: 'card' | 'paypal'
}

export default function PaymentForm({ amount, paymentMethod }: PaymentFormProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    name: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCardDetails(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    setError('')

    try {
      const response = await processPayment({
        amount,
        currency: 'GBP',
        paymentMethod,
        cardDetails: paymentMethod === 'card' ? cardDetails : undefined
      })

      if (response.success) {
        router.push('/payment/success')
      } else {
        throw new Error('Payment failed')
      }
    } catch (error) {
      console.error('Payment error:', error)
      setError('Payment failed. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className={`bg-white p-8 rounded-lg shadow-lg ${theme.animations.slideIn}`}>
      <h2 className="text-2xl font-bold mb-6">
        {paymentMethod === 'card' ? 'Enter Card Details' : 'PayPal Payment'}
      </h2>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      {paymentMethod === 'card' ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="number"
              value={cardDetails.number}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
              <input
                type="text"
                id="cardExpiry"
                name="expiry"
                value={cardDetails.expiry}
                onChange={handleInputChange}
                placeholder="MM/YY"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
            <div>
              <label htmlFor="cardCVV" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
              <input
                type="text"
                id="cardCVV"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
            <input
              type="text"
              id="cardName"
              name="name"
              value={cardDetails.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className={`${theme.animations.buttonHover} w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 ${
              isProcessing ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isProcessing ? 'Processing...' : `Pay £${amount.toFixed(2)}`}
          </button>
        </form>
      ) : (
        <div className="text-center">
          <p className="mb-4">You will be redirected to PayPal to complete your payment.</p>
          <button
            onClick={handleSubmit}
            disabled={isProcessing}
            className={`${theme.animations.buttonHover} bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300 ${
              isProcessing ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isProcessing ? 'Processing...' : `Pay £${amount.toFixed(2)} with PayPal`}
          </button>
        </div>
      )}
    </div>
  )
}

