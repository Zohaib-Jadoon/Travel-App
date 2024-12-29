'use client'

import { Suspense, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { theme } from '../../lib/theme'
import { processPayment } from '../../lib/api'

export default function ProceedToPayment() {
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const amount = searchParams.get('amount') || '0'

  const handleProceed = async () => {
    setIsProcessing(true);
    try {
      const response = await processPayment({
        amount: parseFloat(amount),
        currency: 'GBP',
        paymentMethod: 'card',
        cardDetails: {
          number: '**** **** **** 1234',
          expiry: '12/25',
          cvv: '123',
          name: 'John Doe', // Added the missing 'name' property
        },
      });

      if (response.success) {
        router.push('/payment-success');
      } else {
        throw new Error(response.message || 'Payment failed');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="bg-background min-h-screen py-12">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Proceed to Payment
          </h1>
          <div className="mb-8">
            <p className="text-xl text-center">Total Amount:</p>
            <p className="text-3xl font-bold text-center text-primary">£{parseFloat(amount).toFixed(2)}</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Payment Method:</span>
              <span className="font-semibold">Credit Card</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Card Number:</span>
              <span className="font-semibold">**** **** **** 1234</span>
            </div>
          </div>
          <button
            onClick={handleProceed}
            disabled={isProcessing}
            className={`w-full mt-8 bg-primary text-white py-3 px-4 rounded-md ${theme.animations.buttonHover} ${
              isProcessing ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isProcessing ? 'Processing...' : 'Confirm Payment'}
          </button>
          <p className="mt-4 text-sm text-center text-gray-600">
            By confirming, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </Suspense>
  )
}
