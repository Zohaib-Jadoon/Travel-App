// Add "use client" to mark this file as a Client Component
"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../components/navigation/navbar';
import PaymentForm from '../../components/payment/payment-form';

export default function Payment() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}

function PaymentContent() {
  const searchParams = useSearchParams();

  const plan = searchParams.get('plan');
  const price = searchParams.get('price');

  const planDetails = {
    type: plan || '',
    price: parseFloat(price || '0'),
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl px-4 py-8 mx-auto">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold">Complete Your Payment</h1>
          <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
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
        </div>
        <PaymentForm amount={planDetails.price} />
      </div>
    </main>
  );
}
