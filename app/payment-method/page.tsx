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
    router.push('/payment/success')
  }

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="max-w-md p-8 mx-auto rounded-lg shadow-md bg-card">
        <h1 className="mb-6 text-3xl font-bold text-center font-heading">Payment Method</h1>
        <div className="flex justify-center mb-6 space-x-4">
          <button
            className={`${theme.animations.buttonHover} px-4 py-2 rounded-full ${
              paymentMethod === 'card' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
            }`}
            onClick={() => setPaymentMethod('card')}
          >
            &#128179; Credit Card
          </button>
          <button
            className={`${theme.animations.buttonHover} px-4 py-2 rounded-full ${
              paymentMethod === 'paypal' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
            }`}
            onClick={() => setPaymentMethod('paypal')}
          >
            &#36; PayPal
          </button>
        </div>
        {paymentMethod === 'card' ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-foreground">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                className="block w-full px-3 py-2 mt-1 text-sm rounded-md border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={cardDetails.number}
                onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="cardName" className="block text-sm font-medium text-foreground">Name on Card</label>
              <input
                type="text"
                id="cardName"
                className="block w-full px-3 py-2 mt-1 text-sm rounded-md border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={cardDetails.name}
                onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                required
              />
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="cardExpiry" className="block text-sm font-medium text-foreground">Expiry Date</label>
                <input
                  type="text"
                  id="cardExpiry"
                  className="block w-full px-3 py-2 mt-1 text-sm rounded-md border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="cardCVV" className="block text-sm font-medium text-foreground">CVV</label>
                <input
                  type="text"
                  id="cardCVV"
                  className="block w-full px-3 py-2 mt-1 text-sm rounded-md border-input bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className={`${theme.animations.buttonHover} w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition duration-300`}
            >
              Pay Now
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="mb-4">You will be redirected to PayPal to complete your payment.</p>
            <button
              onClick={handleSubmit}
              className={`${theme.animations.buttonHover} bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition duration-300`}
            >
              Proceed to PayPal
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

