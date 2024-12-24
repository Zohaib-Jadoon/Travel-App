'use client'

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '../../components/navigation/navbar';
import PaymentForm from '../../components/payment/payment-form';

export default function Payment() {
  const searchParams = useSearchParams();
  const [planDetails, setPlanDetails] = useState({
    type: '',
    price: 0,
  });

  useEffect(() => {
    const plan = searchParams.get('plan');
    const price = searchParams.get('price');
    
    if (plan && price) {
      setPlanDetails({
        type: plan,
        price: parseFloat(price),
      });
    }
  }, [searchParams]);

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">Complete Your Payment</h1>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
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
      </Suspense>
    </main>
  );
}
