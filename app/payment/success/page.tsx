import Link from 'next/link'
import Navbar from '../../../components/navigation/navbar'

export default function PaymentSuccess() {
  return (
    <main>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your payment. Your transaction has been completed successfully.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

