'use client'

import { theme } from '../../lib/theme'

interface PaymentMethodPopupProps {
  isOpen: boolean;
  onCloseAction: () => void; // Renamed to onCloseAction
  onSelectMethodAction: (method: 'card' | 'paypal') => void; // Renamed to onSelectMethodAction
}

export default function PaymentMethodPopup({ isOpen, onCloseAction, onSelectMethodAction }: PaymentMethodPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-white rounded-lg p-8 max-w-md w-full ${theme.animations.slideIn}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Select Payment Method</h2>
          <button onClick={onCloseAction} className="text-gray-500 hover:text-gray-700">
            &#10005;
          </button>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => onSelectMethodAction('card')}
            className={`${theme.animations.buttonHover} w-full flex items-center justify-between p-4 rounded-lg border border-gray-300 hover:border-primary`}
          >
            <span className="flex items-center">
              &#128179; Credit Card
            </span>
            <span className="text-primary">&rarr;</span>
          </button>
          <button
            onClick={() => onSelectMethodAction('paypal')}
            className={`${theme.animations.buttonHover} w-full flex items-center justify-between p-4 rounded-lg border border-gray-300 hover:border-primary`}
          >
            <span className="flex items-center">
              &#36; PayPal
            </span>
            <span className="text-primary">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  )
}

